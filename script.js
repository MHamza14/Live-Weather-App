let getLiveWeather = () => {
    let UserInput = document.querySelector('#UserInput').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?&appid=dc09701a59ef1086a22811caa497b1d7&q=${UserInput}`)
        .then(function (response) {
            console.log("Getting Response");
            console.log(response.data);

            let date = new Date(response.data.dt * 1000); 
            let time = moment(response.data.dt * 1000).format('h:mm:ss a');
            let sunrise = moment(response.data.sys.sunrise * 1000).format('h:mm:ss a');
            let sunset = moment(response.data.sys.sunset * 1000).format('h:mm:ss a');
            let temp = Math.round((response.data.main.temp)-273.15);
            let mintemp = Math.round((response.data.main.temp_min)-273.15);
            let maxtemp = Math.round((response.data.main.temp_max)-273.15);

            document.querySelector("#MainDashboard").innerHTML = 
            `<h2>Weather in ${response.data.name}</h2>
            
            <img src='https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png' class='weather_icon' />
            <div><h2>Temp: ${temp}</h2></div>
            <div><h4>Minimum Temprature: ${mintemp}</h4></div>
            <div><h4>Maximum Temprature: ${maxtemp}</h4></div>
            <div>${response.data.name}, ${ response.data.sys.country}</div>
            <div>${date}</div>
            <div>${time}</div>
            `
            
            document.querySelector("#WindStatus").innerHTML = 
            `<h2> Wind Status </h2>
            <div>${response.data.wind.speed} /KM</div>
            <div>${response.data.wind.deg} /Degrees</div>
            <div><h3>${time}</h3></div>
            `

            document.querySelector("#UVIndex").innerHTML = 
            `<h2> UV Index </h2>
            <div>${response.data.main.pressure} /KM</div>
            <div>${time}</div>
            `
            
            document.querySelector("#SunriseSunset").innerHTML = 
            `<h2> Sun Rise and Sun Set </h2>
            <div>${sunrise}</div>
            <div>${sunset}</div>
            `

            document.querySelector("#Humidity").innerHTML = 
            `<h2> Humidity </h2>
            <div>${response.data.main.humidity} %
            The dew point is 27° Right Now
            </div>
            `

            document.querySelector("#Visibility").innerHTML = 
            `<h2> Visibility </h2>
            <div>${response.data.visibility} Km
            Haza is effecting visibility
            </div>
            `
            document.querySelector("#FeelsLike").innerHTML = 
            `<h2> Feels Like </h2>
            <div>${response.data.main.feels_like}° Km
            Humidity is making is feel hotter
            </div>
            `

        })
        .catch(function (error) {
            console.log(error);
        })
}
