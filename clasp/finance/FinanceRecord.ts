class FinanceRecord {
  public name: string;
  public cost: number;
  public to_keep: boolean;
  constructor(name: any, cost: any, to_keep: any) {
    this.name = ((name: any) => {
      switch (name) {
        case "":
          return undefined;
        default:
          switch (typeof name) {
            case "string":
              return name;
            default:
              return undefined;
          }
      }
    })(name);
    this.cost = ((cost: any) => {
      switch (cost) {
        case "":
          return undefined;
        default:
          switch (typeof cost) {
            case "number":
              return cost;
            default:
              return undefined;
          }
      }
    })(cost);
    this.to_keep = ((to_keep: any) => {
      switch (to_keep) {
        case "":
          return undefined;
        default:
          switch (typeof to_keep) {
            case "boolean":
              return to_keep;
            default:
              return undefined;
          }
      }
    })(to_keep);
  }
}
