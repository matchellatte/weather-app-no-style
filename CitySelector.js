import React from 'react';
import { View, Button, Text } from 'react-native';

const CitySelector = ({ cities, onCityClick }) => {
  return (
    <View>
      {/* Title for the city selection */}
      <Text>Select a City</Text>

      {/* Loop through the cities array and create a button for each city */}
      {cities.map((city) => (
        <View key={city.name}>
          {/* The button title is the city name and onPress calls the onCityClick function */}
          <Button title={city.name} onPress={() => onCityClick(city)} />
        </View>
      ))}
    </View>
  );
};

export default CitySelector;
