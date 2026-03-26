// Object is kind of like map/dictionary where we have "key- value" pairs
var details = ["kritika",19,90,false];

let x = {
    name: "kritika",
    age: 19,
    percentage: 90,
    'is married': false
};

console.log(x);
//print single key value
console.log(x.age);
// update key value
x['age'] = 15;
console.log(x['age']);

x.age = 12;
console.log(x.age);