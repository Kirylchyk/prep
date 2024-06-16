//JS

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Alice", 30);
person1.greet(); // Outputs: Hello, my name is Alice, and I am 30 years old.

let person2 = new Person("Bob", 25);
person2.greet(); // Outputs: Hello, my name is Bob, and I am 25 years old.

//TS

class PersonTS {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person3 = new PersonTS("Alice", 30);
person1.greet(); // Outputs: Hello, my name is Alice, and I am 30 years old.

let person4 = new PersonTS("Bob", 25);
person2.greet(); // Outputs: Hello, my name is Bob, and I am 25 years old.

