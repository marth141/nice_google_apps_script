function test() {
  console.log({
    label: "Test create new",
    result: (() => {
      try {
        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .create_response(
            new FormResponse({
              index: new ExampleFormResponseSpreadsheet()
                .get_reponse_sheet()
                .sheet.getLastRow(),
              timestamp: new Date("2/20/2021 13:49:15"),
              email: `Script${new ExampleFormResponseSpreadsheet()
                .get_reponse_sheet()
                .sheet.getLastRow()}@Test.com`,
              name: `Script${new ExampleFormResponseSpreadsheet()
                .get_reponse_sheet()
                .sheet.getLastRow()} Test`,
              favorite_day: new Date("2/20/2021 13:49:15"),
              given_number: 888,
              favorite_food: "Chicken",
            })
          );
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
        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_one_response({
            index:
              new ExampleFormResponseSpreadsheet()
                .get_reponse_sheet()
                .sheet.getLastRow() - 1,
          });
      } catch (error) {
        console.error("Failed read one");
      }
    })(),
  });

  console.log({
    label: "Test update record",
    result: (() => {
      try {
        let existing_response = new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_one_response({
            index:
              new ExampleFormResponseSpreadsheet()
                .get_reponse_sheet()
                .sheet.getLastRow() - 1,
          });

        existing_response.timestamp = new Date();
        existing_response.favorite_food = "Chickie Tendies";

        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .update_response(existing_response);
      } catch (error) {
        console.error("Failed update record");
      }
    })(),
  });

  console.log({
    label: "Test update records",
    result: (() => {
      try {
        let existing_responses = new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .read_all_responses();

        let transformed_responses = existing_responses.map(
          (response: FormResponse) => {
            response.timestamp = new Date();
            return response;
          }
        );

        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .update_responses(transformed_responses);
      } catch (error) {
        console.error("Failed update records");
      }
    })(),
  });

  console.log({
    label: "Test delete record",
    result: (() => {
      try {
        return new ExampleFormResponseSpreadsheet()
          .get_reponse_sheet()
          .delete_response(
            new ExampleFormResponseSpreadsheet()
              .get_reponse_sheet()
              .read_one_response({
                index:
                  new ExampleFormResponseSpreadsheet()
                    .get_reponse_sheet()
                    .sheet.getLastRow() - 1,
              })
          );
      } catch (error) {
        console.error("Failed delete record");
      }
    })(),
  });
}
