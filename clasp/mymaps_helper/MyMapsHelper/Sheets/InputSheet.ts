class InputSheet {
  public sheet: () => GoogleAppsScript.Spreadsheet.Sheet;
  public fetch_customers: () => Array<Customer>;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = () => {
      return spreadsheet.getSheets()[0];
    };

    this.fetch_customers = () => {
      return this.sheet()
        .getRange("A:B")
        .getValues()
        .map(([name, address]: Array<any>) => {
          return new Customer([name, address, undefined, undefined]);
        })
        .filter(
          (customer: Customer) =>
            customer.name() != "" || customer.address() != ""
        );
    };
  }
}
