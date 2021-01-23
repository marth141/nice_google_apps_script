class NiceSkeletonSpreadsheet {
  spreadsheet_id: string;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  constructor(spreadsheet_id = "spreadsheet_id") {
    const this_class = this;
    const { get_spreadsheet } = this_class;

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
