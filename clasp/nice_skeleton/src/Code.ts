function myFunction() {
  new NiceSkeletonSpreadsheet()
    .get_employee_links_sheet()
    .get_employee_spreadsheets()
    .map((value: EmployeeSpreadsheetObj) => {
      Logger.log(value);
    });
}
