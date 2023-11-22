/*
    07:17:32 Function Inside Object in JavaScript
    07:33:58 JavaScript Destructuring Assignment in JavaScript
    07:49:43 Destructuring in JavaScript
    08:00:39 Creating Object in JavaScript
    08:08:23 Dot Notation and Bracket Noatation in JavaScript
    08:14:01 Iterating Through JavaScript Objects
    08:21:06 Organizing Data with Objects inside Arrays in JavaScript
----------------------------------------------------------------------------

//function Inside object
     this -- defined as the call current object
    const object ={
        Name:"Praveen Kumar",
        age:25,
        // meathod:function(){
        //     console.log("I am a Java Script meathod");
        // },
        // meathod(){
        //     console.log("I am a Java Script meathod");
        // }
        // meathod:()=>{
        //     console.log("I am a Java Script meathod");
        // }
    }
    console.log(object);
    console.log(object.Name);
    console.log(object.age);
    object.meathod();

// console.log(this);
var age=25;

function info(){
  console.log(this.age);
  console.log(this)
}
window.info();

const user={
    age:50,
    curiosity:info,
    nested:{
        age:2,
        curiosity:info
    }
}

user.curiosity();

user.nested.curiosity();
----------------------
const students={
   age:25,
   fun1:function(){
      console.log("Fun 1 :",this.age);
      console.log("Fun 1 :",this);
      // this function take the gloabl scope
      function fun2(){
        console.log("Fun 2 :",this.age);
        console.log("Fun 2 :",this);
      }
      fun2();
      //this arrow function take current object
       const takeObject=()=>{
        console.log("Fun 2 :",this.age);
        console.log("Fun 2 :",this);
       }
       takeObject()
   }
}
students.fun1();

const age=18;
const takeObject=()=>{
    console.log("Fun 2 :",age);
    console.log("Fun 2 :",this);
   }
takeObject()
-----------------------------------------------------------------
//JavaScript Destructuring Assignment
    * Arrya destruturing 
    * object destruturing
    * using default value in destruture
       .array
       .object
    * Destructuring in function parameters

//Array destructuring :
//Before ES6
const Numbers = [1,2,3,4,5];
const first = Numbers[0];
const first1 = Numbers[1];
let value = Numbers.slice(2);
console.log(first);
console.log(first1);
console.log(value);


// es6:
const number = [1,2,3,4,5];
const [first,second,...rest] = number;
console.log(first);
console.log(second);
console.log(rest);

-----------------------
//Object destructuring
//Before ES6
const person = { name: "Praveen",age :24, gender:"male"};

const name= person.name;
const  age = person['age'];
const gender = person.gender
console.log(name)
console.log(age);
console.log(gender);

//es6

const person = { name: "Praveen",age :24, gender:"male"};
const {name,age,gender}= person
console.log(name)
console.log(age);
console.log(gender);
------------------------
//Using default value with array
//destructuring
  //hint : assen the defulat value ,if value is exit give prioritiy to real array
    let num =[1,2,3];
    let [one,two,three,four=4] = num;

    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);

/using default value with object destruturing
    let user={
        name:'praveen',
        age:34,
        
    }
    let {name,age,gender="male"} = user
    console.log(name);
    console.log(age);
    console.log(gender);
---------------------------------
Destruturing in function parameter
    const person = {
        name:"Praveen",
        age:'20',
        profession:'Software Engineer'
    };

    function printPerson({name,age}){
        console.log(`Name:${name},age:${age}`);
    }

    printPerson(person);
    //Output : Name:Praveen,age:20

----------------------------------------------------------------
//Swapping variables

let a=1;
let b=2;
let c;
console.log(a);
console.log(b);
c=a //c=1
a=b  //a=2
b=c  //c=1

console.log(a);
console.log(b);
------------------------
// new meathod of SWAPING
let a=1;
let b=2;
[a,b] =[b,a]; //swaping the variable
//[2]= [1];
console.log(a);
console.log(b);

//Skipping Unwanted Items with 
  //Destructuring Assignment

let myArray = [1,2,3,4,5];
let [first,,,four] = myArray;
console.log(first);
console.log(four);

//spread Operator
let myobj ={ a:1,b:2,c:3,d:4,e:5,f:6,g:7};

let {a,b,...rest} = myobj;
console.log(a);
console.log(b);
console.log(rest);

const user ={
    name:"praveen kumar",
    address:{
        City:'Thirumpoondi',
        state:"Tamil Nadu",
        Country:'India'
    }
};

const { name,address:{ City,state} }=user;
console.log(name);
console.log(City);
console.log(state);

const number =[1,2,[3,5,[5,6]]];
console.log(number);

const [one,two,[,five,[five1,six]]]= number
console.log(one);
console.log(two);
//console.log(three);
console.log(five);
console.log(five1);
console.log(six);

//array of object

const users =[
  {
    name:'Tutor Joes',
    address:{
        city:"Salem",
        sate:'Tamil Nadu',
        country:'India'
    }
  },
  {
    name:'saran',
    address:{
        city:"Nalalam",
        sate:'Tamil Nadu',
        country:'India'
    }
  },
]

 //destruture in array of object

    const [
    {
        name:name1,
        address:{
            city:city1
        },
    },
    {
        name:name2,
        address:{
            city:city2
        }
    }
    ] = users

    console.log(name1);
    console.log(city1);
    console.log(name2);
    console.log(city2);

//--------------------------------------------------------------
*/