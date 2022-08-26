import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';



export default function ChatRoomItem({ chatRoom }) {
    const user = chatRoom.users [1];

    const navigation = useNavigation();
    
    // Chatroom için navigation kullanımı.
    const onPress = () => {
       navigation.navigate('ChatRoom', { id: chatRoom.id });
    }

    return (
        <Pressable onPress={onPress}>
            <View
                style={styles.container}>
                <Image
                    style={styles.pp}
                    source={{ uri: user.imageUri}}
                />
                <View
                    style={styles.container2}>
                    <View style={styles.container3}>
                        <Text style={styles.text}>{user.name}</Text>
                        <Text style={styles.lastTextDate}>{chatRoom.lastMessage.createdAt}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.chatText}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({

    container: { 
      display: "flex",
      flexDirection: "row",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0,0,0,0.3)",
    },
    pp: { 
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: "rgba(0,0,0,0.3)",
      marginRight: 15
    },
    container2: {
      display: "flex",
      flexDirection: "column",
      flex: 1
    },
    container3: {
      display: "flex", 
      flexDirection: "row", 
      marginBottom: 8, 
      justifyContent:'space-between'
    },
    text: {
      fontWeight: "600",
      fontSize: 16
    },
    chatText: {
      paddingTop: -5,
    },
    lastTextDate: {
        marginLeft: 16
    }
  
  })