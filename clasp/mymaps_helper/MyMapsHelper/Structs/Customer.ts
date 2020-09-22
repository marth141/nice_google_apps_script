class Customer {
  public name: () => string;
  public address: () => string;
  public latitude: () => number;
  public longitude: () => number;

  constructor([name, address, latitude, longitude]: Array<any>) {
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
