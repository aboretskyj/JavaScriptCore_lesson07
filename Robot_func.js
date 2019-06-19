//Functional inheritance

var robot = new Robot();

var coffeeRobot = new CoffeeRobot();

var robotDancer = new RobotDancer();

var robotCoocker = new RobotCoocker();

var Robots = [robot, coffeeRobot, robotDancer, robotCoocker];
for (i = 0; i < Robots.length; i++) {
    Robots[i].work();
};

// functions

function Robot(){
    var self = this;

    this._n = "";
    this._d = "";
    
    this.name = function() {
        _n = "Robot";
    };

    this.duty = function() {
        _d = "I just work";
    }

    this.work = function() {
        this.duty();
        this.name();
        show ("I'm " + _n + ". " + _d +".");
    };
};

function CoffeeRobot() {
    Robot.call(this);

    this.name = function() {
        _n = "CoffeeRobot";
    };

    this.duty = function() {
        _d = "I just make a coffee";
    }; 
};

function RobotDancer() {
    Robot.call(this);

    this.name = function() {
        _n = "RobotDancer";
    };

    this.duty = function() {
        _d = "I just dance";
    }; 
};

function RobotCoocker() {
    Robot.call(this);

    this.name = function() {
        _n = "RobotCoocker";
    };

    this.duty = function() {
        _d = "I just coock";
    }; 
};


function show(data) {
    console.log(data);
};