// Number
var newNum = 100;
// String
var lastName = "mengsreang";
// Boolean
var married = false;
// Array
var score = [50, 30, 20];
var body = ['hand', 'head', 'mouth', 'teeth'];
var accepted = [true, false, true];
// Null
var noName = null;
// Undefined
var noValue = undefined;
// Any
var anyTypeYouWant = "Hello World";
// Function
function greeting(name) {
    console.log("Hello " + name.toUpperCase() + "!!!");
}
greeting('jonh');
function sum(a, b) {
    return a + b;
}
sum(10, 20);
function getFullName(firstName, lastName) {
    return "Hello my name is " + firstName.toUpperCase() + " " + lastName.toUpperCase() + "!!!";
}
getFullName('mengsreang', 'chhoeung');
// Object
function printNumber(num) {
    console.log("The number a: " + num.a + " and also b: " + num['b']);
}
printNumber({ a: 10, b: 20 });
function printName(name) {
    console.log("Here are my full name: " + name['firstname'] + " " + name.lastname + "!!!");
}
printName({ firstname: 'dara', lastname: 'kok' });
function printOptionalAddress(address) {
    console.log("Here are my address: " + address.address1 + " " + address.address2);
}
printOptionalAddress({ address1: 'Phnom Penh' });
// Union
function printId(id) {
    console.log("Your ID: " + id);
}
printId(100);
printId('RUPP001');
function printBothId(id) {
    if (typeof id === 'string')
        console.log("Your ID: " + id.toUpperCase());
    else
        console.log("Your ID: " + id);
}
printBothId(200);
printBothId('rupp006');
function printBothString(people) {
    if (Array.isArray(people))
        console.log("Hello " + people.join(' and '));
    else
        console.log("Hello " + people);
}
printBothString(['thyda', 'seyha', 'bopha', 'dyna', 'bona']);
printBothString('mengsreang');
function printPoint(pt) {
    console.log("I got " + pt.m + " and " + pt.n + "!!!");
}
printPoint({ m: 75, n: 60 });
;
function printPerson(per) {
    console.log("Hello " + per.name + " and sex is " + per.sex + " and married: " + per.married + "!!!");
}
printPerson({ name: 'john doe', sex: 'male', married: true });
