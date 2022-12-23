import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonState from "./src/context/pokemon/PokemonState";
import Home from "./src/screens/Home";
import Pokemon from "./src/screens/Pokemon";
/**
 * 
 * https://xd.adobe.com/view/e13ba731-fd76-40bf-ab3d-1b75225cc182-b468/specs/
 * https://pokeapi.co/
 */

const App = () => {
  const Stack = createStackNavigator();
  return (
    <PokemonState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    </PokemonState>
  );
}

export default App;
