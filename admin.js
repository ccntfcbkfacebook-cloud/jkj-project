(() => {
  const loginCard = document.querySelector('#loginCard');
  const dashboard = document.querySelector('#dashboard');
  const loginStatus = document.querySelector('#loginStatus');
  const formStatus = document.querySelector('#formStatus');
  const listingHost = document.querySelector('#adminListings');
  const enterDemoBtn = document.querySelector('#enterDemoBtn');
  const modeBadge = document.querySelector('#modeBadge');
  const demoCallout = document.querySelector('#demoCallout');

  const isConfigured = () => Boolean(window.JKJ_SUPABASE_URL && window.JKJ_SUPABASE_ANON_KEY);
  let isDemoMode = false;
  let db = null;

  if (isConfigured() && window.supabase?.createClient) {
    db = window.supabase.createClient(window.JKJ_SUPABASE_URL, window.JKJ_SUPABASE_ANON_KEY);
    if (demoCallout) demoCallout.style.display = 'none';
  } else {
    if (loginStatus) {
      loginStatus.textContent = '⚡ Cloud database is not configured. Click "Enter Demo Admin Panel" above to test locally, or see the guide below.';
    }
  }

  function status(element, message, error = false) {
    if (!element) return;
    element.textContent = message;
    element.classList.toggle('error', error);
  }

  function escapeText(value = '') {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  }

  // --- LOCAL DEMO STORAGE HELPERS ---
  function getLocalListings() {
    try {
      return JSON.parse(localStorage.getItem('jkj_local_properties') || '[]');
    } catch {
      return [];
    }
  }

  function saveLocalListings(items) {
    localStorage.setItem('jkj_local_properties', JSON.stringify(items));
  }

  async function showAdmin(user, isDemo = false) {
    isDemoMode = isDemo;
    if (!isDemo && user?.app_metadata?.role !== 'admin') {
      if (db) await db.auth.signOut();
      status(loginStatus, 'This account is not an authorized JKJ admin.', true);
      return;
    }

    loginCard.hidden = true;
    dashboard.hidden = false;

    if (modeBadge) {
      if (isDemo) {
        modeBadge.textContent = '⚡ Local Demo Mode';
        modeBadge.className = 'mode-badge demo';
      } else {
        modeBadge.textContent = '☁️ Cloud Mode (Supabase)';
        modeBadge.className = 'mode-badge cloud';
      }
    }

    await loadListings();
  }

  async function loadListings() {
    listingHost.innerHTML = '<div class="admin-empty">Loading listings…</div>';

    if (isDemoMode) {
      const data = getLocalListings();
      if (!data.length) {
        listingHost.innerHTML = '<div class="admin-empty">No demo listings yet. Add your first property above!</div>';
        return;
      }
      renderListingCards(data);
      return;
    }

    // Cloud Supabase Mode
    const { data, error } = await db.from('properties').select('*').order('created_at', { ascending: false });
    if (error) {
      listingHost.innerHTML = '';
      status(formStatus, error.message, true);
      return;
    }
    if (!data.length) {
      listingHost.innerHTML = '<div class="admin-empty">No listings yet in Supabase. Add your first property above.</div>';
      return;
    }
    renderListingCards(data);
  }

  function renderListingCards(data) {
    listingHost.innerHTML = data.map(item => `
      <article class="admin-listing">
        <img src="${item.image_url}" alt="${escapeText(item.title)}">
        <div>
          <strong>${escapeText(item.title)}</strong>
          <small>${escapeText(item.city)} · ${escapeText(item.price)} · <span class="${item.is_published ? '' : 'status-draft'}">${item.is_published ? 'Published' : 'Draft'}</span></small>
        </div>
        <button class="publish-button" data-id="${item.id}" data-published="${item.is_published}" type="button">
          ${item.is_published ? 'Unpublish' : 'Publish'}
        </button>
        <button class="delete-listing" data-id="${item.id}" data-path="${escapeText(item.image_path || '')}" type="button">Delete</button>
      </article>`).join('');

    listingHost.querySelectorAll('.publish-button').forEach(button => {
      button.addEventListener('click', async () => {
        const id = button.dataset.id;
        const newStatus = button.dataset.published !== 'true';

        if (isDemoMode) {
          const list = getLocalListings();
          const target = list.find(p => p.id === id);
          if (target) {
            target.is_published = newStatus;
            saveLocalListings(list);
            status(formStatus, `Property visibility updated to: ${newStatus ? 'Published' : 'Draft'}`);
            await loadListings();
          }
          return;
        }

        const { error: updateError } = await db.from('properties').update({ is_published: newStatus }).eq('id', id);
        if (updateError) status(formStatus, updateError.message, true);
        else {
          status(formStatus, 'Listing visibility updated.');
          await loadListings();
        }
      });
    });

    listingHost.querySelectorAll('.delete-listing').forEach(button => {
      button.addEventListener('click', async () => {
        if (!window.confirm('Delete this property listing?')) return;
        const id = button.dataset.id;
        const path = button.dataset.path;

        if (isDemoMode) {
          let list = getLocalListings();
          list = list.filter(p => p.id !== id);
          saveLocalListings(list);
          status(formStatus, 'Property deleted from local demo listings.');
          await loadListings();
          return;
        }

        const { error: deleteError } = await db.from('properties').delete().eq('id', id);
        if (deleteError) { status(formStatus, deleteError.message, true); return; }
        if (path && path !== 'local') {
          await db.storage.from('property-images').remove([path]);
        }
        status(formStatus, 'Property deleted.');
        await loadListings();
      });
    });
  }

  // --- BUTTON & FORM EVENTS ---
  if (enterDemoBtn) {
    enterDemoBtn.addEventListener('click', () => {
      showAdmin({ email: 'demo@jkj.com' }, true);
    });
  }

  document.querySelector('#loginForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!isConfigured() || !db) {
      // If user submits while not configured, offer demo mode immediately
      showAdmin({ email: form.elements.email.value }, true);
      return;
    }

    status(loginStatus, 'Signing in to Supabase…');
    const { data, error } = await db.auth.signInWithPassword({
      email: form.elements.email.value,
      password: form.elements.password.value
    });

    if (error) {
      status(loginStatus, error.message, true);
      return;
    }
    await showAdmin(data.user, false);
  });

  document.querySelector('#signOut').addEventListener('click', async () => {
    if (db && !isDemoMode) {
      await db.auth.signOut();
    }
    isDemoMode = false;
    dashboard.hidden = true;
    loginCard.hidden = false;
    status(loginStatus, 'You have signed out.');
  });

  document.querySelector('#propertyForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const file = form.elements.photo.files[0];
    if (!file || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 10 * 1024 * 1024) {
      status(formStatus, 'Choose a JPG, PNG, or WebP image under 10 MB.', true);
      return;
    }

    status(formStatus, 'Saving property details…');

    // Read image as Data URL
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result;

      if (isDemoMode) {
        const newProperty = {
          id: crypto.randomUUID(),
          title: form.elements.title.value.trim(),
          city: form.elements.city.value.trim(),
          price: form.elements.price.value.trim(),
          property_type: form.elements.property_type.value,
          bedrooms: parseInt(form.elements.bedrooms.value) || 0,
          bathrooms: parseInt(form.elements.bathrooms.value) || 0,
          area: form.elements.area.value.trim(),
          tag: form.elements.tag.value.trim() || 'NEW LISTING',
          image_url: dataUrl,
          image_path: 'local',
          is_published: form.elements.is_published.checked,
          created_at: new Date().toISOString()
        };

        const list = getLocalListings();
        list.unshift(newProperty);
        saveLocalListings(list);

        form.reset();
        status(formStatus, '✓ Property saved successfully! Check the main website to see it live.');
        await loadListings();
        return;
      }

      // Supabase Cloud Upload
      const extension = file.name.split('.').pop().toLowerCase();
      const imagePath = `${crypto.randomUUID()}.${extension}`;
      const { error: uploadError } = await db.storage.from('property-images').upload(imagePath, file, { contentType: file.type, upsert: false });
      if (uploadError) {
        status(formStatus, `Image upload failed: ${uploadError.message}`, true);
        return;
      }

      const { data: { publicUrl } } = db.storage.from('property-images').getPublicUrl(imagePath);
      const { error: insertError } = await db.from('properties').insert({
        title: form.elements.title.value.trim(),
        city: form.elements.city.value.trim(),
        price: form.elements.price.value.trim(),
        property_type: form.elements.property_type.value,
        bedrooms: parseInt(form.elements.bedrooms.value) || 0,
        bathrooms: parseInt(form.elements.bathrooms.value) || 0,
        area: form.elements.area.value.trim(),
        tag: form.elements.tag.value.trim() || 'NEW LISTING',
        image_url: publicUrl,
        image_path: imagePath,
        is_published: form.elements.is_published.checked
      });

      if (insertError) {
        status(formStatus, `Failed to save listing: ${insertError.message}`, true);
        return;
      }

      form.reset();
      status(formStatus, '✓ Property uploaded and published to Supabase!');
      await loadListings();
    };

    reader.readAsDataURL(file);
  });
})();
