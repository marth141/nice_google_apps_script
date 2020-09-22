class OutputSheet {
  public sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public update_output: (customers: Array<Customer>) => void;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheets()[1];

    this.update_output = (customers: Array<Customer>) => {
      customers.map((customer: Customer, index: number) => {
        const index_offset = (index: number) => {
          return index + 1;
        };
        switch (index_offset(index)) {
          case 1:
            break;
          default:
            this.sheet
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
