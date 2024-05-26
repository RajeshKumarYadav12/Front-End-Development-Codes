// function myFunction(msg, n){
//     console.log(msg*n);
    // console.log("Rajesh Kumar Yadav");
// }

//NAn not a number
// myFunction("Rajesh");
// myFunction("Raja");
// myFunction("I love JS", 100);
// function sum(x, y){
//     return x+y;
// }
// let val1 = sum(3,6);
// console.log(val1);
// const arrowsum =  (a, b)=>{
//     console.log(a+b);
// };

// const mul = (a, b)=>{
//     return a*b;
// };



// let str = prompt("Enter your string :");
// let count=0;
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]==='a' || str[i]==='A' || str[i]==='e' || str[i]==='E' || str[i]==='i' || str[i]==='I'|| str[i]==='o' || str[i]==='O' || str[i]==='u'||str[i]==='U')
//     {
//         count++;
//     }   
// }
// console.log(count);


// function myFunction(str)
// {
//     let c=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]==='a' || str[i]==='A' || str[i]==='e' || str[i]==='E' || str[i]==='i' || str[i]==='I'|| str[i]==='o' || str[i]==='O' || str[i]==='u'||str[i]==='U')
//         {
//             c++;
//         }   
//     }
//     return c;
// }

// const vowelcheck = (str)=>{
//     let c=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]==='a' || str[i]==='A' || str[i]==='e' || str[i]==='E' || str[i]==='i' || str[i]==='I'|| str[i]==='o' || str[i]==='O' || str[i]==='u'||str[i]==='U')
//         {
//             c++;
//         }   
//     }
//     return c;
// }

// let arr = [1,2,3,4,5];
// arr.forEach(function privateVal(val){
//     console.log(val);
// });





// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val);
// });
let nums=[1,2,3,4,5];
// nums.forEach((num)=>{
//     console.log(num**2);
// });

// let newarr = nums.map((val)=>{
//     return val*val*val;
// }); 
// let newfilter = nums.filter((val)=>{
//     return val%2!==0;
// }); 

const output1 = nums.reduce((prev, curr)=>{
    return prev>curr?prev:curr;
});

console.log(output1);


let mark = [70,80, 90, 95,97,56,98];

const output = mark.filter((val)=>{
    return val>90;
});

console.log(output);
//array input
let n = prompt("Enter the size of array:");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1] = i;
}
console.log(arr);
//sum

const sum = arr.reduce((prev, curr)=>{
    return prev+curr;
});
console.log(sum);
//mul
const product= arr.reduce((prev, curr)=>{
    return prev*curr;
});
console.log(product);

