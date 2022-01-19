import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>MUSIC STORE</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({  
    container: {
        width: '100vw',
        backgroundColor: '#253529',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
      },

    text:{
      color: '#fff',
    }
  });
  