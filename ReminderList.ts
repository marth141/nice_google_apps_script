class ReminderList {
  get: GoogleAppsScript.Spreadsheet.Sheet;
  update: any;
  records: Array<Array<any>>;
  last_sent_column: GoogleAppsScript.Spreadsheet.Range;

  constructor() {
    this.get = SpreadsheetApp.openByUrl(
      "https://docs.google.com/spreadsheets/d/1m5VAMNTHd88EZyEA4hxbEb2s2dmQ_031qs5DaHnOeUI/edit#gid=0"
    ).getSheetByName("Sheet1");
    this.update = function (employee: Employee) {
      new ReminderList().get
        .getRange(employee.row_index, 3)
        .setValue(new Date());
    };
    this.records = this.get.getRange("A2:C").getValues();
    this.last_sent_column = this.get.getRange("C2:C");
  }
}
