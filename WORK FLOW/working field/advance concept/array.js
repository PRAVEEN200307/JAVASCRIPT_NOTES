//Map Object in javscript

const userMap = new Map();

//Add elements to the Map
userMap.set('name', "Praveen");
userMap.set('age', "30");
userMap.set('city', "Salem");
userMap.set('contact', "9043017689");
userMap.set('name', "dhinesh");

console.log(userMap);
console.log(userMap.size);
/*
//get
  console.log(userMap.get('city'));
//has
  console.log(userMap.has('city'));
//clear
    //   userMap.clear();
    //   console.log(userMap);
//delete
    // userMap.delete('age');
    // console.log(userMap);
//entries
   const entries =userMap.entries()
   console.log(entries);

   for(let  [key,value]  of userMap.entries()){
       console.log(`${key}  = ${value}`); 
   }
//forEach
    userMap.forEach(value =>{
        console.log(value);
    })

//values
for(let  entries1  of userMap.values())
   console.log(entries1);

//keys
for(let  entries1  of userMap.keys())
console.log(entries1);

//Array.map7u7iiiiiiiiiiiiiiiiiii
console.log(Array.from(userMap));
//Spread
console.log([...userMap]);

console.log(Array.from(userMap.keys()))
console.log(Array.from(userMap.values ()));
*/

//Dont do this meathod
// const wrongMap = new Map();
// wrongMap["key1"] = "Data1";
// wrongMap["key2"] = "Data2";

// console.log(wrongMap);

//NaN give a value in map object

// console.log(Number("ram"));

// const user = new Map();
// user.set(NaN,'value2');
// console.log(user.get(NaN));
// console.log(user);

//--------------------------------------------------------------
/*
const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  const second = new Map([
    [1, "first"],
    [2, "second"],
  ]);

const merged  = new Map([...first,...second]);
console.log(merged);
*/
//------------------------------------------------------------------
const sentence = "Fear leads to anger anger leads to hatred hatred leads to conflict";
const splited = sentence.split(' ');
console.log(splited);

const coutedwords = new Map();

function count() {
    for (let word of splited) {
        if (coutedwords.has(word)) {
            coutedwords.set(word, coutedwords.get(word) + 1)
        }
        else {
            coutedwords.set(word, 1)
        }
    }
    return coutedwords;
}

console.log(count());

//----------------------------------------------------------------
const people = [
    { name: "Raja", age: 30 },
    { name: "Sara", age: 25 },
    { name: "Suresh", age: 30 },
    { name: "Sundar", age: 25 },
];

const groupedbyage = new Map();

function groupbyage() {
    for (let person of people) {
        if (groupedbyage.has(person.age)) {
            groupedbyage.get(person.age).push(person)
        }
        else {
            groupedbyage.set(person.age, [person])
        }
    }
    return groupedbyage;
}

console.log(groupbyage());
//----------------------------------------------------------------

function frequencyCounter(arr) {
    let numberCounted = new Map();

    for (let num of array) {
        numberCounted.set(num, ((numberCounted.get(num) || 0) + 1))
    }
    return numberCounted
}

const array = [1, 2, 3, 1, 2, 2, 4];
console.log(frequencyCounter(array));
//-----------------------------------------------------------------------
//[1:2 ,2:3 ,3:1 ,4:1]
let obj = {}
for (let arr of array) {
    if (obj[arr]) {
        obj[arr] = obj[arr] + 1
    } else {
        obj[arr] = 1
    }
}
console.log(obj);
//-----------------------------------------------------------
let ob1 = {};
for (let arr of array) {
    ob1[arr] = (ob1[arr] || 0) + 1;
};
console.log(ob1)
//----------------------------------------------------------------------------

