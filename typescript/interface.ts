interface IPerson1 {
    name?: string
    age: number
    sayHello(): string
    // sayHello: () => string
}

type IHumen = {
    name: string,
    age: number,
    sayHello(): string
}

type IPersonProps = {
    name: string,
    age: number
}

type IPersons = IPersonProps & {
    sayHello(): string
}

interface Test {}

interface IPerson extends IPersonProps, Test {}

class Personss implements IPerson1 {}