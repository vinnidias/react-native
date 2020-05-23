import React from 'react';
import { SafeAreaView, View,} from 'react-native';

const App = ()=>{
  return(
    <SafeAreaView style = {{flex: 1}}>
      <View style ={{flexDirection: 'column', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={{
          width:100,
          height: 100,
          backgroundColor: 'red',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 20
          }}
        />
        
        <View style={{
          width:100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 20
          }}
        />
      </View>  
    </SafeAreaView>
  )
}

export default App ;