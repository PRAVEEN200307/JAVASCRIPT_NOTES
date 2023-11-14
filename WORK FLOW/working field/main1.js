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
//fucntions 
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

    //Ex:1 arrow function s with map()

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
// hierar functions

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

//Block scope--if condiditon it is working in the scope wheh we have wronly refference error
 
    if(true){
        let blockscopevariable =" \
        i am a variable with block scope"
        console.log(blockscopevariable);
    }
// function scope
    function myfunction(){
        blockscopevariable =" \
        i am a variable with block scope"
        console.log(blockscopevariable);
        function run(){
            console.log(blockscopevariable);
        }
        run()
    }
    myfunction();
*/