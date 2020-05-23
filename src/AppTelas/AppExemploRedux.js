import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Box from '../components/Box'
import reducer from '../reducers/reducer'
    
const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Box color="orange" />
        <Box color="blue" />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
