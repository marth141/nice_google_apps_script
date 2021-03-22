function test() {
  console.log({
    label: "Test create new",
    result: (() => {
      try {
        const last_row = new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .sheet.getLastRow();

        const response_to_create = new FormResponse({
          index: last_row,
          timestamp: new Date("2/20/2021 13:49:15"),
          email: `Script${last_row}@Test.com`,
          name: `Script${last_row} Test`,
          favorite_day: new Date("2/20/2021 13:49:15"),
          given_number: 888,
          favorite_food: "Chicken",
        });

        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .create_response(response_to_create);
      } catch (error) {
        console.error("Failed create new");
      }
    })(),
  });

  console.log({
    label: "Test read all",
    result: (() => {
      try {
        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_all_responses();
      } catch (error) {
        console.error("Failed read all");
      }
    })(),
  });

  console.log({
    label: "Test read one",
    result: (() => {
      try {
        const read_query = {
          index:
            new ExampleFormResponseSpreadsheet()
              .get_reponse_sheet()
              .sheet.getLastRow() - 1,
        };

        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_one_response(read_query);
      } catch (error) {
        console.error("Failed read one");
      }
    })(),
  });

  console.log({
    label: "Test update record",
    result: (() => {
      try {
        const read_query = {
          index:
            new ExampleFormResponseSpreadsheet()
              .get_reponse_sheet()
              .sheet.getLastRow() - 1,
        };

        let response_to_update = new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_one_response(read_query);

        response_to_update.timestamp = new Date();
        response_to_update.favorite_food = "Chickie Tendies";

        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .update_response(response_to_update);
      } catch (error) {
        console.error("Failed update record");
      }
    })(),
  });

  console.log({
    label: "Test update records",
    result: (() => {
      try {
        const existing_responses = new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_all_responses();

        const updated_responses = existing_responses.map(
          (response: FormResponse) => {
            response.timestamp = new Date();
            return response;
          }
        );

        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .update_responses(updated_responses);
      } catch (error) {
        console.error("Failed update records");
      }
    })(),
  });

  console.log({
    label: "Test delete record",
    result: (() => {
      try {
        const read_query = {
          index:
            new ExampleFormResponseSpreadsheet()
              .get_reponse_sheet()
              .sheet.getLastRow() - 1,
        };

        const response_to_delete = new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_one_response(read_query);

        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .delete_response(response_to_delete);
      } catch (error) {
        console.error("Failed delete record");
      }
    })(),
  });
}
