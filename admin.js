(() => {
  const loginCard = document.querySelector('#loginCard');
  const dashboard = document.querySelector('#dashboard');
  const loginStatus = document.querySelector('#loginStatus');
  const formStatus = document.querySelector('#formStatus');
  const listingHost = document.querySelector('#adminListings');
  const isConfigured = () => window.JKJ_SUPABASE_URL && window.JKJ_SUPABASE_ANON_KEY;

  if (!isConfigured() || !window.supabase?.createClient) {
    loginStatus.textContent = 'Setup needed: add your Supabase project URL and publishable key in supabase-config.js, then run supabase-properties.sql in Supabase SQL Editor.';
    loginStatus.classList.add('error');
    return;
  }

  const db = window.supabase.createClient(window.JKJ_SUPABASE_URL, window.JKJ_SUPABASE_ANON_KEY);

  function status(element, message, error = false) {
    element.textContent = message;
    element.classList.toggle('error', error);
  }

  async function showAdmin(user) {
    if (user?.app_metadata?.role !== 'admin') {
      await db.auth.signOut();
      status(loginStatus, 'This account is not an authorized JKJ admin.', true);
      return;
    }
    loginCard.hidden = true;
    dashboard.hidden = false;
    await loadListings();
  }

  async function loadListings() {
    listingHost.innerHTML = '<div class="admin-empty">Loading listings…</div>';
    const { data, error } = await db.from('properties').select('*').order('created_at', { ascending: false });
    if (error) {
      listingHost.innerHTML = '';
      status(formStatus, error.message, true);
      return;
    }
    if (!data.length) {
      listingHost.innerHTML = '<div class="admin-empty">No listings yet. Add your first property above.</div>';
      return;
    }
    listingHost.innerHTML = data.map(item => `
      <article class="admin-listing">
        <img src="${item.image_url}" alt="">
        <div><strong>${escapeText(item.title)}</strong><small>${escapeText(item.city)} · ${escapeText(item.price)} · <span class="${item.is_published ? '' : 'status-draft'}">${item.is_published ? 'Published' : 'Draft'}</span></small></div>
        <button class="publish-button" data-id="${item.id}" data-published="${item.is_published}" type="button">${item.is_published ? 'Unpublish' : 'Publish'}</button>
        <button class="delete-listing" data-id="${item.id}" data-path="${escapeText(item.image_path)}" type="button">Delete</button>
      </article>`).join('');

    listingHost.querySelectorAll('.publish-button').forEach(button => button.addEventListener('click', async () => {
      const { error: updateError } = await db.from('properties').update({ is_published: button.dataset.published !== 'true' }).eq('id', button.dataset.id);
      if (updateError) status(formStatus, updateError.message, true);
      else { status(formStatus, 'Listing visibility updated.'); await loadListings(); }
    }));
    listingHost.querySelectorAll('.delete-listing').forEach(button => button.addEventListener('click', async () => {
      if (!window.confirm('Delete this property and its photo?')) return;
      const { error: deleteError } = await db.from('properties').delete().eq('id', button.dataset.id);
      if (deleteError) { status(formStatus, deleteError.message, true); return; }
      await db.storage.from('property-images').remove([button.dataset.path]);
      status(formStatus, 'Property deleted.');
      await loadListings();
    }));
  }

  function escapeText(value = '') {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  }

  document.querySelector('#loginForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    status(loginStatus, 'Signing in…');
    const { data, error } = await db.auth.signInWithPassword({ email: form.elements.email.value, password: form.elements.password.value });
    if (error) { status(loginStatus, error.message, true); return; }
    await showAdmin(data.user);
  });

  document.querySelector('#signOut').addEventListener('click', async () => {
    await db.auth.signOut();
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
    status(formStatus, 'Uploading photo and saving listing…');
    const extension = file.name.split('.').pop().toLowerCase();
    const imagePath = `${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await db.storage.from('property-images').upload(imagePath, file, { contentType: file.type, upsert: false });
    if (uploadError) { status(formStatus, uploadError.message, true); return; }
    const { data: imageData } = db.storage.from('property-images').getPublicUrl(imagePath);
    const record = {
      title: form.elements.title.value.trim(), city: form.elements.city.value.trim(), price: form.elements.price.value.trim(),
      property_type: form.elements.property_type.value, bedrooms: Number(form.elements.bedrooms.value),
      bathrooms: Number(form.elements.bathrooms.value), area: form.elements.area.value.trim(),
      tag: form.elements.tag.value.trim() || 'NEW LISTING', image_url: imageData.publicUrl,
      image_path: imagePath, is_published: form.elements.is_published.checked
    };
    const { error: insertError } = await db.from('properties').insert(record);
    if (insertError) {
      await db.storage.from('property-images').remove([imagePath]);
      status(formStatus, insertError.message, true);
      return;
    }
    form.reset();
    form.elements.bedrooms.value = 3;
    form.elements.bathrooms.value = 2;
    form.elements.tag.value = 'NEW LISTING';
    form.elements.is_published.checked = true;
    status(formStatus, record.is_published ? 'Property published on the website.' : 'Property saved as a draft.');
    await loadListings();
  });

  db.auth.getSession().then(({ data }) => {
    if (data.session) showAdmin(data.session.user);
    else status(loginStatus, 'Sign in with your JKJ admin account.');
  });
})();
