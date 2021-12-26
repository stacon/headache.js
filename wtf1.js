// ES6 Functional Person implementation

/**
 * Person function contructor creating an instance by calling the new function
 */
const Person = {
  new: (name, surname) => ({
    name,
    surname,
    printName,
  }),
};

/**
 * printName should print name and surname from the object where "this" is pointing to
 * Creating this function outside the return statement of person to be passed as a reference and not being recreated every time
 */
const printName = function () {
  console.log(this.name + " " + this.surname);
};

const stacon = Person.new("Sta", "Con");
stacon.printName();

function something() {
  const printName = function () {
    console.log("You are funked " + this.name + " " + this.surname);
  };
  const vaiosAnastasiades = Person.new("Vaios", "Anastasiades");
  vaiosAnastasiades.printName();
}

something();
