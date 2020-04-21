
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
  constructor(){
    super();
    this.state={
      jogar: false,
      tempo: 0,
      value: '',
    }
  };

componentDidMount(){
  this.id = setInterval(()=>{
    if(this.state.jogar){
      this.setaIntervalo()
    }
  
  }, 1000)
  }
setaIntervalo(){
  this.setState({tempo: this.state.tempo + 1})
}
  render(){
    return(
    <View style ={styles.container}>
      <Text style={styles.titulo}>
        Jogo da digitação
      </Text>
      <Button
        onPress={()=> {
          this.setState({jogar: true})
          Alert.alert('digite o máximo de caracteres que vc conseguir')
          setTimeout(()=>clearInterval(this.id),1000*10)
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
        
        />
    </View>
    )
  }
}

export default Jogo;
