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
      borderRadius: 20
    }}
  />
  )
}

const App = ()=>{
  return(
    <SafeAreaView style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        }}>
        <Caixa cor = 'red'/>
        <View style={{alignItems: 'center'}}>
          <Caixa cor = 'blue'/>
        </View>
        <View style = {{alignItems:'flex-end'}}>
          <Caixa cor = 'yellow'/>
        </View>
      </SafeAreaView>
  )
}

export default App ;