import { FlatList, StyleSheet, View } from 'react-native';
import * as React from 'react';
import Header from './Header';
import ChatRoomItem from './ChatRoomItem';
import chatRoomsData from '../data/ChatRooms';




export default function ChatList() {
  return (
    <View style={styles.mainPage}>
      <Header name="Header" component={Header}/>
       <FlatList
          data= {chatRoomsData}
          renderItem={({ item }) => <ChatRoomItem chatRoom={item}/>}
       />
    </View>
  )
}



const styles = StyleSheet.create({
  mainPage:{
    backgroundColor:'white',
    flex: 1
  }
    
  
  })
