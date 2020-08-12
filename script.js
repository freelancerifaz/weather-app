// weather api

const weatherApi = {
    key: "9c03ae49705801d954820517e5c354e8",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

// add event listener function

const searchBoxData = document.getElementById("search-box")
searchBoxData.addEventListener('keypress',(event) => {
    if (event.keyCode === 13) {
        console.log(searchBoxData.value);
        getWeatherData(searchBoxData.value);
        document.querySelector(".weather-body").style.display = "block";
        document.getElementById("search-box").value = "";
    }
})

// get weather data 

function getWeatherData(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&APPID=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(data => showWeatherReport(data))
}

// show weather report

function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById("city");
    city.innerText = `${weather.name} , ${weather.sys.country}`;

    let todayDate = document.getElementById("time");
    const currentDate = new Date();
    todayDate.innerText = dateManage(currentDate);

    let temp = document.getElementById("temperature");
    temp.innerText = `${Math.round(weather.main.temp)}`;

    let tempMin = document.getElementById("min-temp");
    tempMin.innerText = `${Math.floor(weather.main.temp_min)}`;

    let tempMax = document.getElementById("max-temp");
    tempMax.innerText = `${Math.ceil(weather.main.temp_max)}`;

    let weatherType = document.getElementById("weather");
    weatherType.innerText = `${weather.weather[0].main}`;

    const weatherTypes = `${weather.weather[0].main}`;
    if(weatherTypes === 'Clear'){
        document.body.style.backgroundImage = 'url(img/clear.jpeg)';
    }
    else if(weatherTypes === 'Clouds'){
        document.body.style.backgroundImage = 'url(img/cloudy.jpeg)';
    }
    else if(weatherTypes === 'Cold'){
        document.body.style.backgroundImage = 'url(img/cold.jpeg)';
    }
    else if(weatherTypes === 'Haze'){
        document.body.style.backgroundImage = 'url(img/haze.jpeg)';
    }
    else if(weatherTypes === 'Rain'){
        document.body.style.backgroundImage = 'url(img/rainy.jpeg)';
    }
    else if(weatherTypes === 'Snow'){
        document.body.style.backgroundImage = 'url(img/snow.jpeg)';
    }
    else if(weatherTypes === 'Stormy'){
        document.body.style.backgroundImage = 'url(img/stormy.jpeg)';
    }
    else {
        document.body.style.backgroundImage = 'url(img/sunny.jpeg)';
    }
};

// date manager

function dateManage(dateArg){
    const days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const year = dateArg.getFullYear();
    const month = months[dateArg.getMonth()];
    const date = dateArg.getDate();
    const day = days[dateArg.getDay()];
    console.log(day);

    return `${date} ${month} , (${day}) ${year}`;
};