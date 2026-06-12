# For Hackathon Runners

> Start here if you want to run a hackathon like the Loomi Connect AI Hackathon 2026.

This section is a complete operational playbook. Everything is documented in the order it happened — what was built, what decisions were made, what worked, and what was discarded.

## Reading Order

1. [Concept and Planning](01-concept-and-planning.md) — Why we did it, what format we chose
2. [Timeline and Checklist](02-timeline-and-checklist.md) — Week-by-week from idea to closing ceremony
3. [LUMA and Registration](03-luma-and-registration.md) — How registration was handled via LUMA
4. [Netlify Onboarding App](04-netlify-onboarding-app.md) — The hackathon.loomi.ai welcome kit
5. [Slack Workspace](05-slack-workspace.md) — Participant communication setup
6. [Judging App](06-judging-app.md) — The custom-built scoring web app
7. [Leaderboard](07-leaderboard.md) — Live Google Sheets leaderboard
8. [Tracks and Criteria](08-tracks-and-criteria.md) — How we structured challenges and scoring
9. [Closing Ceremony](09-closing-ceremony.md) — How Demo Day and awards worked

## Key Principle

Everything was connected to one Google Sheet. Registration data, judge assignments, scores, and leaderboard all flowed through a single spreadsheet. This was the operational backbone.

## What Was Discarded (Learn From This)

- A 4-page Google Forms registration was built but discarded — too complex, poor UX. The Netlify app was far better.
- A Google Forms judging form was built first — replaced by a full web app because Forms couldn't handle judge-specific team assignment.
