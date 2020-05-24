let a: number = 1;
//null = any //любой тип
let obj: object = {};
//obj.text
let obj2: { text: string } = { text: "hello" };
let g1;
let g2: any;
//
function f(x: number, y: number): number {
  return x + y;
}
//сигнатура функции
let b = (x: number, y: number): number => x + y;
let c: (x: number, y: number) => number;
//:void - ничего не возвращает
function e(x: string): never {
  throw new Error(x);
}
//или бесконечные циклы
function fun(x: any, y: any): any {}
//Преобразование типов
let d: any = 1;
let q: number = d; //может быть ошибкой
let w: unknown = 1; //любой тип, который требует проверку
let r: number = <number>w; //преобразует тип в number
let t: number = w as number;
//
let y: any = "Hello";
let u: number = (<string>y).length;
//Объединение типов
let h: number | string = 1;

type I = number | string;
let i: I = 1; //сокращение записи
//
type J = 1 | 2 | 3;
let j: J = 1;
type JKL = "a" | 1 | boolean;
//Объединить объекты
//Перечисление типов
type N = { a: string } & { b: string };
type D = { a: string; b?: string };
//Массивы
let arr = []; //any массив
//[1,2,3] - number массив
let arrN: number[] = [1, 2, 3];
let arrN2: Array<number> = [1, 2, 3];
let arrA: (number | string)[] = [2, 3, "hello"];
let arrA2: Array<number | string> = [1, 2, "hi"];
let arrQ: [number, string] = [1, ""]; //обязательные данные - картеж
let arrQ2: [number, string?] = [1];
//Перечисление
enum G {
  A = 5,
  B,
}
console.log(G.A, G.B);
enum G2 {
  A = "Hello",
  B = "Type",
}
console.log(G2.A, G2.B);
const enum H {
  A,
  B,
}
console.log(H.A, H.B);
