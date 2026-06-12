// ══════════════════════════════════════════════════════════════════════════════
//  LOOMI CONNECT AI HACKATHON — Leaderboard Builder
//  Run createLeaderboard() once to set up the tab.
//  Run refreshLeaderboard() anytime to update rankings as scores come in.
//  Or set a time-based trigger to auto-refresh every 5 minutes.
// ══════════════════════════════════════════════════════════════════════════════

const SCORES_SHEET_ID  = '1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA';
const SCORES_TAB_NAME  = 'Judge Scores';
const LEADER_TAB_NAME  = 'Leaderboard';

// Score columns in Judge Scores tab (1-based)
const S_JUDGE_EMAIL  = 1;
const S_JUDGE_NAME   = 2;
const S_TEAM_NAME    = 4;
const S_INNOVATION   = 5;
const S_TECHNICAL    = 6;
const S_BUSINESS     = 7;
const S_MCP          = 8;
const S_DEMO         = 9;
const S_TOTAL        = 10;

function createLeaderboard() {
  const ss  = SpreadsheetApp.openById(SCORES_SHEET_ID);
  let   tab = ss.getSheetByName(LEADER_TAB_NAME);
  if (tab) ss.deleteSheet(tab);
  tab = ss.insertSheet(LEADER_TAB_NAME);

  // Move leaderboard to be the 2nd sheet
  ss.setActiveSheet(tab);
  ss.moveActiveSheet(2);

  refreshLeaderboard();
  Logger.log('Leaderboard created!');
}

function refreshLeaderboard() {
  const ss        = SpreadsheetApp.openById(SCORES_SHEET_ID);
  const scoresTab = ss.getSheetByName(SCORES_TAB_NAME);
  const lbTab     = ss.getSheetByName(LEADER_TAB_NAME);

  if (!scoresTab) { Logger.log('No Judge Scores tab found yet.'); return; }
  if (!lbTab)     { createLeaderboard(); return; }

  const scoreData = scoresTab.getDataRange().getValues();
  if (scoreData.length < 2) { Logger.log('No scores yet.'); return; }

  // ── Aggregate scores by team ──────────────────────────────────────────────
  const teams = {};

  for (let i = 1; i < scoreData.length; i++) {
    const row      = scoreData[i];
    const team     = row[S_TEAM_NAME - 1].toString().trim();
    const judge    = row[S_JUDGE_NAME - 1].toString().trim();
    const inno     = Number(row[S_INNOVATION - 1]);
    const tech     = Number(row[S_TECHNICAL - 1]);
    const biz      = Number(row[S_BUSINESS - 1]);
    const mcp      = Number(row[S_MCP - 1]);
    const demo     = Number(row[S_DEMO - 1]);
    const total    = Number(row[S_TOTAL - 1]);

    if (!team) continue;

    if (!teams[team]) {
      teams[team] = {
        name: team, judges: [], inno: 0, tech: 0, biz: 0, mcp: 0, demo: 0, total: 0, count: 0
      };
    }

    teams[team].judges.push(judge);
    teams[team].inno  += inno;
    teams[team].tech  += tech;
    teams[team].biz   += biz;
    teams[team].mcp   += mcp;
    teams[team].demo  += demo;
    teams[team].total += total;
    teams[team].count += 1;
  }

  // ── Calculate averages and sort ───────────────────────────────────────────
  const rows = Object.values(teams).map(t => ({
    name:    t.name,
    judges:  t.count,
    inno:    (t.inno  / t.count).toFixed(1),
    tech:    (t.tech  / t.count).toFixed(1),
    biz:     (t.biz   / t.count).toFixed(1),
    mcp:     (t.mcp   / t.count).toFixed(1),
    demo:    (t.demo  / t.count).toFixed(1),
    avg:     (t.total / t.count).toFixed(1),
    judgeList: t.judges.join(', ')
  }));

  rows.sort((a, b) => parseFloat(b.avg) - parseFloat(a.avg));

  // ── Write leaderboard ─────────────────────────────────────────────────────
  lbTab.clearContents();
  lbTab.clearFormats();

  // Title
  lbTab.getRange(1, 1, 1, 10).merge()
    .setValue('🏆 Loomi Connect AI Hackathon — Live Leaderboard')
    .setFontWeight('bold')
    .setFontSize(14)
    .setFontColor('#ffffff')
    .setBackground('#6C3FC5')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setRowHeight ? null : null;
  lbTab.setRowHeight(1, 40);

  // Last updated
  lbTab.getRange(2, 1, 1, 10).merge()
    .setValue('Last updated: ' + new Date().toLocaleString())
    .setFontSize(9)
    .setFontColor('#94a3b8')
    .setBackground('#0f172a')
    .setFontColor('#ffffff')
    .setHorizontalAlignment('center');

  // Headers
  const headers = ['Rank', 'Team Name', 'Judges', 'Innovation', 'Technical', 'Business Value', 'MCP Quality', 'Demo', 'Avg Score (/25)', 'Judges'];
  lbTab.getRange(3, 1, 1, 10)
    .setValues([headers])
    .setFontWeight('bold')
    .setFontSize(10)
    .setBackground('#1e293b')
    .setFontColor('#ffffff')
    .setHorizontalAlignment('center');

  lbTab.setFrozenRows(3);

  // Data rows
  rows.forEach((r, i) => {
    const rowNum = i + 4;
    const rank   = i + 1;
    const medal  = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
    const bg     = i % 2 === 0 ? '#f8fafc' : '#ffffff';

    lbTab.getRange(rowNum, 1, 1, 10).setValues([[
      medal,
      r.name,
      r.judges + ' / 4',
      r.inno,
      r.tech,
      r.biz,
      r.mcp,
      r.demo,
      r.avg,
      r.judgeList
    ]])
    .setBackground(bg)
    .setFontSize(10)
    .setHorizontalAlignment('center');

    // Highlight avg score column
    lbTab.getRange(rowNum, 9)
      .setFontWeight('bold')
      .setFontColor(rank <= 3 ? '#6C3FC5' : '#1e293b');

    // Left-align team name
    lbTab.getRange(rowNum, 2).setHorizontalAlignment('left');
    lbTab.getRange(rowNum, 10).setHorizontalAlignment('left');
  });

  // Column widths
  lbTab.setColumnWidth(1, 55);
  lbTab.setColumnWidth(2, 220);
  lbTab.setColumnWidth(3, 70);
  lbTab.setColumnWidth(4, 90);
  lbTab.setColumnWidth(5, 90);
  lbTab.setColumnWidth(6, 110);
  lbTab.setColumnWidth(7, 100);
  lbTab.setColumnWidth(8, 70);
  lbTab.setColumnWidth(9, 110);
  lbTab.setColumnWidth(10, 250);

  Logger.log('Leaderboard refreshed — ' + rows.length + ' teams ranked.');
}

// ── AUTO-REFRESH TRIGGER ──────────────────────────────────────────────────────
// Run this once to set up auto-refresh every 5 minutes
function setupAutoRefresh() {
  // Delete existing triggers first
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === 'refreshLeaderboard') ScriptApp.deleteTrigger(t);
  });
  // Create new 5-minute trigger
  ScriptApp.newTrigger('refreshLeaderboard')
    .timeBased()
    .everyMinutes(5)
    .create();
  Logger.log('Auto-refresh trigger set — leaderboard updates every 5 minutes.');
}
