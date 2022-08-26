import { View,  ScrollView, Button, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, { useLayoutEffect } from 'react';

import ChatList from '../screenComponents/ChatList';

const Home = ({navigation}) => {
    


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sohbetler',
      headerStyle: { backgroundColor: 'white'},
      headerTitleStyle: { color: '#007AFF'}
    });
  }, [navigation]);  


  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatList/>
      </ScrollView>
    </View>
    
  )
}

// const styles = StyleSheet.create({

//   container: { 
//     display: "flex",
//     flexDirection: "row",
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "rgba(0,0,0,0.3)",
//   },
//   pp: { 
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     backgroundColor: "rgba(0,0,0,0.3)",
//     marginRight: 8
//   },
//   container2: {
//     display: "flex",
//     flexDirection: "column",
//     flex: 1
//   },
//   container3: {
//     display: "flex", 
//     flexDirection: "row", 
//     marginBottom: 8, 
//     justifyContent:'space-between'
//   },
//   container4: {
//     flexDirection: 'row'
//   },
//   text: {
//     fontWeight: "600",
//     fontSize: 16
//   }

// })

export default Home;
