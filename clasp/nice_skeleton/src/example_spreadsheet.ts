class NiceSkeletonSpreadsheet {
  spreadsheet_id: string;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  constructor(spreadsheet_id = "spreadsheet_id") {
    const { get_spreadsheet } = this;

    this.spreadsheet_id = spreadsheet_id;
    this.spreadsheet = get_spreadsheet(spreadsheet_id);
  }

  get_spreadsheet(spreadsheet_id = this.spreadsheet_id) {
    return SpreadsheetApp.openById(spreadsheet_id);
  }

  get_example_sheet(spreadsheet = this.spreadsheet) {
    return new ExampleEmployeeLinksSheet(spreadsheet);
  }
}
