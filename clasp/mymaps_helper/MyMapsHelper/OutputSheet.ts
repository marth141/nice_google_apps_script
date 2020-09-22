class OutputSheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  update_output: (customers: Array<Customer>) => void;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheets()[1];

    this.update_output = (customers: Array<Customer>) => {
      const output_sheet = this.sheet;
      customers.map((customer: Customer, index: number) => {
        const index_offset = ((index: number) => {
          const offset = 1;
          return index + offset;
        })(index);
        switch (index_offset) {
          case 1:
            break;
          default:
            output_sheet
              .getRange(`A${index_offset}:D${index_offset}`)
              .setValues([
                [
                  customer.name,
                  customer.address,
                  customer.latitude,
                  customer.longitude,
                ],
              ]);
            return;
        }
      });
    };
  }
}
