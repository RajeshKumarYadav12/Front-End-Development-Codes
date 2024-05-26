let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
    // console.log("button is clicked");
    // let a = 60;
    // a++;
    // console.log(a); //  61
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);
// };

// btn1.addEventListener('click',()=>{
//     console.log("button was click1 Handler1");
// });

// btn1.addEventListener('click',(evt)=>{
//     console.log("button was click2 Handler2");
// });
// const handler3 = ()=>{
//     console.log("button was click1 Handler3");
// };

// btn1.addEventListener('click',(evt)=>{
//     console.log("button was click2 Handler4");
// });


// btn1.removeEventListener('click', handler3);






// let div = document.querySelector("div");

// div.onmouseover = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

let mode = document.querySelector("#mode");

let currMode = "dark" //light

mode.addEventListener('click', ()=>{
   if(currMode==="dark")
   {
    currMode="light";
    document.querySelector("body").style.backgroundColor ="white";
   }
   else
   {
    currMode="dark";
    document.querySelector("body").style.backgroundColor ="black";
   }
   console.log(currMode);
})