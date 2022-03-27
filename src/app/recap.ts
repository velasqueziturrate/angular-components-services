const username: string = 'danielviturrate';
const sum = (a:number, b:number) => {
  return a + b;
}

sum(1,2);

class Person{
  age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }

  // Esta linea es equivalente a la declaracion de las variables y el constructor de arriba
  // constructor(public age: number, public lastName: string){}
}

const dani = new Person(24, 'Velasquez');
dani.age;
dani.lastName;
