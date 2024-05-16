// console.log('and Allah is the best of planners');

//class object
class Animal{
    name:string;
    species: string;
    sound: string;

    constructor(name:string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makesSound(){
        console.log(`${this.sound} ... .... .....`);
    }
}

class Animal2{

    constructor(public name:string,public species: string,public sound: string){
  
    }

    makesSound(){
        console.log(`${this.sound} ... .... .....`);
    }
}



const dog = new Animal("German Shepard bhaii", "dog", "gheu gheu");
console.log(dog.sound);
dog.makesSound();

Inheritance
class Cat extends Animal{
    constructor(name:string,species:string,sound:string,public gender:string){
        super(name,species,sound);
    }
}

const mini = new Cat("cat", "cat", "meu meu", "male");
console.log(mini.gender);


type normalUser = {
    name: string;
}

type admin = {
    name:string;
    role:string;
}

const getUser = (user : normalUser | admin)=>{
    if("role" in user){
        console.log('admin paisi mama');
    }
    else{
        console.log('normal user paisi mama... ... ...');
    }
}

const arnob : admin = {
    name:"arnob",
    role:"admin",
}

getUser(arnob);



{
    // oop - inheritence
    class Person {
      name: string;
      age: number;
      address: string;
  
      constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
      }
      getSleep(numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours}`);
      }
    }
  
  
    class Student extends Person {
      constructor(name: string, age: number, address: string) {
        super(name, age, address)
      }
     
    }
  
    const student1 = new Student("Mr. student", 20, "Uganda");
    student1.
  
  
    class Teacher extends Person{
      designation: string
  
      constructor(name: string, age: number, address: string,designation: string) {
        super(name, age , address)
        this.designation = designation
      }
     
     takeClass(numOfClass: number){
      console.log(`${this.name} will take ${numOfClass}`);
     }
    }
  
    const teacher = new Teacher("Mr. teacher", 40, "Uganda","professor");
    teacher.
    //
  }{
    // oop - inheritence
    class Person {
      name: string;
      age: number;
      address: string;
  
      constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
      }
      getSleep(numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours}`);
      }
    }
  
  
    class Student extends Person {
      constructor(name: string, age: number, address: string) {
        super(name, age, address)
      }
     
    }
  
    const student1 = new Student("Mr. student", 20, "Uganda");
    student1.
  
  
    class Teacher extends Person{
      designation: string
  
      constructor(name: string, age: number, address: string,designation: string) {
        super(name, age , address)
        this.designation = designation
      }
     
     takeClass(numOfClass: number){
      console.log(`${this.name} will take ${numOfClass}`);
     }
    }
  
    const teacher = new Teacher("Mr. teacher", 40, "Uganda","professor");
    teacher.
    //
  }


{
    // type guards
  
    // typeof --> type guard
  
    type Alphaneumeric = string | number;
  
    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
      if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
      } else {
        return param1.toString() + param2.toString();
      }
    };
  
    const result1 = add("2", "3");
    console.log(result1);
  
    // in guard
    type NormalUser = {
      name: string;
    };
  
    type AdminUser = {
      name: string;
      role: "admin";
    };
  
    const getUser = (user: NormalUser | AdminUser) => {
      if ("role" in user) {
        console.log(`My name is ${user.name} and my role is ${user.role}`);
      } else {
        console.log(`My name is ${user.name}`);
      }
    };
  
    const normalUser: NormalUser = {
      name: "Mr. Normal Bhai",
    };
    const adminUser: AdminUser = {
      name: "Mr. Admin Bhai",
      role: "admin",
    };
  
    getUser(adminUser);
  
    //
  }

{
    // instanceof guard
    class Animal {
      name: string;
      species: string;
  
      constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
      }
  
      makeSound() {
        console.log("I am making sound");
      }
    }
  
    class Dog extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
      makeBark() {
        console.log("I am barking");
      }
    }
  
    class Cat extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
      makeMeaw() {
        console.log("I am mewaing");
      }
    }
  
    // smart way tge handle korar jnne chaile amra function bebohar krte pari
    const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
    };
  
    const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
    };
  
    const getAnimal = (animal: Animal) => {
      if (isDog(animal)) {
        animal.makeBark();
      } else if (isCat(animal)) {
        animal.makeMeaw();
      } else {
        animal.makeSound();
      }
    };
  
    const dog = new Dog("Dog Bhai", "dog");
    const cat = new Cat("Cat Bhai", "cat");
  
    getAnimal(cat);
  
    //
  }



{
    // getter and setter
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      set deposit(amount: number) {
        this._balance = this.balance + amount;
      }
      // public addDeposit(amount: number) {
      //   this._balance = this._balance + amount;
      // }
  
      //getter
      get balance() {
        return this._balance;
      }
      // public getBalance() {
      //   return this._balance;
      // }
    }
  
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);
  
    // goribManusherAccount.deposit = 0;
    // goribManusherAccount.addDeposit(20); // function call korte hsse
    goribManusherAccount.deposit = 50;
    // const myBalance = goribManusherAccount.getBalance(); // function call korte hsse
  
    const myBalance = goribManusherAccount.balance; // property er mto kore
    console.log(myBalance);
  
    //
  }

{
    // static
    class Counter {
      static count: number = 0;
  
      static increment() {
        return (Counter.count = Counter.count + 1);
      }
  
      static decrement() {
        return (Counter.count = Counter.count - 1);
      }
    }
  
    // const instance1 = new Counter();
    console.log(Counter.increment()); // 1 -> different memory
    // 1 -> different memory
  
    // const instance2 = new Counter();
    console.log(Counter.increment()); // 1  --> different memory
    // 1  --> different memory
  
    // const instance3 = new Counter();
    console.log(Counter.increment());
    //
  }

{
    // polymorphisom
  
    class Person {
      getSleep() {
        console.log(`I am sleeping for 8 hours per day`);
      }
    }
  
    class Student extends Person {
      getSleep() {
        console.log(`I am sleeping for 7 hours per day`);
      }
    }
  
    class Developer extends Person {
      getSleep() {
        console.log(`I am sleeping for 6 hours per day`);
      }
    }
  
    const getSleepingHours = (param: Person) => {
      param.getSleep();
    };
  
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
  
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
  
    class Shape {
      getArea(): number {
        return 0;
      }
    }
  
    // pi* r* r
    class Circle extends Shape {
      radius: number;
      constructor(radius: number) {
        super();
        this.radius = radius;
      }
  
      getArea(): number {
        return Math.PI * this.radius * this.radius;
      }
    }
  
    // height * width
    class Reactangle extends Shape {
      height: number;
      width: number;
  
      constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
      }
  
      getArea(): number {
        return this.height * this.width;
      }
    }
  
    const getShapeArea = (param: Shape) => {
      console.log(param.getArea());
    };
  
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Reactangle(10, 20);
  
    getShapeArea(shape3);
  
    //
  }

{
    // abstraction  : 1. interface 2. abstract
  
    // idea
    interface Vehicle1 {
      startEngine(): void;
      stopEngine(): void;
      move(): void;
    }
  
    // real implementation
    class Car1 implements Vehicle1 {
      startEngine(): void {
        console.log(`I am starting the car engine`);
      }
      stopEngine(): void {
        console.log("I am stopping the car engine");
      }
      move(): void {
        console.log(`I am moving the car`);
      }
      test() {
        console.log(`I am just testing`);
      }
    }
  
    const toyotaCar = new Car1();
    toyotaCar.startEngine();
  
    // abstract class
  
    // idea
    abstract class Car2 {
      abstract startEngine(): void;
      abstract stopEngine(): void;
      abstract move(): void;
      test() {
        console.log(`I am just testing`);
      }
    }
  
    class ToyotaCar extends Car2 {
      startEngine(): void {
        console.log("I am starting the car  engine");
      }
      stopEngine(): void {
        console.log("I am stopping the car engine");
      }
      move(): void {
        console.log("I am moving  the car");
      }
    }
  
    // const hondaCar = new Car2();
    // hondaCar.startEngine();
  
    //
  }

{
    // access modifiers
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
     public  addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
  
     private getBalance() {
        return this._balance;
      }
  
      getHiddenMethod(){
        return this.getBalance()
      }
    }
  
    class StudentAccount extends BankAccount{
      test(){
        this.
      }
    }
  
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
  
    goribManusherAccount.
  
    //
  }
