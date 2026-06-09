# Corn Revolution — Pioneer Replica

A faithful replica of the award-winning **Pioneer Corn Revolutionized** website by Resn (Awwwards Site of the Year 2020).

## Features

- **3D Particle Field** — DNA helix-inspired particle system with Three.js
- **Scroll-triggered Animations** — Smooth scroll-driven reveals using Framer Motion
- **Parallax Effects** — Multi-layer depth on images and text
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Dark Luxury Aesthetic** — Gold, green, and cream color palette with grain overlay

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Three.js + React Three Fiber
- Framer Motion

---

## Deploy to GitHub Pages (Branch Support)

### Supported Branches

The workflow auto-deploys when you push to any of these branches:
- `main`
- `deploy`
- `gh-pages`
- `production`

### Option 1: Auto-Deploy from Branch

```bash
# Create and push a deploy branch
git checkout -b deploy
git push -u origin deploy

# Or push to main
git push origin main
```

### Option 2: Manual Deploy (Any Branch)

1. Go to **Actions** tab in your repo
2. Click **"Deploy to GitHub Pages"**
3. Click **"Run workflow"**
4. Select your branch from dropdown
5. Click **"Run workflow"**

### Option 3: Deploy from Custom Branch

```bash
# Create any branch
git checkout -b my-feature-branch
git push -u origin my-feature-branch

# Add branch to workflow (edit .github/workflows/deploy.yml)
branches:
  - main
  - deploy
  - my-feature-branch   # ← add your branch

git add .github/workflows/deploy.yml
git commit -m "Add branch to deploy workflow"
git push
```

---

### First-Time Setup

```bash
cd corn-revolution
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/corn-revolution.git
git push -u origin main
```

Then go to **Settings → Pages → Source: GitHub Actions**

---

### Change Repo Name?

If your repo name is NOT `corn-revolution`, update `basePath` in `next.config.js`:

```js
basePath: '/your-repo-name',
```

Then push again.

---

## Deploy to Vercel (Alternative)

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo
3. Framework preset: **Next.js**
4. Override Build Command: `next build`
5. Override Output Directory: `dist`
6. Deploy!

---

## Run Locally

```bash
cd corn-revolution
npm install
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
corn-revolution/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions auto-deploy (multi-branch)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts
│   │   ├── page.tsx        # Main page composition
│   │   └── globals.css     # Global styles + Tailwind
│   └── components/
│       ├── Navigation.tsx      # Fixed nav with mobile menu
│       ├── HeroSection.tsx     # Hero with 3D particles
│       ├── ScienceSection.tsx  # DNA/genetics section
│       ├── BreedingSection.tsx # 4-step process
│       ├── TestingSection.tsx  # Field testing
│       ├── HarvestSection.tsx  # Final results
│       ├── Footer.tsx          # Site footer
│       ├── ParticleField.tsx   # Three.js WebGL particles
│       └── GrainOverlay.tsx    # Film grain effect
└── public/images/          # Corn imagery
```

## Credits

Original design by [Resn](https://resn.co.nz) for Pioneer/Corteva Agriscience.
This is a fan-made educational replica.
