# Arihant Foundation — Website

The official website of **Arihant Foundation**, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra —
a non-profit founded in August 2022 by **Adv. Sangeeta Hiralal Desarda**, dedicated to educating and
empowering young women and children and nurturing a truly sustainable and egalitarian world.

*“Empowering the voices of tomorrow.”*

## Viewing the site

- **Locally:** just double-click `index.html` — it opens in any browser. No installation, no build step.
- **Online:** the site is a single static page and can be hosted free on GitHub Pages or Netlify.

## What's inside

| Path | What it is |
|---|---|
| `index.html` | The entire website — content, design and behaviour in one file |
| `assets/images/` | Logo (`logo-mark.png`, `logo-full.png`) and leadership portraits (`leader-*.jpg`) |
| `assets/images/arihant-photos/` | Photo library pulled from the foundation's Facebook page |
| `QUESTIONNAIRE.md` | The content questionnaire used to build the site's story |
| `VOLUNTEER-FORM-SETUP.md` | How the volunteer application form (Google Form → Sheet) is set up |

## Making common changes

Everything lives in `index.html` — open it in any text editor:

- **Text** — search for the sentence you want to change and edit it in place.
- **Photos** — gallery images are `<figure>` blocks in the *Gallery* section; swap the `src`
  to any file in `assets/images/arihant-photos/` (add new photos to that folder).
- **Volunteer form** — the link lives in one place: the `GOOGLE_FORM_URL` variable in the
  `<script>` block at the bottom.
- **Contact details / address** — in the *Find Us* section.

Volunteer and candidate applications arrive via the Google Form and are saved automatically
to its linked Google Sheet (with email alerts on each submission).

## The story of the site

Structure: mission → belief → the work (six commitments) → three field stories
(**water → seeds → education**) → the founder's story → leadership → impact → gallery →
join us → find us.

Built with love, for Aai's mission. 💛
