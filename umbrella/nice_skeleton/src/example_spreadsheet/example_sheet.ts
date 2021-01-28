class ExampleEmployeeLinksSheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  // Here we use the spreadsheet from the parent example_spreadsheet.ts
  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    const this_class = this;
    const { get_sheet } = this_class;

    this.sheet = get_sheet(spreadsheet);
    this.spreadsheet = spreadsheet;
  }

  // Here we can get our [name, link] pairs from
  // an A:B range in a spreadsheet.
  get_employee_spreadsheets() {
    const this_class = this;
    const { sheet } = this_class;

    return (
      sheet
        .getRange(`A1:B${sheet.getLastRow()}`)
        .getValues()
        // Right here I use [a,b] in our map predicate like a 'pattern match'.
        // Basically, I know that you need the double-for to access values.
        // It sucks.
        // This just accessed the top [] and matched out the inner [] values
        // without a double-for loop.
        .map(([a, b], index) => {
          switch (index) {
            // Skipping the first values because they're probably headers.
            case 0:
              return [a, b];

            // Creating a formal object that has full '.' access in an IDE.
            // Happy programming!
            default:
              return new EmployeeSpreadsheetObj({ name: a, link: b });
          }
        })
    );
  }

  // like this we can get our sheet and remain quite 'DRY'
  get_sheet(spreadsheet = this.spreadsheet) {
    return spreadsheet.getSheetByName("Sheet1");
  }
}
