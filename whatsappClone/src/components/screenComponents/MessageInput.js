import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Mesaj yazma kısmı ve o bölgede bulunan ikonlar.
const MessageInput = () => {
  return (
    <View style={styles.root}>
      <Fontisto  style={styles.icon1} name="plus-a" size={22}/>
      <View style={styles.inputContainer}>
        <TextInput/>
      </View>
      <MaterialCommunityIcons style={styles.icon4} name="sticker-outline" size={24}/>
      <Ionicons  style={styles.icon2} name="ios-camera-outline" size={26}/>
      <Ionicons  style={styles.icon3} name="ios-mic-outline" size={26}/>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: '#d2d4d2',
        flex: 1,
        borderRadius: 25,
        maxWidth: '70%',
        maxHeight: '75%',
        marginLeft: 10
    },
    icon1: {
        color: '#007AFF',
    },
    icon2: {
        color: '#007AFF',
        paddingLeft: 10
    },
    icon3: {
        color: '#007AFF',
        paddingLeft: 10
    },
    icon4: {
        color: '#007AFF',
        position: 'absolute',
        paddingLeft: 170,
    }
})

export default MessageInput

