import React from 'react';
import { SafeAreaView, View} from 'react-native';

const Caixas = ({cor}) => {
  return(
    <View
    style={{
      width:100,
      height: 100,
      backgroundColor: cor,
      borderWidth: 2,
      borderColor: 'white',
    }}
  />
  )
  
};

const App = ()=>{
  return(
    <SafeAreaView style={{flex: 1}}>
      <Caixas cor= 'red'/>
      <Caixas cor= 'yellow'/>
      <Caixas cor= 'blue'/>
    </SafeAreaView>
  )
};

export default App;