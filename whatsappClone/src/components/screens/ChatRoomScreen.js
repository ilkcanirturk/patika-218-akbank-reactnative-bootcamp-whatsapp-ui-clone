import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import Message from '../screenComponents/Message';
import chatRoomData from '../data/Chats';
import MessageInput from '../screenComponents/MessageInput';

export default function ChatRoomScreen() {
  const navigation = useNavigation();
  
  // Tıklayınca hangi Chat sayfasında olduğumuzu göstermek için. const route = useRoute() ve yukarda useRoute import edilmesi gerek.
  // console.warn("Displaying room:" , route.params?.id)
  
  //Burasının geliştirilmesi gerekiyor.
  navigation.setOptions({title: 'Zeynep Öz'})
  
  // Chatların gösterimi için Flatlist kullanıldı.
  return (
    <SafeAreaView style={styles.chatPage}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item}/>}
        style={{ backgroundColor: '#dcf8c6'}}
      />
      <MessageInput/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  chatPage: {
    backgroundColor: 'white',
    flex: 1
  }
})
