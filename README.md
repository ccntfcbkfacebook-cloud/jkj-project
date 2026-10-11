# JKJ — Real Estate & Home Loan Advisory (హైదరాబాద్)

A fast, responsive, bilingual (English & Telugu) real estate and bank home loan advisory website for **JKJ**. 

---

## 🌟 Key Features / ప్రధాన ఫీచర్లు

1. **JKJ Branding (JKJ బ్రాండింగ్):**
   - Clean, professional design with the official name **JKJ**.

2. **Bilingual Support (English & Telugu / ద్విభాషా సదుపాయం):**
   - Seamless one-click language switcher (`తెలుగు` / `English`) in the top navigation bar.
   - All text, property cards, form labels, placeholders, chat responses, and notification banners adapt immediately.

3. **Curated Hyderabad Property Listings (ప్రాపర్టీ లిస్టింగ్‌లు):**
   - Filter and search properties by location (Jubilee Hills, Kondapur, Gachibowli, Kokapet, Financial District, Tellapur) and property type (Apartment, Villa).
   - Each property card has an **"Enquire on WhatsApp / వివరాలు అడగండి"** button that pre-selects the property in the enquiry form.

4. **Comprehensive Enquiry Form (సమగ్ర విచారణ ఫారమ్):**
   Collects all required customer details:
   - **Customer Name (కస్టమర్ పేరు)**
   - **Phone Number (ఫోన్ నంబర్)**
   - **Enquiry Type (విచారణ రకం):** Home loan only / Property enquiry / Both property & home loan
   - **Preferred Bank (నచ్చిన బ్యాంకు):** SBI, HDFC, ICICI, Axis, Kotak, Bank of Baroda, etc.
   - **City / Neighbourhood (నగరం / పరిసరం)**
   - **Property Budget (బడ్జెట్ శ్రేణి)**
   - **Property of Interest (ఎంచుకున్న ఇల్లు)**
   - **Loan Amount Needed (కావలసిన రుణం మొత్తం)**
   - **Additional Notes (అదనపు వివరాలు)**

5. **WhatsApp Integration with +91 9642638241 (WhatsApp అనుసంధానం):**
   - Submitting the form opens WhatsApp directly to **`+91 9642638241`** (`https://api.whatsapp.com/send?phone=919642638241&text=...`) with all gathered details pre-formatted into an organized message.
   - **Clear Customer Guidance (స్పష్టమైన సూచన):** A prominent, highlighted notification box with an animated indicator informs the user:
     > **ముఖ్య గమనిక:** WhatsApp తెరిచిన తర్వాత దయచేసి **"Send" (పంపండి)** బటన్‌ను తప్పనిసరిగా నొక్కండి!  
     > (*Important: Once WhatsApp opens, you MUST press the "Send" button to deliver your enquiry!*)
   - Provides a backup direct button to re-open WhatsApp if popups were blocked.

6. **Interactive JKJ Chat Box (JKJ చాట్ బాక్స్):**
   - Floating chat widget with quick reply options for finding homes, home loans, property details, and direct WhatsApp chat.
   - Instant answers in English and Telugu.

7. **Fully Responsive (మొబైల్ మరియు డెస్క్‌టాప్ అనుకూలత):**
   - Mobile-first, responsive layouts tailored for smartphones, tablets, and high-resolution desktops.

---

## 🚀 How to Preview the Website / Preview ఎలా చూడాలి

No build steps or npm installations are required. You can preview the website using any of the following simple methods:

### Method 1: Using Python Local Server (సిఫార్సు చేయబడిన పద్ధతి)
Open PowerShell or Terminal in this project directory and run:

```bash
python -m http.server 8000
```

Then open your browser and visit:
👉 **`http://localhost:8000`**

*(To stop the server at any time, press `Ctrl + C` in the terminal).*

---

### Method 2: Direct File Open in Browser (నేరుగా బ్రౌజర్‌లో తెరవడం)
- Simply double-click `index.html` in your file explorer, or right-click `index.html` → **Open with** → **Google Chrome** (or Edge / Firefox / Brave).

---

### Method 3: VS Code Live Server Extension
- If using VS Code / Cursor, right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 File Structure / ఫైళ్ల వివరాలు

- **`index.html`**: Semantic HTML5 markup, bilingual data attributes, enquiry form, WhatsApp notification card, and chat widget.
- **`styles.css`**: Responsive styling, custom fonts, WhatsApp badges, animations, and responsive media queries.
- **`app.js`**: Bilingual translations dictionary, property listings rendering, search/filter logic, WhatsApp message prefill & launcher, and chat assistant.
- **`README.md`**: Documentation and preview instructions.

## 🔐 Admin property uploads

New properties are managed from `admin.html`. To connect it:

1. Create a Supabase project and run `supabase-properties.sql` in its SQL Editor.
2. In Supabase **Authentication → Users**, create your admin login and set its **app_metadata** to `{"role":"admin"}`. Authorization is enforced by database and storage Row Level Security policies, so signing in alone does not grant upload rights.
3. Copy the project URL and publishable (or legacy anon) key into `supabase-config.js`. Never put a `service_role` or secret key in browser files.
4. Start the local server and open `http://localhost:8000/admin.html` to sign in and upload property details and a JPG, PNG, or WebP photo. Published homes appear in the public property listings; drafts remain hidden.

The Supabase `property-images` bucket is public so visitors can view listing photos. Only an account with the admin role can upload, update visibility, or delete properties and images. This authorization is enforced with Supabase RLS policies, as described in the [Supabase Storage access-control docs](https://supabase.com/docs/guides/storage/security/access-control) and [RLS docs](https://supabase.com/docs/guides/database/postgres/row-level-security).
