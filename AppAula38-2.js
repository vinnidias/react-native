import React from 'react';
import { SafeAreaView,View,} from 'react-native';

const estilos = {
  caixa: {
    width: '100%',
    padding: 10,
  },
};

const App = ()=>{
  return(
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View style={{...estilos.caixa, backgroundColor: 'red', flex: 2,}}/>
      <View style={{...estilos.caixa, backgroundColor: 'yellow', flex: 1}}/>
      <View style={{...estilos.caixa, backgroundColor: 'blue', flex: 2}}/>
    </SafeAreaView>
  )
}

export default App;