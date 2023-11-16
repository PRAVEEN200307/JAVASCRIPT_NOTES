/*
    Label Block in JavaScript
    Math Functions in JavaScript
    String Functions in JavaScript
    Function in JavaScript
    Arbitrary Function in JavaScript
    Function as Expression in JavaScript
    ES6 Arrow function in JavaScript
    Callback Functions in JavaScript
    Block Scope and Function Scope in JavaScript
*/

// Label Block 
    // startWidth
    // Dont use this Only for knowledge
    /*
    let groups =[
    ["Ram","Sam","Ravi"],
    ["kumar","Tiya","Sundar"],
    ["Rajesh","Sara","Rahul"],
    ];

    for(let group of groups){
        inner:
        for(let member of group){
        //  console.log(member);
        if(member.startsWith('R')){
            console.log(member);
            break inner;
        }
        }
    } 
*/

// Math Functions

/*
 let val=Math.PI; //3.141592653589793
 val=Math.E; //2.718281
 c=Math.round(5.8); //5.5-6
 c=Math.floor(56.90);///giving only rounded values
 c=Math.ceil(56.7); //point values consider full number
 c=Math.sqrt(5); //giving square rooot number
 c=Math.abs(-8) //giving  negative number to positive number
 c=Math.trunc(2.58); //giving only integer values
 c=Math.pow(2,3); // Converting square values
 c=Math.min(15,34,26,28,30);
 c=Math.max(89,90,430,160);
 c=Math.random();
 c=Math.floor((Math.random()*50+1));
 c=Math.sign(-98);
 c=Math.sin(56);
 c=Math.cos(43);
 c=Math.log(10);
 c=Math.log10(10);
 console.log(c);
*/

/* String function

    let firstName ="praveen"
    let lastName ="kumar"

    //concentenation
        let c=firstName+" "+lastName;
        console.log(c);

    // concat meathod
        let c =firstName.concat(' ',lastName);
        console.log("concat :",c);

    // append 
        firstName +=" kumar";
        console.log("append : "+firstName)

    //Escaping
        c='i don\'t need to write';
        console.log(c);

    //Length
        c=firstName.length
        console.log("Length :"+c);

    //uppercase
        c=firstName.toUpperCase();
        console.log("Uppercase : "+c);

    //Lowercase
        c=firstName.toLowerCase();
        console.log("Lowercase :",firstName)

    // intext Of
        c=firstName.indexOf('n');
        console.log("indexOf n:"+c)

    // lastIndexOf
        c=firstName.lastIndexOf('a');
        console.log("lastIndexOf a :"+c);

    // charAt
        c=firstName.charAt(2);
        console.log("charAt one index  :"+c);

    //charCodeAt -- giving aski values
        // ASCII Code of a to z
        // The ASCII code of lowercase "a" is 97 and the ASCII code of lowercase "z" is 122.

        c=firstName.charCodeAt(2);
        console.log("charcodeAt 1 :"+c);

    // substr ,slice,substring(starting,end values)
        firstName ="praveen"
        lastName ="kumar"
        
        c = firstName.substr(0,4);
        console.log("substr :"+c);

        c = firstName.substring(0,4);
        console.log("subtring :"+c);

        let num="01234567890";

        c=num.substring(4,0); //change the 0 and 4
        console.log(c);

        c=num.substring(25,30);
        console.log("subtring invalid lenght"+c);

    //Slice
        c=num.slice(2,4)
        console.log("slice :"+c);
        c=num.slice(4,2)   //print no values enter wrong number
        console.log("slice :"+c);
        c=num.slice(-3)  //negative indexing
        console.log("slice -3"+c);

    // split -- this split a array
        let a="i am praveen smart thinker";
        c= a.split(" ");
        console.table(c)

    //replace
        let origin="i am from bangalore";
        console.log("before replace :"+origin)
        let data = origin.replace('bangalore',"chennai");
        console.log("after replace  :"+data);

    //includes in js
        const pets =['cat','dog','rabbit','mouse','peakcock']
        c = pets.includes('dog')
        console.log("is Dog here "+c);

    //trim in js - remove the unwanted white space
        a =" web ";
        console.log("trim before :"+a.length);
        a=a.trim();
        console.log("trim after  :"+a.length);

    // padStart padEnd  --add some number or charter before or after

        let lucky='4';
        lucky = lucky.padStart(4,'$')
        console.log(lucky);

        let x=lucky.padEnd(2,'$')
        console.log(x);

        let longstring  =" i am praveen kumar and i work to javascri\
        t i really love these journey and the my apision is the full\
        stack  i have done more Front end project";

        longstring  =" i am praveen kumar and i work to javascri"+ 
        "t i really love these journey and the my apision is the full"+
        "stack  i have done more Front end project";

        console.log(longstring)

    // fromcharcode -- askii valuce to charater
        console.log(String.fromCharCode(97,98,99));
*/
/*
//funtions 
  //set of code when use to call
  // function with reutrn type
  function add(a,b){
    return a+b;
  }

  console.log(add(15,20));
  console.log(add(20,20));
  console.log(add(25,25));

  //functions with Arbitrary arguments
    // arguments keyword  -storing array variable
        function sum(){
            let total=0;
            for(let i=0;i<arguments.length;i++){
                total+=arguments[i]; //total=total+arguments[i];
            }
            return total;
        }
        console.log("aribitary functions :"+sum(75,25));

    //spread operator  --create new variable
        function total(...args){
            let total=0;
            for(let i=0;i<args.length;i++){
              total+=args[i]; //total=total+args[i];
            }
            return total;
        }

        console.log("spread oprator :"+total(15,20));
        console.log("spread oprator :"+total(15,20,15,100));

    //Functions as Expression
    
        const add =function(a ,b){
        return a+b;
        }
        console.log(add);
        console.log(add(10,15));

*//*
//Arrow function es6  or fact arrow functions
   //const functionName =(parameters)=>{ function body};

    const add =(a,b)=>{ return a+b; }
    console.log(add(10,15)); 

    //Ex:1 arrow functions with map()

        let numbers=[1,2,3,4,5];
        console.log(numbers);
        let doubledNumbers=numbers.map(num=>num*2);
        console.log(doubledNumbers);

    // ex 2 Using  arrow functions with filter();
        let words =['apple','banana','orange','grape'];

        let filterWords=words.filter(words=>words.length>5);
        console.log(filterWords);

    //3. Using arrow functions with reduce()
        let numbers=[1,2,3,4,5];
        console.log(numbers);
        //sum--total or asumlator
        let total=numbers.reduce((sum,numbers)=>sum+numbers,0);
        console.log(total);

    //4.using arrow function to create a closure
        let createCounter =()=>{
        let count=0;
        return ()=>{
            count++;
            return count;
        }
        };

        let counter=createCounter()

        console.log(counter());
        console.log(counter());
        console.log(counter());

// call back function


    function myCallback(){
        console.log("I am callback functions");
    }

    // higherOrderFunctions
    function test(myCallback){
        myCallback();
    }
    test(myCallback);

    //setTimeout(function,1000);  --fucntion delay 3,000
        setTimeout(function(){
        console.log("This is the set time out functions")
        },3000)

    //SetInterval Every one functions call owenly
        setInterval(function(){
        console.log("hello World joes");
        },3000);

        const n =[1,2,3]
        numbers.forEach(function(n){
        console.log(n);
        });
*//*
        // Block scope and functins scope

        //Block scope--if condiditon it is working in the scope 
            when we have wronly refference error
        
            if(true){
                let blockscopevariable =" \
                i am a variable with block scope"
                console.log(blockscopevariable);
            }
        // function scope  --suggession for use let ,const
            function myfunction(){
                blockscopevariable =" \
                i am a variable with function scope"
                console.log(blockscopevariable);
                function run(){
                    console.log(blockscopevariable);
                }
                run()
            }
            myfunction();
        */
// --------------------------------------------------------------------------------------------
/*
    What is Array ?
    Foreach in JavaScript
    More Examples forEach method
    Map in JavaScript
    More Examples Map Method
    Filter in JavaScript
    Reduce in JavaScript
    Slice in JavaScript
    Splice in JavaScript
    Concat in JavaScript
    Sort in JavaScript
    Fill in JavaScript
    Includes in JavaScript
    Join in JavaScript
    Reverse in JavaScript
    Push in JavaScript
    Pop in JavaScript 
*/
/*
// what is array
    //25 meathod
   
   let a=[10,20,30,40];
   let b= new Array(10,20,30,40);
   console.log(b);

   let c = new Array(10,'praveen',true,
   {
    name:'praveen',
    position:'senior developer',
    currentlyWorking:'handle the team'
   });
   console.table(c);
 


   foreach map,slice,splice,concat,sort,fill,includes,join
   Push,pop,shift,unshift,indexof,lastindexof,lastindexof,every
   some,find,From,isArray,Filter,Flat,reduce...

    
   //forEach()
        const number=[1,2,3,4,5,6,7,8,9,20];
        
        //values,index,array
        number.forEach((values)=>{
            console.log(values)
        });

        number.forEach((values,index)=>{
            console.log("index values :"+index+" values :"+values)
        });

        const user =[
        {fullName:'Ram',age:18,city:'Chetpat',salary:10000},
        {fullName:'Praveen',age:20,city:'Thirumpoondi',salary:15000},
        {fullName:'Dhinesh',age:18,city:'Thirumpoondi',salary:25000},
        {fullName:'Balaji',age:18,city:'Thirumpoondi',salary:30000},
        {fullName:'Rakesh',age:18,city:'Mukkur',salary:30000},
        {fullName:'Somaskandhan',age:24,city:'Perkanakadu',salary:30000},
        ];

        user.forEach((values)=>{
            console.log(values.fullName,values.city)
        });

//Exploring the ForEach meathod 
// with 10 example 

    const fruits =['apple','banana','cherry'];
    console.log(fruits);

    fruits.forEach( (values)=>{
        console.log(values);
    });

 //2. exmaple of using the ForEach meathod to 
   // sum all elements of an array

    const number=[15,5,5,10]
    let total=0;

    number.forEach( (number)=>{
            total+=number;
    });
    console.log("Total amount"+total);

//3.Example of using the forEach method to 
//create a new array from an exisiting one:

    let number=[15,5,5,10];
    let doubleNumber=[]

    number.forEach( (number)=>{
        doubleNumber.push(number*2);
    })

    console.log(doubleNumber);

// 4. Example of using the forEach method
// to find the max element of an array

    let number=[0,1,2,3,4,5,10,34];
    console.log(number);

    let max=number[0]
    number.forEach( (number)=>{
    if(number>max){
        max=number
    }
    });  

// 5. Example of using the forEach method
// to calculate the average of an array

    let mark=[100,80,90,70]
    //ans1:
    let avg=0;
    mark.forEach( (number)=>{
    avg += number/mark.length 
    })
    console.log(avg);

    // ans2:
    let count=0
    avg=0;
    mark.forEach( (number)=>{
    avg += number; 
    count++;
    })
    console.log(avg/count);

//6.Example of using the forEach method
//to filter an array

    const number=[1,2,4,5,6,7,8,9,10,28,26,23] 
    const evenNumber =[];

    number.forEach( (number)=>{
    if(number%2==0){
        evenNumber.push(number)
    }
    });
                    
    console.log(evenNumber);

//7.Example of using the forEach method
//to update elements of an array

    const names =['praveen','dhinesh','kumar'];
    names.forEach( (name,index)=>{
        names[index]=name.toUpperCase();
    });

    console.log(names);

//8. Example of using the forEach method
//to check if an element exists in an array

    let fruits =['apple','orange','banana'];
    let exits = false

    fruits.forEach( (fruits)=>{
    if(fruits === 'banana'){
            exits  = true
    }
    })

    console.log(exits);

//9. Example of using the forEach method
// to check concat array elements

    const words =['Hello','Praveen','kumar'];
    let concat =""
    words.forEach( (words)=>{
    concat += words+" " ;
    });
    console.log(concat)

//----------------------------------
//map() Meathod
   //sqrt(),toFixed(2);
const number=[1,2,3,4,5,6,7,8,9,10];

//map(values,index,array)
let sqrt=number.map((value)=>{
  return  Math.sqrt(value).toFixed(2);
});
console.log(sqrt);


const user =[
    {fullName:'Ram',age:18,city:'Chetpat',salary:10000},
    {fullName:'Praveen',age:20,city:'Thirumpoondi',salary:15000},
    {fullName:'Dhinesh',age:18,city:'Thirumpoondi',salary:25000},
    {fullName:'Balaji',age:18,city:'Thirumpoondi',salary:30000},
    {fullName:'Rakesh',age:18,city:'Mukkur',salary:30000},
    {fullName:'Somaskandhan',age:24,city:'Perkanakadu',salary:30000},
    ];
//HINT:()--WRAP A CONTACT
const isELigible=user.map((user)=>({
    name:user.fullName,
    ...user,
   eligible:user.age>18?'Eligible':'NotEligible'
}));

console.table(isELigible);
*/

/* originalArray.map(current_value,index,originalArray) *//*

//1.DoubletheNumber
const number =[1,2,3,4,5];
let Doublenumber= 
number.map( (arrayNum)=>arrayNum*2);
console.log(Doublenumber);

//2. capitalized
const words =["hello","world"];
console.log(words);
const capitalizedWords = words.map(words =>words.toUpperCase());
console.log(capitalizedWords);

///3.Commning array array
const fruits = ["apple","banana"];
const colors = ["red","yellow"];

// const fruitColors = 
fruits.map( (fruit,index)=>fruit+"="+colors[index]);
console.log(fruitColors);

//4.Filtering an Array
const numbers = [1,2,3,4,5];

const evenNumber = numbers.map(num=>num%2==0);
console.log(evenNumber);

//5. Extracting properties from an Array of objects

const obj=[
    { name:'Praveen',age:20},
    { name:'Kiva',age:22},
    { name:'Karthi',age:25},
    { name:'Deepika',age:18},
]

const names = obj.map( user=>user.name);
console.log(names);

//6.Modifying an Array of Objects
const updateUser = obj.map(us=>{
  return{
     names:us.name,
     age:us.age+1
  }
});
console.log(updateUser);


//7. arrry to change a object using map

const words= ['apple','banana','cherry'];

const wordStats = words.map( (currrentValue,index,array)=>{
    return{
      words:currrentValue,
      length:currrentValue.length,
      position:index,
      totalWords:array.length
    }
} );

console.table(wordStats);


//4:56 Filter()
let number =[10,2,3,4,5,6,7,8,9,10];
let evenNumbers = number.filter(num=>num%2==0);
console.log(evenNumbers);

const student=[
    { name:'Praveen',age:20,gender:'male'},
    { name:'Thamana',age:22,gender:'female'},
    { name:'Karthi',age:25,gender:'male'},
    { name:'Deepika',age:18,gender:'female'},
]

let adulAge = student.filter( detail=>detail.age>=25);
console.log(adulAge);

let isMale = student.filter(detail=>detail.gender==='female');
console.log(isMale);

--------------------------------
let words= ["cat","dog","elephant","fish","giraffe"]

let moreThanFive = words.filter(letter=>letter.length===3);
console.log(moreThanFive);


----------------------------
let words =["cat","dog","elephant","fish"
  ,"giraffe","eagle"];
  
let wordsStartWithE = words.filter( words=>words.startsWith('e'));
console.log(wordsStartWithE);

-------------------------------------------

const products = [
  { name:"Apple",category:"fruit",price:100},
  { name:"Carrot",category:"vegatable",price:50},
  { name:"Orange",category:"fruit",price:120},
  { name:"Broccoli",category:"vegetable",price:75},
  { name:"Mango",category:"fruit",price:110},
];

const expensiveFruits =  
products.filter( detail=> detail.category==='fruit'&&
detail.price>100);

console.log(expensiveFruits);
5:07
*/

