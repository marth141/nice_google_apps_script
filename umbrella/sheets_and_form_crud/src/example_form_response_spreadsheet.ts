class ExampleFormResponseSpreadsheet {
  spreadsheet_id: string;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  constructor(spreadsheet_id = SpreadsheetApp.getActive().getId()) {
    const this_class = this;
    const { get_spreadsheet } = this_class;

    this.spreadsheet_id = spreadsheet_id;
    this.spreadsheet = get_spreadsheet(spreadsheet_id);
  }

  get_spreadsheet(spreadsheet_id = this.spreadsheet_id) {
    return SpreadsheetApp.openById(spreadsheet_id);
  }

  get_reponse_sheet() {
    return new ExampleFormResponseSheet();
  }
}
