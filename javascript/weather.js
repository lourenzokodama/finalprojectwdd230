   function getWeather(lat, lon) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('location').innerText = data.name;
                    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                    document.getElementById('temp').innerText = Math.round(data.main.temp - 273.15) + '°C';
                    document.getElementById('desc').innerText = data.weather[0].description;
                });
        }

        navigator.geolocation.getCurrentPosition(position => {
            getWeather(position.coords.latitude, position.coords.longitude);
        });
