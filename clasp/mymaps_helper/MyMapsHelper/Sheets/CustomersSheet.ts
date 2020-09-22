class CustomersSheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  fetch_customers: () => Array<Customer>;
  update_customers: (customers: Array<Customer>) => void;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheets()[0];

    this.fetch_customers = () => {
      return this.sheet
        .getRange("A:B")
        .getValues()
        .map((row_entry: Array<any>) => {
          return new Customer(row_entry);
        })
        .filter(
          (customer: Customer) => customer.name != "" || customer.address != ""
        );
    };

    this.update_customers = (customers: Array<Customer>) => {
      const customers_sheet = this.sheet;
      customers.map((customer: Customer, index: number) => {
        const index_offset = ((index: number) => {
          const offset = 1;
          return index + offset;
        })(index);
        switch (index_offset) {
          case 1:
            break;
          default:
            const to_array = [
              [
                customer.name,
                customer.address,
                customer.latitude,
                customer.longitude,
              ],
            ];
            customers_sheet
              .getRange(`A${index_offset}:D${index_offset}`)
              .setValues(to_array);
            return;
        }
      });
    };
  }
}
