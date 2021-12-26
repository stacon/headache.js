// ES5 Person implementation

/**
 * Person function contructor per ES5
 * @param {string} name
 * @param {string} surname
 */
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  // this.printName = function () { ... }
}

/**
 * Extending Person prototype. This way the function is available to all instances of Person
 * If we added the function to the Person prototype, it would be created in memory for every instance
 */
Person.prototype.printName = function () {
  console.log(this.name + " " + this.surname);
};

const stacon = new Person("Sta", "Con");

stacon.printName();
