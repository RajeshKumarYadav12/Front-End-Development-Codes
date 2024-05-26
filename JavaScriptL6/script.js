// window.console.log("Hello world");
// window.alert("Be alert");

// let heading = document.getElementById("head");
// console.log(heading);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + "from apna college students";

let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText = "New unique value 1";
divs[1].innerText = "New unique value 2";
divs[2].innerText = "New unique value 3";

for(div of divs)
{
    console.log(div.innerText);
}

let idx=1;
for(div of divs)
{
    div.innerText = `New unique value ${idx}`;
    idx++;
}