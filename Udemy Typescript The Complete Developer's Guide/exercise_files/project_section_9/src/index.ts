import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const user = new User();
console.log(user);
const company = new Company();
console.log(company);
new CustomMap('map', 5);
