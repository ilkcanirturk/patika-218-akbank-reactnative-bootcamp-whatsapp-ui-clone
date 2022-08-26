import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";

// Arama çubuğu ve hemen altındaki başlıkların düzenlenmesi.
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style= {styles.search}>
            <Feather name="search" size={18}/>
            <TextInput placeholder="Ara" style={styles.inputStyle}></TextInput>
        </View>
      </View>
      <View style= {styles.otherTitles}>
        <TouchableOpacity>
          <Text style={styles.textButton}>Toplu Mesaj Listeleri</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textButton}>Yeni Grup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    search: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        padding: 6,
        margin: 5,
        backgroundColor: '#ededed',
        borderRadius: 8,      
    },
    otherTitles: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
        color: 'blue'
    },
    inputStyle: {
      fontSize: 14, 
      height: 35
    },
    textButton: {
      fontSize: 14, 
      color:'#007AFF'
    }

});

export default Header
