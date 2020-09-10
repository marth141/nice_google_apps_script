class FinanceRecord {
  public name: string;
  public cost: number;
  public to_be_removed: boolean;
  constructor(name: any, cost: any, to_be_removed: any) {
    this.name = name;
    this.cost = cost;
    this.to_be_removed = to_be_removed;
  }
}
