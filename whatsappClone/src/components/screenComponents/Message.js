import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const green = '#128C7E';
const grey = 'grey';
const myID = 'u1';

//Mesajların gösterildiği bölüm. Gönderici ve alıcı arasındaki mesaj gösterimindeki farklılıkların ayarlanması.
const Message = ({ message }) => {

    const isMe = message.user.id == myID;


  return (
    <View style = {[
        styles.container, isMe ? styles.messageSentContainer : styles.messageReceiveContainer]}
    >
      <Text style = {styles.text}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 20,
        maxWidth: '80%',
    },
    text: {
        color: 'white',
    },
    messageReceiveContainer: {
        backgroundColor: grey,
        marginLeft: 10,
        marginRight: 'auto',

    },
    messageSentContainer: {
        backgroundColor: green,
        marginLeft: 'auto',
        marginRight: 10,
    }
})

export default Message