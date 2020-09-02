class ReminderSheet {
  public sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public update_last_sent: (employee: Employee, date: Date) => void;
  public records: Array<Array<any>>;
  public last_sent_column: GoogleAppsScript.Spreadsheet.Range;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheets()[0];
    this.update_last_sent = function (employee: Employee, date: Date) {
      this.sheet.getRange(employee.row_index, 5).setValue(date);
    };
    this.records = this.sheet.getRange("A2:E").getValues();
    this.last_sent_column = this.sheet.getRange("E2:E");
  }
}
