// What does this do and how does it work?

function lol(callback) {
  const cursed = () => callback
  return cursed
}

function hello() {
  return 'hello from the other side'
}

lol(hello)()()

const func1 = lol(hello);
const func2 = func1();
const message = func2();
console.log(message);

const thing = "blah".toUpperCase();
"blah".toUpperCase().reverse();


const blah = thing.func()
    .setX()
    .setRot()
    .build();