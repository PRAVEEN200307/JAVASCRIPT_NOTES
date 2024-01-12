//Create an Array object - (In Atleast 3 methods)
/*
//meathod 1
  const b = [10, 20, 30, 40, 50, 60, 70, 80];
//meathod 2
  const a = []
  a[0] = 10
  a[1] = 20
  a[2] = 30
  a[3] = 40

  console.log(a);
//meathod 3
  const c = new Array();
  const c1 = new Array(10,20,30,40);
  c[0] = 10;
  c[1] = 20;
  c[2] = 30;
  c[3] = 40;

  console.log(c);
//meathod 4
  const d=Array.of(10,34,56,87,95);
  console.log(d);
*/
//--------------------------------------------------------------------------------------------------
//2.arrray and copy it using the slice meathod and the forloop meathod
/*
  var array = [1, 2, 3, 4, 5];

  //slice meathod
  const sliceCopy = array.slice();

  const arr3=[]
  array.forEach( (v,i,a)=>{
    arr3.push(v);
  });
  console.log('forEach meathod',arr3);

  //forloop
   let arr4 = [];
   for (let i = 0; i < array.length; i++) {
     arr4=arr4.concat(array[i]);
   }
   console.log('forLoop', arr4);

   let duplicatedArray =[]
   for(let i=0;i<array.length;i++){
       duplicatedArray[i]=array[i]
   }
   console.log(duplicatedArray);

  //spread
  let spreadArray = [...array];
*/
//-------------------------------------------------------------------------------------------------
//3.Empty this array:
// let array = [1, 2, 3, 4, 5];
/*
  //meathod 1
  array =[];

  //meathod 2
  array.length =0;

  //meathod 3
  while(array.length){
    array.pop();
  }
  console.log(array);

  //meathod 4
  array.splice(0);
*/
//-------------------------------------------------------------------
//4.What type is an array set to?
// console.log(typeof array); object

//string
//number
//bollean

// const address=['praveen kumar','thirummmpoondi',183,'software enginner',true];
// console.log(address);
//-------------------------------------------------------------------------------------
//5. how can you check if something is an arrray?
/*
let array = [1, 2, 3, 4, 5];

//Method 1
const result =Array.isArray(array);
console.log(result);

//Meathod 2
//typeof

  console.log(array);
  //includes
  console.log(array.includes(4));
*/
//--------------------------------------------------------------------------
//6.Add an item to the end of an array.

//push
//index
//concat
/*
  let array = [1, 2, 3, 4, 5];
  //meathod 1
   array.push(6);

  //meathod 2
  const updatedArray=array.concat( [10,20]);
  console.log(updatedArray);
 
  //meathod 3
   array[array.length] =6
  console.log(array);
*/
//-------------------------------------------------------------------------------
//7.find the index position of d in this array
/*
  var arr = ["a", "b", "c", "d"];
  //indexof
    const dIndexval =arr.indexOf('c');
    console.log(dIndexval);
*/
//----------------------------------------------------------------------------------
//8.what will be returned if you look for the index of something
//that does not exsit?

//ans :-1
//------------------------------------------------------------------------------
//9.write a function to check if milk exists in your array
/*
//
var items = [ "bread", "sugar","milk"];
//items.includes
function isexist(){
   for(let product of items){
       if(product === 'milk'){
          
       }
   }
}
console.log(isexist());
*/
//-------------------------------------------------------------------------------------
//10.Now you've found milk exists add some code to find the index of milk and
//remove  that item.
/*
  var items = ["bread", "sugar", "milk"];

  const indexVal =prompt("enter the index number of array");

  //items length grethen the indexval
  if(items.length<indexVal){
    alert(`we have avaliable length ${items.length}(start index 0)`)
  }

  const food =items[indexVal];
  function isexist() {
    for (let product of items) {
      if (product === food) {
        const index = items.indexOf(product);
        items.splice(index, 1);
        return items
      }
    }
  }
  console.log(isexist());
*/
//--------------------------------------------------------------------------------
//11.List the ways to loop over an array.

//for loop
//for-in ,for of
//for Each
//while loop

//-------------------------------------------------------------------------------
//12.Write some code to put these numbers in order(Ascending & Descending)

//Acending order
/*
  var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];

  const AscendingOrder = numbers.sort((a, b) => {
    return a - b;
  })
  console.log(AscendingOrder);

//Descending order
  const desendingOrder=numbers.sort((a,b) => {
    return b-a;
  })
  console.log(desendingOrder);


  const even =AscendingOrder.filter( (val)=>val%2==0);
  const odd =AscendingOrder.filter( (val)=>val%2);

  console.log(even);
  console.log(odd);
*/
//-----------------------------------------------------------------------------------------------
//13.Write some code to place this list in alphabetical order
/*
  let  p = ["a", "z", "e", "y"];
  const Alphabate=p.sort();
  console.log(p);
*/
//-------------------------------------------------------------------------------------
//14.what is the length of these array
/*
//arr1
//length:3
var arr1 = [, , ,];


//arr2
//length:3
var arr2 = new Array(3);

//arr3
//length:5
var arr3 = [1, 2, 3, 4, 5];


//arr4
//length:2
var array = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(array);
*/
//-----------------------------------------------------------------------------------
//15.What are the result of these splice and slice methods
/*
  var a = ["zero", "one", "two", "three"];
  var names = ["jason", "john", "peter", "karen"];

  var sliced = a.slice(1, 3);
  var spliced = names.splice(1, 3, 'praveen', 'kumar', 'dhiensh');

  console.log(sliced);
  console.log(names);
*/
//------------------------------------------------------------------------------------------------------------
//16.What are the console.logs of these shift and unshift methods
/*
  var a = [];

  a.unshift(1, 2, 3, 4, [5, 6]);
  console.log(a);
  a.shift();
  const b = console.log(a);
*/
//----------------------------------------------------------------------------------
//17.Using reduce add all these numbers
/*
  var numbers = [1, 2, 3, 4, 5, 6];

  const sum =numbers.reduce((acc,val) => acc+=val );
  console.log(sum);

  let totalval = 0;
  numbers.forEach(val =>{
        totalval +=  val
  });
  console.log(totalval);
*/
//----------------------------------------------------------------------------------------
//18.Flatted this array to one single array using reduce
/*
  var array = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];

  const flattedArrayPush =array.reduce((acc,val)=>{
    //  console.log(val);
    for(let num  of val){
        acc.push(num)
    }
    return acc
  },[]);

  const flattedArray =array.reduce((acc,val)=>{
    acc=acc.concat(val);
    return acc;
  },[]);

  console.log(flattedArray);
*/
//----------------------------------------------------------------------------------
//19.Filter this array to return just the dogs

// var animals = [
//   { name: "Jason", species: "rabbit" },
//   { name: "Jessica", species: "dog" },
//   { name: "Jacky", species: "owl" },
//   { name: "Luke", species: "fish" },
//   { name: "Junior", species: "rat" },
//   { name: "Thomas", species: "cat" },
// ];

/*
  const filtetedArray =animals.filter(val => val.species == "dog");
  console.log(filtetedArray);
*/
//---------------------------------------------------------------------------------------
//20 Using array in Question 19 use map function to return all the species

// const isAnimalhere =animals.map(val => {
//   return val.species
// });
// console.log(isAnimalhere);

//-----------------------------------------------------------------------------------
