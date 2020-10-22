class PassRateConditionalFormatter {
  run: () => any;

  constructor() {
    const {
      all_regions_dashboard,
      norco_dashboard,
      soco_dashboard,
      wesco_dashboard,
      mn_dashboard,
      ut_dashboard,
    } = new Spreadsheet();
    this.run = () => {
      const sheets = {
        all_regions_dashboard,
        norco_dashboard,
        soco_dashboard,
        wesco_dashboard,
        mn_dashboard,
        ut_dashboard,
      };
      for (const key in sheets) {
        if (Object.prototype.hasOwnProperty.call(sheets, key)) {
          const sheet_class = sheets[key];
          const sheet: GoogleAppsScript.Spreadsheet.Sheet = sheet_class.sheet;
          const rules = sheet.getConditionalFormatRules();
          const col = sheet.getRange(`Q2:Q13`).getColumn();
          const rows = sheet.getRange(`Q2:Q13`).getValues().length;

          const new_rule = SpreadsheetApp.newConditionalFormatRule();
        }
      }
    };
  }
}
