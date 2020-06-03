namespace Utils {
    export function log(text: string, color: string): void 
    export function log(text: string, color: string, fontSize: number): void
    export function log(text: string, color: string, fontSize?: number): void {
        if (fontSize) {
            console.log(`%c${text}, color: ${color}, font-size: ${fontSize}`)
            
        }
    }
}

Utils.log('Text', '#d9534f')

namespace Animals {
    export abstract class Animal {
        protected name: string

        constructor(name: string) {
            this.name = name
        }

        abstract say(): void
    }
}

export namespace Pets {
    export class Cat extends Animal {
        say() {
            Utils.log(`${this.name}: mya`, 'red')
        }
    }
}