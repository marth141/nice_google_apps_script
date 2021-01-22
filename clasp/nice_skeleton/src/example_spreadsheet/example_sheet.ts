class ExampleEmployeeLinksSheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    const employee_links_sheet = this;
    this.sheet = employee_links_sheet.get_sheet(spreadsheet);
    this.spreadsheet = spreadsheet;
  }

  get_employee_spreadsheets() {
    const employee_links_sheet = this;
    const { sheet } = employee_links_sheet;
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
