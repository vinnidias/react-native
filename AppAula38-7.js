import React from 'react';
import { SafeAreaView, View,} from 'react-native';

const Caixa = ({cor})=>{
  return (
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
}

const App = ()=>{
  return(
    <SafeAreaView style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
      <Caixa cor = 'red'/>
      <Caixa cor = 'blue'/>
    </SafeAreaView>
  )
}

export default App ;