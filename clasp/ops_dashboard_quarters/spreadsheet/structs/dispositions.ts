class Dispositions {
  pass: { name: string; column: string };
  crew_complete: { name: string; column: string };
  pass_with_conditions: { name: string; column: string };
  fail_cads: { name: string; column: string };
  fail_crew: { name: string; column: string };
  fail_electrical: { name: string; column: string };
  fail_homeowner: { name: string; column: string };
  fail_inspector: { name: string; column: string };
  fail_permit: { name: string; column: string };
  fail_pm: { name: string; column: string };
  fail_solar_tech: { name: string; column: string };
  fail_existing_conditions: { name: string; column: string };
  fail_weather: { name: string; column: string };

  constructor() {
    this.pass = { name: "Pass", column: "B" };
    this.crew_complete = { name: "Crew - Completed", column: "C" };
    this.pass_with_conditions = { name: "Pass- with conditions", column: "D" };
    this.fail_cads = { name: "Fail- CADs", column: "E" };
    this.fail_crew = { name: "Fail- Crew", column: "F" };
    this.fail_electrical = { name: "Fail- Electrical", column: "G" };
    this.fail_homeowner = { name: "Fail- Homeowner", column: "H" };
    this.fail_inspector = { name: "Fail- inspector", column: "I" };
    this.fail_permit = { name: "Fail- Permit", column: "J" };
    this.fail_pm = { name: "Fail- PM", column: "K" };
    this.fail_solar_tech = { name: "Fail- Solar Tech", column: "L" };
    this.fail_existing_conditions = {
      name: "Fail - Existing Conditions",
      column: "M",
    };
    this.fail_weather = { name: "Fail - Weather", column: "N" };
  }
}
