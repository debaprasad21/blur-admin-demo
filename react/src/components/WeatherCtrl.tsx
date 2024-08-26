// Converted from src/app/pages/dashboard/weather/WeatherCtrl.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';

const WeatherCtrl: React.FC = () => {
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState<any>({});
  const [geoData, setGeoData] = useState<any>({});

  const weatherIcons = {
    '01d': 'ion-ios-sunny-outline',
    '02d': 'ion-ios-partlysunny-outline',
    '03d': 'ion-ios-cloud-outline',
    '04d': 'ion-ios-cloud',
    '09d': 'ion-ios-rainy',
    '10d': 'ion-ios-rainy-outline',
    '11d': 'ion-ios-thunderstorm-outline',
    '13d': 'ion-ios-snowy',
    '50d': 'ion-ios-cloudy-outline',
    '01n': 'ion-ios-cloudy-night-outline',
    '02n': 'ion-ios-cloudy-night',
    '03n': 'ion-ios-cloud-outline',
    '04n': 'ion-ios-cloud',
    '09n': 'ion-ios-rainy',
    '10n': 'ion-ios-rainy-outline',
    '11n': 'ion-ios-thunderstorm',
    '13n': 'ion-ios-snowy',
    '50n': 'ion-ios-cloudy-outline'
  };

  const url = 'http://api.openweathermap.org/data/2.5/forecast';
  const key = '2de143494c0b295cca9337e1e96b00e0';
  const middleOfTheDay = 15;

  const switchUnits = (name: string) => {
    setUnits(name);
    updateWeather();
  };

  const switchDay = (day: number) => {
    setWeather((prevWeather: any) => ({
      ...prevWeather,
      current: day
    }));
    makeChart(weather.days[day].timeTemp);
  };

  const updateWeather = () => {
    axios.get(url, {
      params: {
        appid: key,
        lat: geoData.geoplugin_latitude,
        lon: geoData.geoplugin_longitude,
        units: units
      }
    }).then(response => {
      saveWeatherData(response.data);
      makeChart(weather.days[weather.current].timeTemp);
    }).catch(() => {
      console.log("WEATHER FAILED");
    });
  };

  const updateGeoData = () => {
    axios.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
      .then(response => {
        setGeoData(response.data);
        updateWeather();
      })
      .catch(() => {
        console.log("GEO FAILED");
      });
  };

  const makeChart = (data: any) => {
    // Assuming Chart.js is used for chart rendering
    // This is a placeholder for the actual chart rendering logic
    console.log('Chart data:', data);
  };

  const saveWeatherData = (data: any) => {
    const firstItem = data.list[0];
    const weatherData = {
      days: [{
        date: new Date(),
        timeTemp: [],
        main: firstItem.weather[0].main,
        description: firstItem.weather[0].description,
        icon: firstItem.weather[0].icon,
        temp: firstItem.main.temp
      }],
      current: 0
    };

    data.list.forEach((item: any, i: number) => {
      const itemDate = new Date(item.dt_txt);
      if (itemDate.getDate() !== weatherData.days[weatherData.days.length - 1].date.getDate()) {
        weatherData.days.push({ date: itemDate, timeTemp: [] });
      }
      const lastItem = weatherData.days[weatherData.days.length - 1];
      lastItem.timeTemp.push({
        time: itemDate.getHours(),
        temp: item.main.temp
      });
      if ((weatherData.days.length > 1 && itemDate.getHours() === middleOfTheDay) || i === data.list.length - 1) {
        lastItem.main = item.weather[0].main;
        lastItem.description = item.weather[0].description;
        lastItem.icon = item.weather[0].icon;
        lastItem.temp = item.main.temp;
        lastItem.date.setHours(i === data.list.length - 1 ? 0 : middleOfTheDay);
        lastItem.date.setMinutes(0);
      }
    });

    console.log(weatherData.days[weatherData.current].date);
    weatherData.days = weatherData.days.slice(0, 5); // Assuming a default forecast length of 5
    setWeather(weatherData);
  };

  useEffect(() => {
    updateGeoData();
  }, []);

  return (
    <div>
      {/* Render weather information and controls here */}
      <button onClick={() => switchUnits('imperial')}>Switch to Imperial</button>
      <button onClick={() => switchUnits('metric')}>Switch to Metric</button>
      {/* Additional UI components and logic */}
    </div>
  );
};

export default WeatherCtrl;
