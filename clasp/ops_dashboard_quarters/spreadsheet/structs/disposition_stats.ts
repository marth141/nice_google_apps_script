class DispositionStats {
  pass_count: number;
  crew_complete_count: number;
  pass_with_conditions_count: number;
  fail_cads_count: number;
  fail_crew_count: number;
  fail_electrical_count: number;
  fail_homeowner_count: number;
  fail_inspector_count: number;
  fail_permit_count: number;
  fail_pm_count: number;
  fail_solar_tech_count: number;
  fail_existing_conditions_count: number;
  fail_weather_count: number;
  scheduled_count: number;
  missing_disposition: number;
  pass_rate: number;

  constructor() {
    this.pass_count = 0;
    this.crew_complete_count = 0;
    this.pass_with_conditions_count = 0;
    this.fail_cads_count = 0;
    this.fail_crew_count = 0;
    this.fail_electrical_count = 0;
    this.fail_homeowner_count = 0;
    this.fail_inspector_count = 0;
    this.fail_permit_count = 0;
    this.fail_pm_count = 0;
    this.fail_solar_tech_count = 0;
    this.fail_existing_conditions_count = 0;
    this.fail_weather_count = 0;
    this.scheduled_count = 0;
    this.missing_disposition = 0;
    this.pass_rate = 0;
  }
}
