# Loomi Connect AI Hackathon 2026

> Bloomreach opened its AI platform to the world and said: build something remarkable.
> **102 teams from 29 countries did exactly that.**

This is the complete knowledge base for the Loomi Connect AI Hackathon 2026 — Bloomreach's first external AI hackathon where teams built real AI agents on top of **Loomi Connect MCP**, Bloomreach's capability layer that lets any AI agent call Bloomreach's Marketing, Analytics, and Conversations platform.

---

## The Results at a Glance

| | |
|---|---|
| 🌍 Countries | 29 |
| 👥 Teams registered | 102 |
| 🏗️ Final submissions | 25 |
| ⚖️ Judges | 25+ |
| 🔌 MCP tools available | 89 across 3 servers |
| 🤖 Run using | Claude (Claude Code + Agent SDK) |

---

## 🏆 Winners

| Place | Team | Project | Score |
|---|---|---|---|
| 🥇 1st | **LoomiTown** (Investown, Czech Republic) | SilentWatch — diagnoses why your customers went silent, automatically | 23.5 / 25 |
| 🥈 2nd | **Rohlik Team** (Rohlik Group, Czech Republic) | Orbit — your marketing goal to live campaign, no manual work | 22.5 / 25 |
| 🥈 2nd | **Team IbxLab** | Lighthouse — catches churn risk before it becomes lost revenue | 22.5 / 25 |
| 🏅 4th | **Vielendark** | CRM Pathfinder — tells your CRM team exactly what to do next | 22.3 / 25 |

→ [Full leaderboard with all 25 teams](for-outcome-learners/02-final-leaderboard.md)

---

## The Sharpest Insight

> **102 teams had access to 89 MCP tools — and almost all of them built for the marketer, not the shopper.**
>
> The shopper-facing agent opportunity is entirely untapped. Every top team built decision intelligence for CRM and marketing ops. No one built the definitive AI shopping agent on Loomi Connect. That whitespace is still open.

→ [Full insights and market signals](for-outcome-learners/07-insights-and-signals.md)

---

## What Was Built to Run This Hackathon

Everything was custom-built using Claude as the operating system:

| App | What It Did | Technology |
|---|---|---|
| **hackathon.loomi.ai** | Participant welcome kit, team registration, Slack onboarding | Netlify app |
| **LUMA event page** | Public registration and closing ceremony invites | LUMA |
| **Judging web app** | Judge login, team assignment, 5-criteria scoring — [open app](https://script.google.com/a/macros/bloomreach.com/s/AKfycbzzGeLGnS-hp_yJvBAJME0csYM-ejUSUGc-wDriHTVyrJU3kH_-WqY4VHWcXO8S_LDJ/exec) | Google Apps Script + GSI auth |
| **Live leaderboard** | Real-time rankings, auto-refreshed every 5 min — [open sheet](https://docs.google.com/spreadsheets/d/1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA) | Google Sheets + Apps Script |
| **Slack workspace** | Participant communication, support, announcements | Slack |

→ [Full infrastructure guide](for-hackathon-runners/README.md)

---

## Who Are You?

### 🏃 I want to run a hackathon like this
**→ [Start here: Hackathon Runner Playbook](for-hackathon-runners/README.md)**

Everything you need to replicate this: LUMA setup, Netlify onboarding app, Slack workspace, judging system, leaderboard, tracks, criteria, closing ceremony. Including what was built, what was discarded, and why.

### 📊 I want to understand what came out of this hackathon
**→ [Start here: Outcome Learner Guide](for-outcome-learners/README.md)**

All 25 submissions with demo videos, GitHub links, architecture diagrams. Full leaderboard. Top team deep dives. MCP usage patterns. Market signals.

### 🔌 I want to understand Loomi Connect MCP
**→ [Start here: Loomi Connect Primer](loomi-connect-primer/what-is-loomi-connect.md)**

What Loomi Connect is, what it is not, all 89 tools across 3 MCP servers, and how the winning teams used it.

---

## Quick Reference

| I want to know... | Go here |
|---|---|
| Who won and their scores | [Final leaderboard](for-outcome-learners/02-final-leaderboard.md) |
| What the top 4 teams built | [Top 4 deep dives](for-outcome-learners/03-top-4-deep-dives.md) |
| All 25 submissions with links | [All submissions](for-outcome-learners/04-all-submissions.md) |
| Which teams used Conversations MCP | [MCP usage patterns](for-outcome-learners/06-mcp-usage-patterns.md) |
| How to set up the judging app | [Judging app guide](for-hackathon-runners/06-judging-app.md) |
| The full operational checklist | [Timeline and checklist](for-hackathon-runners/02-timeline-and-checklist.md) |
| What Loomi Connect is | [Loomi Connect primer](loomi-connect-primer/what-is-loomi-connect.md) |
| All 89 MCP tools | [MCP tools list](loomi-connect-primer/mcp-tools-full-list.md) |
| Raw data (JSON) | [data/](data/) |

---

## How to Use This as an Intelligent KB

Open this repo as a **Claude project**. Then ask anything — Claude will navigate the KB and answer from the actual data:

```
"Which teams used Conversations MCP?"
"How do I deploy the judging app for external judges?"
"What did LoomiTown build and why did they win?"
"Give me the full hackathon runner checklist"
"What were the sharpest market signals from this hackathon?"
"Which companies sent teams and from which countries?"
```

No digging through files. Just ask.

---

## Full Structure

```
hackathon-2026-kb/
│
├── README.md                              ← You are here
├── ONBOARDING.md                          ← Claude intelligence brain
├── SITEMAP.html                           ← Visual map of this KB
│
├── for-hackathon-runners/                 ← Full operational playbook
│   ├── 01-concept-and-planning.md         ← Goals, format, track decisions
│   ├── 02-timeline-and-checklist.md       ← Week-by-week + master checklist
│   ├── 03-luma-and-registration.md        ← LUMA event setup
│   ├── 04-netlify-onboarding-app.md       ← hackathon.loomi.ai welcome kit
│   ├── 05-slack-workspace.md              ← Slack channel setup
│   ├── 06-judging-app.md                  ← Full judging web app guide
│   ├── 07-leaderboard.md                  ← Google Sheets leaderboard
│   ├── 08-tracks-and-criteria.md          ← 6 tracks, 5 criteria, rubric
│   └── 09-closing-ceremony.md             ← Demo Day playbook
│
├── for-outcome-learners/                  ← Results, submissions, insights
│   ├── 01-hackathon-at-a-glance.md        ← Key stats and highlights
│   ├── 02-final-leaderboard.md            ← All 25 teams ranked
│   ├── 03-top-4-deep-dives.md             ← Winners in detail
│   ├── 04-all-submissions.md              ← Every team with all links
│   ├── 05-submissions-by-track.md         ← Grouped by challenge track
│   ├── 06-mcp-usage-patterns.md           ← How teams used Loomi Connect
│   ├── 07-insights-and-signals.md         ← Market signals and key findings
│   └── 08-participant-landscape.md        ← Who showed up and from where
│
├── loomi-connect-primer/                  ← What is Loomi Connect
│   ├── what-is-loomi-connect.md           ← Simple explanation + context
│   ├── mcp-tools-full-list.md             ← All 89 tools across 3 servers
│   └── architecture-overview.md           ← How it works technically
│
├── code/                                  ← All source code
│   ├── judging-app-Code.gs                ← Judging web app — server side
│   ├── judging-app-Index.html             ← Judging web app — client side UI
│   ├── leaderboard.gs                     ← Live leaderboard script
│   ├── submission-form-DISCARDED.gs       ← Google Forms attempt (discarded)
│   └── judging-form-DISCARDED.gs          ← Google Forms judging (discarded)
│
└── data/                                  ← Raw structured data
    ├── registrations.json                 ← All 102 registrations (live API)
    ├── submissions.json                   ← 25 final submissions + all URLs
    ├── leaderboard.json                   ← Final scores all 25 teams
    └── mcp-tools.json                     ← All 89 MCP tools structured
```

---

*Built by Saurabh Saxena, PMM at Bloomreach · June 2026*
*Hackathon run entirely using Claude Code + Claude Agent SDK*
