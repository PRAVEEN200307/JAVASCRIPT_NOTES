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
      --funtion Inside object use arrow functions
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

user.nested.curiosity()
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
    * swapping
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

--------------------------------------------
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

---------------------------------------
const number =[1,2,[3,5,[5,6]]];
console.log(number);

const [one,two,[,five,[five1,six]]]= number
console.log(one);
console.log(two);
//console.log(three);
console.log(five);
console.log(five1);
console.log(six);

-----------------------------
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

    --End of destruturing assignment
//--------------------------------------------------------------

// Destruring in javascript
     // arrray variable ,object type
     
// Array

//type1
  let a=[10,20,30,'praveen',50,90];
  let [ten,twenty,,UserName]=a

  console.log(ten);
  console.log(twenty);
  console.log(UserName);

//type2 //spread operator
    let a=[10,20,30,'praveen',50,90];
    let [ten,twenty,...spread]= a;
    console.log(ten);
    console.log(twenty);
    console.log(spread);

//type3 //inside array
  let nestedArray =[[1,2],[3,4],[5,6]];
  let [ [a,b],[c,d],[e,f] ]=nestedArray  
 
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);

//object
    let person ={
        name:'Tom',Age:8,gender:'male'
    }
    let {name,Age,gender}=person
    console.log(name);
    console.log(Age);
    console.log(gender);

    //nested object
    let address={
        street:"Cherry Road",
        city:"Salem",
        state:"Tamil Nadu",
        zip:"6360007",
    };

    let employee ={
        name:"Tom",
        age:12,
        gender:"female",
        address
    };

    console.log(employee);

    let {name,age,gender,address:{street,city,state,zip}}=employee;

    console.log(name);
    console.log(age);
    console.log(ge);
    console.log(street);
    console.log(city);
    console.log(state);
    console.log(zip);
-------------------------------------------------------------------------
*/
// Creating Objects in javascript

//1.Using Object literals
//2.Using the Object constructor --ex const ob1= new Object();
//3.Using the object.create() meathod.
//4.Using class:

/*
// 1.Using Object literals
const person={
  name:"jerry",
  age:15,
  job:'creating fun'
};

//2.Using the object construtor
   //this is build in meathod
const person = new Object();
person.name="ElderDear";
person.age=35;
person.job="Product the Forest";
console.log(person);

//3.Object.create() meathod
  //Object.create(prototype,propertiesObjects);
    //prototype
      //protype is a creating a meathod
   const CreatePrototype={
      sayhello:function(){
          console.log('Hello ',this.name)
      }
   }
   const profile = Object.create(CreatePrototype);
   profile.name="praveen";
   profile.age=19;
   profile.job="software Engineer";
   profile.sayhello();

// 4.Using Class:
       //Object creating using class
    
    class Profile{
        constructor(name,age,gender){
           this.name=name;
           this.age=age;
           this.gender=gender
        }   
    }
    const profile = new Profile('Praveen',23,'Male');
    console.log(profile);
*/

// ------------------------------------------
//Dot Notation and Bracket Notation in javascript
/*   
    const user={
        name:"Tutuor joes",
        age:30,
        job:"Developer"
    };

    console.log(user);

  //Dot notation
    console.log(user.name);
    user.name="joes";
    console.log(user.name);
    console.log(user);

  //Backet Notation
    console.log(user["age"]);
    user["age"]=25;
    console.log(user["age"]);
    console.log(user);
    let work="job"
    console.log(user[work]);

    let user={
        "first name":"Tutor",
        "last name":"joes"
    };
    console.log(user["first name"]);
    console.log(user["last name"]);
-----------------------------------------------------------*/
// Iterating Through javascript Objects

// Using the for-in loop

//this is meathod convert the array
    // Using Object.key()
    // Using Object.values()
    // Using Object.entries()

/*// Using the for-in loop 
const user={
    name:"Praveen",
    age:30,
    job:"Programmer"
};
console.log(user);

for(let key in user){
    console.log(`${key} :${user[key]}`)
}

// Using Object.key()
       //storing a keys in new array
const user={
    name:"Praveen",
    age:30,
    job:"Programmer"
};

const object=Object.keys(user);
console.log(object)

object.forEach(value=>{
   console.log(`${value} : ${user[value]}`)
});
--------------------------------------------
//Using Object.values()
   //store a values in a new array
const object1=Object.values(user);
console.log(object1);

object1.forEach(value=>{
    console.log(`${value}`);
 });
-------------------------------------
//Using Object.entries()
   //store all the object in arrry format 
const entries = Object.entries(user);
console.log(entries);

entries.forEach(value =>{
    console.log(`${value[0]} : ${value[1]}`);
})

for(let i=0;i<entries.length;i++){
   console.log(`${entries[i][0]} : ${entries[i][1]}` )
} 
----------------------------------------------------------------------------
*/  /*
// Object inside Arrays in javascript
     //rest Api concept ,user detail 

const users =[
    {name:"Joes",age:25,email:'joes@gmail.com'},
    {name:"Praveen",age:33,email:'Praveen@gmail.com'},
    {name:"Sam",age:32,email:'Sam2345@gmail.com'},
];
console.log(users);

for(let us of users){
    // console.log(us);
    console.log(us.name);
}

const olderUsers =users.filter(value=>value.age>30);
console.log(olderUsers);
 //concat, fill,every,find,filter,flat,keys,some,values,with

*/// ---------------------------------------------------------------------
