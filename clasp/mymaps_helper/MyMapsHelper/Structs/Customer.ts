class Customer {
  public name: () => string;
  public address: () => string;
  public latitude: () => number;
  public longitude: () => number;

  constructor(inputs: {
    name: any;
    address: any;
    latitude: any;
    longitude: any;
  }) {
    const { name, address, latitude, longitude } = inputs;
    this.name = () => {
      return name == undefined ? "" : name;
    };
    this.address = () => {
      return address == undefined ? "" : address;
    };
    this.latitude = () => {
      return latitude == undefined ? "" : latitude;
    };
    this.longitude = () => {
      return longitude == undefined ? "" : longitude;
    };
  }
}
