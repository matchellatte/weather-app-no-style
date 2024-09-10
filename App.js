import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import CitySelector from './CitySelector'; // default export
import { WeatherInfo } from './WeatherInfo'; // named export

const App = () => {

  // 1. Should contain the list of cities as a state - 2 points
  const [cities] = useState(['Manila', 'Cebu', 'Davao']);
  
  // 4. Should pass the selected city and a function to update the selected city as props to CitySelector - 3 points
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <SafeAreaView>
      <Text>WEATHER INFORMATION - Grechelle Ann Boneo</Text>
      {/* 2. Should display a CitySelector component - 3 points */}
      <CitySelector cities={cities} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      
      {/* 3. Conditional rendering based on selectedCity */}
      {selectedCity ? (
        // 3. Should display a Weather info component based on the selected city - 3 points
        <WeatherInfo selectedCity={selectedCity} />
      ) : (
        // Show message when no city is selected
        <Text>Please select a city to view the weather information.</Text>
      )}
    </SafeAreaView>
  );
};

export default App;
