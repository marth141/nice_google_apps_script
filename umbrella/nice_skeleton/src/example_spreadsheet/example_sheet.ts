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

  update_employee(employee: EmployeeSpreadsheetObj) {
    const this_class = this;
    const { sheet } = this_class;
    const { index, name, spreadsheet } = employee;

    try {
      // Using instanceof and our custom error, your IDE can keep using
      // strict typing. Bit of extra code though.
      if (spreadsheet instanceof EmployeeSpreadsheetObjError) {
        sheet.getRange(`A${index + 1}:B${index + 1}`).setValues([
          [
            name, // a
            spreadsheet.link, // b
          ],
        ]);
        throw new Error("Could not access spreadsheet");
      } else {
        sheet.getRange(`A${index + 1}:B${index + 1}`).setValues([
          [
            name, // a
            spreadsheet.getUrl(), // b
          ],
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Here we can get our [[name, link]] pairs from
  // an A:B range in a spreadsheet and make them an object.
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
              return;

            // Creating a formal object that has full '.' access in an IDE.
            // Happy programming!
            default:
              return new EmployeeSpreadsheetObj({ name: a, link: b, index });
          }
        })
        .filter((value: EmployeeSpreadsheetObj) => {
          value != undefined;
        })
    );
  }

  // like this we can get our sheet and remain quite 'DRY'
  get_sheet(spreadsheet = this.spreadsheet) {
    return spreadsheet.getSheetByName("Sheet1");
  }
}
