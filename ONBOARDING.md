# Hackathon 2026 — Claude Context Brain

> This file is the intelligence layer for the Hackathon 2026 Knowledge Base. When loaded into a Claude project, it enables Claude to answer any question about this hackathon accurately and completely.

---

## What Was This Hackathon?

The **Loomi Connect AI Hackathon 2026** was Bloomreach's first external AI hackathon. Teams worldwide built AI agents using **Loomi Connect** — Bloomreach's MCP-based capability layer that lets any AI agent call Bloomreach's core platform (Marketing, Analytics, Conversations).

**Theme:** Build a working AI agent using Loomi Connect MCP that solves a real business problem.

---

## Key Facts (Answer From These)

| Fact | Value |
|---|---|
| Total registrations | 102 teams |
| Countries represented | 29 |
| Final submissions | 25 teams |
| Judges | 25+ |
| MCP tools available | 89 across 3 servers |
| Challenge tracks | 6 |
| Winner | LoomiTown (SilentWatch) — 23.5/25 |
| 2nd place (tied) | Rohlik Team (Orbit) and Team IbxLab (Lighthouse) — 22.5/25 |
| 4th place | Vielendark (CRM Pathfinder) — 22.3/25 |
| Hackathon run using | Claude (Claude Code + Claude Agent SDK) |

---

## How the Hackathon Was Actually Run (Operational Truth)

### Step 1 — Registration via LUMA
Initial registration happened on LUMA (lu.ma). Participants signed up for the hackathon event on the LUMA page.

### Step 2 — Onboarding via Netlify App (hackathon.loomi.ai)
From LUMA, participants were directed to **hackathon.loomi.ai** — a custom Netlify app built for the hackathon. This app contained:
- Welcome kit with hackathon brief, tracks, rules, and resources
- Team registration form (team name, members, idea, track selection)
- Slack onboarding (participants were added to the hackathon Slack workspace)

The Netlify app is also the data store — all registrations accessible at:
`https://hackathon.loomi.ai/.netlify/functions/list-registrations?token=loomi2026`

Note: A 4-page Google Forms registration was built but discarded due to poor design. The Netlify app was the actual registration system used.

### Step 3 — Slack Workspace
A dedicated Slack workspace was set up for participants with structured channels for announcements, tracks, support, and sponsor resources. Participants joined via the Netlify app onboarding flow.

### Step 4 — Build Phase
Teams built AI agents using Loomi Connect MCP over the hackathon window. Bloomreach provided sandbox environments, PayPal sandbox accounts, and Shopify storefronts on request.

### Step 5 — Final Submissions
Teams submitted final projects through a form feeding into Google Sheets (Sheet ID: 1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA). Each submission included: demo video, architecture diagram, GitHub repo, presentation deck, project summary.

### Step 6 — Judging System
A custom Google Apps Script Web App was built for judging. Key details:
- Deployed as "Execute as: Me, Anyone with Google account"
- Used Google Identity Services (GSI) client-side sign-in for external judges (required because Bloomreach Google Workspace blocks external OAuth)
- Judges saw only their assigned teams (from Judge 1-4 columns in the sheet)
- 5 criteria scored 0-5: Innovation, Technical Execution, Business Value, MCP Usage Quality, Demo
- Scores written to "Judge Scores" tab
- 25+ judges across 25 teams (4 judges per team target)

### Step 7 — Live Leaderboard
Google Sheets leaderboard auto-calculated averages from Judge Scores tab. Auto-refreshed every 5 minutes via Apps Script time trigger. Showed medals for top 3, colour-coded rows.

### Step 8 — Closing Ceremony
Run via LUMA. Top teams received personalised Slack DMs with ceremony details. Board-ready slide deck prepared with hackathon stats and winner announcements.

---

## The 6 Challenge Tracks

1. **Track 1** — Commerce and Merchandising Agents
2. **Track 2** — Campaign and Personalisation Agents
3. **Track 3** — Analytics Agents and Decision Intelligence
4. **Track 4** — Customer Lifecycle and Retention Agents
5. **Track 5** — Autonomous Campaign and Content Agents
6. **Track 6** — Cross-MCP Orchestration (Advanced)

---

## Judging Criteria (0-5 each, total out of 25)

| Criterion | What it measures |
|---|---|
| Innovation and Creativity | Originality, unexpected use of Loomi Connect |
| Technical Execution | Does it work? Is integration stable? |
| Business Value and Impact | Real problem, measurable outcomes |
| MCP Usage Quality | Depth and thoughtfulness of MCP usage |
| Demo and Presentation | Clarity, polish, compelling story |

---

## Top 4 Teams

### 1. LoomiTown — SilentWatch (23.5/25)
Company: Investown Technologies, Czech Republic
Track: Track 6 — Cross-MCP Orchestration
One-liner: Diagnoses why your customers went silent, automatically.
GitHub: https://github.com/investown/loomitown-hackathon-submission
Demo: https://drive.google.com/open?id=1p_yZDpbOHKY02pNgy6O9M_ay3tDbm9_r

### 2. Rohlik Team — Orbit (22.5/25)
Company: Rohlik Group, Czech Republic
Track: Track 6 — Cross-MCP Orchestration
One-liner: Your marketing goal to live campaign, no manual work.
GitHub: https://github.com/Skilux/orbit-agent
Demo: https://drive.google.com/open?id=1YpWwVVbehxIJVZFEkdSSKdL2Pol11wtq

### 2. Team IbxLab — Lighthouse (22.5/25)
Company: IbxLab
Track: Track 6 — Cross-MCP Orchestration
One-liner: Catches churn risk before it becomes lost revenue.
GitHub: https://github.com/aliveevie/lighthouse
Demo: https://drive.google.com/open?id=1JDSVfCRLsokxutCkDyM-ljKntEYnPDWD

### 4. Vielendark — CRM Pathfinder (22.3/25)
Company: Vielendark
Track: Track 6 — Cross-MCP Orchestration
One-liner: Tells your CRM team exactly what to do next.
Live Demo: https://crm-pathfinder-vue.vercel.app/workspace
Demo Video: https://drive.google.com/open?id=1ZgKvPj5PZfuIiSsEkJPwYzeMLjhMfUmq

---

## Loomi Connect MCP Summary

### Marketing MCP (~57 tools)
Automation scenarios, customer profiles, email/SMS campaigns, web/mobile campaigns, initiatives, product catalogs, vouchers, project schema, project settings, workspace basics.

### Analytics MCP (~28 tools)
Customer filters and segments, analytics building blocks, ad-hoc EQL queries, dashboards, predictive scores, saved analyses (funnels, trends, reports).

### Conversations MCP (4 tools)
search_products, search_productCollections, get_product, seeker_products

---

## Routing Guide for Common Questions

| Question type | Where to look |
|---|---|
| How to run a hackathon | for-hackathon-runners/ |
| What teams built | for-outcome-learners/04-all-submissions.md |
| Who won | for-outcome-learners/02-final-leaderboard.md |
| Top team details | for-outcome-learners/03-top-4-deep-dives.md |
| Judging app setup | for-hackathon-runners/06-judging-app.md |
| MCP tool list | loomi-connect-primer/mcp-tools-full-list.md |
| Raw data | data/ |

---

*Last updated: June 2026. Maintained by Saurabh Saxena, Bloomreach.*
