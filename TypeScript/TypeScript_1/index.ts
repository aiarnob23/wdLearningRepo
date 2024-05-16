
//------------object----------------
const user :{
   readonly company:"new";//literal type and cant changable
    f:string;
    m?:string; //optional
    l:string;
   
} = {
    f:"aminul",
    l:"arnob",
    company:"new",
}

//-------------array------------
//declaration
let a : number[] = [1,2,3,4];
//mapping
const newArray : number[]= a.map((num: number) : number=> num*num);

//------------tuple 
let CoOrdinates : [number,number] = [2,5]; //more than one type relation can be happen

//-----------functions--------------
//normal fn
function add(c : number, d : number){
    return c+d;
}
//arrow fn
const add2 = (c: number, d: number)=>{
    return c+d;
}
//fn inside object  or METHOD
const poorUser = {
   balance : 120,
   showBalance(balance : number){
    console.log(balance);
   }
}


  //----------- spread operator----------

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);
  //console.log(bros1); //all from bros1 and bros2
  //console.log(bros2); //all from bros2 only

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  //console.log(mentorList);//all from mentors1 and mentors2

  //--------------------rest opeartor-------------

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "kabul", "babul", "ubul", "labul");




//------------object destructuring------------

const user2 = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "0170000000",
    address: "Uganda",
  };
  
  const {
    contactNo,
    name: { middleName: midName } //name allias,
  } = user2;
  
  // ---------------array destructuring------------------
  
  const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
  
  const [, , bestFriend, ...rest] = myFriends;

  //---------------- Type Alias-------------------

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "male",
    contactNo: "0170000000",
    address: "ctg",
  };

  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  const student3: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add3: Add = (num1, num2) => num1 + num2;

  //
   //
  // ------------------union types-----------

  type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
  type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

   type Developer = FrontendDeveloper | FullstackDeveloper

   const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

  type User3 ={
     name: string;
    email?: string;
    gender:"male"| "female";
    bloodGroup:"O+"|"A+"|"AB+"
  }

  const user1: User3 ={
    name:'persian',
    gender:'male',
    bloodGroup:'O+'
  }

  type FrontendDeveloper2 = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper2 = FrontendDeveloper & BackendDeveloper;

//   const fullstackDeveloper: FullstackDeveloper2 = {
//     skills: ["HTML", "CSS", "EXPRESS"],
//     designation1: "Frontend Developer",
//     designation2: "Backend Developer",
//   };

  //


//------------------- ternary operator--------------

    const age: number = 18;

    if (age >= 18) {
      console.log("adult");
    } else {
      console.log("not adult");
    }
  
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult });
  


    //--------------------nullish coalescing operator-----------
    // if left side is only null or undefined then return the right side operand
  
    const isAuthenticated = "";
  
    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
  
    type User9 = {
      name: string;
      address: {
        city: string;
        road: string;
        presentaddress: string;
        permanentAddress?: string;
      };
    };
  
    const user4: User9 = {
      name: "Persian",
      address: {
        city: "ctg",
        road: "Awesome Road",
        presentaddress: "ctg town",
      },
    };
  
    const permanentAddress =
      user4?.address?.permanentAddress ?? "No Permanent Address";
    console.log({ permanentAddress });
    

    // ----------------nullable types / unknown types-----------

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  // ------------unknown  typeof--------------

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSecond(null);

  //--------------never-----------------
  //returns nothing

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hogaya");

  //