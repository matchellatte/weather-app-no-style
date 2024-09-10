import React from 'react';
import { View, Button } from 'react-native';

const CitySelector = (props) => {
  // 5. Display a list of city buttons (use Button component) - 5 points
  return (
    <View>
      {props.cities.map((city) => (
        // 6. When city button is clicked, it should update the selected city using the function passed as a prop - 5 points
        <Button key={city} title={city} onPress={() => props.setSelectedCity(city)} />
      ))}
    </View>
  );
};

// 7. Exported as default - 3 points
export default CitySelector;
