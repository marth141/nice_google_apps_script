class MyMapsHelper {
  public spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  public input_sheet: () => InputSheet;
  public output_sheet: () => OutputSheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openByUrl(
      "https://docs.google.com/spreadsheets/d/1FjZtIptz2KUvw2REo7TNfruJHUbrXapOUD3fBc9zSIs/edit"
    );
    this.input_sheet = () => {
      return new InputSheet(this.spreadsheet);
    };
    this.output_sheet = () => {
      return new OutputSheet(this.spreadsheet);
    };
  }
}
