function myFunction() {
  // Here we use our Spreadsheet abstracted as a class.
  new NiceSkeletonSpreadsheet()
    // We can also abstract a sheet as a class and make it
    // someting that is returned by a method of the parent spreadsheet.
    .get_example_sheet()
    // We define a method on our sheet that retrieves our
    // [[employee, link]] pairs from A:B
    .get_employee_spreadsheets()
    // JavaScript/TypeScript maps are amazing.
    // We define a 'predicate' which is a function
    // (e.g. '(value) => {return value}') to execute
    // across all the values of the map.
    .map((value: EmployeeSpreadsheetObj) => {
      const updated_employee = value;
      new NiceSkeletonSpreadsheet()
        .get_example_sheet()
        .update_employee_spreadsheet(updated_employee);
    });
}
