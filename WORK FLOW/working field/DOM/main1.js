/**
 * createElement
 * appendChild
 * insertBefore
 * removeChild
 * remove 
 */
/*
    let para=document.createElement("p");
    //innerText
    para.innerText="This is a <i>sample paragraph</i>";
    //innerHTML
    para.innerHTML="This is a <i>sample paragraph</i>";
    para.style.color="orange";

    const body =document.querySelector('body');
    body.appendChild(para);

    //insertBefore
    let headerOne=document.createElement('h1');
    headerOne.innerHTML="This is heding";
    headerOne.style.color="red";
    body.insertBefore(headerOne,para);
*/
/*
//remove
const removeBtns=document.querySelectorAll(".btnRemove");
//console.log(removeBtns);
removeBtns.forEach((btn)=>{
   btn.addEventListener('click',function(){
     const tr=this.parentNode.parentNode;
     tr.remove();
   })
});
*/
/*
//removeChild
  const removeBtns=document.querySelectorAll(".btnRemove");
  //console.log(removeBtns);
  removeBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
      const tr=this.parentNode.parentNode;
      let td=tr.childNodes[5];
      //console.log(td);
      tr.removeChild(td)
    })
  });
//or
  const removeBtns1=document.querySelectorAll(".btnRemove");
  //console.log(removeBtns1);
  removeBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
      const tr=this.parentNode.parentNode;
      let td =tr.children[2];
      tr.removeChild(td)
    })
  });
------------------------------------------
*/
/**
 * style
 * innerHTML
 * innerText
 * cloneNode()
 * setInterval()

 */
/*
//style
const headOne =document.querySelector("h1");
// headOne.style.color="#ff0000";
// headOne.style.backgroundColor="#000";
headOne.style.cssText="color:#ff0000;background-color:#000;";

//innerHTML
headOne.innerHTML="Learn smart <i>work smart</i>";

//innerText
headOne.innerText="Learn smart <i>work smart</i>";

//cloneNode()
  const body =document.querySelector('body');
  //true --it copy all the element include the content
    let cloneh1 =headOne.cloneNode(true);
    body.appendChild(cloneh1);
  //false --only copy the element like <h2></h2>
    let cloneh2 =headOne.cloneNode(false);
    body.appendChild(cloneh2);

setInval -every time repeat
  function sayHello(){
     let clone =headOne.cloneNode(true);
     body.appendChild(clone);
  }

  setInterval(sayHello,1000);

//clock
  let clockDiv =document.querySelector(".clock");
  function clock(){
    const date = new Date();
    let time= date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds();
    
    clockDiv.innerHTML=time;

  }
  setInterval(clock,1000);
*/
/**
 * classList.add()
 * classList.remove()
 * classList.toggle()
 * getAttribute()
 * setAttribute()
 */
/*
//classList.add()
  const btnAdd = document.querySelector('#btnAdd');
  const box = document.querySelector(".box")
  console.log(btnAdd);

  btnAdd.addEventListener("click",function(){
      box.classList.add('new-color')
  });
//classList.remove()
  const btnRemove = document.querySelector('#btnRemove');
  console.log(btnRemove);

  btnRemove.addEventListener("click",function(){
     box.classList.remove('new-color');
  });
//classList.toggle()
  const btnToggle = document.querySelector('#btnToggle');
  console.log(btnToggle);

  btnToggle.addEventListener('click',function(){
      box.classList.toggle("new-color");
  });
*/
//getAttribute() and setAttribute
/*
  let btnClick=document.querySelector("#btnClick");
  let input=document.querySelector('#txtName');

  btnClick.addEventListener('click',function(){
    const getAtt = input.getAttribute("type");
    if(getAtt =="text"){
        input.setAttribute("type","password");
    }
    else{
      input.setAttribute("type","text");
    }
  });
  --------------------------------------------------
*/
/**
 * hasAttribute()
     Attribute is present is true otherwise is false
 * getAttributeNames()
 * removeAttribute()
 */
/*
  //hasAttribute()
  const input=document.querySelector('input');
  console.log(input.hasAttribute('class'));

  //getAttributeNames()
    //how many attribute present
    //attribute name stored in array format
  let list=input.getAttributeNames();
  console.log(list);

  //removeAttribute()
    //remove attribute names
  input.removeAttribute('name');
  list=input.getAttributeNames();
  console.log(list);
*/