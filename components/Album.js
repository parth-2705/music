import React, { Component} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight, Modal} from 'react-native';
import { Dimensions } from 'react-native';
let helperArray = require('../data.json');
const { useState, useEffect } = React;



export default class Album extends Component {
constructor(props){
    super(props);
    this.state ={
        allUsers: helperArray,
        usersFiltered: helperArray,
        open: false,
    };
}





searchUser = (textToSearch) => {
    this.setState({
        usersFiltered:this.state.allUsers.filter( i =>
           i['im:name'].label.toLowerCase().includes(textToSearch.toLowerCase()),
        ).concat
        (this.state.allUsers.filter( i =>
            i['im:artist'].label.toLowerCase().includes(textToSearch.toLowerCase()),
         )),
    })
}




sortByArtist = () => {
    this.setState({usersFiltered:this.state.allUsers.sort((a, b) => a['im:artist'].label > b['im:artist'].label ? 1 : -1)});
  }

  sortByPrice = () => {
    this.setState({usersFiltered:this.state.allUsers.sort((a, b) => parseFloat(a['im:price'].attributes.amount)> parseFloat(b['im:price'].attributes.amount) ? 1 : -1)});
  }

  sortByRelease = () => {
    this.setState({usersFiltered:this.state.allUsers.sort((a, b) => a['im:releaseDate'].label > b['im:releaseDate'].label ? 1 : -1)});
  }
closeModal = () => {
    this.setState({open:false});
}

openModal = (index) => {
    this.setState({
        open:true,
    });
    console.log(index);
}
    render() {
        return (
            <View >
                 <TextInput style={styles.search} placeholder="Search Music or Artists" 
                onChangeText={text => {this.searchUser(text);
                }}></TextInput>
                <View style={styles.sort}>
                   <TouchableHighlight onPress={this.sortByArtist} ><Text style={styles.sortb} >Sort by Artist</Text></TouchableHighlight> 
                   <TouchableHighlight><Text style={styles.sortb} onPress={this.sortByPrice}>Sort by Price</Text></TouchableHighlight>
                   <TouchableHighlight><Text style={styles.sortb} onPress={this.sortByRelease}>Sort by Release</Text></TouchableHighlight>
                </View>
                {this.state.usersFiltered.map((item, index) => (
                    <View style={styles.box}>
                       <Image style={styles.img} source={{uri: item['im:image'][2].label}}></Image>
                       <View style={styles.text}>
                           <Text style={styles.text}> {item['im:name'].label}</Text>
                           <Text style={styles.textsm}> {item['im:artist'].label}</Text>
                           <Text style={styles.textsm}> {item['im:releaseDate'].attributes.label}</Text>
                           <Text style={styles.textg}> {item['im:price'].label}</Text>
                           <TouchableHighlight onPress={index => {this.openModal(index)}}>
                                <Text style={styles.more}  >More...</Text>
                          </TouchableHighlight>
                          
                       </View>
                    </View>
                ))}
                <Modal animationType = {"slide"} transparent = {true} visible= {this.state.open}>
               
               <View style = {styles.modal}>
                  <Text style = {styles.modalc}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress={this.closeModal}>
                     
                     <Text style = {styles.modalc}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        borderColor: 'yellow',
        borderWidth: 1,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center'
    },
    
    text:{
        flexDirection: 'column',
        color: '#fff',
        width: 280,
        marginVertical: 'auto',
    },

    search:{
        color: '#fff',
        margin: 5,
        height: 20,
    },

    img: {
        alignSelf: 'flex-start',
        height: 80,
        width: 80,
        marginVertical: 'auto',
    },

    textg:{
        color: 'green',
        fontSize: 10,
        width: 280,
      },

    textsm:{
      color: 'gray',
      fontSize: 10,
      width: 280,
    },

    more:{
        color: 'gray',
        fontSize: 10,
        width: 200,
        marginLeft: 3,
      },

    sortb:{
        color: 'gray',
        fontSize: 10,
        width: 80,
      },
    
    sort:{
        flexDirection: 'row',
        marginVertical: 10,
    },
    
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#000',
        color: '#fff',
    },
    modalc: {
        color: '#fff',
    },
  });
  