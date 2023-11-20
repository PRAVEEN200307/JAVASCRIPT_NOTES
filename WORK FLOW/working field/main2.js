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
*/


