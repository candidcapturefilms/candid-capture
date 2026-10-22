CANDID CAPTURE WEBSITE — PUBLISHING GUIDE

Included files
- index.html: website pages/sections and text
- style.css: layout, colours and responsive design
- script.js: mobile menu, social links and WhatsApp inquiry form

LOCAL PREVIEW
1. Extract the ZIP.
2. Open index.html in Chrome.
3. An internet connection is needed for the sample photos and Google Fonts.

CONFIGURATION ALREADY APPLIED
- WhatsApp inquiry number configured: +8801804358062
- Facebook page configured: https://www.facebook.com/candidcapturefilms

BEFORE PUBLISHING
1. Replace every sample wedding image with your own photographs. The sample images are remote Unsplash photos; they are placeholders, not your work.
2. Check the brand spelling, copy, services and contact details on desktop and mobile.
3. Test the inquiry form with a real event inquiry. It opens WhatsApp with the form details; it does not save inquiries to a database.
4. Add your Instagram URL in script.js if you have one.
5. Add a custom domain only if/when you are ready; it usually costs extra.

HOW TO REPLACE SAMPLE IMAGES
Open style.css in a text editor and search for "images.unsplash.com". Replace each image URL with a URL to your own optimized photo, or upload photos into an assets folder and use paths such as:
  background-image: url('assets/wedding-hero.webp');
For the hero image, replace the URL in the .hero-image rule. Use compressed WebP images where possible to improve loading speed.

FREE PUBLISHING WITH GITHUB PAGES
1. Sign in or create an account at https://github.com/
2. Create a new public repository, e.g. candid-capture.
3. Upload index.html, style.css, script.js and any assets folder.
4. Open repository Settings > Pages.
5. Choose “Deploy from a branch”, select branch “main” and folder “/ (root)”, then Save.
6. Wait for GitHub Pages to publish and open the URL shown in Settings > Pages.

LIMITATIONS
- This is a static starter site, not a content-management dashboard.
- To edit wording or replace photos, edit the files and upload the updated files again.
- The booking form opens WhatsApp. It does not offer automatic email notifications, payment processing, appointment calendars, or a database.
- A custom domain and advanced form/database features may involve additional costs.
- Keep a backup of your website files before making changes.
