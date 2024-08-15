
const EventEmitter = require("events")
const emitter = new EventEmitter()
setInterval (() => {
    emitter.emit("timer", "This is first");
}, 2000);

setInterval (() => {
    emitter.emit("timer", "This is second")
}, 5000);

setInterval (() => {
    emitter.emit("timer", "This is third")
}, 7000);

emitter.on("timer", (msg) => console.log(msg))