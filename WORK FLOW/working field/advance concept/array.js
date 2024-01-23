/*
//Fetch Api in javascript

const btnText = document.getElementById('btnText');
const txtOutput = document.getElementById('txtOutput');


btnText.addEventListener("click", getTextFile);

function getTextFile() {
    fetch("fetch/data.txt")
        .then((r) => r.text())
        .then(data => {
            txtOutput.textContent = data
        });
};

//-------------------------------------------------------------------------
//get data json file
const btnJson = document.getElementById('btnJson');
const jsonOutput = document.getElementById('jsonOutput');

const handleGetJson = () => {
    fetch("fetch/user.json")
        .then(value => value.json())
        .then(txt => {
            const ul = document.createElement('ul');
            txt.forEach((value) => {
                const li = document.createElement('li');
                li.textContent = value.name
                ul.append(li);
            });
            jsonOutput.append(ul);
        });
}
btnJson.addEventListener('click', handleGetJson);
//---------------------------------------------------------------------------
const btnApi = document.getElementById('btnApi');
const apiOutput = document.getElementById('apiOutput');

async function getApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await response.json();
    jsonData.forEach((val, index) => {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        h1.innerHTML = `<span style="color:pink">${index}</span>  ${val.title}`
        p.textContent = val.body
        div.append(h1, p);
        apiOutput.append(div);
    })
}
btnApi.addEventListener('click', getApi);
----------------------------------------------------------------------
*/
//Set class

const users = ["ram", "sam", "ram", "rajesh"];
console.log(users);

const setOb = new Set(users);
setOb.add(10).add(80);
setOb.delete(10)
setOb.delete(80)

//entries
console.log(setOb);
console.log(setOb.has('rajesh'));
entries = setOb.entries(values => {
    console.log(values);
});
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

//keys
const val = setOb.values();
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);

/**

    ƒ add()
    ƒ clear()
    ƒ Set()
    ƒ delete()
    ƒ entries()
    ƒ forEach()
    ƒ has()
    f keys()
    ƒ values()

*/

//Spread
//  const setArray  =[...setOb]
//  console.log(setArray);



//User define functions
/**
 * Subset
 *  A = 1 ,2 , 3
 *  B = 5 ,6 , 1, 2, 3
 *  c = 1 ,3 , 4, 5
 * union
 * Intersection
 * difference
 */


Set.prototype.subset = function (otherset) {
    if (this.size > otherset.size) {
        return false
    } else {
        for (var element of this) {
            if (!otherset.has(element)) return false;
        }
        return true
    }
};

const setA = new Set([1, 2, 3]);
const setB = new Set([5, 6, 1, 2, 3, 4]);
const setC = new Set([1, 3, 4, 5]);


console.log(setB.subset(setA));
console.log(setA.subset(setC));
console.log(setC.subset(setB));


Set.prototype.union = function (otherset) {
    const unionset = new Set();
    for (let element of this) {
        unionset.add(element);
    }
    for (let element of otherset) {
        unionset.add(element);
    }
    return unionset
}

console.log(setA.union(setB));
console.log(setA.union(setB));
console.log(setB.union(setC));


Set.prototype.intersetion = function (otherset) {
    const unionset = new Set();
    for (let element of otherset) {
        if (this.has(element)) {
            unionset.add(element);
        }
    }
    return unionset
}
console.log(setA.intersetion(setC));

Set.prototype.difference = function (otherset) {
    const unionset = new Set();
    for (let element of otherset) {
        if (!this.has(element)) {
            unionset.add(element);
        }
    }
    return unionset
}

console.log(setA.difference(setB));

//blog seo keyword vigit
class TagInput{
    constructor(){
        this.name="praveen" 
        this.tag = new Set();
    }
    addInput(value){
      this.tag.add(value)
    }
}
 
const input =new TagInput();
input.addInput(10)
input.addInput(10)
input.addInput(10)
input.addInput(10)

console.log(input);

//--------------------------------------------------------------------------------------------------------------------------