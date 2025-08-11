const apiKey = "aaf0fcb9de0863531bce73ee1ff26dfd"; // ✅ Correct format

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weather").innerHTML = "City not found.";
      return;
    }

    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.getElementById("weather").innerHTML = `
      <h2>${city}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon" />
      <p><strong>${temp}°C</strong></p>
      <p>${description}</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = "Error retrieving data.";
    console.error(error);
  }
}
