import React, { useState } from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import CitySelector from './CitySelector';
import WeatherInfo from './WeatherInfo';

const App = () => {
  // List of cities and weather data
  const [cities] = useState([
    { name: 'New York', weather: 'Sunny, 25°C' },
    { name: 'Tokyo', weather: 'Cloudy, 20°C' },
    { name: 'London', weather: 'Rainy, 15°C' },
    { name: 'Paris', weather: 'Windy, 18°C' },
    { name: 'Sydney', weather: 'Sunny, 27°C' }
  ]);

  // State to keep track of the currently selected city
  const [selectedCity, setSelectedCity] = useState(null);

  // Function to handle city selection
  const handleCityClick = (city) => {
    setSelectedCity(city); // Update the selected city
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* Title */}
          <Text>City Weather Information</Text>

          {/* Render CitySelector and pass the list of cities and the click handler */}
          <CitySelector cities={cities} onCityClick={handleCityClick} />

          {/* Conditionally render WeatherInfo when a city is selected */}
          {selectedCity && (
            <WeatherInfo city={selectedCity.name} weather={selectedCity.weather} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
