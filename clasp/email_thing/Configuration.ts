class ConfigurationSheet {
  public sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public reply_to: string;
  public subject: string;
  public body: string;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheetByName("Configuration");
    this.reply_to = this.sheet.getRange(2, 1).getValue();
    this.subject = this.sheet.getRange(2, 2).getValue();
    this.body = this.sheet.getRange(2, 3).getValue();
  }
}
