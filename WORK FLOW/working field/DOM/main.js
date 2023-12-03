/**
 * Dom Document Object Model
 * windows
 */

/*
//Dom
    window.alert("Test");
    document
    window.document=document
   
    windows
    document--give a string of index.html
    window.document==document
    console.dir(document); --give a object of document
*/

// document.title="Dom event it is more intrative"
// document.bgColor="green";
// document.color="#fff";
// console.dir(document);
/*
//Accessing the dom
  windows is a king of object
  everytab create own windows object
  wind

  document.getElementById();           returns an element object
  document.getElementsByClassName();   returns an HTMLCollection
  document.getElementsByTagName();     returns an HTMLCollection
  document.querySelector();            returns an element object
  document.querySelectorAll();         returns an Nodelist
  document.getElementsByName           returns an Nodelist

//  document.getElementById();
   let brand=document.getElementById("brand");
   console.log(brand);
   console.log(brand.nodeType); //element type const value one
   console.log(brand.nodeName); //h3
   brand.style.backgroundColor="red";
   brand.style.color="#fff"

//document.getElementsByClassName();
   const stitle = document.getElementsByClassName("sub-title");
   //foreach do'not work ,only use for loop,it not array "it is html collections" 
   console.log(stitle);
   stitle[0].style.color="#00ff00";
   stitle[1].style.color="#00ff00";

   for(let i=0;i<stitle.length;i++){
      stitle[i].style.color = "#0000ff"
   }

//  document.getElementsByTagName(); 
   const getPara=document.getElementsByTagName('p');
   console.log(getPara);

   for(let i=0;i<getPara.length;i++){
      getPara[i].style.color="purple";
   }

//  document.querySelector();
   //pass className,idName,Element
   let heading = document.querySelector("h1");
   console.log(heading);
   heading.style.color ="orange";

// document.querySelectorAll();  
   //it giving array format  it achieve all the array meathods like foreach meathods
   //static is static so it not live at
   let qpara = document.querySelectorAll("p");
   console.log(qpara);
   qpara.forEach((element)=>{
      element.style.color="green";
   });

   */

//HTMLCollection
/*
  let li = document.getElementsByTagName('li');
  console.log(li);
  console.log(li.length);

  let element = document.createElement("li");
  element.innerHTML="javascript";

  li[0].parentNode.appendChild(element);
  console.log(li);
  console.log(li.length);

  for(let i=0;i<li.length;i++){
    li[i].style.color="red";
  }  
*/
//NodeList 
   //this static meathod like primitive data types

/*
let li = document.querySelectorAll('li');
console.log(li);
console.log(li.length);

let element = document.createElement('li');
element.innerHTML="javascript";
li[0].parentNode.append(element);
console.log(li);
console.log(li.length);

li.forEach(element=>{
  element.style.color="red";
});

li = document.querySelectorAll('li');
console.log(li);
console.log(li.length);
*/
/*
 Document tree

 html --html element node
 <title>Tutor Joes</title>--text node 
    space also text node
 <!--comment>-- comment node
 document node
*/