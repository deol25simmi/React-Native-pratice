/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, TextInput,Button} from 'react-native';


const App = () => {
  const [name,setName]= useState("");
  return (
    <View>
      <Text style={{fontSize: 30, color: 'blue'}}>Text Input</Text>
      <Text style={{fontSize: 30, color: 'blue'}}>Your name is:{name}</Text>
      <TextInput
        style={{
          fontSize: 20,
          color: 'magenta',
          borderWidth: 2,
          borderColor: 'blue',
        }}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
        multiline={true}
      />
      <Button title="Clear Input Value"   onPress= {()=>setName("")} />
    </View>
  );
};


export default App;
