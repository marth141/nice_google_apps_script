class FinanceSheet {
  private sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public records: Array<FinanceRecord>;
  public total_bill: number;
  public update_percent: (value) => "OK" | "ERROR";
  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheets()[0];
    this.records = (() => {
      const values = this.sheet.getRange("A2:C").getValues();
      return values
        .map((row: Array<any>) => {
          const input = {
            name: row[0],
            cost: row[1],
            to_be_removed: row[2],
          };

          return new FinanceRecord(input.name, input.cost, input.to_be_removed);
        })
        .filter((element: FinanceRecord) => element.name !== "");
    })();
    this.total_bill = ((value: any) => {
      switch (typeof value === typeof 0) {
        case false:
          throw "D2 is not a number.";

        default:
          return value;
      }
    })(this.sheet.getRange("D2").getValue());
    this.update_percent = (value: number) => {
      try {
        this.sheet.getRange("E2").setValue(value);
        return "OK";
      } catch (error) {
        return "ERROR";
      }
    };
  }
}
