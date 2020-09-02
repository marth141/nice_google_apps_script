class ConfigurationSheet {
  public sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public reply_to: string;
  public subject: string;
  public link: string;
  public body: string;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheetByName("Configuration");
    this.reply_to = this.sheet.getRange(2, 1).getValue();
    this.subject = this.sheet.getRange(2, 2).getValue();
    this.link = `<a href="${this.sheet.getRange(2, 3).getValue()}">${
      this.subject
    }</a>`;
    this.body = (function (sheet, link) {
      let body: string = sheet.getRange(2, 4).getValue();
      return body.replace("LINK_PLACEHOLDER", link).replace(/\n/g, "<br/>");
    })(this.sheet, this.link);
  }
}
