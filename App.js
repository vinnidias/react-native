
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Votos(){
  const [totalDeVotos, setTotalDeVotos] = useState(0)
  return (
    <View>
      <Text>O total de votos é: {totalDeVotos}</Text>
      <Button
      onPress={()=>{
        setTotalDeVotos(totalDeVotos + 1);
      }}
      title ='Adicionar um voto'
      color = '#000000'
      />
        
      

    </View>
  )
}

export default function App() {
  
  return (
    <View style={styles.container}>
      <Votos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd700',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
