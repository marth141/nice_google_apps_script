class Customer {
  public name: () => string;
  public address: () => string;
  public latitude: () => number;
  public longitude: () => number;

  constructor(row_entry: Array<any>) {
    this.name = () => {
      return row_entry[0] == undefined ? "" : row_entry[0];
    };
    this.address = () => {
      return row_entry[1] == undefined ? "" : row_entry[1];
    };
    this.latitude = () => {
      return row_entry[2] == undefined ? "" : row_entry[2];
    };
    this.longitude = () => {
      return row_entry[3] == undefined ? "" : row_entry[3];
    };
  }
}
