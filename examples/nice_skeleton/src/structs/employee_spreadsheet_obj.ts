class EmployeeSpreadsheetObj {
  employee: string;
  spreadsheet:
    | GoogleAppsScript.Spreadsheet.Spreadsheet
    | { error: string; link?: string; employee?: string };

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
      return SpreadsheetApp.openByUrl(link);
    } catch (error) {
      console.error(error);
      if (employee == "") {
        return { error: "No Employee", link };
      } else if (link == "") {
        return { error: "No Link", employee };
      }
      return { error: "Not Authorized", link };
    }
  }
}
