/*
08:24:51 Rest Parameter Functions and Spread Operators in JavaScript
08:28:06 Parameter Destructuring in JavaScript
08:33:41 Call Bind and Apply meathod
08:50:45 Class
09:09:31 Getter and Setter in JavaScript
09:24:45 Static
09:40:44 Prototype
*/

//Difference between Rest prameter
  //Functions and Spread Operators in
  //Javascript

//Rest prameter Functions
    /*
    function myFunction(First,Secound,...rest){
        console.log(First);
        console.log(Secound);
        console.log(rest);
    }

    myFunction(10,20,30,40,50,60);
    */
//Spread Operator
/*
  let myArray=[1,2,3];
  let newArray = [...myArray,4,5];
  console.log(newArray);
---------------------------------------------------------------*/
//Parameter Destruturing in javascript
/*
    function sayHello({name,age=29})//age=29 use default values
    {
    console.log(`Hello ${name}!`);
    console.log(`Age : ${age}!`);

    };

    const person = {name:"Praveen",age:19};
    sayHello(person);

    ------------------------------------
    const person={
        name:"Praveen",
        age:30,
        City:"Thirumpoondi",
        Country:"India"
    };

    function sayHello({name,age,...rest}){
    console.log(`Hello ,${name} !You are ${age} Years old`);
    console.log(rest);
    }

    sayHello(person);
    --------------------------------------
    // Arrays destruturing using function prameter
    let letArray = [1,2,3,4,5];

    function arrayDestruturing( [a,b,c,d,e] ){
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
    }
    arrayDestruturing(letArray);
*/
//---------------------------------------------------------
/*//call,apply,and bind Methods in Javascript

function joes(){
    console.log(this)
}
console.log(joes.name);
console.log(joes.toString());
joes();
joes.call();  //call is inbuild meathod

//call() meathod
function Welcome(){
    console.log(`welcome : ${this.user_name}`);
}
let user={
    user_name:"Praveen"
}
Welcome.call(user);

function total(eng,mat){
    console.log(this.user_name+" got "+ (eng+mat)+" Marks");
}
total(90,90);
total.call(user,90,90);

// appy meathods
    // multiple premeter give a single parameter using array
total.apply(user,[50,50]); 
let subjects =[100,100];
total.apply(user,subjects); 

//Bind meathod
   //this use to store the variable when we need to use
let callApply =total.bind(user,300,300);
callApply();

//one object meathod to share another object  and borrow

const person={
  firstName:"Praveen",
  lastName:"Kumar",
  fullName:function(){
     return this.firstName +" "+this.lastName;
  }
}

console.log(person.fullName());

const anotherPerson ={
    firstName :"Kali",
    lastName :"Thasan",
};
console.log(person.fullName.call(anotherPerson));
*/
//-------------------------------------------------------
//class

//Es5 version  --type of work for class
/*
function Person(name){
    this.name=name;
}

Person.prototype.sayHello = function(){
   console.log("Hello my name is :"+this.name);
}

const personObj = new Person("Praveen");
console.log(personObj);
personObj.sayHello();

function Student(name,age){
    Person.call(this,name);
    this.age=age;
}

//Prototype chaining
Student.prototype=Object.create(Person.prototype);
Student.prototype.construtor= Student;//student function

Student.prototype.eligiblity=function(){
    console.log(this.name+" age is "+this.age+""+
    (this.age>=18? " Eligible":" Not Eligible"));
}

let student = new Student("ram",18);
console.log(student);
student.sayHello();
student.eligiblity();

//Es6 Example
    class Person{
        constructor(name){
            this.name=name;
        }
        sayHello(){
            console.log("Hello my name is :"+this.name);
        }
    }
    const personObj = new Person("Praveen");
    console.log(personObj);
    personObj.sayHello();
    //Inheritance
    class Student extends Person{
        constructor(name,age){
            super(name);
            this.age=age;
        }
        eligiblity(){
            console.log(this.name+" age is "+this.age+""+(this.age>=18? " Eligible":" Not Eligible"));
        }
    }

    let student = new Student("Dhinesh",18);
    // console.log(student);
    student.sayHello();
    student.eligiblity();
*///--------------------------------------------------
/* 
    09:09:31 Getter and Setter in JavaScript
    09:24:45 Static
    09:40:44 Prototype
*/
//Getter and setter in JavaScript

//Example 1:Getters and setters with Object literal
  //Getter is get a value
  //Setter is set a value

/*
const person={
    firstName :"Praveen",
    lastname:"Spidy",
    get fullName(){
        return this.firstName.concat(" ",this.lastname);
    },
    set fullName(name){
       const part=name.split(' ');
        this.firstName=part[0];
        this.lastname=part[1];
    }
}
console.log(person);
console.log(person.firstName);
 //getter is use do need to function parameter
console.log(person.fullName);
//set is set a value
person.firstName="Parthi ban";
*/
/*
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
     get fullName(){
          return this.firstName+" "+this.lastName
    }
    //reasign
    set fullName(name){
        const parts = name.split(" ");
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
}

const p1 = new Person("Kali","Thasan");
console.log(p1);
console.log(p1.fullName);
p1.fullName ="Raj kumar";
console.log(p1);
console.log(p1.fullName);
*/

/*
 1. create a class called circle
 2. radius values as construtor
 3. getter and setter function called diameter //2*2
 4.  getter area() pi are square
     pi=22/7  raidus=7
     22/7*7*7
*/
/*
class circle{
     constructor(radius){
           this.radius=radius;
     }
     //getter
       get diameter(){
          const diameter = this.radius*2
            return diameter
       }
       set diameter(diameter){
             this.radius=diameter/2
       }
     //getter
       get area(){
           var pivalue = Math.PI;
        //    console.log("Pi value "+pivalue);
           let areavalue=pivalue*this.radius*this.radius;
           return areavalue.toFixed(2);
       }
};

const c1 = new circle(10);
console.log(c1.radius);
console.log(c1.diameter);
console.log(c1.area);
c1.diameter=50;
console.log(c1.radius);
console.log(c1.area);
*/

//------------------------------------------------
//Understanding static methods and properties in js
  // static is a class level
  // * sigleton parttern
/*
    class Person{
        constructor(name){
        this.name = name;
        }
        info(){
            console.log(this.name);
        }
    }

    const personObj = new Person("Tom");
    personObj.info();
*/
/*//-------------
   //static Examples
class Myclass{
       static name="Ronaldo";
       static nameCallmeathods(){
           console.log(`My name is ${this.name}`);
       }
}

Myclass.nameCallmeathods();
console.log(Myclass.name);

//Math utilities classes
    class Mathutilities{
        static add(a,b){
           return a+b;
        }
        static sub(a,b){
           return a -b;
        }
        static multiple(a,b){
           return a*b;
        }
        static division(a,b){
            return  a/b;
        }
    }

    console.log(Mathutilities.add(10,20));
    console.log(Mathutilities.sub(10,20));
    console.log(Mathutilities.multiple(10,20));
    console.log(Mathutilities.division(10,20));
*///--------------------------------------------------------
// Example 2 : Singleton pattern
            //onely use static meathod
/*          // inbuild database in mobile applications
class Database{
    static instance = null ;
    static getInstance(){
        if( !(Database.instance)){
           Database.instance = new Database();
        }
        return Database.instance;
    }
    query(sql){   
    }
}
const db1= Database.getInstance();
const db2= Database.getInstance();
console.log(db1===db2);
*/
//Example 3: constants
/*
class Colors{
    static RED = "#ff0000";
    static GREEN = "#00ff00";
    static BLUE = "#0000FF";
}

console.log(Colors.RED);
console.log(Colors.GREEN);
console.log(Colors.BLUE);
*/
//----------------------------------------------------------------
//Prototype and prototypal Inheritance in javascript

  let arr=["apple","orange"];

  let obj={
    name:"joes",
    city:"Salem",
    info:function(){
        return `${this.name} from ${this.city}`;
    }
  }

  function myFunction() {}

/**
   * array
   *  arr.__proto__  or Array.prototype
   * prototype chaining
   *   arr.__proto__.__proto__ -- object prototye
   *   arr.__proto__.__proto__.__proto__  = null
   * Object
   *   obj.__proto__  //giving object prototype
   *   obj.__proto__.__proto__  = null
   * Function
   *  myfunction.__proto__  //giving function prototype
   *  myFunction.__proto__.__proto__  //giving object prototype
   *  myFunction.__proto__.__proto__.__proto__  = null;                      
 */

//prototype inheritance

let obj1={
    name:"joes",
    city:"Salem",
    info:function(){
        return `${this.name} from ${this.city}`;
    }
  }

// let obj2 ={
//     name:"Raja",
//     city:"chennai";
// }

// obj2.__proto__=obj1;

let obj2 = Object.create(obj1);
obj2.name="Praveen";
obj2.city="Chennai";

Array.prototype.doubleLength = function(){
    return this.length*2;
}

//Function meathod add custom method
  //using prototype
Function.prototype.MyBind = function(){
    console.log("This is bind function in prototype")
}

function fun(){

}

function Person(name){
    this.name=name;
}
Person.prototype.greet=function(){
    console.log(`Hello ,my name is ${this.name}`);
}

const alice = new Person("Alice");
const babu = new Person("Babu");

alice.greet();
babu.greet();
