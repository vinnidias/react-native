import React from 'react';
import { SafeAreaView, View} from 'react-native';
import Caixa from '../components/Caixa'

const App = ()=>{
  return(
    <SafeAreaView style={{flex: 1}}>
      <Caixa cor= 'red'/>
      <Caixa cor= 'yellow'/>
      <Caixa cor= 'blue'/>
    </SafeAreaView>
  )
};

export default App;