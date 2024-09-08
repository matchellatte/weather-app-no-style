import React from 'react';
import { View, Text } from 'react-native';

const WeatherInfo = ({ city, weather }) => {
  return (
    <View>
      {/* Display the selected city's weather information */}
      <Text>Weather Information for {city}</Text>
      <Text>{weather}</Text>
    </View>
  );
};

export default WeatherInfo;
