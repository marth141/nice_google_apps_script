class LatLngCalculator {
  public lat_lng_result: (customers: Array<Customer>) => Array<Customer>;

  constructor() {
    this.lat_lng_result = (customers: Array<Customer>) => {
      return customers.map((customer: Customer, index: number) => {
        const index_offset = (function get_offset(index: number) {
          return index + 1;
        })(index);
        switch (index_offset) {
          case 1:
            break;
          default:
            const response = Maps.newGeocoder().geocode(customer.address());
            switch (response.results.length > 0) {
              case true:
                return new Customer({
                  name: customer.name(),
                  address: customer.address(),
                  latitude: (function get_latitude(response: any): number {
                    return response.results[0].geometry.location.lat;
                  })(response),
                  longitude: (function get_longitude(response: any): number {
                    return response.results[0].geometry.location.lng;
                  })(response),
                });
              default:
                return new Customer({
                  name: customer.name(),
                  address: customer.address(),
                  latitude: "BAD ADDRESS",
                  longitude: "BAD ADDRESS",
                });
            }
        }
      });
    };
  }
}
