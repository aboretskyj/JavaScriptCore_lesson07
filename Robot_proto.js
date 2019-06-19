//Prototypal inheritance

var Robot = {
    name : "Robot",
    duty : "I just work",

    work: function () {
        show("I'm " + this.name + ". " + this.duty + ".");
    },
};

var CoffeeRobot = {
    name : "CoffeeRobot",
    duty : "I just make a coffee",
    __proto__: Robot
};

var RobotDancer = {
    name : "RobotDancer",
    duty : "I just dance",
    __proto__: Robot
};

var RobotCoocker = {
    name : "RobotCoocker",
    duty : "I just coock",
    __proto__: Robot
};

var Robots = [Robot, CoffeeRobot, RobotDancer, RobotCoocker];
for (i = 0; i < Robots.length; i++) {
    Robots[i].work();
};




// functions

function show(data) {
    console.log(data);
};