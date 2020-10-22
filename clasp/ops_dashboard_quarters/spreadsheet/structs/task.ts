class Task {
  name: string;
  activity_type: string;
  status: string;
  related_to: string;
  details: string;
  due_date: Date;
  completed_date: string;
  created: string;
  install_area: string;
  dispositions_install_department: string;
  sales_area: string;
  solar_tech: string;
  installer: string;

  constructor(input: {
    name: any;
    activity_type: any;
    status: any;
    related_to: any;
    details: any;
    due_date: any;
    completed_date: any;
    created: any;
    install_area: any;
    dispositions_install_department: any;
    sales_area: any;
    solar_tech: any;
    installer: any;
  }) {
    const {
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
    } = input;
    this.name = name;
    this.activity_type = activity_type;
    this.status = status;
    this.related_to = related_to;
    this.details = details;
    this.due_date = due_date;
    this.completed_date = completed_date;
    this.created = created;
    this.install_area = install_area;
    this.dispositions_install_department = dispositions_install_department;
    this.sales_area = sales_area;
    this.solar_tech = solar_tech;
    this.installer = installer;
  }
}
