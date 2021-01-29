class EmployeeSpreadsheetObj {
  index: number;
  name: string;
  spreadsheet:
    | GoogleAppsScript.Spreadsheet.Spreadsheet
    | EmployeeSpreadsheetObjError;

  // I like using this syntax for getting and setting the values for
  // a class that is being used like a struct.
  constructor(args: { name: any; link: any; index: any }) {
    const this_class = this;
    const { try_open_spreadsheet } = this_class;
    const { name, link, index } = args;

    // Adding the index which would be used
    // for putting the record back in updates.
    // Which also means this should almost always be assigned
    // during the map that gathers values.
    this.index = index;
    this.name = name;
    this.spreadsheet = try_open_spreadsheet(link);
  }

  // Just going to try opening the spreadsheet.
  // This technically applies a transformation
  // to our EmployeeSpreadsheetObj.
  // This is useful later in the update function.
  try_open_spreadsheet(link) {
    const this_class = this;
    const { name: employee } = this_class;

    // if it doesn't open, lets throw some errors,
    // catch the errors to keep the program from breaking,
    // and return an error object that we can if away with instanceof.
    try {
      if (employee == "") {
        throw new Error("No Employee");
      } else if (link == "") {
        throw new Error("No Link");
      }
      return SpreadsheetApp.openByUrl(link);
    } catch (error) {
      return new EmployeeSpreadsheetObjError({
        error: error.stack,
        link,
        employee,
      });
    }
  }
}

// Defined a nice little type to do instanceof checking
class EmployeeSpreadsheetObjError extends Error {
  error: string;
  link: string;
  employee: string;
  constructor(args: { error; link; employee }) {
    const { error, link, employee } = args;
    super();
    this.error = error;
    this.link = link;
    this.employee = employee;
  }
}
