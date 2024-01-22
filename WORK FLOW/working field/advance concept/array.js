
//  const promise = new Promise((resolve,reject)=>{
//     const sum = 1+1;
//     if(sum == 2){
//        resolve("Yeah it is correct")
//     }else{
//        reject("No it is'nt correct ")
//     }
//  });

//  promise
//  .then(msg=>console.log(msg))
//  .catch(error=>console.error(error))

//------------------------------------

// function setTimeoutPromise(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromise(2000).
//     then((msg) => {
//       console.log('sucess')
//     });

//----------------------------------------------
//call back hall

// setTimeout(() => {
//     console.log("Normal :1");
//     setTimeout(() => {
//         console.log("Normal :2");
//         setTimeout(() => {
//             console.log("Normal :3");
//         }, 250)
//     }, 250)
// }, 250)

//----------------------------------------------
// function setTimeoutPromise(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromise(250).
//     then((msg) => {
//         console.log('Normal setTime :1');

//         setTimeoutPromise(250).
//             then((msg) => {
//                 console.log('Normal setTime :2');

//                 setTimeoutPromise(250).
//                     then((msg) => {
//                         console.log('Normal setTime :2');
//                     })
//             })
//     });
//---------------------------------------------------------------

// function setTimeoutPromise(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration);
//     });
// };
// //meathod chaining
// setTimeoutPromise(250).then(()=>{
//     console.log("Smart :1");
//     return setTimeoutPromise(250);
// }).then(()=>{
//     console.log("Smart :2");
//     return setTimeoutPromise(250);
// }).then(()=>{
//     console.log("Smart :3");
//     return setTimeoutPromise(250);
// });

//----------------------------------------------------------------------------
//Add Event using Promsie

// const button = document.getElementById('btn');

// function addEventPromise(element, method) {
//     return new Promise((resolve, reject) => {
//         element.addEventListener(method, resolve)
//     });
// }

// addEventPromise(button, 'click').then((e) => {
//     console.log('clicked');
//     console.log(e);
// });

//----------------------------------------------------------------------------------
//Handle multiple promise funtions
/*
console.log(Promise.resolve("Good"));

//It is like every meathod
Promise.all([Promise.resolve("Good"), Promise.resolve("Good"),
Promise.resolve("Good")])
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error(err);
    });

//It is some meathod
//it is executed sequencial order
Promise.any([Promise.resolve("Good"), Promise.reject("Error"),
Promise.resolve("Good")])
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error(err);
    });

//race
  //running on the road
Promise.race([Promise.resolve("Good_Race"), Promise.reject("Error"),
Promise.resolve("Good")])
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error(err);
    });


//allsettled 
 //allsettled giving status all the promise 
 //dont'see check resolve and reject giving array of object information
Promise.allSettled([Promise.resolve("Good"), Promise.reject("Error"),
Promise.resolve("Good")])
    .then((msg) => {
        console.log(msg);
    })


//final
const promise = Promise.resolve('conform');

promise.then((msg) => {
    console.log(msg);
})
    .catch(err => console.error(err))
    .finally(()=>console.log("All completed.."))
*/

//----------------------------------------------------------------------------------
/*
const getpost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ["Post-1", "Post-2", "Post-3"]
            resolve(posts);
        }, 1000)
    });
};

const getCommit = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comment = ["Comment-1", "Comment-2", "Comment-3"]
            resolve(comment);
        }, 1000)
    });
};

Promise.all([getpost(), getCommit()])
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
    })
*/

// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (response)=>response.json())
//  .then(text => console.log(text))
//  .catch(text =>{
//     console.error(text);
//  })

//----------------------------------------------------------------------------------------------------------------------------------------
//Async await in javascript

// async function welcome(){
//     return "Hello World";
// }

// console.log(welcome());

// welcome().then( (txt)=>{
//     console.log(txt)
// }).catch( ()=>{
//     console.error("i got a error")
// });

//-------------------------
//when then catch meathod use multiple meathod

//block post
//block commnet
/*
async function getData() {
    let blogPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Blog Post");
        }, 2000);
    });

    let blogComment = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("comment For Blog");
        }, 5000);
    });

    console.log("Fetching Post ....");
    let post = await blogPost;
    console.log("post :", post);
    console.log("Fetching Commnet...");
    let comment = await blogComment;
    console.log("commnet :", comment)

    return [post, comment];
};

console.log("Welcome to Blog post")
let data = getData();;

data.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
});
*/

//-----------------------------------------------------------
//promise then catch ,async functions
const result = function (marks) {
    return new Promise((resolve, reject) => {
        console.log("Calculation Result...");
        setTimeout(() => {
            let total = 0;
            let result = "Pass";
            marks.forEach((mark) => {
                total += mark;
                if (mark < 35) {
                    result = "Fail";
                }
            });
            resolve({ total: total, result: result });
        }, 2000)
    })
}
// /**
//  * 90 -100 A
//  * 80-89 B
//  * 70-79 C
//  * <70 D
//  */

let grade = function (response) {
    return new Promise((resolve, reject) => {
        if (response.result == "Pass") {
            let avg = response.total / 3;
            let gradeText = "Grade D";
            if (avg > 90 && avg < 100) {
                gradeText = "Grade A"
            }
            else if (avg > 80 && avg < 89) {
                gradeText = "Grade B"
            }
            else if (avg > 70 && avg < 79) {
                gradeText = "Grade C"
            }
            resolve(gradeText)
        } else {
            reject("No Grade")
        }
    });
};


// result([198, 32, 89]).then(value => {
//     console.log("total", value.total);
//     console.log("result", value.result);
//     return grade(value);
// }).then(value => {
//     console.log(value);
// }).catch(err => {
//     console.error(err);
// });



// async function getResult(){
//     try{
//       const value= await result([56,78,98]);
//       console.log("total :"+value.total);
//       console.log("result :"+value.result);
//       const gradeText=await grade(value);
//       console.log(gradeText);
//     }catch(err){
//       console.log(err);
//     } 
//  }

// getResult();



//litle bit pratice jus tmodeify

// async function result(marks) {
//     let totalResult = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let total = 0;
//             let result = "Pass";
//             marks.forEach((mark) => {
//                 total += mark;
//                 if (mark < 35) {
//                     result = "Fail";
//                 }
//             });
//             resolve({ total: total, result: result });
//         }, 2000)
//     })

//     const result1 = await totalResult;
//     console.log("total :",result1.total);
//     console.log("reuslt :",result1.result);

//         let averageGrade = new Promise((resolve, reject) => {
//             if (result1.result == "Pass") {
//                 let avg = result1.total / 3;
//                 let gradeText = "Grade D";
//                 if (avg > 90 && avg < 100) {
//                     gradeText = "Grade A"
//                 }
//                 else if (avg > 80 && avg < 89) {
//                     gradeText = "Grade B"
//                 }
//                 else if (avg > 70 && avg < 79) {
//                     gradeText = "Grade C"
//                 }
//                 resolve(gradeText)
//             } else {
//                 reject("No Grade")
//             }
//         });



//     const result2 = await averageGrade;
//     console.log("Grade :",result2);
// }

// result([45,67,78]);




//---------------------------

/**
 * promise 
 *  then try catch
 * async and await
 *   this is also promise meathod
 *   try catch meathod use advantage
 */