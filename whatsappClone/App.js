import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import ChatRoomScreen from './src/components/screens/ChatRoomScreen';
import LogoHeader from './src/components/screenComponents/LogoHeader';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Stack = createNativeStackNavigator();
  // Stack Navigator kullanımı
  return (
    <NavigationContainer>
      <LogoHeader name="LogoHeader" component={LogoHeader}/>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Homepage" 
          component={Home}
          options={{ headerTitle : HomeHeader }}
        />
        <Stack.Screen 
          name="ChatRoom" 
          component={ChatRoomScreen}
          options={{ headerTitle : ChatRoomHeader }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Anasayfadaki yazının düzenlenmesi
const HomeHeader = () => {
  return (
    <View>
      <Text style={styles.mainHeader}>Sohbetler</Text>
    </View>
  )
}

// Chat ekranında isim ve logo değişikliği
const ChatRoomHeader = (props) => {
  return (
    <View style={styles.secondContainer}>
      <Text style={styles.secondHeader}>{props.children}</Text>
      <View style={styles.secondView}>
        <Ionicons style={styles.iconCam} name="ios-videocam-outline" size={24}/>
        <Ionicons style={styles.iconCall} name="ios-call-outline" size={24}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainHeader: {
    color: "black", 
    fontWeight:'500', 
    fontSize: 26
  },
  secondContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'space-between'
  },
  secondHeader: {
    color: "black", 
    fontSize: 18, 
    marginLeft:-25
  },
  secondView:{
    flexDirection: 'row'
  },
  iconCam: {
    color: "#007AFF", 
    marginLeft:180
  },
  iconCall: {
    color: "#007AFF", 
    marginLeft:15
  }
})

export default App;