class ReminderList {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  update_last_sent: Function;
  records: Array<Array<any>>;
  last_sent_column: GoogleAppsScript.Spreadsheet.Range;

  constructor() {
    this.sheet = SpreadsheetApp.openByUrl(
      "spreadsheet_url"
    ).getSheetByName("Sheet1");
    this.update_last_sent = function (employee: Employee) {
      new ReminderList().sheet
        .getRange(employee.row_index, 3)
        .setValue(new Date());
    };
    this.records = this.sheet.getRange("A2:C").getValues();
    this.last_sent_column = this.sheet.getRange("C2:C");
  }
}
