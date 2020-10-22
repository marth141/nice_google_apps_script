class Spreadsheet {
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  norco_dashboard: NorCODashboard;
  soco_dashboard: SoCODashboard;
  wesco_dashboard: WesCODashboard;
  mn_dashboard: MNDashboard;
  ut_dashboard: UTDashboard;
  missing_install_area_dashboard: MissingInstallAreaDashboard;
  all_regions_dashboard: AllRegionsDashboard
  due_date_config: DueDateConfig;
  q1_sheet: Q1Sheet;
  q2_sheet: Q2Sheet;
  q3_sheet: Q3Sheet;
  q4_sheet: Q4Sheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.openById(
      "spreadsheet_id"
    );
    this.norco_dashboard = new NorCODashboard(this.spreadsheet);
    this.soco_dashboard = new SoCODashboard(this.spreadsheet);
    this.wesco_dashboard = new WesCODashboard(this.spreadsheet);
    this.mn_dashboard = new MNDashboard(this.spreadsheet);
    this.ut_dashboard = new UTDashboard(this.spreadsheet);
    this.missing_install_area_dashboard = new MissingInstallAreaDashboard(
      this.spreadsheet
    );
    this.all_regions_dashboard = new AllRegionsDashboard(this.spreadsheet)
    this.due_date_config = new DueDateConfig(this.spreadsheet);
    this.q1_sheet = new Q1Sheet(this.spreadsheet, this.due_date_config);
    this.q2_sheet = new Q2Sheet(this.spreadsheet, this.due_date_config);
    this.q3_sheet = new Q3Sheet(this.spreadsheet, this.due_date_config);
    this.q4_sheet = new Q4Sheet(this.spreadsheet, this.due_date_config);
  }
}
