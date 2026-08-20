# Portfolio Hub

A single static site (no build step, no framework, no dependencies) — the "hub" site for a 
resume portfolio: qualifications, experience, skills, a tabbed projects section, a video
tutorials section, and contact info, all in one page.

```
portfolio-hub/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── profile_photo.jpg
│   └── resume.pdf
└── README.md


## Deploy to Vercel

**Option A — GitHub (recommended, gives you auto-deploy on every push):**
1. Create a new GitHub repo and push this folder to it.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave every build setting on its default (Framework Preset: "Other", no build command, no
   output directory needed) — Vercel serves the folder as-is.
4. Click **Deploy**. You'll have a `*.vercel.app` URL in under a minute.

## Add your custom domain

Project Settings → Domains → add your domain (e.g. `yourname.com` or
`yourname.dev`). Vercel gives you the DNS records to add at your registrar; it's usually
live within a few minutes once DNS propagates.

## Linking your project demos 

Each interactive project is its own separate Vercel project
with its own deploy. The cleanest way to tie them to this hub is a subdomain of the same custom
domain:

1. Deploy the project to get a `*.vercel.app` URL.
2. In that project's Vercel settings → Domains, add `ai-sdlc-coach.yourname.com` (swap in
   your actual domain and a slug per project).
3. Back in `index.html` here, replace the placeholder project links (search for `UPDATE_ME`) with
   the real subdomain URL and the project's GitHub repo URL.

This keeps every project independently deployable and updatable without touching this hub site,
while still feeling like one cohesive portfolio to a visitor.

## Things to fill in before sharing this

- **`UPDATE_ME` links** in the Projects section (`index.html`, search for `UPDATE_ME`) the projects need their live demo URL and GitHub repo URL once you've deployed it.
- **Video Tutorials section** — currently three placeholder cards. To add a real video, replace
  a `.video-card` block in `index.html` with an embed, e.g. for YouTube:
  ```html
  <div class="video-card">
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="..." allowfullscreen></iframe>
    </div>
    <h4>Your video title</h4>
  </div>
  ```
  and add this to `styles.css` for a responsive 16:9 frame:
  ```css
  .video-embed { position: relative; padding-top: 56.25%; }
  .video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 8px; }
  ```

## Notes

- The "Download Resume" buttons link straight to the PDF in `assets/` — regenerate that PDF any
  time your resume changes (e.g. export a new one from Word/Google Docs as PDF, same filename).
- The whole page is one HTML file with anchor-linked sections plus a small tab widget for
  Projects (see `script.js`) — no routing library needed for a page this size.
