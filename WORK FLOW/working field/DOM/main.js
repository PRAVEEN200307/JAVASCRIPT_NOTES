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

// ----------------------------------------------
//traversing in DOM

// DOM tree

//parentNode

   //parent Node is a parent of the Node is a like a tree
   let selectPara =document.getElementsByTagName("p");
   console.log(selectPara);
   //getting a parentNode
      const parent =selectPara[0].parentNode;
      console.log(parent);
   parent.style.backgroundColor="palegreen";
   parent.style.padding ="23px";
  //test getting h1 parent section element
   let header=document.getElementsByTagName('h1');
   console.log(header);
   const h1Parent=header[0].parentNode
   h1Parent.style.backgroundColor="orange";
   h1Parent.style.padding="15px";

//----------------------------------------------------------
//Node in Dom
//text/comment,element node
/**
 * HTML     -         HTML Element Node
 * HEAD     -         HEAD ELement Node
 * #title   -        Text Node(return,space)
 * TITLE    -        TITLE Element Node
 * $textNode in DOM  Text Node(Node in DOM)
 * #title   -        Text Node(return)
 * #Comment -        Commnet Node
 */
/*
 Note:
  . Space and New Line above the <head> tag are ignored
  . Space and New Line the <body> tag are moved and placed inside the body tag by Dom                      
 */

/**
 * firstChild
 * lastChild
 * firstElementChild*
 * lastElementChild*
 * 
 * Example
*  <body>
      <section> --parent
         <h1>This is Heading</h1>--firstElement
         <div>(parent)---------------------lastElement
firstChild--<space> <h2>Sample Title</h2>--(firstElementchild)
            <p>This is Paragraph</p>-(lastElementchild)
            lastChild--<space>
         </div>
      </section>
      <script src="main.js"></script>
   </body>
*/

/*
//firstChild
   //line:138
   //h2 first element child
   const firstChild =parent.firstChild;
   console.log(firstChild);
//lastChild
   const lastChild =parent.lastChild;
   console.log(firstChild);
//FirstElementChild
   const firstElementChild =parent.firstElementChild;
   console.log(firstElementChild);
   firstElementChild.style.color="red";
//lastElementChild
   const lastElementChild =parent.lastElementChild;
   console.log(lastElementChild);
   lastElementChild.style.color="blue";

//section
const section =document.getElementsByTagName("Section")[0];
console.log(section);
//Section firstChild
   console.log(section.firstChild);
//section lastChild
   console.log(section.lastChild);
//section fistElementChild
   console.log(section.firstElementChild);
   console.log(section.lastElementChild);
*/
