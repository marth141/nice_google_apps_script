function myFunction() {
  new NiceSkeletonSpreadsheet()
    .get_example_sheet()
    .get_employee_spreadsheets()
    .map((value: EmployeeSpreadsheetObj) => {
      Logger.log(value);
    });
}
