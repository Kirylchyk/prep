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
