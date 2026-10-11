# JKJ Realty

A responsive bilingual (English and Telugu) real estate and home-loan enquiry website for JKJ. It includes searchable Hyderabad property cards, bank selections, a combined property and loan enquiry form, and a chat widget with interactive quick replies.

## Preview

Open `index.html` directly in a modern browser, or serve the folder locally:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. No package installation or build step is required. The photos and web fonts load from external providers.

## Notes

The listings, bank references, ratings, and chat responses are demonstration content. Set `WHATSAPP_NUMBER` in `app.js` to your WhatsApp number with country code and digits only (for India, for example `919876543210`). When a visitor submits the form, JKJ WhatsApp opens with their property and loan details prefilled; the visitor must press **Send** in WhatsApp. No form data is saved by this static website.
