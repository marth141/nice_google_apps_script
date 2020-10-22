class Q4Sheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  tasks: Task[];

  constructor(
    spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet,
    due_date_config: DueDateConfig
  ) {
    this.sheet = spreadsheet.getSheetByName(
      "Ops Top 12 Activities Q4 2020 - Tasks"
    );
    this.tasks = this.sheet
      .getRange("A:M")
      .getValues()
      .map(
        ([
          name,
          activity_type,
          status,
          related_to,
          details,
          due_date,
          completed_date,
          created,
          install_area,
          dispositions_install_department,
          sales_area,
          solar_tech,
          installer,
        ]) =>
          new Task({
            name: name,
            activity_type: activity_type,
            status: status,
            related_to: related_to,
            details: details,
            due_date: due_date,
            completed_date: completed_date,
            created: created,
            install_area: install_area,
            dispositions_install_department: dispositions_install_department,
            sales_area: sales_area,
            solar_tech: solar_tech,
            installer: installer,
          })
      )
      .filter((task: Task) => {
        const due_date_params = due_date_config.due_date_params;
        return (
          task.due_date.valueOf() >= due_date_params.start_date.valueOf() &&
          task.due_date <= due_date_params.end_date
        );
      }, due_date_config);
  }
}
