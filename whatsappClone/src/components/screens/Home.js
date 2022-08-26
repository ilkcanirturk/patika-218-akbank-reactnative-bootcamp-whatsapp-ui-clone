import { View,  ScrollView} from 'react-native';
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



export default Home;
