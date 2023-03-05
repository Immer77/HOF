let users = [
    {
        name: 'Yazeed',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Bill',
        age: 28
    }
]

// Den ene måde at gøre det på:
/* 
let getname = (user) => user.name;
let usernames = [];

for(let i = 0; i < users.length; i++){
    const name = getname(users[i])

    usernames.push(name);
}

console.log(usernames);
*/
//--------------------------------------
//Brug af HOF Map
// Map mapper alle elementer i et array
let usernames = users.map((user) => user.name);
console.log(usernames);


// Filter

let startsWithB = (string) => string.toLowerCase().startsWith('b');

let namesStartingWithB = [];
/*
for(let i = 0; i < users.length; i++){
    if(startsWithB(users[i].name)){
        namesStartingWithB.push(users[i]);
    }
}
console.log(`Starting with b is ${namesStartingWithB}`);
console.log(namesStartingWithB);
*/
// Bedre måde ed brug af HOF
namesStartingWithB = users.filter((user) => startsWithB(user.name));
console.log(namesStartingWithB);

let wheresBill = users.findIndex((n) => n.name =="Bill");
console.log(wheresBill);


let tal = 23122193;

function reverseANumber(n){
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(reverseANumber(tal));