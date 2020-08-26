class Controller {
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  reminder_list: ReminderList;
  configuration: Configuration;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl("spreadsheet_url");
    this.reminder_list = new ReminderList();
    this.configuration = new Configuration();
  }
}
