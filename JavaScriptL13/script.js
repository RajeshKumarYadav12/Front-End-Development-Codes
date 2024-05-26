const url = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#button");


const getFacts = async () => {
    console.log("Getting data------");
    let response = await fetch(url);
    console.log(response); 
    let data = await response.json(); //JSON format
    console.log(data[0].text);
    factpara.innerText = data[0].text;
};

btn.addEventListener("click", getFacts);