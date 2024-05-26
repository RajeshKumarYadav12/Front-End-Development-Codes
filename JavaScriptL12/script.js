// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 4000);  //timeout

function api() {
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
//async await
async function getWeatherdata(){
    await api(); //1st call
    await api(); //2nd call
} 