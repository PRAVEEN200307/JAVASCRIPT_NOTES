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

//classList.add()