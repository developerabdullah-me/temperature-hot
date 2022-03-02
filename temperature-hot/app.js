API_KEY = `59bde820597ca8ff285ce75f4067e5d8
`;
const searchBtn= () =>{
    const city =document.getElementById("search-input").value
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data))

}
const weatherData=(id, text) =>{
    document.getElementById(id).innerText=text;
}

const showWeather=weather=>{
    weatherData('country',weather.name)
    weatherData('tempereture',weather.main.temp)
    weatherData('clouds',weather.weather[0].main)

    const url=` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
   const icon=document.getElementById('weather-icon')
   icon.setAttribute('src',url)
    console.log(weather)
}