const apiKey  = "cf9c71e1bd136a5da19b815429272686";
const apiCode = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const city = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');
async function checkWeather(area){
    const response = await fetch(apiCode+`&q=${area}`+`&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;
    console.log(data)
    const weatherCondition = data.weather[0].main;
    weatherIcon.src = "images/"+`${weatherCondition}`+'.png';
}  

searchBtn.addEventListener('click',()=>{
    checkWeather(city.value)
})

