//Event Loop

/**
 * Web APIs
 -----------
 * console
 * setTimeout()
 * DOM APIs
 * fetch()
 * local storage
 * location
 */

//GEC - Gloabl Execution Context


//call Stack speed work and one thread

// setTimeout()
//callBack Queue or Task Queue

//DOM APIs()
//start
//callBack() register web api
//end
//callBack Queue
//store callback() 

//fetch() is return promise
//Micro Task Queue

//-------------------------------------------------------------------
//Event Bubbling

//defualt fasle -- Event bubbling
//true - Event Capture


// const GrandParent = document.getElementById('grand-Parent');
// const Parent = document.getElementById('parent');
// const child = document.getElementById('child');

// child.addEventListener('click',(e)=>{
//    e.stopImmediatePropagation();
//    alert("child El");
// })
// Parent.addEventListener('click',()=>{
//    alert("parnet El");
// })

// GrandParent.addEventListener('click',()=>{
//    alert("grannd parent El");
// })

// GrandParent.addEventListener('click',(e)=>{
//    alert("capture grand patent");
// },{capture:true})

//--------------------------------------------------------------------
// Event Delegation in JavaScript
// const fullName = document.getElementById('fullName');

// document.forms.userDetail.addEventListener('keyup',(e)=>{
//    if(e.target.dataset.uppercase ==''){
//        e.target.value=e.target.value.toUpperCase()
//    }
// });

//---------------------------------------------------------------
//Debouncing Method in JavaScript

//Debouncing meathod is a work in the time

const txtInput = document.getElementById('txtInput');

// txtInput.addEventListener('keyup', function () {
//     optimizeFunction();
// })
// counter = 0;
// const getDataFromAPi = () => {
//     console.log("Gettting Data...", counter++);
// };

// const debounced = function (fn, delay) {
//     let timer;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, arguments)
//         }, delay)
//     }
// }


// const optimizeFunction = debounced(getDataFromAPi, 300);

//------------------------------------------------------------
txtInput.addEventListener('keyup', function () {
    optimizedData();
});

const getApiData = () => {
    console.log('Geting data...')
}

const debouncing = function (fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay)
    }
};

const optimizedData =debouncing(getApiData, 300)