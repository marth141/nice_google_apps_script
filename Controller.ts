class Controller {
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  reminder_list: ReminderList;
  configuration: GoogleAppsScript.Spreadsheet.Sheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    );
    this.reminder_list = new ReminderList();
    this.configuration = this.spreadsheet.getSheetByName(
      "Configuration"
    );
  }
}
