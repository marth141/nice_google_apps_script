class ActivityTypes {
  inspection: ActivityType;
  install_fundable: ActivityType;
  installs_half_install: ActivityType;
  installs_gm_day_1: ActivityType;
  installs_gm_day_2: ActivityType;
  led_therm_install: ActivityType;
  meter_upgrade: ActivityType;
  work_order: ActivityType;
  full_install: ActivityType;
  lay_panels: ActivityType;
  permit_to_site: ActivityType;
  submit_permit: ActivityType;

  constructor() {
    this.inspection = new ActivityType({
      name: "Inspection",
      columns: "B:Q",
      row: 2,
    });
    this.install_fundable = new ActivityType({
      name: "Install Fundable",
      columns: "B:Q",
      row: 3,
    });
    this.installs_half_install = new ActivityType({
      name: "Installs 1/2 Install",
      columns: "B:Q",
      row: 4,
    });
    this.installs_gm_day_1 = new ActivityType({
      name: "Installs GM Day 1",
      columns: "B:Q",
      row: 5,
    });
    this.installs_gm_day_2 = new ActivityType({
      name: "Installs GM Day 2",
      columns: "B:Q",
      row: 6,
    });
    this.led_therm_install = new ActivityType({
      name: "LED/Therm Install",
      columns: "B:Q",
      row: 7,
    });
    this.meter_upgrade = new ActivityType({
      name: "Meter Upgrade",
      columns: "B:Q",
      row: 8,
    });
    this.work_order = new ActivityType({
      name: "Work Order",
      columns: "B:Q",
      row: 9,
    });
    this.full_install = new ActivityType({
      name: "Full Install",
      columns: "B:Q",
      row: 10,
    });
    this.lay_panels = new ActivityType({
      name: "Lay Panels",
      columns: "B:Q",
      row: 11,
    });
    this.permit_to_site = new ActivityType({
      name: "Permit to Site",
      columns: "B:Q",
      row: 12,
    });
    this.submit_permit = new ActivityType({
      name: "Submit Permit",
      columns: "B:Q",
      row: 13,
    });
  }
}
