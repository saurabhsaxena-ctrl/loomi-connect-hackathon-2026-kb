// ══════════════════════════════════════════════════════════════════════════════
//  LOOMI CONNECT AI HACKATHON — Final Project Submission Form
//  Google Apps Script — paste into script.google.com and run createSubmissionForm()
//
//  AFTER RUNNING: Open the Edit URL and manually add 4 file upload questions:
//  • Page 3: Demo Video * (video, max 2GB, required)
//  • Page 3: Architecture Diagram * (image/PDF, max 50MB, required)
//  • Page 3: Presentation Deck (PDF/PPTX, max 100MB, optional)
//  • Page 4: Responsible Design Document (PDF/image, max 50MB, optional)
// ══════════════════════════════════════════════════════════════════════════════

function createSubmissionForm() {

  const form = FormApp.create("Loomi Connect AI Hackathon — Final Submission");

  form.setDescription(
    "Submit your final project here. All submissions must be completed before the deadline.\n\n" +
    "Have these ready before starting:\n" +
    "• Demo video (max 5 min, MP4 or MOV)\n" +
    "• Architecture diagram (PNG, JPG or PDF)\n" +
    "• GitHub repository link (optional but recommended)\n\n" +
    "For help, post in #help-loomi-connect on Slack."
  );

  form.setConfirmationMessage(
    "Your submission has been received — thank you!\n\n" +
    "The Bloomreach team will review all submissions after the deadline. " +
    "You will be contacted via Slack with next steps for Demo Day.\n\nGood luck!"
  );

  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);

  // ── PAGE 1: TEAM DETAILS ────────────────────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle("Page 1 of 4 — Team Details")
    .setHelpText("Tell us who you are.");

  form.addTextItem()
    .setTitle("Team Name *")
    .setHelpText("Must match your registration exactly.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Team Lead Name *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Team Lead Email *")
    .setHelpText("The email address used during registration.")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Challenge Track *")
    .setChoiceValues([
      "Track 1 — Commerce & Merchandising Agents",
      "Track 2 — Campaign & Personalisation Agents",
      "Track 3 — Analytics Agents & Decision Intelligence",
      "Track 4 — Customer Lifecycle & Retention Agents",
      "Track 6 — Cross-MCP Orchestration (Advanced)",
    ])
    .setRequired(true);

  // ── PAGE 2: PROJECT SUMMARY ─────────────────────────────────────────────

  form.addPageBreakItem()
    .setTitle("Page 2 of 4 — Project Summary");

  form.addSectionHeaderItem()
    .setTitle("Tell Us What You Built")
    .setHelpText("Be concise — judges will read every submission.");

  form.addTextItem()
    .setTitle("Project Title *")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Project Summary *")
    .setHelpText("In 2–4 sentences: what does your agent do, who is it for, and what problem does it solve?")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("MCP Usage Explanation *")
    .setHelpText("Which Loomi Connect MCP capabilities did you use? How does your agent call them and why? Be specific — this is a key judging criterion.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("GitHub Repository URL")
    .setHelpText("Optional but recommended. Ensure the repo is public. Include the full URL (https://github.com/...)")
    .setRequired(false);

  // ── PAGE 3: FILE UPLOADS ────────────────────────────────────────────────

  form.addPageBreakItem()
    .setTitle("Page 3 of 4 — File Uploads");

  form.addSectionHeaderItem()
    .setTitle("Upload Your Deliverables")
    .setHelpText(
      "You must be signed into a Google account to upload files.\n\n" +
      "ADD MANUALLY after running this script:\n" +
      "① Demo Video * — video files, max 2 GB, required\n" +
      "② Architecture Diagram * — image or PDF, max 50 MB, required\n" +
      "③ Presentation Deck — PDF or PPTX, max 100 MB, optional"
    );

  // ── PAGE 4: RESPONSIBLE AI ──────────────────────────────────────────────

  form.addPageBreakItem()
    .setTitle("Page 4 of 4 — Responsible AI & Design");

  form.addSectionHeaderItem()
    .setTitle("Responsible AI & Design")
    .setHelpText("We take responsible AI seriously at Bloomreach. Tell us how you thought about it.");

  form.addParagraphTextItem()
    .setTitle("Responsible Design Note *")
    .setHelpText("Briefly describe how you considered responsible AI principles — data privacy, bias, transparency, human oversight, or potential misuse. A few sentences is fine.")
    .setRequired(true);

  // ADD MANUALLY: Responsible Design Document — PDF/image, max 50 MB, optional

  form.addCheckboxItem()
    .setTitle("Submission Declaration *")
    .setChoiceValues([
      "I confirm this is original work created during the hackathon period, and all team members are aware of this submission.",
    ])
    .setRequired(true);

  // ── LOG URLS ────────────────────────────────────────────────────────────

  Logger.log("✅ Form created!");
  Logger.log("Edit URL:     " + form.getEditUrl());
  Logger.log("Response URL: " + form.getPublishedUrl());
  Logger.log("");
  Logger.log("NEXT: Open Edit URL and add 4 file upload questions:");
  Logger.log("  Page 3: ① Demo Video *  ② Architecture Diagram *  ③ Presentation Deck");
  Logger.log("  Page 4: ④ Responsible Design Document");
}
