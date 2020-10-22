class DueDateConfig {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  due_date_params: DueDateParams;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheetByName("Due Date Config");
    this.due_date_params = this.sheet
      .getRange("A:B")
      .getValues()
      .map(
        ([start_date, end_date]) =>
          new DueDateParams({
            start_date: start_date,
            end_date: end_date,
          })
      )
      .filter(
        (due_date_params: DueDateParams) =>
          typeof due_date_params.start_date != typeof ""
      )[0];
  }
}
