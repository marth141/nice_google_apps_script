class ReminderSheet {
  public sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public update_last_sent: (employee: Employee) => void;
  public records: Array<Array<any>>;
  public last_sent_column: GoogleAppsScript.Spreadsheet.Range;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheets()[0];
    this.update_last_sent = function (employee: Employee) {
      this.sheet.getRange(employee.row_index, 3).setValue(new Date());
    };
    this.records = this.sheet.getRange("A2:D").getValues();
    this.last_sent_column = this.sheet.getRange("D2:D");
  }
}
