
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

function Render(){
  const [textoDigitado, setTextoDigitado] = useState('');
  const [textoPostado, setTextoPostado] = useState('')
  
  return(
  <View style={styles.container}>
      <Text style={styles.titulo} >No que você está pensando?</Text>
      <TextInput style ={{
        height: 100, 
        width: 300,
        borderColor: 'black', 
        borderWidth: 1, 
        margin: 5}}
        placeholder="Digite aqui!"
        multiline={true}
        onChangeText={texto => setTextoDigitado(texto)}
        maxLength={140}
        value = {textoDigitado}
        />
      <Button
      onPress={() => {
        if (textoDigitado.length < 50){
          Alert.alert("Caracteres minimos de 50")
        }else{
        setTextoPostado(textoDigitado),
        Alert.alert("Pensamento Postado")
        setTextoDigitado('')
        }
      }}
      title="Postar" color="#7b68ee" />
    
      <Text style={styles.titulo}>Mural: </Text>
      <Text style={{fontFamily: 'Roboto', fontSize: 20, margin: 10}}>{textoPostado}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fonteBase: {
    fontFamily: 'Roboto',
    fontSize:  20
},
titulo: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold'

},
negrito: {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold'

}
});

export default function App() {
  return(
    <Render/>
  )
}


