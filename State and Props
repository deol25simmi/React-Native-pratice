/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('Simmi');
 
  return (
    <View>
      <Text style={{fontSize: 30}}>{name}</Text>
     
      <Button title="Change Name" color={'red'} onPress = { () => { setName('Sam')}} />
      <User name={name} age={22} />
    </View>
  );
};

const User = (props) => {
  console.warn(props);
  return (
    <View style={{backgroundColor: 'green', padding: 5}}>
      <Text style={{fontSize: 20}}>Name :{props.name}</Text>
      <Text style={{fontSize: 20}}>Age :{props.age}</Text>
    </View>
  );
 }
export default App;
