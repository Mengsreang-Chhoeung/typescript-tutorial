// Number
let newNum: number = 100;
// String
let lastName: string = "mengsreang";
// Boolean
let married: boolean = false;
// Array
let score: number[] = [50, 30, 20];
let body: string[] = ['hand', 'head', 'mouth', 'teeth'];
let accepted: boolean[] = [true, false, true];
// Null
let noName: null = null;
// Undefined
let noValue: undefined = undefined;
// Any
let anyTypeYouWant: any = "Hello World";
// Function
function greeting(name: string): void {
    console.log(`Hello ${name.toUpperCase()}!!!`);
}
greeting('jonh');
function sum(a: number, b: number): number {
    return a + b;
}
sum(10, 20);
function getFullName(firstName: string, lastName: string): string {
    return `Hello my name is ${firstName.toUpperCase()} ${lastName.toUpperCase()}!!!`;
}
getFullName('mengsreang', 'chhoeung');
// Object
function printNumber(num: {a: number, b: number}):void {
    console.log(`The number a: ${num.a} and also b: ${num['b']}`);
}
printNumber({a: 10, b: 20});
function printName(name: {firstname: string, lastname: string}):void {
    console.log(`Here are my full name: ${name['firstname']} ${name.lastname}!!!`);
}
printName({firstname: 'dara', lastname: 'kok'});
function printOptionalAddress(address: {address1: string, address2?: string}): void {
    console.log(`Here are my address: ${address.address1} ${address.address2}`!!!);
}
printOptionalAddress({address1: 'Phnom Penh'});
// Union
function printId(id: number | string): void {
    console.log(`Your ID: ${id}`);
}
printId(100);
printId('RUPP001');
function printBothId(id: number | string): void {
    if(typeof id === 'string') console.log(`Your ID: ${id.toUpperCase()}`);
    else console.log(`Your ID: ${id}`);
}
printBothId(200);
printBothId('rupp006');
function printBothString(people: string[] | string): void {
    if(Array.isArray(people)) console.log(`Hello ${people.join(' and ')}`);
    else console.log(`Hello ${people}`);
}
printBothString(['thyda', 'seyha', 'bopha', 'dyna', 'bona']);
printBothString('mengsreang');

// Type
type Point = {
    m: number;
    n: number;
};
function printPoint(pt: Point): void {
    console.log(`I got ${pt.m} and ${pt.n}!!!`);
}
printPoint({m: 75, n: 60});

// Interface
interface Person {
    name: string;
    sex: string;
    married: boolean;
};
function printPerson(per: Person): void {
    console.log(`Hello ${per.name} and sex is ${per.sex} and married: ${per.married}!!!`);
}
printPerson({name: 'john doe', sex: 'male', married: true});