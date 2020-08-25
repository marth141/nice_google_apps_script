class ReminderList {
  get: GoogleAppsScript.Spreadsheet.Sheet;
  update: any;
  records: Array<Array<any>>;
  last_sent_column: GoogleAppsScript.Spreadsheet.Range;

  constructor() {
    this.get = new Controller().spreadsheet.getSheetByName("Sheet1");
    this.update = function (employee: Employee) {
      new ReminderList().get
        .getRange(employee.row_index, 3)
        .setValue(new Date());
    };
    this.records = new ReminderList().get.getRange("A2:C").getValues();
    this.last_sent_column = new ReminderList().get.getRange("C2:C");
  }
}
