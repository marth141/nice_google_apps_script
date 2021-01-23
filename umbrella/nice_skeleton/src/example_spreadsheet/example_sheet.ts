class ExampleEmployeeLinksSheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    const this_class = this;
    const { get_sheet } = this_class;

    this.sheet = get_sheet(spreadsheet);
    this.spreadsheet = spreadsheet;
  }

  get_employee_spreadsheets() {
    const this_class = this;
    const { sheet } = this_class;

    return sheet
      .getRange(`A1:B${sheet.getLastRow()}`)
      .getValues()
      .map(([a, b], index) => {
        switch (index) {
          case 0:
            return [a, b];

          default:
            return new EmployeeSpreadsheetObj({ name: a, link: b });
        }
      });
  }

  get_sheet(spreadsheet = this.spreadsheet) {
    return spreadsheet.getSheetByName("Sheet1");
  }
}
