
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

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
})

class Votos extends React.Component {
  constructor(){
    super();
    this.state={
      votos: 0,}
  };
  render(){
    return(
    <View style ={styles.container}>
      <Text style = {styles.titulo}>
        Votos: {this.state.votos}
      </Text>
      <Button
        onPress={()=> this.setState({votos: this.state.votos + 1})}
        title = 'Votar'
        color = '#7b68ee'
      />
    </View>
    )
  }
}

export default Votos;
