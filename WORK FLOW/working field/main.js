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
//  let a ="25";
//  let b=10;
//  console.log(a+b);

//-------------------------------------------------------------------
 // Operator
    //  Arithmetic Operators
    //  Assignment Operators
    //  Comparison Operators
    //  relational Operators
    //  Logical Operators
    //  Strict equality or Identify Operator( ==.===)
    //  Conditional or Ternary Operator(?'true':'false')
    //  Bitwise Operators
    //  Nullish coalescing operator (condition??"statement")
    //  Incremnt and decremnet Operator


        //  Arithmatic operations
            //    Addition
            //    Subtraction
            //    Multiplication
            //    Exponentitation(square)
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
       

//------------------------------------------------------------------
 
  //  video time 02:01 to 02:58 to 12-11-23
  /*
    If Statement in JavaScript
    If else Statement in JavaScript
    Else If Statement in JavaScript
    Nested If Statement in JavaScript
    Switch Statement in JavaScript
    Combining Cases Statement in JavaScript
    While Loop in JavaScript
    Do While Loop in JavaScript
    For Loop in JavaScript
    Nested For Loop in JavaScript
    For of Loop in JavaScript
    For in Loop in JavaScript
    Looping over objects by converting to an array in JavaScript
    Break Statement in JavaScript
  */
   
    // if condition 

    /*   Syntax
          if(condition){
            // ----
          }

          let Age=prompt('Enter your age');
          if(Age!=null && Age>=18){
            console.log('Eligible for vote');
          }
    */

  //  --------------
    // if else
    /*
      Syntax
      if(condition){

      } 
      else{

      }

       let Age=prompt('Enter your age');
        if(Age!=null && Age>=18){
          console.log('Eligible for vote');
        }
        else{
          console.log("you aren't eligible");
        }
    */
  // ----
   // else if
  /*
     if(condition){

     }
     else if(condition){
      //  else if in your need to whenever to need use multiple time
     }
     else{

     }

     Ex:
      let number=18;
      if(number<0) //leser than zero
      {
          console.log(number +' Negative number');
      }
      else if(number >0){
          console.log(number +' Positive number');
      }
      else{
          console.log("giving number is zero");
      }

     Ex2:
       avg=87;
       90-100  A Grade
       80-89   B Grade
       70-79   C Grade
       <70     D Grade

      let avg=prompt('Enter your average mark');
      if(avg>=90 && avg<=100){
          console.log("A Grade");
      }
      else if(avg>80 && avg<=89){
        console.log('B Grade');
      }
      else if(avg>70 && avg<=79){
          console.log('C Grade');
      }
      else{
          console.log('D grade');
      }
  */
  // Nested if statement
  /*
     if(condition){
        some logic
      if(condition){
        some logic
      }
     } 

     min mark >=35
       91-100 A
       81-98  B
       71-80  C
       D

     EX 2:
      let English=95,tamil=98,maths=56;
      let total,avg;
      total=English+tamil+maths;
      avg= total/3;
      console.log('Total   : '+ total);
      console.log('Average : '+ avg.toFixed(2));
      
      if(English>=35 && tamil>=35 && maths>=35){
          console.log("Result  : Pass")
            if(avg=>91&&avg<=100){
              console.log('Grade : Grade A')
            }
            else if(avg=>81&&avg<=90){
              console.log('Grade : Grade B')
            }
            else if(avg>=71&&avg<=80){
              console.log('Grade : Grade C')
            }
            else{
              console.log('Grade : Grade D')
            }
      }
      else{
          console.log('you are Fail no Grade')
      }  
  */
  //  Switch case
  /*
   switch(choice){
     case choice:
     break;
     case choice:
     break;
     deafult
    } 
     ex:
      let num=3;
      switch(num){
          case 1:
            console.log('One');
            break;
          case 2:
            console.log('Two');
            break;
          case 3:
            console.log('Three');
            break;
          default :
            console.log("Invalid input");
            break;
      }
     
  */
  // combining cases statement
    /* 
     let letter='a';
     switch(letter){
       case 'a':
       case 'e':
       case 'i':
       case 'o':
       case 'u':
       case 'A':
       case 'E':
       case 'I':
       case 'O':
       case 'U':
        console.log(letter +" is a Vowel");
        break;
       default:
        console.log(letter +"is not a Vowel")
     } 
    */
// -------------------------------------------------------------------
// Looping Stament
// While Loop

  /*
   while(condition){
    //  code Execute
   }

   let i=1;
   while(i<=10){
    console.log(i);
    i++;
  }
  */
// do while
  /*
    do{

    }
    while(condition)

    Ex:
    let table=5;
    let limit=5;
    let init=1

    do{
        console.log(table +'X'+init+'='+ (table*init));
        init++
    }
    while(init<=limit)
 --------------------------------------------
  */
// for loop
  /*
  for(let i=1;i<=10;i++){
    console.log(i)
  }

    let arr=[]
    for(let i=0;i<50;i++){
      arr.push(i);
    }
    console.log(arr)
  */
//Nested for loop
  /*
    let a=[
    ['Praveen','Dhinesh','Bharath','balaji'],
    ['tharun','akshai','sasi','devdharasan'],
    ];

    let nums=[];
    for(let i=0;i<5;i++){
        nums.push([])
      for(let j=0;j<5;j++){
        nums[i].push(j)
      }
    }
    console.log(nums) 
  */

// for of
  /*
    // execute array using for of
    let names=['Praveen','Dhinesh','Bharath','balaji'];

    for(let i=0;i<names.length;i++){
      console.log(names[i]);
    }

    console.log("for of Loop");
    for(let frdName of names){
      console.log(frdName);
    }
    */

// For in Loop in JavaScript -- usue in object
   /*
     let user = {
      name : 'tutor joes',
      age: 35,
      city: "Salem",
      contact : "9043017689"
    }

    for(let property in user){
       console.log(property +" : "+user[property])
    }
   */

// Looping over objects by converting to an array
 /*
   keys
   values    

    let user = {
      name : 'tutor joes',
      age: 35,
      city: "Salem",
      contact : "9043017689"
    }

    // how to change object to array
    let arr_key= Object.keys(user);
    console.log(arr_key); get extract keys only

    let arr_value = Object.values(user);
    console.log(arr_value)  get extract values only

    for(let i=0;i<arr_key.length;i++){
      console.log(arr_key[i]+" :"+arr_value[i])
    }
    
 */

// Break Statement 
/* 
  for(let i=1;i<=10;i++){
    console.log(i);
    if(i==4){
      break;
    }
  }
*/

//continue statement --skaping perticular activity
/*
  for(let i=1;i<=10;i++){
  
    if(i==4){
      continue;
    }
    console.log(i);
  }

*/

//---------------------------------------------------------


