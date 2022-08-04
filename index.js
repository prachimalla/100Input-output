// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let a = [];
let b = [];
console.log(a == b, a === b);

b = a;
console.log(a == b, a === b);

let aO = { name: 'p' };
let bO = { name: 'p' };
let CO = aO;
console.log(aO == bO, aO === bO, aO === CO, typeof CO);

console.log(...[1, 2, 3]);

console.log(10 - -10);
const d = [1, 2, 3];
const [e, f] = d;
const { g } = { name: 'prachi' };
console.log(e, f, g);

const h = { a: 20, b: 30 };
const i = { c: 60, a: 60 };
console.log({ ...h, ...i }, ...'abc', ...[1, 6, 7]);

const abc = false || {} || null || 20; //  return 1st positive value if no +ve value then return last negative value
const ab = {} && false && null; //return 1st negative value
console.log(abc, ab);

// JSON.parse() // convert json to javasctipt value
