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
const name ="prachi",
const age = 20;
console.log(isNaN(name),isNaN(age))

let myArray = [1,2,3,4];
console.log('abc',myArray.unshift(),myArray
);

console.log(myArray.map(parseInt));
console.log(myArray.map(ele =>{
 return parseInt();
}))
console.log(typeof new Number(2));


var foo = [];

for(let i =0;i<10;i++){
  (function(){
    let y = i;
      foo[i] = function() {
        return y
      };
  })()
}
console.log(foo[7]())

console.log(typeof !" ") // not of all  is false if it is a string and number type


console.log('i am ',mydata)
var mydata = 'prachi'
function data(){
  console.log('data',mydata)
}

function yourData(){
  console.log('yourData',mydata)
  var mydata ="malla";
  data();
  console.log('abc',mydata)
}
yourData()


var k = 10;
console.log('numbe a',k);//10
function fn(){
  console.log('numbe b',k);//undefind
  var k = 20;
  k++;
  console.log('numbe c',k);//21

  if(k){
var k = 30;
k++;
console.log('numbe d',k);//31
  }
  console.log('numbe e',k);//21
}
fn()
console.log('numbe a',k);//10



d.push(2)
console.log(d)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

function mixArgumant(){
console.log(arguments)
}
mixArgumant('abc',1,myPromise)