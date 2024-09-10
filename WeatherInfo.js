import React from 'react';
import { View, Text } from 'react-native';

const WeatherInfo = ({ selectedCity }) => {
  const getWeatherReport = (city) => {
    const weatherReports = {
      Manila: 'Sunny, 30°C',
      Cebu: 'Cloudy, 28°C',
      Davao: 'Rainy, 26°C',
    };
    return weatherReports[city];
  };

  return (
    <View>
      {/* 1. Display the name of the selected city - 2 points */}
      <Text>{selectedCity}</Text>
      
      {/* 2. Display a brief static weather report for the selected city - 5 points */}
      <Text>{getWeatherReport(selectedCity)}</Text>
    </View>
  );
};

// 4. Not exported as default - 3 points
export { WeatherInfo };
