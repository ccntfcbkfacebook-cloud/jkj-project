let homes = [
  {
    id: 1,
    title: 'The Banyan House',
    city: 'Jubilee Hills, Hyderabad',
    price: '₹1.42 Cr',
    type: 'Villa',
    beds: '3 beds',
    baths: '3 baths',
    area: '2,180 sq.ft.',
    tag: 'GARDEN VILLA',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'Sage & Stone',
    city: 'Kondapur, Hyderabad',
    price: '₹86 lakh',
    type: 'Apartment',
    beds: '3 beds',
    baths: '2 baths',
    area: '1,640 sq.ft.',
    tag: 'MOVE-IN READY',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    title: 'The Courtyard Edit',
    city: 'Gachibowli, Hyderabad',
    price: '₹1.08 Cr',
    type: 'Apartment',
    beds: '3 beds',
    baths: '2 baths',
    area: '1,890 sq.ft.',
    tag: 'SPACIOUS LIVING',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    title: 'The Palm Grove',
    city: 'Kokapet, Hyderabad',
    price: '₹2.25 Cr',
    type: 'Villa',
    beds: '4 beds',
    baths: '4 baths',
    area: '3,450 sq.ft.',
    tag: 'PREMIUM VILLA',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    title: 'Skyline Horizon',
    city: 'Financial District, Hyderabad',
    price: '₹1.35 Cr',
    type: 'Apartment',
    beds: '3 beds',
    baths: '3 baths',
    area: '2,150 sq.ft.',
    tag: 'HIGH-RISE LUXURY',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    title: 'Emerald Valley',
    city: 'Tellapur, Hyderabad',
    price: '₹1.65 Cr',
    type: 'Villa',
    beds: '4 beds',
    baths: '3 baths',
    area: '2,750 sq.ft.',
    tag: 'GATED COMMUNITY',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
  }
];

const copy = {
  en: {
    navHomes: 'Find a home',
    navLoans: 'Enquiry & Loans',
    navAbout: 'Why JKJ',
    navCta: 'Talk on WhatsApp',
    heroEyebrow: 'YOUR NEXT CHAPTER STARTS HERE',
    heroTitle: 'A home that feels<br>like <em>you.</em>',
    heroLead: 'Find verified properties in Hyderabad and secure the best bank home loan. We guide you at every step with clear answers.',
    searchLocation: 'LOCATION',
    searchType: 'I’M LOOKING FOR',
    locationPlaceholder: 'City, neighbourhood or PIN',
    anyHome: 'Any home',
    apartment: 'Apartment',
    villa: 'Villa',
    searchBtn: 'Explore homes',
    heroRating: 'from 2,400+ happy home seekers',
    photoTagTitle: 'More than a house.',
    photoTagText: 'A place for your story.',
    featuredHome: 'Featured home',
    heroNote: 'Good homes. Clear guidance. A little more peace of mind.',
    trustedBy: 'TRUSTED LENDING PARTNERS FOR YOUR HOME LOAN',
    partnerNote: 'Leading bank tie-ups',
    listTitle: 'Places to <em>belong.</em>',
    listLead: 'Curated properties across Hyderabad’s most desirable locations.',
    viewAll: 'View all homes',
    empty: 'No homes match that search yet. Try a nearby area or change your filters.',
    enquireHomeBtn: 'Enquire on WhatsApp',
    onwards: 'onwards',
    loanEyebrow: 'REAL ESTATE & HOME LOAN ENQUIRY',
    loanTitle: 'Find your home & get the<br>right <em>home loan.</em>',
    loanLead: 'Whether you want to buy a property, secure a low-interest bank loan, or both—share your details below to connect with JKJ directly on WhatsApp.',
    nameLabel: 'YOUR NAME *',
    namePlaceholder: 'Full name',
    phoneLabel: 'PHONE NUMBER *',
    phonePlaceholder: '+91 98765 43210',
    interestLabel: 'ENQUIRY TYPE *',
    interestChoose: 'Choose enquiry type',
    interestLoan: 'Home loan only',
    interestProperty: 'Property / Real estate enquiry',
    interestBoth: 'Both property & home loan',
    bankLabel: 'PREFERRED BANK',
    bankChoose: 'Help me choose / Any bank',
    cityLabel: 'CITY / NEIGHBOURHOOD *',
    cityPlaceholder: 'e.g. Hyderabad, Jubilee Hills, Gachibowli',
    budgetLabel: 'PROPERTY BUDGET *',
    budgetChoose: 'Select budget range',
    propertyLabel: 'PROPERTY OF INTEREST (OPTIONAL)',
    propertyChoose: 'Choose a listed property (optional)',
    propertyOther: 'Other / not listed yet',
    loanAmountLabel: 'LOAN AMOUNT NEEDED (OPTIONAL)',
    loanAmountPlaceholder: 'e.g. ₹50 lakh or ₹1.2 Cr',
    notesLabel: 'ADDITIONAL DETAILS (OPTIONAL)',
    notesPlaceholder: 'Any specific requirements, floor, timeline...',
    consentText: 'I agree to share these details with JKJ via WhatsApp.',
    loanSubmit: 'Send enquiry on WhatsApp',
    privacyNote: 'Directly connects to JKJ WhatsApp. Your details remain confidential.',
    trust1: 'Direct WhatsApp support',
    trust2: 'Multiple bank loan choices',
    trust3: 'Transparent local guidance',
    waAlertTitle: 'WhatsApp opened with your enquiry!',
    waAlertStrong: 'Important: Please press the "Send" button in WhatsApp to submit your message!',
    waAlertDesc: 'Your enquiry has been prefilled with all details. It will reach our JKJ team only after you press Send in WhatsApp.',
    reopenWhatsApp: 'WhatsApp మళ్లీ తెరవండి (Reopen WhatsApp) ↗',
    numberNeeded: 'WhatsApp receiving number is missing.',
    whatsappReady: 'WhatsApp opened with your enquiry. Please press "Send" in WhatsApp to deliver it.',
    aboutEyebrow: 'A LITTLE MORE HUMAN',
    aboutTitle: 'Big life choices deserve<br><em>thoughtful people.</em>',
    aboutText: 'Buying a home is one of life’s most significant decisions. JKJ Realty bridges home seekers, curated properties, and competitive home loan rates from premier banks with honest advice and personal attention.',
    aboutCta: 'Talk on WhatsApp',
    stat1: 'happy home buyers',
    stat2: 'prime localities',
    stat3: 'partner banks',
    stat4: 'customer rating',
    footerText: 'JKJ — Curated homes & home loan advisory.',
    footerRights: 'All rights reserved.',
    chatUs: 'Ask JKJ',
    chatTitle: 'JKJ Assistant',
    chatOnline: 'Online · Here to help you find home',
    today: 'TODAY',
    chatGreeting: 'Hello! I’m JKJ. Are you looking for a property in Hyderabad or need help with a bank home loan? I’m here to help.',
    quickHomes: 'Find a home',
    quickLoans: 'Home loans',
    quickProperty: 'Property enquiry',
    quickWhatsApp: 'Chat on WhatsApp',
    chatPlaceholder: 'Write a message…',
    chatFooter: 'Official JKJ WhatsApp Support',
    replyHomes: 'I can help you explore properties! Check out our featured Hyderabad listings above or search by locality.',
    replyLoans: 'We partner with top banks including SBI, HDFC, ICICI, Axis and Kotak. Fill the enquiry form below or message our WhatsApp to check your eligibility.',
    replyProperty: 'Interested in a property? Select any of our featured listings or specify your budget in the enquiry form below to get complete details.',
    replyWhatsApp: 'You can chat with our team directly on WhatsApp. Click here: <a href="https://api.whatsapp.com/send?text=Hello%20JKJ%2C%20I%20would%20like%20to%20enquire%20about%20properties%20and%20home%20loans" target="_blank" class="chat-wa-link">Open WhatsApp ↗</a>',
    replyHello: 'Welcome to JKJ! How can we assist you today? Looking for a new property, home loan advice, or would you like to chat directly on WhatsApp?',
    unknown: 'I am here to help you with Hyderabad properties and bank home loans. Try the options below or chat with us directly on WhatsApp.',
    error: 'Please enter a valid 10-digit phone number and fill required fields.',
    savedToast: 'Home saved to your favourites.',
    propertySelectedToast: 'Selected property for enquiry. Complete the form below!'
  },
  te: {
    navHomes: 'ఇల్లు వెతకండి',
    navLoans: 'ఆస్తి & గృహ రుణాలు',
    navAbout: 'JKJ ప్రత్యేకత',
    navCta: 'WhatsAppలో మాట్లాడండి',
    heroEyebrow: 'మీ కొత్త అధ్యాయం ఇక్కడే మొదలు',
    heroTitle: 'మీలా అనిపించే<br><em>ఒక ఇల్లు.</em>',
    heroLead: 'హైదరాబాద్‌లో నమ్మకమైన ప్రాపర్టీలు మరియు ఉత్తమ బ్యాంక్ గృహ రుణాన్ని కనుగొనండి. ప్రతి అడుగులో JKJ మీకు స్పష్టమైన సలహా అందిస్తుంది.',
    searchLocation: 'ప్రాంతం',
    searchType: 'మీకు కావలసినది',
    locationPlaceholder: 'నగరం, ప్రాంతం లేదా పిన్ కోడ్',
    anyHome: 'ఏ ఇల్లైనా',
    apartment: 'అపార్ట్‌మెంట్',
    villa: 'విల్లా',
    searchBtn: 'ఇళ్లు చూడండి',
    heroRating: '2,400 మందికి పైగా సంతోషమైన గృహ కొనుగోలుదారుల నుంచి',
    photoTagTitle: 'ఇది కేవలం ఇల్లు కాదు.',
    photoTagText: 'మీ కథకు ఓ అందమైన చోటు.',
    featuredHome: 'ప్రత్యేక ఇల్లు',
    heroNote: 'మంచి ఇళ్లు. స్పష్టమైన సలహా. మరింత మనశ్శాంతి.',
    trustedBy: 'మీ గృహ రుణం కోసం నమ్మకమైన బ్యాంకింగ్ భాగస్వాములు',
    partnerNote: 'ప్రముఖ బ్యాంకుల సహకారం',
    listTitle: 'మీరు <em>చేరాల్సిన చోటు.</em>',
    listLead: 'హైదరాబాద్‌లోని అత్యుత్తమ పరిసరాల్లో జాగ్రత్తగా ఎంపిక చేసిన ఇళ్లు.',
    viewAll: 'అన్ని ఇళ్లు చూడండి',
    empty: 'ఈ శోధనకు ఇళ్లు దొరకలేదు. దగ్గరి నగరాన్ని లేదా ఫిల్టర్‌ను మార్చి చూడండి.',
    enquireHomeBtn: 'WhatsAppలో విచారించండి',
    onwards: 'నుండి',
    loanEyebrow: 'రియల్ ఎస్టేట్ & గృహ రుణ విచారణ',
    loanTitle: 'మీ కలల ఇల్లు & ఉత్తమ<br><em>గృహ రుణం.</em>',
    loanLead: 'మీరు ఇల్లు కొనాలనుకున్నా, తక్కువ వడ్డీతో బ్యాంక్ గృహ రుణం కావాలన్నా—కింది వివరాలు నమోదు చేసి నేరుగా WhatsApp ద్వారా JKJ బృందంతో మాట్లాడండి.',
    nameLabel: 'మీ పేరు *',
    namePlaceholder: 'పూర్తి పేరు',
    phoneLabel: 'ఫోన్ నంబర్ *',
    phonePlaceholder: '+91 98765 43210',
    interestLabel: 'విచారణ రకం *',
    interestChoose: 'విచారణ రకం ఎంచుకోండి',
    interestLoan: 'గృహ రుణం మాత్రమే (Home Loan)',
    interestProperty: 'ఆస్తి / ఇల్లు కొనుగోలు (Property)',
    interestBoth: 'ఇల్లు మరియు గృహ రుణం రెండూ (Both)',
    bankLabel: 'మీకు నచ్చిన బ్యాంకు',
    bankChoose: 'ఎంచుకోవడంలో సలహా కావాలి / ఏ బ్యాంకైనా పర్వాలేదు',
    cityLabel: 'నగరం / ప్రాంతం *',
    cityPlaceholder: 'ఉదా: హైదరాబాద్, జూబ్లీహిల్స్, గచ్చిబౌలి',
    budgetLabel: 'ఇంటి బడ్జెట్ *',
    budgetChoose: 'బడ్జెట్ శ్రేణిని ఎంచుకోండి',
    propertyLabel: 'మీకు నచ్చిన ఇల్లు (ఐచ్ఛికం)',
    propertyChoose: 'జాబితాలోని ఇల్లు ఎంచుకోండి (ఐచ్ఛికం)',
    propertyOther: 'ఇతర / ఇంకా జాబితాలో లేదు',
    loanAmountLabel: 'కావలసిన రుణ మొత్తం (ఐచ్ఛికం)',
    loanAmountPlaceholder: 'ఉదా: ₹50 లక్షలు లేదా ₹1.2 కోట్లు',
    notesLabel: 'అదనపు వివరాలు (ఐచ్ఛికం)',
    notesPlaceholder: 'మీకు కావలసిన ప్రత్యేక వివరాలు లేదా గడువు...',
    consentText: 'ఈ వివరాలను WhatsApp ద్వారా JKJతో పంచుకోవడానికి అంగీకరిస్తున్నాను.',
    loanSubmit: 'WhatsAppలో విచారణ పంపండి',
    privacyNote: 'నేరుగా JKJ WhatsApp కు చేరుతుంది. మీ వివరాలు గోప్యంగా ఉంటాయి.',
    trust1: 'నేరుగా WhatsApp సేవలు',
    trust2: 'అనేక బ్యాంకుల రుణ ఎంపికలు',
    trust3: 'నమ్మకమైన స్థానిక మార్గదర్శకత్వం',
    waAlertTitle: 'WhatsApp తెరవబడింది! దయచేసి "Send" నొక్కండి',
    waAlertStrong: 'ముఖ్య గమనిక: WhatsApp తెరిచిన తర్వాత దయచేసి "Send" (పంపండి) బటన్‌ను తప్పనిసరిగా నొక్కండి!',
    waAlertDesc: 'మీ విచారణ వివరాలన్నీ WhatsApp మెసేజ్‌లో సిద్ధంగా ఉన్నాయి. మీరు "Send" నొక్కినప్పుడే అవి మా JKJ బృందానికి అందుతాయి.',
    reopenWhatsApp: 'WhatsApp మళ్లీ తెరవండి ↗',
    numberNeeded: 'JKJ WhatsApp నంబర్ సెటప్ చేయాల్సి ఉంది.',
    whatsappReady: 'మీ విచారణ WhatsAppలో సిద్ధంగా ఉంది. దయచేసి WhatsAppలో "Send" నొక్కండి.',
    aboutEyebrow: 'మా ప్రత్యేకత',
    aboutTitle: 'జీవితంలో పెద్ద నిర్ణయాలకు<br><em>మంచి మనుషుల తోడు కావాలి.</em>',
    aboutText: 'ఇల్లు కొనడం జీవితంలో ఒక పెద్ద మైలురాయి. JKJ వద్ద మేము ఇల్లు వెతికేవారికి, ఉత్తమమైన ఇళ్లను మరియు ప్రముఖ బ్యాంకుల గృహ రుణ సదుపాయాలను నిజాయితీగా, నమ్మకంగా అందిస్తాం.',
    aboutCta: 'WhatsAppలో మాట్లాడండి',
    stat1: 'సంతోషమైన గృహ కొనుగోలుదారులు',
    stat2: 'ప్రముఖ హైదరాబాద్ పరిసరాలు',
    stat3: 'రుణ భాగస్వామ్య బ్యాంకులు',
    stat4: 'వినియోగదారుల రేటింగ్',
    footerText: 'JKJ — రియల్ ఎస్టేట్ మరియు గృహ రుణ సేవల వేదిక.',
    footerRights: 'అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
    chatUs: 'JKJను అడగండి',
    chatTitle: 'JKJ అసిస్టెంట్',
    chatOnline: 'ఆన్‌లైన్ · మీకు సాయం చేయడానికి సిద్ధం',
    today: 'ఈ రోజు',
    chatGreeting: 'నమస్కారం! నేను JKJ. మీకు హైదరాబాద్‌లో ఇల్లు కావాలా లేదా గృహ రుణంపై సాయం కావాలా? నేను మీకు సాయం చేస్తాను.',
    quickHomes: 'ఇల్లు వెతకండి',
    quickLoans: 'గృహ రుణాలు',
    quickProperty: 'ఆస్తి విచారణ',
    quickWhatsApp: 'WhatsApp చాట్',
    chatPlaceholder: 'మీ సందేశం రాయండి…',
    chatFooter: 'అధికారిక JKJ WhatsApp సపోర్ట్',
    replyHomes: 'ఇళ్లు వెతకడంలో సాయం చేస్తాను! పైన ఉన్న ప్రముఖ ప్రాపర్టీలను చూడండి లేదా ప్రాంతం పేరుతో వెతకండి.',
    replyLoans: 'మేము SBI, HDFC, ICICI, Axis, Kotak తదితర బ్యాంకులతో పనిచేస్తాం. కింది ఫారమ్ నింపండి లేదా మా WhatsApp లో సంప్రదించండి.',
    replyProperty: 'ఆస్తి వివరాల కోసం పైన ఉన్న ఇళ్లలో ఎంపిక చేసుకోండి లేదా కింది విచారణ ఫారమ్ ద్వారా మీ బడ్జెట్ పంపండి.',
    replyWhatsApp: 'మా బృందంతో నేరుగా WhatsApp లో మాట్లాడవచ్చు: <a href="https://api.whatsapp.com/send?text=నమస్కారం%20JKJ%2C%20నేను%20ఆస్తి%20మరియు%20గృహ%20రుణం%20గురించి%20విచారించాలనుకుంటున్నాను" target="_blank" class="chat-wa-link">WhatsApp తెరవండి ↗</a>',
    replyHello: 'స్వాగతం! మీకు ఎలా సాయం చేయాలి: ఇల్లు వెతకాలా, గృహ రుణం కావాలా, లేక నేరుగా WhatsAppలో మాట్లాడాలా?',
    unknown: 'హైదరాబాద్ రియల్ ఎస్టేట్ & గృహ రుణాలపై సాయం చేస్తాను. కింది ఎంపికల్లో ఒకటి ఎంచుకోండి లేదా WhatsApp లో సంప్రదించండి.',
    error: 'దయచేసి సరైన 10 అంకెల ఫోన్ నంబర్‌తో పాటు అవసరమైన వివరాలన్నీ నమోదు చేయండి.',
    savedToast: 'ఇల్లు మీ ఇష్టాల జాబితాలో చేర్చాం.',
    propertySelectedToast: 'విచారణ కోసం ఇల్లు ఎంపికైంది. కింది ఫారమ్ పూర్తి చేయండి!'
  }
};

let language = 'en';
const WHATSAPP_NUMBER = '';

const tr = key => (copy[language] && copy[language][key]) || copy.en[key] || key;

function renderHomes(query = '', type = 'all') {
  const grid = document.querySelector('#listingGrid');
  if (!grid) return;
  const matches = homes.filter(home =>
    (type === 'all' || home.type === type) &&
    `${home.title} ${home.city} ${home.type}`.toLowerCase().includes(query.toLowerCase())
  );

  grid.innerHTML = matches.map(h => `
    <article class="listing-card">
      <div class="listing-photo">
        <img src="${h.img}" alt="${h.title} in ${h.city}" loading="lazy">
        <span class="listing-badge">${h.tag}</span>
        <button class="save-home" aria-label="Save ${h.title}" aria-pressed="false">♡</button>
      </div>
      <div class="listing-body">
        <span class="listing-kicker">${h.type.toUpperCase()} · ${h.area.toUpperCase()}</span>
        <h3>${h.title}</h3>
        <div class="listing-location">⌖ &nbsp;${h.city}</div>
        <div class="listing-bottom">
          <div class="listing-price">
            <strong>${h.price}</strong> <span>${tr('onwards')}</span>
          </div>
          <span class="listing-spec">${h.beds} &nbsp;·&nbsp; ${h.baths}</span>
        </div>
        <div class="listing-actions">
          <button class="button-outline-sm enquire-home" data-title="${h.title}" type="button">
            <span>${tr('enquireHomeBtn')}</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  const emptyState = document.querySelector('#emptyState');
  if (emptyState) emptyState.hidden = matches.length > 0;

  grid.querySelectorAll('.save-home').forEach(btn => {
    btn.addEventListener('click', () => {
      const on = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!on));
      btn.classList.toggle('saved', !on);
      btn.textContent = on ? '♡' : '♥';
      if (!on) showToast(tr('savedToast'));
    });
  });

  grid.querySelectorAll('.enquire-home').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const interestSelect = document.querySelector('#custInterest');
      const propertySelect = document.querySelector('#custProperty');
      if (interestSelect) interestSelect.value = 'Property';
      if (propertySelect) {
        let matchedOption = Array.from(propertySelect.options).find(opt => opt.text.includes(title));
        if (matchedOption) propertySelect.value = matchedOption.value;
      }
      showToast(tr('propertySelectedToast'));
      const loanSection = document.querySelector('#loans');
      if (loanSection) loanSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.querySelector('#custName');
      if (nameInput) setTimeout(() => nameInput.focus(), 600);
    });
  });
}

function applyLanguage() {
  document.documentElement.lang = language === 'te' ? 'te' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = tr(key);
    if (val.includes('<')) el.innerHTML = val;
    else el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = tr(el.dataset.i18nPlaceholder);
  });

  const langBtn = document.querySelector('#langSwitch');
  if (langBtn) {
    langBtn.textContent = language === 'en' ? 'తెలుగు' : 'English';
    langBtn.setAttribute('aria-label', language === 'en' ? 'తెలుగులోకి మార్చండి' : 'Switch to English');
  }

  const locationInput = document.querySelector('#locationInput');
  const typeInput = document.querySelector('#typeInput');
  renderHomes(locationInput ? locationInput.value : '', typeInput ? typeInput.value : 'all');
}

document.querySelector('#langSwitch').addEventListener('click', () => {
  language = language === 'en' ? 'te' : 'en';
  applyLanguage();
});

document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  const loc = document.querySelector('#locationInput').value;
  const typ = document.querySelector('#typeInput').value;
  renderHomes(loc, typ);
  document.querySelector('#homes').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#typeInput').addEventListener('change', () => {
  const loc = document.querySelector('#locationInput').value;
  const typ = document.querySelector('#typeInput').value;
  renderHomes(loc, typ);
});

document.querySelector('#viewAll').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#locationInput').value = '';
  document.querySelector('#typeInput').value = 'all';
  renderHomes();
});

// Enquiry Form Submit Handler with WhatsApp Integration
document.querySelector('#loanForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;

  const phone = form.elements.phone.value.replace(/\D/g, '');
  const status = document.querySelector('#formMessage');
  const waAlert = document.querySelector('#whatsappAlert');
  const waDirectBtn = document.querySelector('#waDirectBtn');

  if (phone.length < 10) {
    if (status) {
      status.textContent = tr('error');
      status.className = 'form-message error';
    }
    return;
  }

  const details = new FormData(form);
  const custName = details.get('name') || '';
  const custPhone = details.get('phone') || '';
  const interest = details.get('interest') || '';
  const bank = details.get('bank') || 'Not specified';
  const city = details.get('city') || '';
  const budget = details.get('budget') || '';
  const property = details.get('property') || 'General enquiry';
  const loanAmount = details.get('loanAmount') || 'Not specified';
  const notes = details.get('notes') || 'None';

  const message = [
    '🏡 *JKJ REAL ESTATE & HOME LOAN ENQUIRY*',
    '━━━━━━━━━━━━━━━━━━━━━━━━',
    `👤 *Customer / కస్టమర్:* ${custName}`,
    `📞 *Phone / ఫోన్:* ${custPhone}`,
    `📋 *Enquiry Type / విచారణ రకం:* ${interest}`,
    `🏦 *Preferred Bank / బ్యాంకు:* ${bank}`,
    `📍 *City & Area / ప్రాంతం:* ${city}`,
    `💰 *Budget / బడ్జెట్:* ${budget}`,
    `🏠 *Property / ఎంచుకున్న ఇల్లు:* ${property}`,
    `💳 *Loan Needed / కావలసిన రుణం:* ${loanAmount}`,
    `📝 *Additional Details / ఇతర వివరాలు:* ${notes}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━',
    '🌐 *Sent from JKJ Website*'
  ].join('\n');

  const recipient = WHATSAPP_NUMBER.replace(/\D/g, '');
  const waUrl = recipient
    ? `https://api.whatsapp.com/send?phone=${recipient}&text=${encodeURIComponent(message)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  // Open WhatsApp window
  window.open(waUrl, '_blank', 'noopener,noreferrer');

  // Show status & WhatsApp confirmation alert
  if (status) {
    status.textContent = tr('whatsappReady');
    status.className = 'form-message';
  }

  if (waAlert) {
    waAlert.hidden = false;
    if (waDirectBtn) {
      waDirectBtn.href = waUrl;
    }
    waAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  showToast(language === 'te' ? 'WhatsApp తెరవబడింది! "Send" నొక్కండి.' : 'WhatsApp opened! Please press Send.');
});

// Chat Widget
const chatPanel = document.querySelector('#chatPanel');
function toggleChat(open) {
  chatPanel.classList.toggle('open', open);
  chatPanel.setAttribute('aria-hidden', String(!open));
  if (open) setTimeout(() => document.querySelector('#chatInput').focus(), 150);
}
document.querySelector('#chatLaunch').addEventListener('click', () => toggleChat(!chatPanel.classList.contains('open')));
document.querySelector('#chatClose').addEventListener('click', () => toggleChat(false));

function addMessage(text, user = false) {
  const msg = document.createElement('div');
  msg.className = `message ${user ? 'user-message' : ''}`;
  const span = document.createElement('span');
  if (text.includes('<')) span.innerHTML = text;
  else span.textContent = text;
  const small = document.createElement('small');
  small.textContent = user ? (language === 'te' ? 'మీరు · ఇప్పుడే' : 'You · now') : 'JKJ · now';
  msg.append(span, small);
  document.querySelector('#chatMessages').append(msg);
  msg.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function replyFor(text) {
  const low = text.toLowerCase();
  if (/whatsapp|వాట్సాప్|chat|నంబర్|మెసేజ్/.test(low)) return tr('replyWhatsApp');
  if (/loan|రుణ|లోన్|bank|బ్యాంక్|వడ్డీ|interest/.test(low)) return tr('replyLoans');
  if (/property|ఆస్తి|ఇల్లు|home|house|villa|flat|apartment/.test(low)) return tr('replyProperty');
  if (/person|call|contact|మనిషి|మాట్లా|సంప్రదిం|నెంబర్/.test(low)) return tr('replyWhatsApp');
  if (/hi|hello|hey|నమస్కా|హలో|హాయ్/.test(low)) return tr('replyHello');
  return tr('unknown');
}

function sendChat(text) {
  const clean = text.trim();
  if (!clean) return;
  addMessage(clean, true);
  setTimeout(() => addMessage(replyFor(clean)), 400);
}

document.querySelector('#chatForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.querySelector('#chatInput');
  sendChat(input.value);
  input.value = '';
});

document.querySelectorAll('[data-reply]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.reply;
    if (key === 'homes') sendChat(tr('quickHomes'));
    else if (key === 'loans') sendChat(tr('quickLoans'));
    else if (key === 'property') sendChat(tr('quickProperty'));
    else if (key === 'whatsapp') sendChat(tr('quickWhatsApp'));
  });
});

function showToast(text) {
  const existing = document.querySelectorAll('.toast');
  existing.forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = text;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2500);
}

document.querySelector('#menuToggle').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('mobile-open');
});
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.remove('mobile-open');
  });
});

// Initial Render
renderHomes();

// If properties have been added in Admin (Local Demo or Supabase), display them in listings
async function loadPublishedProperties() {
  let customProperties = [];

  // 1. Read local demo properties from localStorage
  try {
    const local = JSON.parse(localStorage.getItem('jkj_local_properties') || '[]');
    const published = local.filter(item => item.is_published);
    if (published.length > 0) {
      customProperties = published.map(item => ({
        id: item.id,
        title: item.title,
        city: item.city,
        price: item.price,
        type: item.property_type || 'Apartment',
        beds: `${item.bedrooms} ${item.bedrooms === 1 ? 'bed' : 'beds'}`,
        baths: `${item.bathrooms} ${item.bathrooms === 1 ? 'bath' : 'baths'}`,
        area: item.area,
        tag: item.tag || 'NEW LISTING',
        img: item.image_url
      }));
    }
  } catch (e) {
    console.warn('Error reading local demo properties:', e);
  }

  // 2. Read cloud properties if Supabase is configured
  if (window.JKJ_SUPABASE_URL && window.JKJ_SUPABASE_ANON_KEY && window.supabase?.createClient) {
    try {
      const db = window.supabase.createClient(window.JKJ_SUPABASE_URL, window.JKJ_SUPABASE_ANON_KEY);
      const { data, error } = await db.from('properties').select('*').eq('is_published', true).order('created_at', { ascending: false });
      if (!error && data?.length) {
        const cloudProps = data.map(item => ({
          id: item.id,
          title: item.title,
          city: item.city,
          price: item.price,
          type: item.property_type,
          beds: `${item.bedrooms} ${item.bedrooms === 1 ? 'bed' : 'beds'}`,
          baths: `${item.bathrooms} ${item.bathrooms === 1 ? 'bath' : 'baths'}`,
          area: item.area,
          tag: item.tag,
          img: item.image_url
        }));
        customProperties = [...cloudProps, ...customProperties];
      }
    } catch (err) {
      console.warn('Supabase fetch error:', err);
    }
  }

  if (customProperties.length > 0) {
    homes = [...customProperties, ...homes];

    const propertySelect = document.querySelector('#custProperty');
    if (propertySelect) {
      const promptOption = propertySelect.options[0]?.cloneNode(true) || new Option('Choose a listed property (optional)', 'General enquiry');
      const otherOption = propertySelect.options[propertySelect.options.length - 1]?.cloneNode(true) || new Option('Other / not listed yet', 'Other / not listed yet');
      const listingOptions = homes.map(home => new Option(`${home.title} — ${home.city}`, `${home.title} — ${home.city}`));
      propertySelect.replaceChildren(promptOption, ...listingOptions, otherOption);
    }

    const locationInput = document.querySelector('#locationInput');
    const typeInput = document.querySelector('#typeInput');
    renderHomes(locationInput?.value || '', typeInput?.value || 'all');
  }
}

loadPublishedProperties();

