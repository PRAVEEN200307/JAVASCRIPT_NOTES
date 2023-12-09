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
 *   //find the type of value
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
     //console.log(getAtt); //giving value ex text
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
------------------------------------------------------*/
/*
 Event Hundlers
 --------------
   Inline event listeners (!byday not useit)
   Inline properties (!byday not useit)
   Event listeners (Now day using working with origanize) 

Inline event listeners
    <button onclick="alert('welcome to Dom')">Click</button>                        

Inline properties
  { <script>
  document.getElementById('btn').onclick =function(){
    alert("welcome inline Properties")
  }
  </script> }

//evevnt listeners.
  const btn =document.querySelector(".btn");
  btn.addEventListener('click',function(){
    alert("Welcome to event listeners");
  });
  
  Event Listeners
  ---------------
  Event
    1.Mouse
      click
      dblclick
      mosuedown
      mouseout
      mouseup
      mouseover

    2.keyboard
      keydown
      keypress
      keyup
      keycode
      code

    3.form
      focus
      submit
      blur
      change

    4.Touch
      touchstart
      touchmove
      touchend
      touchcancel
      
    5.window
      scroll
      resize
      load
      haschange 

-----------------------------------------*/
/**
1.Mouse
   click
   dblclick
   mosuedown
   mouseout
   mouseup
   mouseover


//click
  const btn=document.querySelector('.btn');

  btn.addEventListener('click',()=>{
    alert("this is a click Event Properties");
  });

//dblclick
  const btn=document.querySelector('#dblBtn');
  btn.addEventListener('dblclick',function(){
    alert("This is a dbl click Event");
  });

//mosuedown
    //while pressing the button logic is working
   const eventBtn=document.getElementById("event");
   eventBtn.addEventListener(('mousedown'),()=>{
      eventBtn.style.backgroundColor ="Red";
   });
//mouseout 
  eventBtn.addEventListener('mouseout',()=>{
    eventBtn.style.backgroundColor="yellow";
  });
//mouseup --reliase the button
  eventBtn.addEventListener('mouseup',()=>{
    eventBtn.style.backgroundColor="blue";
  });
//mousehover
eventBtn.addEventListener('mouseover',()=>{
  eventBtn.style.backgroundColor="pink";
});
----------------------------------------------------------------------
*/
/**
  2.keyboard
     keydown
       -this is first triger
     keypress(deprecated)
     keyup
    key
    code
*/
/*
document.addEventListener("keydown",handleKeyEvent);
document.addEventListener("keypress",handleKeyEvent);
document.addEventListener("keyup",handleKeyEvent);

function handleKeyEvent(event){
  const evenType =event.type;
  const keyCode=event.code;
  const keyName=event.key;

  console.log('Event type :',evenType);
  console.log('Event type :',keyCode);
  console.log('Event type :',keyName);
}
 
   Ex output 1:
     Event type : keydown
     Event type : KeyW
     Event type : w

//--------
const input =document.getElementById('input-num');
const msg =document.getElementById('error');

//isNaN --is not a number
//event.preventDefault()
    //this meathod use to won't allow the number
input.addEventListener('keydown',function(event){
   const key = event.key;
   console.log(key);
   if(isNaN(key)){
     event.preventDefault();
     msg.textContent="Please Enter Number only";
     msg.style.color="red";
   }
   else{
     msg.textContent="";
   }
});
*/
//-------------------------------------------------------------------
/*
 3.form Event in javascript
      submit
      reset
      change
      checked
      focus
      input
      blur

const form=document.querySelector("form");
const userName=document.querySelector("#username");
const email=document.querySelector("#email");
const course=document.querySelector("#course");
const checked=document.querySelector("#agree");
const radios=document.querySelectorAll('input[name="Gender"]');

//wont referes
  //preventDefault();

//Summit  
  // form.addEventListener("submit",function(even){
  //   even.preventDefault();
  //   console.log("User Name :"+userName.value);
  //   console.log("User Email :"+email.value);
  // });

//change
course.addEventListener("change",function(e){
  const selectedCourse =e.target.value;
  console.log("Selected Course  :",selectedCourse);
});

//Rest OverRide
form.addEventListener("reset",function(even){
  console.log("your data is reset successfully");
});

//checked
form.addEventListener("submit",function(even){
  even.preventDefault();
  console.log("User Name :"+userName.value);
  console.log("User Email :"+email.value);

  let selectedCourse ="";
  radios.forEach((radio)=>{
       if(radio.checked){
          selectedCourse = radio.value;
       }
  });
  console.log(selectedCourse);
});

checked.addEventListener('change',function(e){
  if(e.target.checked){
       console.log("checkbox is checked")
  }else{
      console.log("Checkbox is unchecked")
  }
});
//input
userName.addEventListener("input",function(e){
   console.log("User input changed  :"+e.target.value);
});


  User input changed  :A
  User input changed  :An
  User input changed  :Anb
  User input changed  :Anbu


//focus
userName.addEventListener("focus",function(e){
  userName.style.borderColor ="orange";
});

//blur
  //Out of foucs
userName.addEventListener("blur",function(e){
  userName.style.borderColor ="#000";
});
*/
//---------------------------------------
/*
  4.Touch
  touchstart
  touchmove
  touchend
  touchcancel

//touchstart -- equal to mouse down event
//touchmove
//tocuhend -- equal to mouse up
//  touchcancel --touch cancel -wprk in mobile

const touchArea = document.getElementById('touchArea');
touchArea.addEventListener("touchstart",(e)=>{
  e.preventDefault();
  touchArea.style.backgroundColor="blue";
  touchArea.textContent="Touch started"
});

touchArea.addEventListener("touchmove",(e)=>{
  e.preventDefault();
  touchArea.style.backgroundColor="green";
  touchArea.textContent="Touch moved"
});

touchArea.addEventListener("touchend",(e)=>{
  e.preventDefault();
  touchArea.style.backgroundColor="gray";
  touchArea.textContent="Touch Ended"
});

touchArea.addEventListener("touchcancel",(e)=>{
  e.preventDefault();
  touchArea.style.backgroundColor="gray";
  touchArea.textContent="Touch cancelled !";
});
*/
//----------------------------------------------------
/*
const game =document.getElementById("game");
const ball =document.getElementById("ball");
//aixs
let startX,startY;

game.addEventListener("touchstart",function(e){
   //console.log(e);
   const touch = e.changedTouches[0];
      startX=touch.clientX;
      startY=touch.clientY;


      // console.log(startX);
      // console.log(startY)
});

/*
changedTouches: TouchList
0: Touch
clientX: 156
clientY: 72.66667175292969  


game.addEventListener("touchmove",function(e){
  //console.log(e);
  const touch = e.changedTouches[0];
  const diffx =touch.clientX-startX
  const diffY =touch.clientY-startY;
  ball.style.left =Math.max(0,Math.min(350,ball.offsetLeft + diffx)) +"px";
  ball.style.top =Math.max(0,Math.min(180,ball.offsetTop +diffY)) +"px";
  startX=touch.clientX;
  startY=touch.clientY;
  e.preventDefault();                                                
});

-----------------------------------------------------------------------------
*/
 /*     
    DomcontentLoaded 
      it is document content loaded is only working passes the cache memeory
    load
      it is load the code perfectly in css and iamge
    onload
    unload 
    unberforeload

           document.addEventListener('DOMContentLoaded',()=>{
             //reference
             const myApp =document.getElementById("app");
             const heading = myApp.children[0];
             const image = myApp.children[1];
             heading.innerHTML="<h1>Hello praveen</h1>";
            
               console.log(image.offsetWidth,image.offsetHeight);

           });

           window.addEventListener('load',()=>{
             //reference
             const myApp =document.getElementById("app");
             const heading = myApp.children[0];
             const image = myApp.children[1];
             heading.innerHTML="<h1>Hello praveen</h1>";
            
               console.log(image.offsetWidth,image.offsetHeight);

           });

           window.onload=function(){
               load the css ,image
            const myApp =document.getElementById("app");
             const heading = myApp.children[0];
             const image = myApp.children[1];
             heading.innerHTML="<h1>Hello praveen</h1>";
            
               console.log(image.offsetWidth,image.offsetHeight);

           }
          //unload
           window.unload =function(){
             alert("you are bout to be unloaded")
           }
          //preunload
          window.unberforeload =function(){
             alert("you are bout to be unloaded")
           }
--------------------------------------------------------------------------
*/
/**
     5.window
      scroll
      resize
      haschange 


//scroll
  window.addEventListener("scroll",()=>{
    console.log("Scrolled");
    
  });

//resize

  const container = document.querySelector(".container");

  const observer=new ResizeObserver((items)=>{
    let containerwidth = Math.ceil(items[0].contentRect.width);

    if(containerwidth <400){
      items[0].target.style.backgroundColor="red";
    }
    else{
      items[0].target.style.backgroundColor="#212121";
    }
  });

  observer.observe(container);


//hashchange 

  window.addEventListener('haschange',function(){
    console.log('hey,hash has been changed');
  });
 
  */
