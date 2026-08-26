/**
 * ===================================================================
 * GOOGLE APPS SCRIPT FOR "THE LIQUID SPOT" CONSULTATION FORM
 * ===================================================================
 * Target Spreadsheet ID: 1ne-qLfA1XGBfOOya5uePXOd4EN5wtBLFU257cfThfC8
 * 
 * INSTRUCTIONS FOR DEPLOYMENT:
 * 1. Open your Google Spreadsheet:
 *    https://docs.google.com/spreadsheets/d/1ne-qLfA1XGBfOOya5uePXOd4EN5wtBLFU257cfThfC8/edit
 * 
 * 2. In the top menu, click on "Extensions" > "Apps Script".
 * 
 * 3. Delete any code in the editor, paste this entire script, and click the Save (floppy disk) icon.
 * 
 * 4. Click the blue "Deploy" button in the top-right corner > "Manage deployments" or "New deployment".
 *    (If you already have a deployment, click edit/pencil and select version "New version", then Deploy).
 * 
 * 5. Ensure settings:
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone"
 * 
 * 6. Copy the "Web app URL" (looks like https://script.google.com/macros/s/.../exec).
 * ===================================================================
 */

const SHEET_ID = "1ne-qLfA1XGBfOOya5uePXOd4EN5wtBLFU257cfThfC8";
const SHEET_NAME = "Consultations";

const HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone Number",
  "Event Type",
  "Event Date",
  "Event Location",
  "Start Time",
  "End Time",
  "Estimated Guest Count",
  "Catering Requirements",
  "Budget",
  "Tell Us More / Notes",
  "Consultation Preference"
];

function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // If "Consultations" tab does not exist, use or rename the first tab if empty, or insert a new one
    if (!sheet) {
      const allSheets = ss.getSheets();
      if (allSheets.length === 1 && allSheets[0].getLastRow() <= 1) {
        sheet = allSheets[0];
        sheet.setName(SHEET_NAME);
      } else {
        sheet = ss.insertSheet(SHEET_NAME);
      }
    }

    // If headers are missing, write and style them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
      headerRange.setBackground("#F3274C");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    const timestamp = Utilities.formatDate(new Date(), "GMT+1", "yyyy-MM-dd HH:mm:ss");

    const row = [
      timestamp,
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.eventType || "",
      data.eventDate || "",
      data.eventLocation || "",
      data.startTime || "",
      data.endTime || "",
      data.guestCount || "",
      data.cateringRequirements || "",
      data.budget || "",
      data.notes || "",
      data.consultationPreference || ""
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ready", message: "The Liquid Spot Google Sheet endpoint is active." }))
    .setMimeType(ContentService.MimeType.JSON);
}
