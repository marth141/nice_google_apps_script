class UTDashboard {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  apply_stats: (range: string, stats: DispositionStats) => void;
  update_stats: () => void;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheet = spreadsheet.getSheetByName("UT Dashboard All Quarters");
    this.apply_stats = (range: string, stats: DispositionStats) => {
      let update = [
        [
          stats.pass_count,
          stats.crew_complete_count,
          stats.pass_with_conditions_count,
          stats.fail_crew_count,
          stats.fail_electrical_count,
          stats.fail_cads_count,
          stats.fail_homeowner_count,
          stats.fail_inspector_count,
          stats.fail_permit_count,
          stats.fail_pm_count,
          stats.fail_solar_tech_count,
          stats.fail_existing_conditions_count,
          stats.fail_weather_count,
          stats.scheduled_count,
          stats.missing_disposition,
          stats.pass_rate,
        ],
      ];
      this.sheet.getRange(`${range}`).setValues(update);
    };
    this.update_stats = () => {
      const activity_types = new ActivityTypes();
      const tasks = new UT().tasks();

      for (const key in activity_types) {
        if (Object.prototype.hasOwnProperty.call(new ActivityTypes(), key)) {
          const activity_type: ActivityType = new ActivityTypes()[key];
          const tasks_to_calc = activity_type.get(tasks);
          this.apply_stats(
            activity_type.range(),
            new DispositionCalculator().result(tasks_to_calc)
          );
        }
      }
    };
  }
}
