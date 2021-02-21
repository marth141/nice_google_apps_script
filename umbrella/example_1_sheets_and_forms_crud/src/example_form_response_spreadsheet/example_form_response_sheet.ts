class ExampleFormResponseSheet extends ExampleFormResponseSpreadsheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    super();
    const this_class = this;
    const { get_sheet } = this_class;

    this.sheet = get_sheet(spreadsheet);
    this.spreadsheet = spreadsheet;
  }

  get_sheet(spreadsheet = this.spreadsheet) {
    return spreadsheet.getSheetByName("Form Responses 1");
  }

  // CRUD operations

  create_response(new_response: FormResponseObj) {
    const this_class = this;
    const forEach_args = { new_response, this_class };

    this_class.read_all_responses().find((existing_response) => {
      const { new_response, this_class } = forEach_args;
      const { sheet } = this_class;
      const {
        timestamp,
        email,
        favorite_day,
        given_number,
        favorite_food,
      } = new_response;

      if (existing_response.email === new_response.email) {
        console.error(new Error("Record already exists"));
        return existing_response;
      } else {
        sheet
          .getRange(`A${sheet.getLastRow() + 1}:E${sheet.getLastRow() + 1}`)
          .setValues([
            [timestamp, email, favorite_day, given_number, favorite_food],
          ]);
        return new_response;
      }
    }, forEach_args);
  }

  read_all_responses() {
    const this_class = this;
    const { sheet } = this_class;

    return sheet
      .getRange(`A1:E${sheet.getLastRow()}`)
      .getValues()
      .map(([a, b, c, d, e, f], index) => {
        if (a instanceof Date) {
          return new FormResponseObj({
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
      .filter((response: FormResponseObj) => {
        return response != undefined;
      });
  }

  read_one_response(read_query: {
    index?;
    timestamp?;
    name?;
    favorite_day?;
    given_number?;
    favorite_food?;
  }) {
    const this_class = this;
    const {
      index,
      timestamp,
      name,
      favorite_day,
      given_number,
      favorite_food,
    } = read_query;

    return this_class
      .read_all_responses()
      .map((existing_response: FormResponseObj) => {
        for (const property in existing_response) {
          if (
            existing_response[property] === index ||
            timestamp ||
            name ||
            favorite_day ||
            given_number ||
            favorite_food
          ) {
            return existing_response;
          }
        }
      })
      .filter((record: FormResponseObj) => {
        return record != undefined;
      })[0];
  }

  update_response(to_update: FormResponseObj) {
    const this_class = this;
    const { sheet } = this_class;
    const {
      index,
      timestamp,
      email,
      favorite_day,
      given_number,
      favorite_food,
    } = to_update;

    sheet
      .getRange(`A${index + 1}:E${index + 1}`)
      .setValues([
        [timestamp, email, favorite_day, given_number, favorite_food],
      ]);
    return to_update;
  }

  delete_response(to_delete: FormResponseObj) {
    const this_class = this;
    const { sheet } = this_class;

    const existing_response = this_class
      .read_all_responses()
      .find((existing_response: FormResponseObj) => {
        return existing_response.email == to_delete.email;
      }, to_delete);

    if (existing_response.email == to_delete.email) {
      sheet.deleteRow(existing_response.index + 1);
    }
    return "ok";
  }
}
