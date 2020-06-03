type Person1 = { name: string, age: number }
type Person2 = Partial<Person1> //делает поле не обязательным
type MyPartial<T> = { [P in keyof T] ? : T[P] }
type Person3 = MyPartial<Person1>