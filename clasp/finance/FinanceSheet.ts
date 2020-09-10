class FinanceSheet {
  private sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public records: Array<FinanceRecord>;
  public total_bill: number;
  public update_percent: (value) => void;
  public update_total_to_remove: (value) => void;
  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheets()[0];
    this.records = (() =>
      this.sheet
        .getRange("A2:C")
        .getValues()
        .map(
          (record_row: Array<any>) =>
            new FinanceRecord(
              ((name) => name)(record_row[0]),
              ((cost) => cost)(record_row[1]),
              ((to_keep) => to_keep)(record_row[2])
            )
        )
        .filter(
          (record: FinanceRecord) =>
            record.name !== undefined &&
            record.cost !== undefined &&
            record.to_keep !== undefined
        ))();
    this.total_bill = ((value: any) => {
      switch (typeof value) {
        case "number":
          return value;
        default:
          throw "D2 is not a number.";
      }
    })(this.sheet.getRange("D2").getValue());
    this.update_percent = (value: number) =>
      this.sheet.getRange("E2").setValue(value);

    this.update_total_to_remove = (value: number) =>
      this.sheet.getRange("F2").setValue(value);
  }
}
