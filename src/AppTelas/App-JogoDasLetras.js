import React from 'react';
import { Text, View, Button, TextInput, Alert } from 'react-native';

const styles ={
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
}

class Jogo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      jogar: false,
      tempo: 10,
      texto: '',
    }
  };
  iniciar(){
    this.idContador=setInterval(() => {
    this.setState({tempo: this.state.tempo - 1, })
    },1000);
    this.setState({jogar: true})
  }
 
  componentDidUpdate(){
    if(this.state.tempo === 0 ){
      this.limpaIntervalo()
      this.setState({jogar: false, tempo: 10, texto: ''})
    }
  }
 
  limpaIntervalo(){
    clearInterval(this.idContador);
    Alert.alert(`A sua pontuação é ${this.state.texto.length}`)
  }

  render(){
    return(
    <View style ={styles.container}>
      <Text style={styles.titulo}>
        Jogo da digitação!
      </Text>
      <Text style={styles.fonteBase}>Tempo: {this.state.tempo}</Text>
      <Button
        onPress={() => {
          this.iniciar()
        }}
        title = 'Começar'
        color = '#7b68ee'   
      />
      <TextInput style ={{
        height: 100, 
        width: 300,
        borderColor: 'black', 
        borderWidth: 1, 
        margin: 5}}
        placeholder="Digite aqui!"
        multiline={true}
        editable={this.state.jogar}
        onChangeText={(text) => this.setState({texto: text})}
        value={this.state.texto}
        />
    </View>
    )
  }
}

export default Jogo;
