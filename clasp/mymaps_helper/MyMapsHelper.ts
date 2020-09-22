class MyMapsHelper {
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  customers_sheet: InputSheet;
  output_sheet: OutputSheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    );
    this.customers_sheet = new InputSheet(this.spreadsheet);
    this.output_sheet = new OutputSheet(this.spreadsheet);
  }
}
