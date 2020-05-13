import React from 'react'
import axios from 'axios'
import {View, Text, TextInput, Button, Alert, Image, TouchableOpacity, Linking, ScrollView} from 'react-native'

class Pokemons extends React.Component {
  constructor(){
    super()
    this.state={
      pokemon: '',
      tipo: '',
      habilidade: '',
      img: '',
      nome: '',
      efeito: '',
      id: '',
      exp_base: '',
      altura: 0,
      peso: 0
    }
  }
  
  abrirLinkPokeApi = () => {
   const open = Linking.openURL('https://pokeapi.co/docs/v2.html#pokemon')
  }

  pegaPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.nome.toLowerCase()}/`)
      .then(res => {
        this.setState({
          pokemon: res.data.name, 
          img: res.data.sprites.front_default, 
          tipo: res.data.types.map(tipo => tipo.type.name).join(', '),
          habilidade: res.data.abilities.map(ability => ability.ability.name).join(', '),
          id: res.data.id,
          exp_base: res.data.base_experience,
          altura: res.data.height,
          peso: res.data.weight
        })
        this.setState({nome: ''})
      })
      .catch(err => Alert.alert('🤦🏾‍♂️Opps... Something is going wrong, try again!'),
        this.setState({nome: ''})
      )
  }

  pokemonsDoMesmoTipo = () => {

  }
  
  efeitoDeHabilidade = () => {
    this.state.habilidade.map(hab =>{
      axios.get(`https://pokeapi.co/api/v2/ability/${hab}/`)
        .then(res =>{
          this.setState({efeito: res.data.effect_entries.map(eff => eff.effect).join('\n')})
        })
    }) 
  }

  render(){ 
    return(
      <ScrollView style={{flex: 1, marginVertical: 50}}>
        <View style={{
          flexDirection: 'row', 
          justifyContent: "flex-start", 
          alignItems: "flex-start", 
          width: 500, 
          height: 50,
          }}>
          <TextInput style={{
            width: 200,
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#fa8072',
            margin: 5
          }}
          placeholder = 'name or id of the Pokémon'
          onChangeText = {(text)=> this.setState({nome: text})}
          value = {this.state.nome}
          />
        <View style={{height: 50, width: 100, marginVertical: 8}}>
          <Button onPress={this.pegaPokemon} title = 'search' color = '#fa8072'/>
        </View>
        </View>
        <View>
        <TouchableOpacity onPress={this.abrirLinkPokeApi}>
          <Image source={require('./src/imgs/imgPokeApi.png')} style={{margin: 25, borderRadius: 10}}/>
        </TouchableOpacity>
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
              <Text style={{margin: 8, marginVertical: 8, borderStartColor: 'black'}}>
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
          <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
          <View style={{
            width: 150, 
            height: 170, 
            backgroundColor: '#9370db', 
            borderRadius: 10, 
            marginVertical: 10,
            }}>
           <Image source={require('./src/imgs/pokebola2.gif')} style={{width: 107, height: 100, marginTop: 30, margin: 10}} />
          </View>
          <View style = {{
            width: 150, 
            height: 170, 
            backgroundColor: 'gold', 
            borderRadius: 10, 
            marginVertical: 10,
            }}>
              <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                ID: {this.state.id}
              </Text>
              <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                Base exp: {this.state.exp_base}
              </Text>
              <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                Height: {this.state.altura * 10}cm 
              </Text>
              <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                Weight: {this.state.peso / 10}kg
              </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Pokemons;