import React from 'react';
import { SafeAreaView, View,} from 'react-native';

const App = ()=>{
  return(
    <SafeAreaView style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'flex-start'
        }}>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'white',
        }}
      />
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'white',
        }}
      />
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: 'white',
        }}
      />
      
    </SafeAreaView>
  )
}

export default App ;