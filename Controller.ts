class Controller {
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  reminder_list: GoogleAppsScript.Spreadsheet.Sheet;
  configuration: GoogleAppsScript.Spreadsheet.Sheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    );
    this.reminder_list = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    ).getSheetByName("Sheet1");
    this.configuration = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    ).getSheetByName("Configuration");
  }
}
