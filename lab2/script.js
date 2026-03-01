let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 220;
car1.driver = new Object();
car1.driver.name = "Vladyslav Danyleichuk";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive();

let car2 = {
    color: "red",
    maxSpeed: 180,
    driver: {
        name: "Vladyslav Danyleichuk",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2,
    drive: function() {
        console.log("I can drive anytime");
    }
};
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let drivingInfo = this.driver.nightDriving ? "drives at night" : "does not drive at night";
            console.log(`Driver ${this.driver.name} ${drivingInfo} and has ${this.driver.experience} years of experience`);
        }
    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

let truck1 = new Truck("white", 5000, 80, "Volvo", "FH16");
truck1.AssignDriver("Ivan", true, 5);
truck1.trip();

let truck2 = new Truck("blue", 4500, 90, "MAN", "TGX");
truck2.AssignDriver("Petro", false, 10);
truck2.trip();

class Square {
    constructor(a) {
        this.a = a;
    }
    static help() {
        console.log("Квадрат — це правильний чотирикутник, у якого всі сторони рівні, а всі кути прямі.");
    }
    length() {
        console.log(`Сума довжин сторін: ${4 * this.a}`);
    }
    square() {
        console.log(`Площа: ${this.a * this.a}`);
    }
    info() {
        console.log(`\n--- Геометрична фігура: Квадрат ---`);
        console.log(`Довжини 4 сторін: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
        console.log(`Кути: 90°, 90°, 90°, 90°`);
        this.length();
        this.square();
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    static help() {
        console.log("Прямокутник — це чотирикутник, усі кути якого прямі, а протилежні сторони рівні.");
    }
    length() {
        console.log(`Сума довжин сторін: ${2 * (this.a + this.b)}`);
    }
    square() {
        console.log(`Площа: ${this.a * this.b}`);
    }
    info() {
        console.log(`\n--- Геометрична фігура: Прямокутник ---`);
        console.log(`Довжини 4 сторін: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
        console.log(`Кути: 90°, 90°, 90°, 90°`);
        this.length();
        this.square();
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._a = a;
        this._alpha = alpha;
        this._beta = beta;
    }
    
    get a() { return this._a; }
    set a(value) { this._a = value; }
    get alpha() { return this._alpha; }
    set alpha(value) { this._alpha = value; }
    get beta() { return this._beta; }
    set beta(value) { this._beta = value; }

    static help() {
        console.log("Ромб — це паралелограм, у якого всі сторони рівні, а протилежні кути рівні.");
    }
    length() {
        console.log(`Сума довжин сторін: ${4 * this.a}`);
    }
    square() {
        let area = this.a * this.a * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Площа: ${area.toFixed(2)}`);
    }
    info() {
        console.log(`\n--- Геометрична фігура: Ромб ---`);
        console.log(`Довжини 4 сторін: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
        console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
        this.length();
        this.square();
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log("Паралелограм — чотирикутник, у якого протилежні сторони попарно паралельні, а протилежні кути рівні.");
    }
    length() {
        console.log(`Сума довжин сторін: ${2 * (this.a + this.b)}`);
    }
    square() {
        let area = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Площа: ${area.toFixed(2)}`);
    }
    info() {
        console.log(`\n--- Геометрична фігура: Паралелограм ---`);
        console.log(`Довжини 4 сторін: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
        console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
        this.length();
        this.square();
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let mySquare = new Square(5);
mySquare.info();

let myRectangle = new Rectangle(5, 10);
myRectangle.info();

let myRhombus = new Rhombus(6, 120, 60);
myRhombus.info();

let myParallelogram = new Parallelogram(6, 8, 120, 60);
myParallelogram.info();

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

let triangleDefaults = Triangular();
let triangleCustom1 = Triangular(6, 8, 10);
let triangleCustom2 = Triangular(10, 15, 20);

console.log(triangleDefaults);
console.log(triangleCustom1);
console.log(triangleCustom2);

function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };
}

let multiplyBy2 = PiMultiplier(2);
let multiplyBy2_3 = PiMultiplier(2/3);
let divideBy2 = PiMultiplier(1/2);

console.log(`PI * 2: ${multiplyBy2()}`);
console.log(`PI * 2/3: ${multiplyBy2_3()}`);
console.log(`PI / 2: ${divideBy2()}`);

function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`${color}, ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

let obj1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
let obj2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
let obj3 = { maxSpeed: 180, color: "purple", isCar: true };

PaintBlue(obj1);
PaintRed(obj1);
PaintYellow(obj1);

PaintBlue(obj2);
PaintRed(obj2);
PaintYellow(obj2);

PaintBlue(obj3);
PaintRed(obj3);
PaintYellow(obj3);
