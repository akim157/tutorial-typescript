abstract class Person implements IPerson {
    abstract descriptions(): string
}

class Student extends Person {
    description(): string {
        return '...'
    }
}

//public - везде доступен
//private - использует только внутри класса
//protected - используется только в классе и наследниках 
//readonly - только в конструкторе изменяется в остальных случаех чтение
//public readonly age: number = 0
//constructor(public name: string, public age: number) {...} - автоматически создает одноименные свойства и записывает их
