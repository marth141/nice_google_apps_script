class MyMapsHelper {
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  customers_sheet: CustomersSheet;
  output_sheet: OutputSheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    );
    this.customers_sheet = new CustomersSheet(this.spreadsheet);
    this.output_sheet = new OutputSheet(this.spreadsheet);
  }
}
