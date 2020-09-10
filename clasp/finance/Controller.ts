class Controller {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  public finance_sheet: FinanceSheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1yHw034cKPcdDam94l1WZJxM8QaWXfkZcZ02z9kROTXs/edit");
    this.finance_sheet = new FinanceSheet(this.spreadsheet);
  }
}
