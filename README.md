# Joist Recruitment Website

A premium, production-ready recruitment agency website built with React, Vite, and Tailwind CSS.

## Features
- Mobile-first, responsive design
- Dark premium UI (Charcoal & Burnt Orange)
- Forms integrated with Formspree (placeholder)
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
- To update the email (`hello@joistrecruitment.co.uk`) and phone number (`+44 7563 581741`), search for them in the components (mostly in `Footer.tsx`, `Navbar.tsx`, and `Contact.tsx`).

### Formspree Endpoint
The forms currently use a placeholder endpoint. To receive emails:
1. Create an account at [Formspree.io](https://formspree.io/).
2. Create a new form to get your endpoint URL (e.g., `https://formspree.io/f/your_id_here`).
3. Replace the placeholder URL in `client/src/pages/Contact.tsx`, `client/src/pages/Employers.tsx`, and `client/src/pages/Candidates.tsx` with your real Formspree URL.

### Calendly Integration
To add your Calendly link:
1. Go to `client/src/pages/Employers.tsx` and `client/src/pages/Contact.tsx`.
2. Find the `<a href="https://calendly.com/placeholder">` and replace it with your actual Calendly booking URL.

### Image Replacements
Placeholder images are located in `client/src/assets/`. You can replace `hero-bg.png` and `about-img.png` with your own photography. Or, update the `src` paths in the components to point to external image URLs.
