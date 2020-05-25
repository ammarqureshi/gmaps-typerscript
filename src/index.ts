import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

//TS will check what type user and company is, checks if they both satisfy the Mappable inteface
customMap.addMarker(user);
customMap.addMarker(company);
