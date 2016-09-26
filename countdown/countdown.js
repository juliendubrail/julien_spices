var EventEmitter = require('events').EventEmitter;
// var secondElapsed = new EventEmitter();
// var secondElapsed = 0;

// module.exports = {
function Countdown(time) {
    console.log(this instanceof EventEmitter);
    var self = this;
    setTimeout(function fn() {
        // secondElapsed ++;
        self.emit('secondElapsed', time);
        time --;
        // console.log(secondElapsed);
        if (time >= 0) {
            setTimeout(fn, 1000);
        }
        // else {
        //     // console.log("Lift off!");
        //     self.emit("Lift off!");
        // }
    }, 1000);
}

// };

Countdown.prototype = new EventEmitter;

module.exports.Countdown = Countdown;

// module.exports.countdown.prototype = new EventEmitter;
