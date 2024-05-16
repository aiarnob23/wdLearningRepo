"use strict";
//------------object----------------
const user = {
    f: "aminul",
    l: "arnob",
    company: "new",
};
//-------------array------------
//declaration
let a = [1, 2, 3, 4];
//mapping
const newArray = a.map((num) => num * num);
//------------tuple 
let CoOrdinates = [2, 5]; //more than one type relation can be happen
//-----------functions--------------
//normal fn
function add(c, d) {
    return c + d;
}
//arrow fn
const add2 = (c, d) => {
    return c + d;
};
//fn inside object  or METHOD
const poorUser = {
    balance: 120,
    showBalance(balance) {
        console.log(balance);
    }
};
//----------- spread operator----------
const bros1 = ["Mir", "Firoz", "Mizan"];
const bros2 = ["Tanmoy", "Nahid", "Rahat"];
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
const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
console.log(mentorList);
//--------------------rest opeartor-------------
const greetFriends = (...friends) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends("Abul", "kabul", "babul", "ubul", "labul");
