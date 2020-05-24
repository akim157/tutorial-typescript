"use strict";
var react1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var react2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
react2.color = 'black';
var react3 = {};
var react4 = {};
var rect5 = {
    id: '123',
    size: {
        width: 10,
        height: 10
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
//# sourceMappingURL=interface.js.map