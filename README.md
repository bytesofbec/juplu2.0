# Juplu — Modern Web Application (Netlify Edition)

A high-performance, modern web application for **Juplu** (Healthy & Nutrient-Rich Roasted Makhana Snacks), engineered specifically for instant, zero-cost, serverless deployment on **Netlify**.

---

## 🚀 Why This Architecture for Netlify?

The original Juplu project relied on Python / Django CMS / SQLite, which required a persistent backend server (like Render or VPS). By modernizing to a **Jamstack architecture** (Vite + React + Tailwind CSS + Decap CMS), you get:

1. **100% Native Netlify Compatibility**: Deploys on Netlify's global multi-cloud Edge CDN with zero server setup.
2. **Lightning Performance**: Sub-second load times, instant TTFB, and automatic Brotli/Gzip compression.
3. **Native Netlify Forms**: Form submissions work out of the box with `data-netlify="true"`, spam honeypot filters, and automated email forwarding to `juplu.business@gmail.com` without needing an SMTP mail server.
4. **Decap CMS (formerly Netlify CMS)**: Visual in-browser content management at `/admin/` that commits directly to your Git repository and triggers automatic Netlify rebuilds.
5. **Zero Maintenance & 100% Free Tier**: No database maintenance, no server sleeping or cold starts, free SSL certificates, and unlimited bandwidth on Netlify's free tier.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 5 (ultra-fast build and hot module replacement)
- **Styling**: Tailwind CSS with custom Juplu brand palette (`#00AAE7`, `#83D8EE`, `#C9E4CA`)
- **Icons**: Lucide React
- **Routing**: React Router DOM v6 with Netlify SPA redirect rules (`netlify.toml` + `public/_redirects`)
- **Forms**: Netlify Forms with client-side validation & FormSubmit fallback
- **CMS**: Decap CMS (`/admin/`) with Netlify Identity
- **Deployment Config**: `netlify.toml` pre-configured with headers, redirects, and Node 20 build environment

---

## 📂 Project Structure

```text
juplu/
├── .gitignore
├── index.html                  # Root HTML with Netlify Forms crawler discovery
├── netlify.toml                # Netlify build, redirect, and caching rules
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── _redirects              # Netlify client-side routing fallback (/* /index.html 200)
│   ├── admin/                  # Decap CMS Admin Portal
│   │   ├── config.yml          # CMS schema for Products and Team
│   │   └── index.html          # Netlify Identity & CMS app loader
│   ├── img/                    # High-res product images, banners, team photos, facts
│   └── media/                  # Media library
└── src/
    ├── App.tsx                 # Root router with Navbar, Footer, and Floating WhatsApp
    ├── main.tsx
    ├── index.css               # Tailwind & custom brand styles
    ├── types/
    │   └── index.ts            # TypeScript interfaces (Product, TeamMember, etc.)
    ├── data/
    │   └── content.ts          # Content catalog (Mirch Masala, Salt & Pepper, team, facts)
    ├── components/
    │   ├── Navbar.tsx          # Responsive navigation bar with mobile drawer
    │   ├── Footer.tsx          # Footer with social links, WhatsApp, quick links
    │   ├── HeroCarousel.tsx    # Banner slider with high-res original imagery
    │   ├── ProductCard.tsx     # Card with quick accordion and modal trigger
    │   ├── ProductModal.tsx    # Full nutrient, health benefits & inquiry popup
    │   ├── FactsSection.tsx    # "We Always Choose Best For You" 4-point fact badges
    │   ├── SecondaryBanner.tsx # Study Buddy / Work Buddy secondary slider
    │   ├── GifSection.tsx      # "Say NO to junk" animation
    │   ├── VideoSection.tsx    # Embedded YouTube brand video
    │   └── ContactForm.tsx     # Netlify Form with AJAX submission and success states
    └── pages/
        ├── HomePage.tsx        # Complete landing page experience
        ├── AboutPage.tsx       # Brand story, history, and 8-person Team Showcase
        ├── ProductsPage.tsx    # Product catalog with filter tabs and wholesale callout
        ├── ContactPage.tsx     # Contact info, WhatsApp, address & inquiry form
        ├── PrivacyPolicyPage.tsx # Complete legal privacy policy
        └── TermsPage.tsx       # Complete legal terms & conditions
```

---

## 🖥️ Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Build for production**:
   ```bash
   npm run build
   ```
   Build artifacts will be emitted to `dist/`.

---

## 🌐 Deploying to Netlify (3 Easy Methods)

### Method 1: Git-Connected Continuous Deployment (Recommended)
1. Push this repository to GitHub or GitLab:
   ```bash
   git add .
   git commit -m "Initial commit of Juplu Netlify build"
   git remote add origin https://github.com/<your-username>/juplu.git
   git push -u origin main
   ```
2. Log into [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"** → Select your Git provider and repository.
4. Netlify will automatically detect `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy juplu"**. Your site will be live in ~30 seconds with global SSL!

### Method 2: Netlify CLI
If you prefer deploying from your terminal:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --build --prod
```

### Method 3: Drag & Drop (Zero Git Required)
1. Run `npm run build` locally.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder from this directory directly into the browser window.
4. Your site is instantly live!

---

## 📬 Form Handling on Netlify

Netlify handles all contact form submissions automatically:
- Form fields: `name`, `email`, `phone`, `subject`, `message`.
- Submissions will appear in your **Netlify Dashboard → Forms → contact**.
- To receive instant email notifications:
  In Netlify Dashboard, navigate to **Site Settings → Forms → Form notifications** and add `juplu.business@gmail.com`.

---

## ✏️ Decap CMS (`/admin/`)

1. In your Netlify Dashboard, go to **Site Settings → Identity** and click **Enable Identity**.
2. Under **Registration Preferences**, choose whether registration is open or invite-only.
3. Under **Services → Git Gateway**, click **Enable Git Gateway**.
4. Visit `https://your-site.netlify.app/admin/` to log in and visually manage your products and team members.
