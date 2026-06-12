# Judging App — Complete Guide

## What Was Built

A custom **Google Apps Script Web App** for judge scoring. Judges logged in, saw only their assigned teams, scored 5 criteria, and submitted feedback. All scores written to Google Sheets.

## Why Not Google Forms?

Google Forms was initially considered but could not:
- Show judges only their assigned teams
- Prevent double-scoring
- Display team artifacts (video, deck, GitHub) inline
- Handle external judges from outside Bloomreach

## Architecture

- **Backend:** Google Apps Script (Code.gs)
- **Frontend:** HTML/CSS/JS served via HtmlService (Index.html)
- **Auth:** Google Identity Services (GSI) client-side sign-in
- **Data store:** Google Sheets (Sheet ID: 1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA)
- **Deployment:** Web App — Execute as: Me, Anyone with Google account

## Key Technical Decisions

### GSI Auth (Critical)
Standard Apps Script session auth (`Session.getActiveUser()`) does not work for external judges — Bloomreach Google Workspace blocks external OAuth. Solution: client-side Google Sign-In (GSI) captures the judge's email in the browser and passes it to the server as a parameter.

```javascript
function getJudgeData(clientEmail) {
  const email = (clientEmail || Session.getActiveUser().getEmail() || '').toLowerCase().trim();
  // ...
}
```

### Judge Assignment
Judges were assigned via columns Judge 1, Judge 2, Judge 3, Judge 4 in the submission sheet (columns 16-19). The app read these columns and filtered teams per judge email.

### Scoring
5 criteria, 0-5 each. Total out of 25.
- Innovation and Creativity
- Technical Execution
- Business Value and Impact
- MCP Usage Quality
- Demo and Presentation

Plus: Judge Notes (internal, not shared) and Feedback for Team (shared post-event).

## Sheet Structure

**Judge Scores tab columns:**
Judge Email | Judge Name | Submitted At | Team Name | Innovation | Technical | Business Value | MCP Usage | Demo | Total | Judge Notes | Feedback for Team

## Deployment Steps

1. Go to script.google.com — create new project
2. Rename default file to Code.gs — paste server-side code
3. Add new HTML file named Index — paste client-side code
4. Deploy → New Deployment → Web App
   - Execute as: Me
   - Who has access: Anyone with a Google account
5. Share Web App URL with all judges

## Common Issues and Fixes

| Issue | Cause | Fix |
|---|---|---|
| "Script function not found: doGet" | Deployment pointing to old version | Create new deployment version |
| External judge seeing wrong teams | Session.getActiveUser() returns owner email | Use GSI client-side sign-in |
| "No teams assigned" error | Judge email not matching column format | Ensure plain email in Judge columns |

## Files

- Server-side code: hackathon-judging-Code.gs
- Client-side HTML: hackathon-judging-Index.html
