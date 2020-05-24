var a = 1;
//null = any //любой тип
var obj = {};
//obj.text
var obj2 = { text: 'hello' };
var g1;
var g2;
//
function f(x, y) {
    return x + y;
}
//сигнатура функции
var b = function (x, y) { return x + y; };
var c;
//:void - ничего не возвращает
function e(x) {
    throw new Error(x);
}
//или бесконечные циклы
function fun(x, y) { }
//Преобразование типов
var d = 1;
var q = d; //может быть ошибкой
var w = 1; //любой тип, который требует проверку
var r = w; //преобразует тип в number
var t = w;
//
var y = 'Hello';
var u = y.length;
//Объединение типов
var h = 1;
var i = 1; //сокращение записи
var j = 1;
//Массивы
var arr = []; //any массив
//[1,2,3] - number массив
var arrN = [1, 2, 3];
var arrN2 = [1, 2, 3];
var arrA = [2, 3, 'hello'];
var arrA2 = [1, 2, 'hi'];
var arrQ = [1, '']; //обязательные данные - картеж
var arrQ2 = [1];
//Перечисление
var G;
(function (G) {
    G[G["A"] = 5] = "A";
    G[G["B"] = 6] = "B";
})(G || (G = {}));
console.log(G.A, G.B);
var G2;
(function (G2) {
    G2["A"] = "Hello";
    G2["B"] = "Type";
})(G2 || (G2 = {}));
console.log(G2.A, G2.B);
console.log(0 /* A */, 1 /* B */);
