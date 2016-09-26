function Actor(name) {
    this.name = name;
}

Actor.prototype = {
    hello: function() {
        console.log('Hi, I am' + this.name);
    }

};

var leo = new Actor('Leonardo di Caprio')


var EventEmitter = require('events').EventEmitter;

var MyEmitter = function() {

}
