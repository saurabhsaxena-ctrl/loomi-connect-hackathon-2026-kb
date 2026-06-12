# Timeline and Checklist

## Hackathon Phases

### Phase 1 — Concept and Setup
- Define goals: external validation, product intelligence, community building
- Choose format: external, async, theme-based with 6 tracks
- Set up LUMA event page for registration
- Build hackathon.loomi.ai Netlify app (welcome kit + team registration)
- Set up dedicated Slack workspace with all channels

### Phase 2 — Registration Open
- LUMA page live — participants register
- Netlify app onboards participants into Slack
- Registration API live at hackathon.loomi.ai/.netlify/functions/list-registrations
- Sandbox environments provisioned (Bloomreach, PayPal, Shopify) on request

### Phase 3 — Build Phase
- Teams building AI agents using Loomi Connect MCP
- Slack active for support, questions, sponsor resources
- Judging app deployed and tested with internal judges first
- Judge assignments added to submission sheet (Judge 1-4 columns)

### Phase 4 — Submission Window
- Final submission form open
- Teams submit: demo video, GitHub, architecture diagram, deck, project summary
- Submissions feed into Google Sheet

### Phase 5 — Judging
- Judging web app shared with all 25+ judges
- Judges score assigned teams (4 judges per team, 5 criteria)
- Leaderboard auto-refreshes every 5 minutes
- Follow up with judges who haven't completed (track via judge × team matrix)

### Phase 6 — Closing Ceremony
- Top 3 teams receive personalised Slack DMs
- LUMA closing ceremony event created
- Invites sent to combined LUMA + Slack member list (~83 participants)
- Board-ready slide deck prepared
- Awards announced live

---

## Master Checklist

### Infrastructure
- [ ] LUMA event page created and live
- [ ] hackathon.loomi.ai Netlify app deployed
- [ ] Slack workspace created with all channels
- [ ] Google Sheet set up with correct column structure
- [ ] Judge Scores tab created in sheet
- [ ] Judging web app deployed (Code.gs + Index.html)
- [ ] GSI OAuth Client ID configured for external judges
- [ ] Leaderboard script deployed with auto-refresh trigger
- [ ] Sandbox environments provisioned

### Operations
- [ ] Registration API tested
- [ ] Judging app tested with real judge login
- [ ] External judge access tested (non-Bloomreach email)
- [ ] Leaderboard calculating correctly
- [ ] Judge assignments added to sheet before judging opens

### Closing
- [ ] Final leaderboard locked
- [ ] Top team DMs sent
- [ ] LUMA closing ceremony created
- [ ] Combined LUMA + Slack invite list prepared
- [ ] Slide deck ready
