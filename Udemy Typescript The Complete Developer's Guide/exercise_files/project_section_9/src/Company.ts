import { faker } from '@faker-js/faker';
import { addableMarker } from './Map';

export class Company implements addableMarker {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'yellow';
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h5>Company Name: ${this.companyName}</h5>
    <h6>Catch Phrase: ${this.catchPhrase}</h6>
    </div>
    `;
  }
}
