"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //
    // type assertion
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    // (anything as number).
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
{
    const user1 = {
        name: "Persian",
        age: 100,
        role: "manager",
    };
    const rollNumber1 = [1, 2, 3];
    const add = (num1, num2) => num1 + num2;
    //
}
{
    // const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers = [3, 6, 8];
    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors = ["Mr. X", "Mr. Y", "Mr. Z"];
    // const boolArray: boolean[] = [true, false, true];
    const boolArray = [true, false, true];
    const user = [
        {
            name: "Mezba",
            age: 100,
        },
        {
            name: "Jhankar Mahbub",
            age: 110,
        },
    ];
    const add = (x, y) => x + y;
    add(30, 20);
    const manush = ["Mr. X", "Mr. Y"];
    const UserWithID = [
        1234,
        { name: "persian", email: "a@gmail.com" },
    ];
}
{
    const poorDeveloper = {
        name: "Persian",
        computer: {
            brand: "Asus",
            model: "X-255UR",
            releaseYear: 2013,
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "OLED",
        },
    };
    const richDeveloper = {
        name: "Rich Dev",
        computer: {
            brand: "HP",
            model: "X-25UR",
            releaseYear: 2018,
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "Something",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "100cc",
        },
    };
    //
}
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric("Bangladesh");
    const resGenericObj = createArrayWithGeneric({
        id: 222,
        name: "Mr. Pashan",
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple("Bangladesh", 222);
    const res11 = createArrayWithTuple("Bangladesh", {
        name: "Asia",
    });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });
    //
}
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student3 = addCourseToStudent({
        id: 44,
        name: "Mr. Z",
        email: "z@gmail.com",
        emni: "emni",
    });
    const student1 = addCourseToStudent({
        id: 222,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        id: 333,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });
    //
}
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
    };
    const car = {
        model: "Toyota 100",
        year: 200,
    };
    const result1 = getPropertyValue(car, "sjs");
    // obj[key]   26
    //
}
{
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield response.json();
        return data;
        // console.log(data);
    });
    getTodo();
    // simulate
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "something" };
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to load data");
            }
        });
    };
    // calling create promise function
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
        // console.log(data);
    });
    showData();
    //
}
{
    //
}
{
    // mapped types
    const arrOfNumbers = [1, 4, 5];
    // const arrOfStrings : string[] = ['1','4','5']
    const arrOfStrings = arrOfNumbers.map((number) => number.toString());
    console.log(arrOfStrings);
    const area1 = {
        height: "100",
        width: 50,
    };
    //
}
{
    const person1 = {
        name: "Mr. XY",
        age: 200,
        contactNo: "017",
    };
    person1.name = "Mr. YZ";
    const EmptyObj = {};
    const obj1 = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        e: 6,
    };
    //
}
