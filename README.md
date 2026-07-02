# Joist Recruitment Website

A premium, production-ready recruitment agency website built with React, Vite, and Tailwind CSS.

## Features
- Mobile-first, responsive design
- Dark premium UI (Charcoal & Burnt Orange)
- Forms handled by Netlify Forms (no third-party account needed)
- Fully static output, hostable on basic web hosting (like IONOS)

## How to Run Locally

If you have Node.js installed, you can run the development server:

```bash
npm install
npm run dev:client
```

Or build the static files:

```bash
npm run build
```

This will generate a `dist/public` folder containing all the static HTML/CSS/JS files.

## How to Upload to IONOS (or any static host)

1. Generate the static build by running `npm run build`.
2. Locate the output directory: `dist/public`.
3. Open your FTP client (like FileZilla) or IONOS Webspace Explorer.
4. Upload **the contents** of the `dist/public` folder directly into your `htdocs` folder (or the root directory of your domain).
   - *Note: Ensure `index.html` sits directly inside `htdocs`.*
5. **Routing Setup**: The app includes a `.htaccess` file inside the `public` directory which ensures deep links (like `/employers`) work correctly and route back to `index.html`. If you are on an Apache server (like IONOS), this will work automatically.

## Customization

### Brand Colors & Details
- To change the Burnt Orange accent color, open `client/src/index.css` and update the `--primary` HSL value.
- To update the email (`hello@joistrecruitment.co.uk`) and phone number (`+44 7873 965178`), search for them in the components (mostly in `Footer.tsx`, `Navbar.tsx`, and `Contact.tsx`).

### Contact Forms (Netlify Forms)
The three forms (Contact, Employers, Candidates) submit to **Netlify Forms** — no third-party account or endpoint required. This only works when the site is deployed to Netlify.

How it's wired:
- Netlify detects forms by scanning the deployed static HTML at build time. Because the real forms are rendered by React at runtime, hidden "detection" copies live in `client/index.html` — one per form (`contact`, `register-vacancy`, `candidate-profile`). **Keep their field `name`s in sync with the React forms.**
- Each React form (in `client/src/pages/`) carries `data-netlify="true"`, a matching `name`, a hidden `form-name` input, and a `bot-field` honeypot. On success it redirects to `/thank-you`.
- The Candidates form uses `multipart/form-data` so CV uploads are captured.

To receive submissions by email:
1. Deploy to Netlify and open the site's **Forms** tab (submissions are stored here automatically).
2. Go to **Forms → [form] → Settings & notifications → Add notification → Email notification**.
3. Send to `hello@joistrecruitment.co.uk`. Repeat for each of the three forms.

> Note: Netlify Forms requires Netlify hosting. If this site is ever moved to plain static hosting (e.g. IONOS via FTP), the forms will not work and would need a different provider.

### Calendly Integration
To add your Calendly link:
1. Go to `client/src/pages/Employers.tsx` and `client/src/pages/Contact.tsx`.
2. Find the `<a href="https://calendly.com/placeholder">` and replace it with your actual Calendly booking URL.

### Image Replacements
Placeholder images are located in `client/src/assets/`. You can replace `hero-bg.png` and `about-img.png` with your own photography. Or, update the `src` paths in the components to point to external image URLs.
