let getLiveWeather = () => {
    let UserInput = document.querySelector('#UserInput').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?&appid=dc09701a59ef1086a22811caa497b1d7&q=${UserInput}`)
        .then(function (response) {
            console.log("Getting Response");
            console.log(response.data);

            // let iconcode = response.data.weather[0].icon;
            // let iconurl = "http://openweathermap.org/img/wn/" + iconcode + ".png";

            // document.querySelector("#icon").innerHTML = $('#').attr('src',iconurl);
            
            document.querySelector("#MainDashboard").innerHTML = 
            `<h2>Weather in ${response.data.name}</h2>
            
            <img src="http://openweathermap.org/img/w/" + ${response.data.weather[0].icon}+ ".png" />
            <div>${response.data.weather[0].main}</div>
            <div>${response.data.weather[0].description}</div>
            <div>${response.data.weather[0].icon}</div>
            <div>${response.data.name}, ${ response.data.sys.country}</div>
            <div>${response.data.dt}</div>
            <div>${response.data.timezone}</div>
            `
            
            document.querySelector("#WindStatus").innerHTML = 
            `<h2> Wind Status </h2>
            <div>${response.data.wind.speed} /KM</div>
            <div>${response.data.wind.deg} /Degrees</div>
            <div>${response.data.timezone}</div>
            `

            document.querySelector("#UVIndex").innerHTML = 
            `<h2> UV Index </h2>
            <div>${response.data.main.pressure} /KM</div>
            <div>${response.data.timezone}</div>
            `
            
            document.querySelector("#SunriseSunset").innerHTML = 
            `<h2> Sun Rise and Sun Set </h2>
            <div>${response.data.sys.sunrise}</div>
            <div>${response.data.sys.sunset}</div>
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
