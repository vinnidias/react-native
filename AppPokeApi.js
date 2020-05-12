import React from 'react'
import axios from 'axios'
import {View, Text, TextInput, Button, Alert, Image,} from 'react-native'

class Pokemons extends React.Component {
  constructor(){
    super()
    this.state={
      data: {},
      pokemon: '',
      tipo: '',
      habilidade: '',
      lista: [],
      img: '',
      nome: ''
    }
  }
  
  pegaPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.nome.toLowerCase()}/`)
      .then(res => {
        this.setState({
          pokemon: res.data.name, 
          img: res.data.sprites.front_default, 
          tipo: res.data.types.map(tipo => tipo.type.name).join(', '),
          habilidade: res.data.abilities.map(ability => ability.ability.name).join(', ')
        })
        this.setState({nome: ''})
      })
      .catch(err => Alert.alert('🤔 Opps... Something is going wrong, try again!'),
        this.setState({nome: ''})
      )
    }

  render(){ 
    return(
      <View style={{flex: 1, marginVertical: 50}}>
        <View style={{flexDirection: 'row', justifyContent: "flex-start", alignItems: "flex-start", width: 500, height: 50,}}>
          <TextInput style={{
            width: 200,
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#fa8072',
            margin: 5
          }}
          placeholder = 'enter the name of the Pokémon'
          onChangeText = {(text)=> this.setState({nome: text})}
          value = {this.state.nome}
          />
        <View style={{height: 50, width: 100, marginVertical: 8,}}>
          <Button onPress={this.pegaPokemon} title = 'search' color = '#fa8072'/>
        </View>
        </View>
        <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
          <View style={{
            width: 150, 
            height: 170, 
            backgroundColor: '#9370db', 
            borderRadius: 10, 
            marginVertical: 10,
            justifyContent: "center",
            alignItems: "center"
            }}>
            <Image source={{uri: this.state.img}} style={{width: 150, height: 150,}} />
          </View>
          <View style = {{
            width: 150, 
            height: 170, 
            backgroundColor: 'gold', 
            borderRadius: 10, 
            marginVertical: 10,
            }}>
              <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                Name: {this.state.pokemon}
              </Text>
              <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                Type(s): {this.state.tipo}
              </Text>
              <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                Abilities: {this.state.habilidade}
              </Text>
          </View>
          </View>
      </View>
    )
  }
}

export default Pokemons;