# Netlify Onboarding App — hackathon.loomi.ai

## What It Was

**hackathon.loomi.ai** was the custom Netlify application built as the primary onboarding and registration platform for the hackathon. It replaced an earlier Google Forms attempt and was the actual system used.

## What It Did

1. **Welcome Kit** — Participants landed on the app and received full hackathon context: brief, tracks, rules, resources, and sandbox access instructions
2. **Team Registration** — Participants filled in team details: team name, member info, challenge track, project idea, responsible AI acknowledgement
3. **Slack Onboarding** — After completing registration, participants were onboarded into the hackathon Slack workspace
4. **Data Storage** — All registrations stored in the Netlify app backend

## Registration Data API

All registration data accessible via:
```
GET https://hackathon.loomi.ai/.netlify/functions/list-registrations?token=loomi2026
```

Returns JSON with schema: `{ count: number, registrations: array }`

Each registration includes: team-name, participation type, challenge-track, idea-title, target-user, problem-statement, proposed-solution, member details (name, email, job title, org), consent, submission timestamp.

## Total Registrations

- **113 total entries** (including test submissions)
- **102 unique real teams** after filtering test entries
- **29 countries** represented

## What Was Discarded Before This

A 4-page Google Forms registration was built first with:
- Page 1: Team details
- Page 2: Project summary
- Page 3: File uploads
- Page 4: Responsible AI acknowledgement

This was discarded due to poor UX design. The Netlify app was a significantly better participant experience.

## Key Lesson

Build a dedicated web app for participant-facing flows. Native form tools (Google Forms) create friction and limit the experience. The Netlify app allowed a proper welcome kit experience that set the tone for the hackathon.
