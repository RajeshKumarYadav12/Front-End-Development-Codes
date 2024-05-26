//Loop 
//String
for(let count=1;count<11;count++)
{
    console.log(count); //10 times execute 
}
//calculate sum of n number
let sum=0;
for(let i=1;i<=5;i++)
{
    sum+=i;
}
console.log(sum);

//for of on string and 
let str="Rajesh";
for(let i of str)
{
    console.log("i =",i);
}

//for in

let student={
    name :"rajesh",
    age : 18,
    cgpa :7.5,
    isPass :true,
};

for(let key in student)
{
    console.log("Key =", key, "value =", student[key])
}

//Gues number game
//string
//str.length will print length of string // str[9]
//a = `Template string`; type of a is string

let obj = {
    item: "pen",
    price:10,
}
let output = `the cost of ${obj.item} is ${obj.price} rupees`;

console.log(output);

console.log("Rajesh\nKumar");
//string method in JS
//str.toUpperCase();
//toLowerCase;
//str.trim() to remove whiteSpace

let name = prompt("Enter your name :");
let a = "@";
let l ="123";
let userName = a+name+l;
console.log(userName);

//Array
let mark = [1, 23,4,5,6];
console.log(mark);
console.log(mark.length);
console.log(typeof mark);
//array indices and array is mutable

// string immutable 

for(let i=0;i<mark.length;i++)
{
    console.log(mark[i]);
}

for(let i of mark)
{
    console.log(i);
}

let city = ["rwr", "wedw", "ewdewd", "dsd"];
for(let i of city)
{
    console.log(i.toUpperCase());
}

let arr = [85, 97, 44, 37, 76, 68];
let sum1 = 0;
for(let i=0;i<arr.length;i++)
{
    sum1+=arr[i];
}
let avg =sum1/arr.length;
console.log(avg);

let arr1 = [250, 745, 300, 900, 50];

for(let i=0;i<arr1.length;i++)
{
    console.log("Value at index ", i);
    let offer = arr1[i]/10;
    arr1[i]=arr1[i]-offer;
    console.log(arr1[i]);
}
