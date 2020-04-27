import React from 'react';
import { SafeAreaView, View,} from 'react-native';

const App = ()=>{
  return(
    <SafeAreaView style = {{flex: 1}}>
      <View style ={{flexDirection: 'column', justifyContent: "flex-start", alignItems: 'center', flexWrap: "wrap", alignContent: 'flex-start' }}>
        <View style={{
          width:100,
          height: 200,
          backgroundColor: 'red',
          borderWidth: 2,
          borderColor: 'white',
          }}
        />
        
        <View style={{
          width:100,
          height: 200,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'white',
          }}
        />
        <View style={{
          width:100,
          height: 200,
          backgroundColor: 'yellow',
          borderWidth: 2,
          borderColor: 'white',
          }}
        />
        <View style={{
          width:100,
          height: 200,
          backgroundColor: 'green',
          borderWidth: 2,
          borderColor: 'white',
          }}
        />
        <View style={{
          width:100,
          height: 200,
          backgroundColor: 'purple',
          borderWidth: 2,
          borderColor: 'white',
          }}
        />
      </View>  
    </SafeAreaView>
  )
}

export default App ;