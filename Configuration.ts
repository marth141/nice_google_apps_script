class Configuration {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  reply_to: string;
  subject: string;
  body: string;

  constructor() {
    this.sheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    ).getSheetByName("Configuration");
    this.reply_to = this.sheet.getRange(1, 2).getValue();
    this.subject = this.sheet.getRange(2, 2).getValue();
    this.body = this.sheet.getRange(3, 2).getValue();
  }
}
