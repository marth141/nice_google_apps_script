class ActivityType {
  name: string;
  columns: string;
  row: number;
  range: () => string;
  get: (tasks: Task[]) => Task[];

  constructor(input: { name: string; columns: string; row: number }) {
    const { name, columns, row } = input;
    this.name = name;
    this.columns = columns;
    this.row = row;
    this.range = () => {
      const { columns, row } = this;
      return columns.replace(`:`, `${row}:`).concat(`${row}`);
    };
    this.get = (tasks: Task[]) => {
      return tasks.filter((task: Task) => task.activity_type == this.name);
    };
  }
}
