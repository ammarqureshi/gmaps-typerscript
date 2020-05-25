import faker from 'faker';
import { Mappable } from './CustomMap';

//make sure User satisfies all of the properties of Mappable
//not required to add implements but with it TS will do additional checking of the class properties
//if we fail to implement the interface properly TS can point to the true source of the error
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string {
    return `User Name: ${this.name}`;
  }

  constructor() {
    this.name = faker.name.firstName();
    //need to initalise location object
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
