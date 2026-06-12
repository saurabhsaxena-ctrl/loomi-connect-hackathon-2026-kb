// ══════════════════════════════════════════════════════════════════════════════
//  LOOMI CONNECT AI HACKATHON — Judge Scoring Form
//  Google Apps Script — paste into script.google.com and run createJudgingForm()
//
//  HOW IT WORKS:
//  - Judge name is captured automatically via Google login (no manual entry)
//  - Team names are pulled live from the submission responses sheet
//  - 5 criteria scored 0–5 with help text to guide judges
//  - Responses feed into a linked sheet for leaderboard calculation
// ══════════════════════════════════════════════════════════════════════════════

// ── CONFIG — update this ID if the submission sheet changes ──────────────────
const SUBMISSION_SHEET_ID = '1YMOjpOg1Jz-IufbSEGrKh_od_Vlw-NL9XPMEhnV4psA';
const TEAM_NAME_COLUMN    = 3; // Column C = Team Name

function createJudgingForm() {

  // ── PULL TEAM NAMES FROM SUBMISSION SHEET ──────────────────────────────────
  const sheet     = SpreadsheetApp.openById(SUBMISSION_SHEET_ID).getActiveSheet();
  const lastRow   = sheet.getLastRow();
  const teamNames = [];

  for (let i = 2; i <= lastRow; i++) { // row 1 is header
    const name = sheet.getRange(i, TEAM_NAME_COLUMN).getValue().toString().trim();
    if (name && !teamNames.includes(name)) {
      teamNames.push(name);
    }
  }

  teamNames.sort();
  Logger.log('Teams found: ' + teamNames.length + ' → ' + teamNames.join(', '));

  // ── CREATE FORM ────────────────────────────────────────────────────────────
  const form = FormApp.create('Loomi Connect AI Hackathon — Judge Scoring');

  form.setDescription(
    'Score each assigned team honestly and independently.\n\n' +
    '• Your name is captured automatically via your Google login\n' +
    '• Only score teams assigned to your panel\n' +
    '• Each criterion is scored 0–5\n' +
    '• Your feedback helps teams improve — be constructive'
  );

  form.setConfirmationMessage(
    'Your scores have been submitted — thank you! 🙌\n\n' +
    'If you have more teams to score, go back and submit a new response.'
  );

  form.setCollectEmail(true);         // captures judge email from Google login
  form.setAllowResponseEdits(true);   // judge can go back and fix a mistake
  form.setLimitOneResponsePerUser(false); // judges submit multiple times (one per team)
  form.setProgressBar(false);

  // ── SECTION HEADER ─────────────────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Judge Scoring Form')
    .setHelpText('Your Google account email is recorded automatically. Score each team you have been assigned — submit once per team.');

  // ── PANEL NUMBER ───────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('Your Panel *')
    .setHelpText('Select the panel you have been assigned to. Only score teams in your panel.')
    .setChoiceValues([
      'Panel 1',
      'Panel 2',
      'Panel 3',
      'Panel 4',
      'Panel 5',
      'Panel 6',
      'Panel 7',
      'Panel 8',
    ])
    .setRequired(true);

  // ── TEAM NAME ──────────────────────────────────────────────────────────────
  form.addListItem()
    .setTitle('Team Name *')
    .setHelpText('Select the team you are scoring. Submit a separate response for each assigned team.')
    .setChoiceValues(teamNames.length > 0 ? teamNames : ['No submissions yet'])
    .setRequired(true);

  // ── SCORING SECTION HEADER ─────────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Score This Team');

  form.addSectionHeaderItem()
    .setTitle('Judging Criteria')
    .setHelpText('Score each criterion from 0 to 5.\n0 = Not present / did not attempt\n1–2 = Weak or incomplete\n3 = Meets expectations\n4 = Strong\n5 = Exceptional');

  // ── CRITERION 1: INNOVATION & CREATIVITY ───────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('1. Innovation & Creativity *')
    .setHelpText(
      'Does the idea feel fresh and original? Did the team find a clever or unexpected way to use Loomi Connect MCP? ' +
      'Does it go beyond the obvious use case? Would this surprise a Bloomreach customer in a good way?\n\n' +
      '0 = Generic / no originality\n' +
      '3 = Solid idea, expected approach\n' +
      '5 = Genuinely creative — unexpected and impressive'
    )
    .setChoiceValues(['0', '1', '2', '3', '4', '5'])
    .setRequired(true);

  // ── CRITERION 2: TECHNICAL EXECUTION ───────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('2. Technical Execution *')
    .setHelpText(
      'Does the agent actually work? Is the integration with Loomi Connect MCP stable and reliable? ' +
      'Is the code well-structured? Does the demo show a working, end-to-end solution — not just a prototype or mock?\n\n' +
      '0 = Broken / did not run\n' +
      '3 = Works with some rough edges\n' +
      '5 = Polished, reliable, production-ready feel'
    )
    .setChoiceValues(['0', '1', '2', '3', '4', '5'])
    .setRequired(true);

  // ── CRITERION 3: BUSINESS VALUE & IMPACT ───────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('3. Business Value & Impact *')
    .setHelpText(
      'Would a real Bloomreach customer use this? Does it solve a meaningful, real-world problem? ' +
      'Could this drive measurable outcomes — revenue, efficiency, customer engagement? ' +
      'Is the target user and use case clearly defined?\n\n' +
      '0 = No clear business case\n' +
      '3 = Solves a real problem, value is clear\n' +
      '5 = High-impact — would make a customer\'s business measurably better'
    )
    .setChoiceValues(['0', '1', '2', '3', '4', '5'])
    .setRequired(true);

  // ── CRITERION 4: MCP USAGE QUALITY ─────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('4. MCP Usage Quality *')
    .setHelpText(
      'How deeply and thoughtfully did the team use Loomi Connect MCP? ' +
      'Are MCP calls central to the solution — or just a checkbox integration? ' +
      'Did they use multiple MCP capabilities? Is the reasoning behind each MCP call clear and purposeful?\n\n' +
      '0 = MCP barely used or irrelevant\n' +
      '3 = MCP is used meaningfully as part of the solution\n' +
      '5 = MCP is the backbone of the agent — deep, creative, multi-capability usage'
    )
    .setChoiceValues(['0', '1', '2', '3', '4', '5'])
    .setRequired(true);

  // ── CRITERION 5: DEMO & PRESENTATION ───────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('5. Demo & Presentation *')
    .setHelpText(
      'Was the demo clear and compelling? Did the team communicate the problem, solution, and value within 5 minutes? ' +
      'Was it easy to follow? Did the live demo work smoothly? ' +
      'Would an exec or customer watching this be impressed?\n\n' +
      '0 = Unclear, confusing, or demo failed\n' +
      '3 = Clear and covered the basics well\n' +
      '5 = Polished, engaging, and memorable'
    )
    .setChoiceValues(['0', '1', '2', '3', '4', '5'])
    .setRequired(true);

  // ── FEEDBACK ───────────────────────────────────────────────────────────────
  form.addParagraphTextItem()
    .setTitle('Feedback for the Team')
    .setHelpText(
      'Optional but encouraged. What did they do well? What could be improved? ' +
      'This feedback will be shared with the team after Demo Day — be honest and constructive.'
    )
    .setRequired(false);

  // ── LOG URLS ────────────────────────────────────────────────────────────────
  Logger.log('==============================================');
  Logger.log('Judging form created!');
  Logger.log('Edit URL:     ' + form.getEditUrl());
  Logger.log('Judge URL:    ' + form.getPublishedUrl());
  Logger.log('==============================================');
  Logger.log('NEXT STEPS:');
  Logger.log('1. Open the Responses tab in the form');
  Logger.log('2. Click the Sheets icon to link a response spreadsheet');
  Logger.log('3. Use that sheet to build your leaderboard');
}

// ══════════════════════════════════════════════════════════════════════════════
//  RUN THIS to refresh team names after more submissions come in
//  (updates the Team Name dropdown with latest submissions)
// ══════════════════════════════════════════════════════════════════════════════
function refreshTeamNames() {
  // Get form by ID — paste your judging form ID here after first run
  const JUDGING_FORM_ID = 'PASTE_YOUR_JUDGING_FORM_ID_HERE';
  const form  = FormApp.openById(JUDGING_FORM_ID);
  const items = form.getItems();

  // Find the Team Name list item
  for (const item of items) {
    if (item.getTitle() === 'Team Name *') {
      const sheet     = SpreadsheetApp.openById(SUBMISSION_SHEET_ID).getActiveSheet();
      const lastRow   = sheet.getLastRow();
      const teamNames = [];

      for (let i = 2; i <= lastRow; i++) {
        const name = sheet.getRange(i, TEAM_NAME_COLUMN).getValue().toString().trim();
        if (name && !teamNames.includes(name)) teamNames.push(name);
      }

      teamNames.sort();
      item.asListItem().setChoiceValues(teamNames);
      Logger.log('Team names refreshed: ' + teamNames.length + ' teams → ' + teamNames.join(', '));
      return;
    }
  }

  Logger.log('Team Name item not found — check the form ID.');
}
