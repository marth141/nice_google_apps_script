class ExampleFormResponseSheet extends ExampleFormResponseSpreadsheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  start_column: string;
  end_column: string;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    super();
    const this_class = this;
    const { get_sheet } = this_class;

    this.sheet = get_sheet(spreadsheet);
    this.start_column = "A";
    this.end_column = "F";
  }

  get_sheet(spreadsheet = this.spreadsheet) {
    return spreadsheet.getSheetByName("Form Responses 1");
  }

  // CRUD operations

  create_response(new_response: FormResponse) {
    const this_class = this;
    const { sheet, start_column, end_column } = this_class;

    const {
      index,
      timestamp,
      email,
      name,
      favorite_day,
      given_number,
      favorite_food,
    } = new_response;

    const existing_response = this_class
      .read_all_responses()
      .find((existing_response) => {
        return existing_response.email == new_response.email;
      }, new_response);

    if (existing_response == undefined) {
      sheet
        .getRange(`${start_column}${index + 1}:${end_column}${index + 1}`)
        .setValues([
          [timestamp, email, name, favorite_day, given_number, favorite_food],
        ]);
      return new_response;
    } else {
      console.error(new Error("Record already exists"));
      return existing_response;
    }
  }

  read_all_responses() {
    const this_class = this;
    const { sheet, start_column, end_column } = this_class;

    return sheet
      .getRange(`${start_column}1:${end_column}${sheet.getLastRow()}`)
      .getValues()
      .map(([a, b, c, d, e, f], index) => {
        if (a instanceof Date) {
          return new FormResponse({
            index,
            timestamp: a,
            email: b,
            name: c,
            favorite_day: d,
            given_number: e,
            favorite_food: f,
          });
        }
      })
      .filter((response: FormResponse) => {
        return response != undefined;
      });
  }

  read_one_response(read_query: {
    index?;
    timestamp?;
    email?;
    name?;
    favorite_day?;
    given_number?;
    favorite_food?;
  }) {
    const this_class = this;
    const {
      index,
      timestamp,
      email,
      name,
      favorite_day,
      given_number,
      favorite_food,
    } = read_query;

    return this_class
      .read_all_responses()
      .find((existing_response: FormResponse) => {
        for (const property in existing_response) {
          if (
            existing_response[property] == index ||
            timestamp ||
            email ||
            name ||
            favorite_day ||
            given_number ||
            favorite_food
          ) {
            return existing_response;
          }
        }
      });
  }

  update_response(to_update: FormResponse) {
    const this_class = this;
    const { sheet, start_column, end_column } = this_class;
    const {
      index,
      timestamp,
      email,
      name,
      favorite_day,
      given_number,
      favorite_food,
    } = to_update;

    sheet
      .getRange(`${start_column}${index + 1}:${end_column}${index + 1}`)
      .setValues([
        [timestamp, email, name, favorite_day, given_number, favorite_food],
      ]);
    return to_update;
  }

  delete_response(to_delete: FormResponse) {
    const this_class = this;
    const { sheet } = this_class;

    const existing_response = this_class
      .read_all_responses()
      .find((existing_response: FormResponse) => {
        return existing_response.email == to_delete.email;
      }, to_delete);

    if (existing_response.email == to_delete.email) {
      sheet.deleteRow(existing_response.index + 1);
    }
    return "ok";
  }
}
