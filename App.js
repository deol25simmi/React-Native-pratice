/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, Button,StyleSheet} from 'react-native';
import Exstyles from './styleSheet/style.js';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={Exstyles.textBox,styles.textBox}>Style in React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    textBox:{
      backgroundColor:'violet',
      fontSize:40,
      color:'#fff',
      marginBottom:20,
      padding:10,
      borderRadius:30,
      height:70,
      textAlignVertical:'center',
      textAlign:'center',
      borderColor:'blue',
      borderWidth:2

    }
  }
)
export default App;
