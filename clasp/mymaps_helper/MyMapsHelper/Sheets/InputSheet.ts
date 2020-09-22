class InputSheet {
  public sheet: () => GoogleAppsScript.Spreadsheet.Sheet;
  public fetch_customers: () => Array<Customer>;
  public update_customers: (customers: Array<Customer>) => void;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = () => {
      return spreadsheet.getSheets()[0];
    };

    this.fetch_customers = () => {
      return this.sheet()
        .getRange("A:B")
        .getValues()
        .map((row_entry: Array<any>) => {
          return new Customer(row_entry);
        })
        .filter(
          (customer: Customer) =>
            customer.name() != "" || customer.address() != ""
        );
    };

    this.update_customers = (customers: Array<Customer>) => {
      customers.map((customer: Customer, index: number) => {
        const index_offset = (index: number) => {
          return index + 1;
        };
        switch (index_offset(index)) {
          case 1:
            break;
          default:
            this.sheet()
              .getRange(`A${index_offset(index)}:D${index_offset(index)}`)
              .setValues([
                [
                  customer.name(),
                  customer.address(),
                  customer.latitude(),
                  customer.longitude(),
                ],
              ]);
            return;
        }
      });
    };
  }
}
