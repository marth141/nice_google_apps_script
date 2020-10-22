class DispositionCalculator {
  result: (tasks: Task[]) => DispositionStats;

  constructor() {
    this.result = (tasks: Task[]) => {
      const {
        pass,
        crew_complete,
        pass_with_conditions,
        fail_cads,
        fail_crew,
        fail_electrical,
        fail_homeowner,
        fail_inspector,
        fail_permit,
        fail_pm,
        fail_solar_tech,
        fail_existing_conditions,
        fail_weather,
      } = new Dispositions();
      let stats = new DispositionStats();
      for (const task of tasks) {
        switch (task.dispositions_install_department) {
          case pass.name:
            stats.pass_count++;
            continue;
          case crew_complete.name:
            stats.crew_complete_count++;
            continue;
          case pass_with_conditions.name:
            stats.pass_with_conditions_count++;
            continue;
          case fail_cads.name:
            stats.fail_cads_count++;
            continue;
          case fail_crew.name:
            stats.fail_crew_count++;
            continue;
          case fail_electrical.name:
            stats.fail_electrical_count++;
            continue;
          case fail_homeowner.name:
            stats.fail_homeowner_count++;
            continue;
          case fail_inspector.name:
            stats.fail_inspector_count++;
            continue;
          case fail_permit.name:
            stats.fail_permit_count++;
            continue;
          case fail_pm.name:
            stats.fail_pm_count++;
            continue;
          case fail_solar_tech.name:
            stats.fail_solar_tech_count++;
            continue;
          case fail_existing_conditions.name:
            stats.fail_existing_conditions_count++;
            continue;
          case fail_weather.name:
            stats.fail_weather_count++;
            continue;
          case "":
            stats.missing_disposition++;
          default:
            stats.scheduled_count++;
            continue;
        }
      }
      stats.pass_rate = ((stats) => {
        let {
          pass_count,
          pass_with_conditions_count,
          crew_complete_count,
          fail_crew_count,
          fail_electrical_count,
        } = stats;
        const total_pass =
          pass_count + crew_complete_count + pass_with_conditions_count;
        const total_fail = fail_crew_count + fail_electrical_count;
        const total = total_pass + total_fail;
        const result = total_pass / total;
        return result ? result : 0;
      })(stats);
      return stats;
    };
  }
}
