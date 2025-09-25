document.addEventListener("DOMContentLoaded", () => {
    const weatherContainer = document.querySelector("#weather div");
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // <-- Replace with your key
    const city = "Chikkamagaluru";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherContainer.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Feels like: ${data.main.feels_like}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind: ${data.wind.speed} m/s</p>
                `;
            } else {
                weatherContainer.innerHTML = `<p>Weather data not available.</p>`;
            }
        })
        .catch(err => {
            weatherContainer.innerHTML = `<p>Error loading weather data.</p>`;
        });
});