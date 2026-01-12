# Portfolio Site (Scaffold)

This repo is a scaffold for a modern, ATS-friendly personal portfolio.

Stack: React + Vite + Tailwind CSS

Quick start

1. Install dependencies:
   npm install
2. Run locally:
   npm run dev

Notes

- Replace placeholders in `src/components/*` with exact GitHub and LinkedIn links and project descriptions.
- Copy your resume PDF to `public/resume.pdf` to enable download from the site.
- To deploy, push to GitHub and connect the repo to Vercel (recommended).

Next steps

- Populate Projects with README summaries and repo links
- Add images/screenshots and real contact info
- Improve SEO, meta tags, and add analytics if desired

Deployment (GitHub Pages)

- This repo includes a GitHub Action (`.github/workflows/deploy-gh-pages.yml`) that builds the site and deploys the `dist/` directory to the `gh-pages` branch.
- The workflow automatically sets the correct base path during build (it uses the repository name).
- To deploy: push to `main` (or `master`) and check the Actions tab; the workflow will create/update the `gh-pages` branch and publish the site.
- If you need a custom domain, add a `CNAME` file to `public/` or configure it in GitHub Pages settings.
