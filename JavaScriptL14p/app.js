const api =  "https://api.exchangerate-api.com/v4/latest/";
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const dropdowns = document.querySelectorAll(".dropdown select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";   
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtvalue = amount.value;

    if (amtvalue === "" || amtvalue < 1) {
        amtvalue = 1;
        amount.value = "1";
    }

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurr.value}`);
    const data = await response.json();
    
    const exchangeRate = data.rates[toCurr.value];
    const convertedAmount = amtvalue * exchangeRate;

    msg.innerText = `${amtvalue} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;

});

