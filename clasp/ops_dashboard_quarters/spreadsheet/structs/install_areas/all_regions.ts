class AllRegions {
  tasks: () => Task[];

  constructor() {
    this.tasks = () => {
      const { q1_sheet, q2_sheet, q3_sheet, q4_sheet } = new Spreadsheet();
      return []
        .concat(q1_sheet.tasks)
        .concat(q2_sheet.tasks)
        .concat(q3_sheet.tasks)
        .concat(q4_sheet.tasks);
    };
  }
}
