
// 07 - OOP

import Entity from './entity';

let Merry = new Entity('Merry', 4.6);
Merry.greet();

class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height);
  }
  greet() {
    console.log(`Hello I'am ${this.name} from the Shire!`);
  }
}

let frodo = new Hobbit('Frodo Baggins', 4.5);

frodo.greet();