import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import SearchScreen from './screens/search';
import { useEffect, useState } from 'react'
import Details from './screens/movieDetails';
// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('@expo/snack-static/react-native-logo.png')}
//     />
//   );
// }
export default function App() {
 
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        
        screenOptions={{
          
          headerStyle:{
            backgroundColor: 'rgb(118, 29, 29)',
            
          },
          
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
            
          
          },
          
          
        }}
      >
        <Stack.Screen name='Home'
         component={HomeScreen}
         options={{title:"Batman",
        }}
         />
       
        <Stack.Screen name='Search' component={SearchScreen}
        
        />
        <Stack.Screen name='Details' component={Details}
        // options={{ headerTitle: (props) => <HeaderTitle {...props} /> }}
        />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// https://expo.dev/@ajy14/movieDetails3?serviceType=classic&distribution=expo-go