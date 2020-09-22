class Customer {
  name: string;
  address: string;
  latitude: number;
  longitude: number;

  constructor(row_entry: Array<any>) {
    this.name = row_entry[0] == undefined ? "" : row_entry[0];
    this.address = row_entry[1] == undefined ? "" : row_entry[1];
    this.latitude = row_entry[2] == undefined ? "" : row_entry[2];
    this.longitude = row_entry[3] == undefined ? "" : row_entry[3];
  }
}
