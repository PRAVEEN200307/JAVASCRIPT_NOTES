// LocalStorage in JavaScript
// 19:39
// Store Array value in LocalStorage in JavaScript With Example
// 30:36
// Store Array of Objects in LocalStorage in JavaScript With Example
// 47:40
// Session Storage in JavaScript
// 32:03

/**
 * 32
 * 33
 * 34
 * 35
 * 
 * 2 hours durations
 */


//localstorage
 /*
    window.localStorage.setItem('name','praveen');
    const userName = localStorage.getItem('name');

    //localStorage.removeItem('name');
    console.log(userName);
 */
 const btn=document.querySelector('#night-btn');
 
   document.addEventListener('DOMContentLoaded',()=>{
      const stative=localStorage.getItem('perforanceColor');

      if(stative === 'night-mood'){
        const profileEl=document.querySelector('.user-profile');
        profileEl.classList.toggle('night-mood');   
      }
   });


  const handleNightMood =()=>{
     const profileEl=document.querySelector('.user-profile');
     profileEl.classList.toggle('night-mood');

     const isThere=profileEl.classList.contains('night-mood');
     
     localStorage.setItem('perforanceColor',isThere?'night-mood':'light-mood');

  }
 btn.addEventListener('click',handleNightMood);
//-----------------------------------------------------------------------------
/*
    Promise in JavaScript
    35:46
    Async and Await in JavaScript
    25:21
    Fetch API in JavaScript
    17:13
*/

/**
 *  25
 *  26
 *  27
 * 
 * 1:20 hours
 */

//--------------------------------------------------------------------------------
/*
    Set
    26:56
    Map
    31:36
    Event Loop in JavaScript
    17:37
    Event Bubbling in JavaScript
    25:39
    Event Delegation in JavaScript
    17:04
    Debouncing Method in JavaScript
*/
/**
 * 13
 * 14
 * 29
 * 30
 * 31 
 * 
 * 140
 * 2 hours 20 minutes
*/
//-------------------------------------------------------------------------------------
