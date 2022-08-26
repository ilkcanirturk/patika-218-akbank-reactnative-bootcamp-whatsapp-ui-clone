import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import ChatRoomScreen from './src/components/screens/ChatRoomScreen';
import LogoHeader from './src/components/screenComponents/LogoHeader';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <LogoHeader name="LogoHeader" component={LogoHeader}/>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Homepage" 
          component={Home}
          options={{title: 'Sohbetler'}} 
        />
        <Stack.Screen 
          name="Chat" 
          component={ChatRoomScreen}
          options={{title: 'Chat'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;