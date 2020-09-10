class Controller {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  public finance_sheet: FinanceSheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl("spreadsheet_url");
    this.finance_sheet = new FinanceSheet(this.spreadsheet);
  }
}
