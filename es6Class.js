// ES6 Person implementation

/**
 * Person class contructor per ES6. Class is actually a Function constructor with syntactic sugar
 */
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  // Under the hood, this method is being actually appended to the person prototype
  printName() {
    console.log(this.name + " " + this.surname);
  }
}

const stacon = new Person("Sta", "Con");
stacon.printName();
