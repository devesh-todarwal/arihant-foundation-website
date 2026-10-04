# Arihant Foundation — Website

The official website of **Arihant Foundation**, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra —
an independent grassroots social-impact organisation founded in August 2022 by **Adv. Sangeeta Hiralal
Desarda**, working with women, children, young people and communities through education, climate action,
community resilience, legal empowerment and youth leadership.

*“Empowering the voices of tomorrow.”*

## Viewing the site

- **Locally:** double-click `index.html` — it opens in any browser. No installation, no build step.
- **Online:** fully static; hosts free on GitHub Pages or Netlify (HTTPS included).

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage: hero → belief → areas of work → principles → purpose → how we work → flagship Seed Bank → women & climate resilience → field stories → impact + methodology → gallery (filterable) → who we are → story → leadership → get involved → trust & accountability → pathways → contact |
| `women-girls.html` `children-education.html` `climate-environment.html` `community-resilience.html` `legal-empowerment.html` `youth-leadership.html` | Programme detail pages (Why it matters → What we do → Where we work → Field stories → Impact → How to support) |
| `impact-stories.html` | The People Behind the Numbers — documented Challenge → Response → Change → Next stories |
| `founder.html` | Founder & President profile |
| `research.html` | Research, Knowledge & Policy (+ publications, with Foundation/Founder attribution rule) |
| `international.html` | International Engagement (precise-terminology rule applies) |
| `donate.html` | Support Our Work (bank/UPI details **pending verification**) |
| `membership.html`, `partner.html` | Forms that open a pre-addressed email (honeypot + consent note included) |
| `reports.html`, `governance.html`, `safeguarding.html` | Trust layer (placeholders marked until documents are verified) |
| `privacy.html`, `terms.html` | Privacy Policy and Terms of Use |

## Shared assets

`assets/style.css` (design system) · `assets/site.js` (nav, search, filters, lightbox, forms) ·
`assets/search-index.js` (site search entries — **add new pages here**) · `assets/images/`

**Cache versioning:** stylesheet/script links carry `?v=N` (currently `v=7`). When you change CSS/JS,
bump the number in all pages (`sed -i '' 's/v=7/v=8/g' *.html`) so visitors' browsers fetch the new files.

**Mobile:** verified at 375px across all pages — compact header (emblem + search + Donate + menu),
grouped accordion menu, always-visible photo captions on touch devices, single-column cards and
full-width forms. If you add sections, test at phone width before publishing.

## Security (static architecture)

- **HTTPS/SSL** — provided automatically by GitHub Pages/Netlify.
- **Software updates** — no CMS, plugins or database exist; nothing to patch.
- **Form spam** — forms compose an email locally (no server to spam); a honeypot field is present.
- **Authentication** — site changes require GitHub repository access; protect those accounts with 2FA.
- **Backups** — full history lives in git on GitHub.
- **Uploads** — review any PDF/document before committing it to the repo.

## Analytics

None installed (and the Privacy Policy says so). To measure engagement later, use a privacy-respecting,
cookie-free service (e.g. GoatCounter or Plausible): paste its snippet into the marked
`<!-- analytics slot -->` comment in each page's `<head>`, and update `privacy.html` to disclose it.

## Content rules (please keep)

- Never describe the Foundation as a "small foundation".
- Footer/legal wording: "public charitable organisation"; exact legal status belongs in Transparency & Governance once verified.
- Do not add or change impact figures without the Foundation's approval.
- No 80G / 12A / CSR-1 / FCRA / tax-benefit claims until documents are verified.
- No "UN partner"-style claims; affiliations only in their precise official terminology, with documentation.
- Publications: only Foundation-published work is presented as the Foundation's; the Founder's or associated researchers' work is attributed separately.
- Children's photographs require appropriate consent; never publish children's personal details.

Built with love, for Aai's mission. 💛
