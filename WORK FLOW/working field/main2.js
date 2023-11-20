/*
06:05:47 Shift in JavaScript
06:08:43 Unshift in JavaScript
06:12:02 indexOf in JavaScript
06:15:43 lastindexOf in JavaScript
06:19:08 Every and Some in JavaScript
06:26:11 Primitive and Reference Data Types
06:39:27 Multiple ways to clone an array in JavaScript
06:43:58 Use of const for Creating Arrays in JavaScript
06:47:14 Exploring the Different Ways to Create Object in JavaScript
07:02:17 Optional Chaining in JavaScript

----------------------------------------------
//shift()
  // remove the element in the first index
  // return the removed element

  let employee =["Arun","Praveen","dhinesh","joes","Anbu",
  "besant technology","rakesh"];

 console.log("before shift :"+employee);
 const removedEmp =  employee.shift();
 console.log("After shift :"+employee);
 console.log("Removed Element :"+employee);

----------------------------------------------

//unshift() meathod
  //Add first element at start
  
  let employee =["Praveen","dhinesh","joes","Anbu",
  "besant technology","rakesh"];

  const newlen = employee.unshift("Arun","sridhar");
  console.log(employee);
  console.log("length :"+newlen);

--------------------------------------------------
//indexof() in js

let employee =["Praveen","dhinesh","joes","Anbu",
"besant technology","rakesh"];

const  user = employee.indexOf("joes");
console.log("index :"+user);

const myname = "praveen";
console.log("index :"+myname.indexOf("v"));

const myname = "praveen kumar";
let indexValue = myname.indexOf("a",7);
console.log("index :"+indexValue);

----------------------------------------------------

// lastindexof()
    //  return the index last occurance 
    //  it use array and string
    
    let students = ["Tiya","Aureen","Joes","zaro","Stanly",
    "Tiya","Rajesh"];

    console.log(students);
    const i =students.lastIndexOf('Tiya');
    console.log(i);

    const word = ["This is the javascript function this find the  last occurance \
    it is both to use array and string"];

    let char = word[0].charAt(42);
    console.log(char);

    let findIndex = word[0].lastIndexOf('the')
    console.log(findIndex);//42

//---------------------------------------------------------

//Every & Some function  in javascript

//every() meathod
    //every meathod is a like And gate, 
         //Every value is true is return true
//Some() meathod
   // some meathod is a like or gate,
          //any value  is condition is true is return true

  let n=[2,3,5,9,3];

  var result = n.every(value=>{
    return value%2==0;
  });

  console.log(result);
  -------------------
  result = n.some(value=>{
    return value%2==0;
  });

  console.log(result);
  ------------------------
  Call back(s) method
  ---------------
    let n=[2,4,10,28,98];

    function checkEven(n){
      return n%2==0;
    }
    let result =n.every("All Element are Even"+checkEven);
    console.log(result); //true
  ---------------------
  //Array of object
    const user=[
      {name:"thamana",age:24},
      {name:"thisha",age:28},
      {name:"amalashaji",age:20},
      {name:"simbu",age:17},
    ]
    function isEligible(num){
      return num.age>18
    }

    let vote=user.every(isEligible);
    console.log("Every Eligible :"+vote);

    vote=user.some(isEligible);
    console.log("Some Eligible :"+vote);
----------------------------------------------
//Primitive and Reference Data Types

//primitive data type
     //primitive data type store only value not address
   //String
   //Number
   //Boolean
   //symbol
   // undefied

   //undefined
      var b;
      console.log(typeof b);
   //String
      let a='word';
      console.log(typeof a);
   //Value
      a=19;
      console.log(typeof a);
   //Boolean
      a=true
      console.log(typeof a);
   //Symbol()
      a=Symbol();
      console.log(typeof a);
 
//primitive only change a value
let a=10;
let b=a;
console.log(a);
console.log(b);
a=25;
console.log(a);
console.log(b);
-----------------------------------
//Reference type
   // use the memory or address //heap memory 
  
//Object
  let user1={ name:"praveen",age:35};
  let  user2 =user1;
  console.log("user 1",user1);
  console.log("user 2",user2);
  user1.age=25;
  console.log("user 1",user1);
  console.log("user 2",user2);
//Array
  let a=[15,10,8,4,8];
  let b=a;
  console.log("a value :",a);
  console.log("b value :",b);
  a.push(90);
  console.log("a value :",a);
  console.log("b value :",b);

  //reference data type also use premitive data type achieve some method 
 //object clone meathod
     //spread operator --call shadow copy
     //object.assign()
  const obj1 ={ a:1,b:2};
  const obj2 ={c:3,d:4};
  
  //spread method
    const obj3={...obj1,...obj2};
    console.log(obj3);
    obj1.e=5;
    console.log("Object 1",obj1);
    console.log("Object 3",obj3);

  //object.assign()
    const ob3 = Object.assign({},obj1,obj2);
    console.log(ob3);
-----------------------------------------------

//Multiple ways to clone an array in javascript
   Array.map() method:
let originalArray =[1,2,3];
//Spread Operator
    let cloneArray = [...originalArray];
    console.log(cloneArray);
//slice()
    let cloneArray = originalArray.slice();
    console.log(cloneArray);

//concat()
    let clonedArray =[].concat(originalArray);
    console.log(clonedArray);

//Array.from()
    let clonedArray=Array.from(originalArray);
    console.log(clonedArray);

//JSON.PARSE(),JSON.Stringify()
    let clonedArray =JSON.parse(JSON.stringify(originalArray));
    console.log(clonedArray);
-----------------------------------------------------------
*/