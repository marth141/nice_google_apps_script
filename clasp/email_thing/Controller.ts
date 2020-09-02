class Controller {
  public spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  public reminder_list: ReminderSheet;
  public configuration: ConfigurationSheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    );
    this.reminder_list = new ReminderSheet(this.spreadsheet);
    this.configuration = new ConfigurationSheet(this.spreadsheet);
  }
}
