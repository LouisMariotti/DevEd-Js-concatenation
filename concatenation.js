const bank1 = 100;
const bank2 = 50;

/* We saw previously that we can add the values together by creating a new
varibale as we can see below */

const allBanks = bank1 + bank2;
console.log(allBanks); // But this is different with strings

const greeting = "Welcome to our website";
const user = "Louis";
console.log(greeting + user); // it's going to work but we will have spacing issues

// There are some rules to follow while using concatenation

const text = 'a famous author once said "MAIS C\'ETAIT SUUUR ENFAIIIIITE!"';
// We add backslash to help us to concatenate or we can use `` with this we won't have any issues
console.log(text);

const nothing = `Hello and welcome to our 'freshy' website ${user}`; // we added the user value also
console.log(nothing);

// We installed the Prettier extenttion that's going to facilitate our work
