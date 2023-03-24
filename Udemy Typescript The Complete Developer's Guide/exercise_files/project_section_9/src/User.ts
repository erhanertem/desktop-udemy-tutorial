import { faker } from '@faker-js/faker';
import { addableMarker } from './Map';

export class User implements addableMarker {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h6>User Name: ${this.name}</h6>
    </div>
    `;
  }
}
