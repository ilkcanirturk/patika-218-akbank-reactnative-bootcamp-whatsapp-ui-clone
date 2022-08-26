import { View,  ScrollView} from 'react-native';
import React from 'react';

import ChatList from '../screenComponents/ChatList';

const Home = () => {
    
  //ScrollView içerisine Flatlist giriyor. Bu durumun geliştirilmesi gerek.
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatList/>
      </ScrollView>
    </View>
    
  )
}



export default Home;
