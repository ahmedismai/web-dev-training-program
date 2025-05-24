const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const createVenueHTML = (name, location, iconSource) => {
  return `
    <h2>${name}</h2>
    <img class="venueimage" src="${iconSource}" alt="${name} Icon" />
    <h3>Address:</h3>
    <p>${location.address || 'N/A'}</p>
    <p>${location.city || 'N/A'}</p>
    <p>${location.country || 'N/A'}</p>
  `;
};

const createWeatherHTML = (currentDay) => {
  return `
    <h2>${weekDays[(new Date()).getDay()]}</h2>
    <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
    <h2>Condition: ${currentDay.weather[0].description}</h2>
    <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png" alt="Weather Icon">
  `;
};
