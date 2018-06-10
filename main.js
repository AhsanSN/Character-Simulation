console.log("Started");

//const movement = require('./movement');
const EventEmitter = require('events');
//const emitter = new EventEmitter();

//event trigger
const Movement = require('./movement');
const movement = new Movement();

//playing with events

movement.on("movedRight", (arg)=>{
	console.log("Heard the character move steps", arg);
});


//moving
movement.move_left('3');
movement.move_right('3');
movement.current_position();

//sending signals
//emitter.emit("movedRight", {steps: 3});


