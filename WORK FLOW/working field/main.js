/*
 console
 varible 
 DATA TYPES
 Type Conversion
 concentanation
 Operator 
*/

// alert("welcome to js  hello world");

// console.log("Welcome to js developer");
// console.log("Number :",12);
// console.log("Number :",123433);
// console.log(true);
// console.log([55,77,88,99]);
// console.table({fname:'praveen',age:18});
// // 13:47
// console.error("sample error ");
// console.warn("This is the warning message");
// console.clear();

// console.group('My profile')
//      console.log('hello')
//      console.log('hello')
//      console.groupCollapsed('Skills section')
//      console.log('html');
//      console.log('css');
//      console.log('javascipt');
//      console.groupEnd('end skils')
//      console.log('i am paveen')
//      console.log('i am webdeveloper')
   
// console.groupEnd('End my profile')



// ------------------------------------------------------

// varible 
    // var,let,const
     
    // var a=10;
    // console.log(a);

    // const a=45;
    // console.log(a);
    //  a=50;
    //  console.log(a);
    // object
        // const student =  {'name':'pra veen','age':'25'}
        // console.log(student.name);

        // student.name="sivaraman";
        // console.log(student.name);

// -----------------------------------------------------------

    //  DATA TYPES
   
    // primitive data type
        // String
        // Number
        // Boolean
        // undefined
        // null
        // Symbol
        // biginit

    // Non primitive data type
        // Array
        // Object
        // date


// let a= 'is it string?'
// console.log(typeof a);
 
// a=2098967943489735408754039574508083040384034;
// console.log(typeof a);
 
// let b;
// console.log(typeof b);

//  let sim = Symbol()
//  console.log(sim);

//  let sim1 = Symbol()
//  console.log(sim===sim1);

//  let a = null;
//  console.log(a);

// const buddies = ['praveen','dhinesh','saran','dhachiniya'];
// console.log(typeof buddies);


// const familyNames ={ 
//     'name' : 'praveen',
//     'brotherName':'dhinesh',
//     'mamaDaughter1':'sricharan',
//     'mamaDaughter2':'dhachiniya',
// };

// console.log(familyNames.mamaDaughter2)

// date
  // let todayDate = new Date();
  // console.log(todayDate)
  
  //   let date = new Date().getMinutes();
  //   console.log(date);



// let a="my phone numer "+98945831+ " my name is praveen and my github username praveen"+200307
// console.log(a);

// let x = BigInt("123456789012345678901234567890"); 
// console.log(typeof x);

// ---------------------------------------------------------------------------

// Type Conversion
//   1. String
//      toString()

//   2. Number to String
        // number()
        // parseInt();
        // parsefloat();


// CHANGE TO STRING
    // let a;
    // a=25.45;
    // console.log(a,typeof a);
    // a=String(a);
    // console.log(a,typeof a);

    // let a;
    // a=true;
    // console.log(a,typeof a);
    // a=String(a);
    // console.log(a,typeof a);

    // let a;
    // a=['cat','dog','rabbit','pig','hen',500,true,66.9];
    // console.log(a,typeof a);
    // a=String(a);
    // console.log(a,typeof a);

    // let a;
    // a=25.45;
    // console.log(a,typeof a);
    // a=a.toString();
    // console.log(a,typeof a);

    // let Today = new Date;
    // console.log(Today,typeof Date);
    // Today=Today.toString()
    // console.log(Today,typeof Today);

// change to number
    // let a="125";
    // console.log(a,typeof a);
    // a=Number(a)
    // console.log(a ,typeof a)

    // let a;
    // a=false;
    // console.log(a,typeof a);
    // a=Number(a);
    // console.log(a,typeof a);

    // let a = ['text','content']
    // console.log(a,typeof a);
    // a = Number(a)
    // console.log(a , typeof a)

    // let a = 23.5
    // console.log(a,typeof a);
    // a = parseInt(a);
    // console.log(a , typeof a)

    // let a = 23.5
    // console.log(a,typeof a);
    // a = parseFloat(a);
    // console.log(a , typeof a)

    // let y = "5";      // y is a string
    // let x = + y;      // x is a number 
    // console.log(x, typeof x);
// ----------------------------------------------------------------------
//  Type coercion

    // concentanation
 // let a ="25";
 // let b=10;
 // console.log(a+b);

//-------------------------------------------------------------------
 // Operator
    //  Arithmetic Operators
    //  Assignment Operators
    //  Comparison Operators
    //  relational Operators
    //  Logical Operators
    //  Strict equality or Identify Operator( ==.===)
    //  Conditional or Ternary Operator(?)
    //  Bitwise Operators
    //  Nullish coalescing operator (??)
    //  Incremnt and decremnet Operator


        //  Arithmatic operations
            //    Addition
            //    Subtraction
            //    Multiplication
            //    Exponentitation
            //    Division
            //    Modulus
            //    Increment
            //    Decrement

            //  let a=130;
            //  let b=20;
            //  let c;
            //  c =a+b;
            //  c= a-b;
            //  c= a/b;
            //  c= a*b;
            //  c= 1%5;
            //  c=++b;
            //  c= --b;
            //  c=2**2;  Exponentiation(ES2016)
            //  console.log(c);
 
        // Assignment Operators Eg:a+=5
            // let a=10;
            // a=a+5;
            // a+=5;
            // a-=10;0
            // a*=5;50
            // a/=5;2
            // a%=5;
            // a**=2;
            // console.log(a);
        
        // Comparsion Operator
            // == 
              // it is just verify normal flow ,equal to 
            // ===
              // it is check datatype ,equal to and equal type  

            // let a="10";
            // let b=10;
            // console.log(a==b);
            // console.log(a===b);

        // Relation Operators
            /*
             * > greater then
             * < less than
             * >= greater than or equal to
             * <= less than or equal to 
             * 
            */
         
            // let a=10;
            // let b=20;
            // if(a<b){
            //    console.log('true')
            // }
            // else{
            //    console.log('false')
            // }
        
        // Logical Operators
           /*
             && logicla and
             || logical or 
             !  logical not 
           */
            /*
              Ex: And
              let a=101;
              // maxmimum 100
              // minimum 50 

             if(a<100 && a>50 ){
                console.log('true')
             }
             else{
                console.log('false')
             }
            */ 

            /*
              OR
              let a=15
              if(a==10 || a==15 ){
               console.log('true')
              }
              else{
                console.log('false')
              }
            */

            /*
            ! not symbol
            let a=10;
            if(a!==10){
              console.log("true");
            }
            else{
                console.log("false")
            }
            */
        
        //  Strict equality or Identify Operator
            // see the photo get more information
               /* begginer level
                    undefined
                      let a;
                      let b;
                      console.log(a===b);
                    null
                      let a=null;
                      let b=null;
                      console.log(a===b);
                    true
                      let a=true;
                      let b=true;
                      console.log(a===b);  
                    false
                      let a=false;
                      let b=false;
                      console.log(a===b);  
                    string
                      let a='joes';
                      let b='joes';
                      console.log(a===b);  
                    0
                      let a=0
                      let b=0
                      console.log(a===b);  
                internmediate
                    0  -0 ,0 +0;
                      let a=0;
                      let b=-0;
                      console.log(a===b);
                    0,False
                      let a=0;
                      let b=false;
                      console.log(a===b);
                    "",False
                      let a="";
                      let b=false;
                      console.log(a===b);
                    "",0
                      let a="";
                      let b=0;
                      console.log(a===b);
                    "0",0
                      let a="0";
                      let b=0;
                      console.log(a===b);
                    "15",15
                      let a="15";
                      let b=15;
                      console.log(a===b);
                    "null,undefined"
                      let a=null; 
                      let b=undefined;
                      console.log(a==-b);   
                */
        //  Conditional or Ternary Operator(?!) in javascript
            
              /* Syntax
               *   condition ? "true":"false"
               */

          /*    
              const age=15;
              const result=age>=18?"Eligible":"Not Eligible"
              console.log(result);

              function welcome(name){
                const result=name?name:"No Name";
                console.log("Welcome "+result);
              }
              welcome();
              welcome(null);;
              welcome('praveen');
          */
          // Bitwise Operators in javascript
            // 16 8 4 2 1 Deciamal to Binary conversion
            
            // const a=12; // 0 1 1 0 0
            // const b=24; // 1 1 0 0 0

            // console.log(a&b);
            /*
              0 0 0 1 0
              0 0 0 1 1
              ----------
              0 0 0 1 0 ->2
              -----------
            */
            /*
              12 24
              0 1 1 0 0
              1 1 0 0 0
              ----------
              0 1 0 0 0  ->8
              -----------
                2^0
            */
            /*
              &= And
              let a=12;
              let b=24;
              a&=b;
              console.log(a); 2
  
              |(Bitwise or)
              let a=12;
              let b=24;
              a|=b;
              console.log(a); 28
              
              (Bitwise ~(Pronounce tialda) )
              let a=12;
              a=~a; -12-1=-13
              console.log(a); -13
              1:43 
            */
            // Bitwise Operator ^ XOR operator  
              /* it is like a Opposite number 
                 24 ^16
                  let a=24;
                  let b=16;
                  console.log(a^b);

                1  1  0  0  0
                1  0  0  0  0
                --------------
                0  1  0  0  0   ->8
                ------------------      
              */
            // left sift(<<)
              //  let a=5;
              //  let b=2;
              //  console.log(a<<b);
            /*
                16 8 4 2 1
                 0 0 1 0 1
                 1 0 1 0 0  --20
             */
            // Right shift(>>)
              /*
                let a=5;
                let b=2;
                console.log(a>>b);
                0 0 1 0 1
                0 0 0 0 1 -- 1 
              */
        // Nullish coalescing operator (??)
              // const a=undefined??'No value assign';
              // console.log(a);
              /*
                const proFile={
                fullName:"praveen",
                age:"28",
                posiition:"fullStack"
               } 
               console.log(proFile)

               proFile.salary??=15000
               console.log(proFile.salary) 
              */
        // Increment (++) or decremnet Operator
          /**
           * pre increment Operator  ++a
           * Post incrememt Operator  a++
           */
          /*
            let a=1;
            a++;  // a=a+1 
            console.log(a);

            let b=2;
            b--;  // a=a-1 
            console.log(b);
           */
          /*
            Post Increment
               First Change a values and affter increment
            let  x=3;
            const y=x++;
            console.log("X :"+ x ,"Y :"+ y);
           
            Pre Increment (++x)
               First Increment and after change a values
            let  x=3;
            const y=++x;  //y:4 x:4
            console.log("X :"+ x ,"Y :"+ y); 
          */  
       

//----------------------------------------------
    