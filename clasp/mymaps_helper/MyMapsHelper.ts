class MyMapsHelper {
  public spreadsheet: () => GoogleAppsScript.Spreadsheet.Spreadsheet;
  public input_sheet: () => InputSheet;
  public output_sheet: () => OutputSheet;

  constructor() {
    this.spreadsheet = () => {
      return SpreadsheetApp.openByUrl("spreadsheet_url");
    };
    this.input_sheet = () => {
      return new InputSheet(this.spreadsheet());
    };
    this.output_sheet = () => {
      return new OutputSheet(this.spreadsheet());
    };
  }
}
