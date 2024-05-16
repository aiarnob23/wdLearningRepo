{
    //
  
    // type assertion
    let anything: any;
  
    anything = "Next Level Web Development";
  
    anything = 222;
  
    // (anything as number).
  
    const kgToGm = (value: string | number): string | number | undefined => {
      if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return `The converted value is : ${convertedValue}`;
      }
      if (typeof value === "number") {
        return value * 1000;
      }
    };
  
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000");
  
    type CustomError = {
      message: string;
    };
  
    try {
    } catch (error) {
      console.log((error as CustomError).message);
    }
  
    //
  }
  {
    // interface
  
    type User1 = {
      name: string;
      age: number;
    };
  
    interface User2 {
      name: string;
      age: number;
    }
  
    type UserWithRole1 = User1 & { role: string };
  
    interface UserWithRole2 extends User1 {
      role: string;
    }
  
    const user1: UserWithRole2 = {
      name: "Persian",
      age: 100,
      role: "manager",
    };
  
    type rollNumber = number;
  
    // js --> object , array-> object function -> object
  
    type Roll1 = number[];
  
    interface Roll2 {
     [index : number ] : number
    }
  
    const rollNumber1: Roll2 = [1,2,3]
                              
  
  
    type Add1 = (num1: number,num2:number)=> number
    
    interface Add2 {
      (num1: number,num2:number) : number
    }
  
    const add: Add2 = (num1 , num2 )=> num1+num2
    
    //
  }

{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(30, 20);

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];
}
{
    // intercae - generic
  
    interface Developer<T, X = null> {
      name: string;
      computer: {
        brand: string;
        model: string;
        releaseYear: number;
      };
      smartWatch: T;
      bike?: X;
    }
  
    type EmilabWatch = {
      brand: string;
      model: string;
      display: string;
    };
  
    const poorDeveloper: Developer<EmilabWatch> = {
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
  
    interface AppleWatch {
      brand: string;
      model: string;
      heartTrack: boolean;
      sleepTrack: boolean;
    }
  
    interface YamahaBike {
      model: string;
      engineCapacity: string;
    }
  
    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
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
  
    const createArray = (param: string): string[] => {
      return [param];
    };
  
    const createArrayWithGeneric = <T>(param: T): T[] => {
      return [param];
    };
  
    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  
    type User = { id: number; name: string };
  
    const resGenericObj = createArrayWithGeneric<User>({
      id: 222,
      name: "Mr. Pashan",
    });
  
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
      return [param1, param2];
    };
  
    const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
    const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
      name: "Asia",
    });
  
    const addCourseToStudent = <T>(student: T) => {
      const course = "Next Level Web Development";
      return {
        ...student,
        course,
      };
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
  
    const addCourseToStudent = <
      T extends { id: number; name: string; email: string }
    >(
      student: T
    ) => {
      const course = "Next Level Web Development";
      return {
        ...student,
        course,
      };
    };
  
    const student3 = addCourseToStudent({
      id: 44,
      name: "Mr. Z",
      email: "z@gmail.com",
      emni: "emni",
    });
  
    const student1 = addCourseToStudent<{
      id: number;
      name: string;
      email: string;
      devType: string;
    }>({
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
    // generic constraint with keyof operator
    type Vehicle = {
      bike: string;
      car: string;
      ship: string;
    };
  
    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle;
  
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
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
    // promise
  
    type Todo = {
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    };
  
    const getTodo = async (): Promise<Todo> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
  
      const data = await response.json();
      return data;
      // console.log(data);
    };
  
    getTodo();
  
    type Something = { something: string };
  
    // simulate
    const createPromise = (): Promise<Something> => {
      return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: "something" };
        if (data) {
          resolve(data);
        } else {
          reject("failed to load data");
        }
      });
    };
  
    // calling create promise function
    const showData = async (): Promise<Something> => {
      const data: Something = await createPromise();
      return data;
      // console.log(data);
    };
  
    showData();
  
    //
  }

  {
    //conditional type
  
    type a1 = number;
    type b1 = string;
  
    type x = a1 extends null ? true : false; // conditional type
  
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
  
    type Sheikh = {
      bike: string;
      car: string;
      ship: string;
      plane: string;
    };
  
    //keyof Sheikh   "bike" | "car" | "ship"
  
    // car ase kina / bike ase kina / ship kina / tractor ase kina
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  
    type HasPlane = CheckVehicle<"plane">;
    //
  }

  {
    // mapped types
  
    const arrOfNumbers: number[] = [1, 4, 5];
  
    // const arrOfStrings : string[] = ['1','4','5']
    const arrOfStrings: string[] = arrOfNumbers.map((number) =>
      number.toString()
    );
    console.log(arrOfStrings);
  
    type AreaNumber = {
      height: number;
      width: number;
    };
  
    type Height = AreaNumber["height"]; // look up type
    // type AreaString = {
    //   height: string;
    //   width: string
    // }
    // keyof AreaNumber => "height"|"width"
  
    // T => {height:string;width:number}
    // key => T["width"]
    type AreaString<T> = {
      [key in keyof T]: T[key];
    };
  
    const area1: AreaString<{ height: string; width: number }> = {
      height: "100",
      width: 50,
    };
  
    //
  }

  {
    //utility types
    // Pick
    type Person = {
      name: string;
      age: number;
      email?: string;
      contactNo: string;
    };
  
    type NameAge = Pick<Person, "name" | "age">;
  
    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;
  
    // Required
    type PersonRequired = Required<Person>;
  
    // Partial
    type PersonPartial = Partial<Person>;
  
    // Readonly
    type PersonReadonly = Readonly<Person>;
  
    const person1: PersonReadonly = {
      name: "Mr. XY",
      age: 200,
      contactNo: "017",
    };
    person1.name = "Mr. YZ";
  
    // Record
    // type MyObj = {
    //   a: string;
    //   b: string;
    // };
  
    type MyObj = Record<string, number>;
  
    const EmptyObj: Record<string, unknown> = {};
  
    const obj1: MyObj = {
      a: "aa",
      b: "bb",
      c: "cc",
      d: "dd",
      e: 6,
    };
  
    //
  }