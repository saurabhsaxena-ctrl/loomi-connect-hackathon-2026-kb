# Live Leaderboard — Google Sheets

## What Was Built

A live leaderboard in Google Sheets that auto-calculated team rankings from judge scores and refreshed every 5 minutes.

## Architecture

- **Data source:** Judge Scores tab in the main submission sheet
- **Output:** Leaderboard tab in the same sheet
- **Calculation:** JavaScript (Apps Script) — not spreadsheet formulas
- **Refresh:** Time-based trigger, every 5 minutes

## How Scores Were Calculated

For each team: collect all judge rows from Judge Scores tab → average each criterion across all judges → sum averages for total score → rank teams by total.

Scores shown as averages (e.g., 4.8/5 per criterion) not sums, so teams with 3 judges and 4 judges can be compared fairly.

## Leaderboard Tab Design

- Title row: purple (#6C3FC5), white text
- Last updated timestamp row
- Frozen header row
- Columns: Rank | Team Name | Judges (X/4) | Innovation | Technical | Business Value | MCP Quality | Demo | Avg Score (/25) | Judge Names
- 🥇🥈🥉 medals for top 3
- Bold purple score for top 3 teams
- Alternating row colours

## Setup Steps

1. Paste leaderboard script into a new Apps Script project linked to the submission sheet
2. Run `createLeaderboard()` once — creates and formats the tab
3. Run `setupAutoRefresh()` once — sets the 5-minute trigger
4. Leaderboard updates automatically from that point

## Important Note

Calculation happens entirely in Apps Script. There are no spreadsheet formulas in the Leaderboard tab. All data is written by the script on each refresh.
