# Code — Source Files

All apps built to run the Loomi Connect AI Hackathon 2026.

---

## Active (Used in Production)

### Judging Web App
| File | Description |
|---|---|
| `judging-app-Code.gs` | Server-side Google Apps Script — reads judge assignments, validates teams, writes scores to sheet |
| `judging-app-Index.html` | Client-side HTML/CSS/JS — judge login (GSI), team tabs, scoring UI, submission |

**Live URL:** https://script.google.com/a/macros/bloomreach.com/s/AKfycbzzGeLGnS-hp_yJvBAJME0csYM-ejUSUGc-wDriHTVyrJU3kH_-WqY4VHWcXO8S_LDJ/exec

**Deploy steps:**
1. Go to script.google.com — create new project
2. Rename default file to `Code.gs` — paste `judging-app-Code.gs` content
3. Add new HTML file named `Index` — paste `judging-app-Index.html` content
4. Deploy → New Deployment → Web App
   - Execute as: Me
   - Who has access: Anyone with a Google account
5. Replace the OAuth Client ID placeholder in Index.html with your real Google Cloud Console Client ID

**Sheet ID:** `1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA`

---

### Leaderboard
| File | Description |
|---|---|
| `leaderboard.gs` | Google Apps Script — calculates averages from Judge Scores tab, writes ranked Leaderboard tab, auto-refreshes every 5 min |

**Sheet:** https://docs.google.com/spreadsheets/d/1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA

**Setup:**
1. Paste into an Apps Script project linked to the submission sheet
2. Run `createLeaderboard()` once to create and format the tab
3. Run `setupAutoRefresh()` once to set the 5-minute trigger

---

## Discarded (Built but Not Used)

| File | Why Discarded |
|---|---|
| `submission-form-DISCARDED.gs` | 4-page Google Forms registration — replaced by hackathon.loomi.ai Netlify app due to poor UX |
| `judging-form-DISCARDED.gs` | Google Forms judging form — replaced by the custom web app which supports judge-specific team assignment |

These are kept for reference. Do not deploy them.
