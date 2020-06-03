type A<T> = T
type B = A<string>
type C = A<'hello'>
type D = A<number>

type MyArr<T> = T[]
const arr: MyArr<string> = ['Hello', '...']

function echo<T>(x: T): T {
    return x
}
const echoo = <T>(x: T): T => x
const echooo: <T>(x: T) => T = <T>(x: T): T => x
const result: string = echo('Hello')
const resultt = echo<string>('Hello')

class List<T> {
    elements: T[] = []
    add(element: T) {
        this.elements.push(element)
    }
}

const list = new List<string>()
list.add('Hello')
// list.add(20) error

interface IList<T> {
    elements: T[]
    add(element: T): void
}

class Listt implements IList<string> {
    elements: string[] = []
    add(element: string): void {
        this.elements.push(element)
    }
}
const listt = new List()
listt.add('Hello')

type Aa<T extends string> = T
type Aaa<T> = T extends string ? string: never
type Bb = Aa<string>

function printName<T extends {name: string}>(person: T) {
    console.log(person.name)
}

interface IName {
    name: string
}
function printNamee<T extends IName>(person: T) {
    console.log(person.name)
}
printNamee({name: 'Igor', age: 20})

interface Aaaa {
    a: string,
    B: number,
    c: boolean
}
type B = keyof A

function getProperty<ObjectType, KeyType extends keyof ObjectType>(object: ObjectType, key: KeyType) {
    return object[key]
}

const result = getProperty({name: 'Igo', age: 23}, 'name')
const person = {name: 'Igor', age: 23}
type A<T> = T extends {
    [key: string]: infer U
} ? U : never
type B = typeof person
type C = A<B>

class Cat {
    say(): string {
        return 'neow'
    }
}

interface IClass<T> {
    new(): T //констурктор
}

function createObject<T>(c: IClass<T>): T {
    return new c();
}
const pet = createObject(Cat)