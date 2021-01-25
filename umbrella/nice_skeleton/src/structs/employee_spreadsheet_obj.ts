class EmployeeSpreadsheetObj {
  employee: string;
  spreadsheet:
    | GoogleAppsScript.Spreadsheet.Spreadsheet
    | { error: Error; link?: string; employee?: string; stack?: string };

  constructor(args: { name: any; link: any }) {
    const this_class = this;
    const { try_open_spreadsheet } = this_class;
    const { name, link } = args;

    this.employee = name;
    this.spreadsheet = try_open_spreadsheet(link);
  }

  try_open_spreadsheet(link) {
    const this_class = this;
    const { employee } = this_class;

    try {
      if (employee == "") {
        throw new Error("No Employee");
      } else if (link == "") {
        throw new Error("No Link");
      }
      return SpreadsheetApp.openByUrl(link);
    } catch (error) {
      return { error, link, employee, stack: error.stack };
    }
  }
}
