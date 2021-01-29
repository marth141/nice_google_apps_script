class NiceSkeletonSpreadsheet {
  // Since we're using TypeScript, we'll define properties
  // for our class here.
  spreadsheet_id: string;
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  // Written like this we can either give a spreadsheet_id to
  // the constructor or we can define the default.
  // Optional spreadsheet! Modular!
  constructor(spreadsheet_id = "spreadsheet_id") {
    // This little pattern is so as to not lose track of which 'this'.
    const this_class = this;
    // This is some object destructuring.
    const { get_spreadsheet } = this_class;

    // Here we assign the properties of our class.
    this.spreadsheet_id = spreadsheet_id;
    this.spreadsheet = get_spreadsheet(spreadsheet_id);
  }

  // Here we define some methods for our class.
  // I figured that because this is the spreadsheet class,
  // these methods should only deal with getting the spreadsheet.
  get_spreadsheet(spreadsheet_id = this.spreadsheet_id) {
    return SpreadsheetApp.openById(spreadsheet_id);
  }

  // The spreadsheet should also just provide the sheets really.
  get_example_sheet(spreadsheet = this.spreadsheet) {
    return new ExampleEmployeeLinksSheet(spreadsheet);
  }
}
