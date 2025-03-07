const EventEmitter = require("events");
const myEmitter = new EventEmitter();

//listener 1
myEmitter.on("birthday", () => {
  console.log("Happy BirthDay AFi");
});
//listener 2
myEmitter.on("birthday", (gift) => {
  console.log(`I will send a ${gift}`);
});

myEmitter.emit("birthday", "watch");
