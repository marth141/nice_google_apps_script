class LatLngCalculator {
  lat_lng_result: (customers: Array<Customer>) => Array<Customer>;

  constructor() {
    this.lat_lng_result = (customers: Array<Customer>) => {
      return customers.map((customer: Customer, index: number) => {
        const index_offset = ((index: number) => {
          const offset = 1;
          return index + offset;
        })(index);
        switch (index_offset) {
          case 1:
            break;
          default:
            return new Customer([
              customer.name,
              customer.address,
              (function latitude(address: string) {
                return Maps.newGeocoder().geocode(address).results[0].geometry
                  .location.lat;
              })(customer.address),
              (function longitude(address: string) {
                return Maps.newGeocoder().geocode(address).results[0].geometry
                  .location.lng;
              })(customer.address),
            ]);
        }
      });
    };
  }
}
