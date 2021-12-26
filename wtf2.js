function cl() {
  console.log(myVar);
}

function b() {
  const myVar = "Hello Function B World";
  cl();
}

function a() {
  const myVar = "Hello Function A World";
  cl();
  b();
}

const myVar = "Hello Global World";

cl();
a();
