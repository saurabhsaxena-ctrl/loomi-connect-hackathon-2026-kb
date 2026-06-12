// ══════════════════════════════════════════════════════════════════════════════
//  LOOMI CONNECT AI HACKATHON — Judge Scoring Web App
//  Google Apps Script Web App
//
//  SETUP:
//  1. Paste this into script.google.com (new project)
//  2. Add a new HTML file named "Index" and paste hackathon-judging-Index.html
//  3. Deploy → New Deployment → Web App
//     - Execute as: Me
//     - Who has access: Anyone with a Google account
//  4. Share the Web App URL with all judges
//
//  NO CONFIG NEEDED — judge emails are extracted automatically from the
//  Judge 1 / Judge 2 / Judge 3 columns in the submission sheet.
//  Supports "Name <email>" format (Google Contacts) or plain email.
// ══════════════════════════════════════════════════════════════════════════════

const SHEET_ID     = '1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA';
const SCORES_TAB   = 'Judge Scores';

// ── EMAIL EXTRACTION ──────────────────────────────────────────────────────────
// Handles plain email only — just put the email address in Judge columns.

// Column indices in the submission sheet (1-based)
const COL_TEAM_NAME = 3;
const COL_TRACK     = 6;
const COL_PROJECT   = 7;
const COL_SUMMARY   = 8;
const COL_MCP       = 9;
const COL_GITHUB    = 10;
const COL_VIDEO     = 11;
const COL_DIAGRAM   = 12;
const COL_DECK      = 13;
const COL_RESP_NOTE = 14;
const COL_JUDGE1    = 16;
const COL_JUDGE2    = 17;
const COL_JUDGE3    = 18;
const COL_JUDGE4    = 19; // add "Judge 4" column in sheet to use this

// ─────────────────────────────────────────────────────────────────────────────
//  Extracts email from:
//  1. "Name <email@domain.com>" format (Google Contacts)
//  2. Plain "email@domain.com"
//  3. Plain name — looked up in NAME_MAP above
// ─────────────────────────────────────────────────────────────────────────────
function extractEmail(val) {
  if (!val) return '';
  return val.toString().trim().toLowerCase();
}

// ─────────────────────────────────────────────────────────────────────────────
//  Serve the web app
// ─────────────────────────────────────────────────────────────────────────────
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Loomi Hackathon — Judge Scoring')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ─────────────────────────────────────────────────────────────────────────────
//  Called by the frontend on load — returns judge info and assigned teams
// ─────────────────────────────────────────────────────────────────────────────
function getJudgeData(clientEmail) {
  // Use email passed from client-side Google Sign-In
  // Falls back to session email if available
  const email = (clientEmail || Session.getActiveUser().getEmail() || '').toLowerCase().trim();
  if (!email) return { error: 'Could not determine your email. Please sign in again.' };

  const sheet   = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    return { error: 'No submissions yet. Check back after the deadline.' };
  }

  const data  = sheet.getRange(2, 1, lastRow - 1, COL_JUDGE4).getValues();
  const teams = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const j1 = extractEmail(row[COL_JUDGE1 - 1]);
    const j2 = extractEmail(row[COL_JUDGE2 - 1]);
    const j3 = extractEmail(row[COL_JUDGE3 - 1]);
    const j4 = extractEmail(row[COL_JUDGE4 - 1]);

    if (j1 === email || j2 === email || j3 === email || j4 === email) {

      const teamName = row[COL_TEAM_NAME - 1].toString().trim();
      teams.push({
        name:     teamName,
        track:    row[COL_TRACK - 1],
        project:  row[COL_PROJECT - 1],
        deck:     row[COL_DECK - 1],
        respNote: row[COL_RESP_NOTE - 1],
        summary: row[COL_SUMMARY - 1],
        mcp:     row[COL_MCP - 1],
        github:  row[COL_GITHUB - 1],
        video:   row[COL_VIDEO - 1],
        diagram: row[COL_DIAGRAM - 1],
        scored:  hasScored(email, teamName)
      });
    }
  }

  if (teams.length === 0) {
    return {
      error: 'No teams are assigned to your account (' + email + ') yet. ' +
             'Contact Saurabh on Slack once judge assignments are updated.'
    };
  }

  return { judge: email, email: email, teams: teams };
}

// ─────────────────────────────────────────────────────────────────────────────
//  Check if this judge already scored this team
// ─────────────────────────────────────────────────────────────────────────────
function hasScored(email, teamName) {
  try {
    const ss  = SpreadsheetApp.openById(SHEET_ID);
    const tab = ss.getSheetByName(SCORES_TAB);
    if (!tab) return false;
    const data = tab.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0].toString().toLowerCase() === email &&
          data[i][3].toString() === teamName) return true;
    }
    return false;
  } catch(e) { return false; }
}

// ─────────────────────────────────────────────────────────────────────────────
//  Save scores to the Judge Scores tab
// ─────────────────────────────────────────────────────────────────────────────
function submitScore(payload) {
  const email = (payload.judgeEmail || Session.getActiveUser().getEmail() || '').toLowerCase().trim();

  // Re-verify this judge is assigned to this team
  const data = getJudgeData();
  if (data.error) return { error: data.error };
  const assigned = data.teams.some(t => t.name === payload.team);
  if (!assigned) return { error: 'This team is not assigned to you.' };

  const ss  = SpreadsheetApp.openById(SHEET_ID);
  let   tab = ss.getSheetByName(SCORES_TAB);

  // Create scores tab if it doesn't exist
  if (!tab) {
    tab = ss.insertSheet(SCORES_TAB);
    tab.appendRow([
      'Judge Email', 'Judge Name', 'Submitted At', 'Team Name',
      'Innovation & Creativity', 'Technical Execution',
      'Business Value & Impact', 'MCP Usage Quality',
      'Demo & Presentation', 'Total (out of 25)', 'Judge Notes (Internal)', 'Feedback for Team'
    ]);
    tab.getRange(1, 1, 1, 12).setFontWeight('bold').setBackground('#6C3FC5').setFontColor('#ffffff');
    tab.setFrozenRows(1);
  }

  const total = Number(payload.innovation) + Number(payload.technical) +
                Number(payload.business)   + Number(payload.mcp)       +
                Number(payload.demo);

  tab.appendRow([
    email,
    data.judge,
    new Date(),
    payload.team,
    Number(payload.innovation),
    Number(payload.technical),
    Number(payload.business),
    Number(payload.mcp),
    Number(payload.demo),
    total,
    payload.judgeNotes || '',
    payload.feedback || ''
  ]);

  return { success: true, total: total };
}
