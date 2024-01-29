/*
const items = [
  { id: 1, title: "Andorid phone", cost: 7500 },
  { id: 3, title: "Headphone", cost: 2400 },
  { id: 2, title: "Gaming Computer", cost: 90500 },
]

//meathod chaining

const product = items.sort((a, b) => a.cost - b.cost
).sort((a, b) => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
}).filter(value => {
  return value.cost < 8000
}).map((val) => ` ${val.title} - ${val.cost}`);

console.log(product);
*/
//-----------------------------------------------------
//javascript hoisting
//In javascript ,Hoisting is the default behavior
//of moving all the declarations at the top of the scope before code execution
/*
 window.networkig();
//function Decelaration
    function networkig(){
        console.log('wifi connected successfully');
    }
//function Expression
    const net =function networkig(){
        console.log('wifi net connected successfully');
    };
    console.log(window);
    console.dir(window.document);
*/
//------------------------------------------------------------------------------------
//73.Immediately Invoked Function Expression(IIFE)

//Define execute immediately
/*
    let no1=25;
    let no2=25;

    // (function sumNumbers(){
    //     let result = no1 + no2;
    //     console.log(result);
    // })();

    ((num1,num2)=>{
    let no1=25;
    let no2=50;

    let result = no1 + no2;
    console.log(result);
    })();
*/
//----------------------------------------------------------------------------------------
//function arguments
/*
function movingListApp() {

  let getOneline = '';
  for (let movie of arguments) {
    getOneline += ` ${movie}`
  }
  return getOneline;
};
const movieCollections = movingListApp('thala movie', 'ajith movie', 'surya movies');
console.log(movieCollections);
*/
//--------------------------------------------------------------------------------------
//rest operator
/*
  function dailyCost(firstVal,...cost) {

    const result = cost.reduce((acc, val) => acc+= val)
    return result-firstVal

  }
  const totalAmount = dailyCost(30,100, 120, 200);
  console.log(totalAmount);
*/
//-------------------------------------------------------------------------------------
//Defult parameters
/*
  function calculateTax(cost,title,tax = 18) {
    //Nulles Opertor

    let taxAmount = cost * (tax / 100);
    return `Total ${title} cost is : ${cost} \n\nGST of tax(${tax}%) is :${taxAmount} \n\nTotla Amount is: ${cost + taxAmount}`
  }
  console.log(calculateTax(400,'ship'));
*/
//--------------------------------------------------------------------------------------
//78-javascript Error handling(try,throw,catch)
/*
  let student ={
    firstName :"Anbu ",
    lastName :"Selvan",
    get fullName(){
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){

      if(typeof value !== 'string'){
        const err = new Error("it is not a string");
        throw err;
      }
      if(value.length <=3) throw "Name Invalid"

      let values = value.split(" ");
      this.firstName=values[0],
      this.lastName=values[1]??'';
    }
  };
  try{
    student.fullName = 'ad';
  }
  catch(e){
    //console.log(e);
    alert(e);
  }
  console.log(student.fullName);
*/
//---------------------------------------------------------
//79 Global Scope and local scope
/*
let userName ="Praveen";
function greetUser(){
   let userName="Trisha";
   let message = "Hello world " + userName;
   log(message);
}
greetUser();

function log(message){
  console.log(message)
}
*/
//-----------------------------------------------------------------
//80.let const

//var--funtion scope
  //it work function and if ,for , it variable work out of the scope
  // var is  a merging  window object merge
//let --local scope
//-----------------------------------------------------------
//48.javascript Date Object
/*
  const data = Date(); //string
  console.log(data);

  const now =new Date();
  console.log(now);

  //console.log(now.getDay());
  console.log(now.getDate());
  //console.log(now.getMonth());
  console.log(now.getMonth());
  console.log(now.getFullYear());
  console.log(now.getHours());
  console.log(now.getMinutes());
  console.log(now.getSeconds());

  const customDate =new Date('jun 5 1965');
  console.log(customDate.getFullYear());
*/
//----------------------------------------------------------------------------------------------
//find meathod in js
/*
  const person =[
    {userName:'Dhinesh',age:15,place:'Thirummpoondi',role:"Medical"},
    {userName:'Savitha',age:17,place:'Cheyyar',role:"model"},
    {userName:'muguthan',age:13,place:'Cheyyar',role:"playboy"},
    {userName:'Praveen',age:18,place:'Thirummpoondi',role:"sw"},
  ];

  console.log(person);
  const minarList =person.find(value => value.age>=18);
  console.log(minarList);
  const isEligible =person.findIndex(value => value.age>=18);
  console.log(isEligible);
*/
//-------------------------------------------------------------------------------------

