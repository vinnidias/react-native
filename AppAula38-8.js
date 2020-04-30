import React from 'react';
import { SafeAreaView, View,} from 'react-native';


const App = ()=>{
  return(
    <SafeAreaView style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'flex-end'
        }}>
      <View style={{
        flex: 1,
        width:100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20
        }}
      />
      <View style={{
        flex: 3,
        width:100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20
        }}
      />
    </SafeAreaView>
  )
}

export default App ;