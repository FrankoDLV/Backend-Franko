function a() {
  console.log("a");
}

function b() {
  console.log("b");
  for (let i = 0; i <= 100; i++) {}

  console.log("b2");
}

function c() {
  console.log("c");
}

a();
b();
c();
