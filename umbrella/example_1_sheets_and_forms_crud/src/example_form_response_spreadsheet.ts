class ExampleFormResponseSpreadsheet {
  spreadsheet_id: string;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  constructor(spreadsheet_id = "1LS09YDGkLDIZCKofXYrhY72M2Y1HbJgE93q82XDHF-4") {
    const this_class = this;
    const { get_spreadsheet } = this_class;

    this.spreadsheet_id = spreadsheet_id;
    this.spreadsheet = get_spreadsheet(spreadsheet_id);
  }

  get_spreadsheet(spreadsheet_id = this.spreadsheet_id) {
    return SpreadsheetApp.openById(spreadsheet_id);
  }

  get_reponse_sheet(spreadsheet = this.spreadsheet) {
    return new ExampleFormResponseSheet(spreadsheet);
  }
}
