import React from 'react';
import { SafeAreaView, View,} from 'react-native';

const App = ()=>{
  return(
    <SafeAreaView style = {{flex: 1}}>
      <View style ={{flexDirection: 'row'}}>
        <View style={{
          flex: 1,
          height: 200,
          backgroundColor: 'red',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 20
          }}
        />
        <View style={{
          flex: 1,
          height: 200,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 20
          }}
        />
        </View> 
        <View style ={{flexDirection: 'row'}}>
          <View style={{
            flex: 1,
            height: 200,
            backgroundColor: 'green',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 20
            }}
          />
          <View style={{
            flex: 1,
            height: 200,
            backgroundColor: 'purple',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 20
            }}
          />
        </View> 
        <View style ={{flexDirection: 'row'}}>
          <View style={{
            flex: 0.5,
            height: 200,
            backgroundColor: 'yellow',
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