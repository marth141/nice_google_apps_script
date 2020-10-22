class SoCO {
  areas: string[];
  tasks: () => Task[];

  constructor() {
    this.areas = [
      "Canon City",
      "Colorado Springs",
      "Florence",
      "Penrose",
      "Pueblo",
    ];
    this.tasks = () => {
      const { q1_sheet, q2_sheet, q3_sheet, q4_sheet } = new Spreadsheet();
      const tasks = []
        .concat(q1_sheet.tasks)
        .concat(q2_sheet.tasks)
        .concat(q3_sheet.tasks)
        .concat(q4_sheet.tasks);

      return tasks.filter((task: Task) => this.areas.includes(task.sales_area));
    };
  }
}
