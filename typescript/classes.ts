class Person {
  _name: string = "Jhon";
  _age: number = 23;

  get name1() {
    return this._name;
  }
  set name1(value) {
    this._name = value;
  }

  get age1() {
    return this._age;
  }
  set age1(value) {
    if (value > 0 && value < 100) {
      this._age = value;
    } else {
      throw new Error("Неверынй возраст");
    }
  }

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  sayHello(): string {
    return `Hello ${this._name}`;
  }

  static isFlying = false;
  static description(): string {
    return "This is class Person";
  }
}

const person = new Person("Ivan", 21);
console.log(person.name1);
person.sayHello();
//Наследование классов
class MyPerson {
  name: string = "";
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): string {
    return `Hello ${this.name}`;
  }
}

class Student extends MyPerson {
  group: string = "";
  course: number = 0;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this.group = group;
    this.course = course;
  }

  sayHello(): string {
    const text = super.sayHello();
    return `${text}! I from group ${this.group}`;
  }
}

class Teacher extends MyPerson {
  disciplines: string[] = [];
  constructor(name: string, age: number, disciplines: string[]) {
    super(name, age);
    this.disciplines = disciplines;
  }
}

const max: MyPerson = new MyPerson("Max", 23);
const denis: MyPerson = <MyPerson>max;
const liza: MyPerson = new Student("Liza", 12, "it-2", 1);
