class Humen {
    name: string = 'Maksim'
    age: number = 30

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello(): string {
        return `Hello ${this.name}!`
    }
}

class Man extends Humen {
    group: string = 'IT'
    course: number = 41

    constructor(name: string, age: number, group: string, course: number) {
        super(name, age)
        this.group = group
        this.course = course
    }

    sayHello(): string {
        const text = super.sayHello()
        return `${text} I from group ${this.group}`
    }
}

class Teachers extends Humen {
    disciplines: string[] = []

    constructor(name: string, age: number, disciplines: string[]) {
        super(name, age)
        this.disciplines = disciplines
    }
}

const IraHumen = new Humen('Ira', 18)
const Denis = new Humen('Denis', 20)
const NewDenis: Humen = <Humen>Denis
const Liza: Humen = new Man('Liza', 23, 'PI', 2)