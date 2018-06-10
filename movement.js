
const EventEmitter = require('events');

var x_cood = 0;
class Movement extends EventEmitter
{
	move_right(steps = 5)
	{
		x_cood = x_cood +steps;
		console.log("moved up "+steps+" steps.");
	//send signal
	this.emit("movedRight", {steps: 3});
	}
	move_left(steps = 5)
	{
		x_cood = x_cood -steps;
		console.log(`moved down ${steps} steps.`);
	}
	current_position()
	{
		console.log("x =  "+x_cood);
	}
}

//two different ways of exporting modules
//way 1 (my prefference)
//for exporting class
module.exports = Movement;
/**
module.exports.move_right = move_right;
module.exports.move_left = move_left;
module.exports.current_position = current_position;
**/
//way 2
//module.exports = move_right;
//module.exports = move_left;
