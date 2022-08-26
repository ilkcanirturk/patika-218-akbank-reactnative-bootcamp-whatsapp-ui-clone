import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

//En üstteki Logo yazısı ve yanındaki ikonların düzenlenmesi.
const LogoHeader = () => {
  return (
    <View style={styles.container}>
          <View>
            <Text style= {styles.textlogo}>WhatsApp</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon1}>
              <Feather name="more-vertical" size={20} style={styles.iconColor}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon2}>
              <Entypo name ="new-message" size={20} style={styles.iconColor}/>
            </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: { 
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10
    },
    textlogo: {
      fontSize: 30,
      paddingTop: 5,
      paddingLeft: 10,
      color: '#075E54'
    },
    iconContainer: {
      flexDirection: 'row',
      paddingTop: 15
    },
    icon1: {
      paddingRight: 20
    },
    icon2: {
      paddingRight: 10
    },
    iconColor: {
      color: '#007AFF'
    }
  
  })

export default LogoHeader