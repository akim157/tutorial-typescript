var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = 'Jhon';
        this._age = 23;
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name1", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age1", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 0 && value < 100) {
                this._age = value;
            }
            else {
                throw new Error('Неверынй возраст');
            }
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.sayHello = function () {
        return "Hello " + this._name;
    };
    Person.description = function () {
        return 'This is class Person';
    };
    Person.isFlying = false;
    return Person;
}());
var person = new Person('Ivan', 21);
console.log(person.name1);
person.sayHello();
