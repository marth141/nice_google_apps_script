class ExampleFormResponseSheet extends ExampleFormResponseSpreadsheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  start_column: string;
  end_column: string;

  constructor() {
    super();
    const this_class = this;
    const { get_sheet, spreadsheet } = this_class;

    this.sheet = get_sheet(spreadsheet, "Form Responses 1");
    this.start_column = "A";
    this.end_column = "F";
  }

  get_sheet(
    spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet,
    name: string
  ) {
    return spreadsheet.getSheetByName(name);
  }

  // CRUD operations

  create_response(new_response: FormResponse) {
    const this_class = this;

    const existing_response = this_class
      .read_all_responses()
      .find((existing_response) => {
        return existing_response.email == new_response.email;
      }, new_response);

    if (existing_response == undefined) {
      this_class.update_response(new_response);
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

  update_responses(list_to_update: FormResponse[]) {
    const this_class = this;
    const { sheet, start_column, end_column } = this_class;

    const to_google_sheets = list_to_update.map((to_update: FormResponse) => {
      const {
        index,
        timestamp,
        email,
        name,
        favorite_day,
        given_number,
        favorite_food,
      } = to_update;
      return [
        timestamp,
        email,
        name,
        favorite_day,
        given_number,
        favorite_food,
      ];
    });

    sheet
      .getRange(`${start_column}2:${end_column}${sheet.getLastRow()}`)
      .setValues(to_google_sheets);
    return list_to_update;
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
