class EmployeeSpreadsheetObj {
  employee: string;
  spreadsheet:
    | GoogleAppsScript.Spreadsheet.Spreadsheet
    | { error: string; link?: string; employee?: string };

  constructor(input: { name: any; link: any }) {
    const employee_spreadsheet_obj = this;
    const { try_open_spreadsheet } = employee_spreadsheet_obj;
    const { name, link } = input;
    this.employee = name;
    this.spreadsheet = try_open_spreadsheet(link);
  }

  try_open_spreadsheet(link) {
    const employee_spreadsheet_obj = this;
    const { employee } = employee_spreadsheet_obj;
    try {
      return SpreadsheetApp.openByUrl(link);
    } catch (error) {
      if (employee == "") {
        console.error(error);
        return { error: "No Employee", link };
      } else if (link == "") {
        console.error(error);
        return { error: "No Link", employee };
      }
      console.error(error);
      return { error: "Not Authorized", link };
    }
  }
}
