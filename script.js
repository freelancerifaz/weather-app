// weather api

const weatherApi = {
    keys : '4c498be4e9986ff88fc8f29fd42c7b35',
    baseUrl : "http://maps.openweathermap.org/maps/2.0/weather" 
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
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(data => showWeatherReport(data))
}

// show weather report

function showWeatherReport(weather){
    let city = document.getElementById("city");
    city.innerText = `${weather.name} , ${weather.sys.country}`;

    let todayDate = document.getElementById("date");
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

    const weatherType = `${weather.weather[0].main}`;
    if(weatherType === 'clear'){
        document.body.style.backgroundImage = 'url(img/clear.jpeg)';
    }
    else if(weatherType === 'cloudy'){
        document.body.style.backgroundImage = 'url(img/cloudy.jpeg)';
    }
    else if(weatherType === 'cold'){
        document.body.style.backgroundImage = 'url(img/cold.jpeg)';
    }
    else if(weatherType === 'haze'){
        document.body.style.backgroundImage = 'url(img/haze.jpeg)';
    }
    else if(weatherType === 'rainy'){
        document.body.style.backgroundImage = 'url(img/rainy.jpeg)';
    }
    else if(weatherType === 'snow'){
        document.body.style.backgroundImage = 'url(img/snow.jpeg)';
    }
    else if(weatherType === 'stormy'){
        document.body.style.backgroundImage = 'url(img/stormy.jpeg)';
    }
    else {
        document.body.style.backgroundImage = 'url(img/sunny.jpeg)';
    }
};

// date manager

function dateManage(dateArg){
    const date = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const year = dateArg.getFullyear();
    const month = months[dateArg.getMonth()];
    const date = dateArg.getDate();
    const day = days[dateArg.getDay()];
    console.log(day);

    return `${date} ${month} , ${day} ${year}`;
}