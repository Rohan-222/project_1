const api_Key= "ba096aa2a3adecf8473425da4a30c163"
const api_URL= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function check_Weather(city){
    const response = await fetch(api_URL + city +`&appid=${api_Key}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    } else{
        var data = await response.json();
    
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="weather-app-img/images/clouds.png";
        }
         else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="weather-app-img/images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src ="weather-app-img/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="weather-app-img/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src ="weather-app-img/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
    

    

}

serachBtn.addEventListener("click",()=>{check_Weather(serachBox.value)});
check_Weather();