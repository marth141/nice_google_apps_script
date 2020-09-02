class Controller {
  public spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  public reminder_sheet: ReminderSheet;
  public configuration: ConfigurationSheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    );
    this.reminder_sheet = new ReminderSheet(this.spreadsheet);
    this.configuration = new ConfigurationSheet(this.spreadsheet);
  }
}
