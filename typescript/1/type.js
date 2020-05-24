"use strict";
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = "Hello Typesctipt";
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ["Hello", "TypeScript"];
//Tuple
var conact = ["Vladilen", 1234567];
//Any
var variable = 42;
variable = "New String";
variable = [];
//
function sayMayName(name) {
    console.log(name);
}
sayMayName("Хазенберг");
//Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
//# sourceMappingURL=type.js.map