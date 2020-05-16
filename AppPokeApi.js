import React from 'react'
import axios from 'axios'
import {View, Text, TextInput, Button, Alert, Image, TouchableOpacity, Linking, ScrollView} from 'react-native'
import cards from './src/components/Styles'

class Pokemons extends React.Component {
  constructor(){
    super()
    this.state={
      pokemon: '',
      tipo: '',
      habilidade: '',
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      nome: '',
      efeito: '',
      id: '',
      exp_base: '',
      altura: 0,
      peso: 0,
      hp: 0,
      ataque: 0, 
      defesa: 0,
      stats: [],
      hp: 0,
      gameIndicies: '',
      itensCarregados: '',
      golpes: [],
      pokemonsDoMesmoTipo: [],
      imgsPokeDoMesmoTipo: [],
      iniciar: true,
      pesquisar: false
    }
  }
  
  abrirLinkPokeApi = () => {
    Linking.openURL('https://pokeapi.co/docs/v2.html#pokemon')
  }


  iniciar = () => {
    return(
      this.state.pesquisar
      ?<View style={{flex: 1, marginVertical: 50}}>
        <View style={{
            flexDirection: 'row', 
            justifyContent: "flex-start", 
            alignItems: "flex-start", 
            width: 500, 
            height: 50,
            marginLeft: 4
            }}>
            <TextInput style={{
              width: 235,
              height: 40,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#fa8072',
              margin: 5,
            }}
            placeholder = '  Name or Id of the Pokémon'
            onChangeText = {(text)=> this.setState({nome: text})}
            value = {this.state.nome}
            />
          <View style={{height: 50, width: 100, marginVertical: 8}}>
            <Button onPress={this.pegaPokemon} title = 'search' color = '#fa8072'/>
          </View>
          </View>
      <TouchableOpacity onPress={this.abrirLinkPokeApi}>
        <Image source={require('./src/imgs/imgPokeApi.png')} style={{margin: 25, borderRadius: 10,}}/>
      </TouchableOpacity>
      <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
      <View>
        <Image source={require('./src/imgs/gastly.gif')} style={{marginBottom: 25,marginLeft: 25,}}/>
      </View>
    </View>
    </View>
      :<View style={{flex: 1, marginVertical: 40}}>
        <TouchableOpacity onPress={this.abrirLinkPokeApi}>
          <Image source={require('./src/imgs/imgPokeApi.png')} style={{margin: 25, borderRadius: 10,}}/>
        </TouchableOpacity>
        <Text style={{alignSelf: "center", fontSize: 18,}}>
          If you can get Gastly
        </Text>
        <Text style={{alignSelf: "center", fontSize: 20}}>
          You can get others, no wait...
        </Text>
        
        <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> {this.setState({pesquisar: true})}}>
          <Image source={require('./src/imgs/gastly.gif')} style={{marginBottom: 25,marginLeft: 25,}}/>
        </TouchableOpacity>
      </View>
      </View>
  )
  }

  pegaPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.nome.toLowerCase()}/`)
      .then(res => {
        const data = res.data
        this.setState({
          pokemon: data.name, 
          img1: data.sprites.front_default, 
          img2: data.sprites.back_default,
          img3: data.sprites.front_shiny,
          img4: data.sprites.back_shiny,
          tipo: data.types.map(tipo => tipo.type.name).join(', '),
          habilidade: data.abilities.map(ability => ability.ability.name).join(', '),
          id: data.id,
          exp_base: data.base_experience,
          altura: data.height,
          peso: data.weight,
          stats: data.stats.map(stat => stat.base_stat),
          gameIndicies: data.game_indices.map(game => game.version.name).join(' #'),
          itensCarregados: data.held_items.map(item => item.item.name).join(', '),
          golpes: data.moves.map(golpe => golpe.move.name)
        })
        this.setState({nome: '', iniciar: false})
      })
      .catch(err => Alert.alert('🤦🏾‍♂️Opps... Something is going wrong, try again!'),
        this.setState({nome: ''})
      )
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
      this.state.iniciar
      ? this.iniciar()
      : <ScrollView style={{flex: 1, marginVertical: 50}}>
          <View style={{
            flexDirection: 'row', 
            justifyContent: "flex-start", 
            alignItems: "flex-start", 
            width: 500, 
            height: 50,
            marginLeft: 4
            }}>
            <TextInput style={{
              width: 235,
              height: 40,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#fa8072',
              margin: 5,
            }}
            placeholder = '  Name or Id of the Pokémon'
            onChangeText = {(text)=> this.setState({nome: text})}
            value = {this.state.nome}
            />
          <View style={{height: 50, width: 100, marginVertical: 8}}>
            <Button onPress={this.pegaPokemon} title = 'search' color = '#fa8072'/>
          </View>
          </View>
          <TouchableOpacity onPress={this.abrirLinkPokeApi}>
            <Image source={require('./src/imgs/imgPokeApi.png')} style={{margin: 25, borderRadius: 10,}}/>
          </TouchableOpacity>
          <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
            <View style={cards.cardPadrao1}>
              <Image source={{uri: this.state.img1}} style={{width: 150, height: 150,}} />
            <Image source={require('./src/imgs/pokebola2.gif')} style={{width: 57, height: 50,marginTop: -30, marginLeft: 100}} />
            </View>
            <View style = {cards.cardPadrao2}>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  ID: {this.state.id}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, borderStartColor: 'black'}}>
                  Name: {this.state.pokemon.charAt(0).toUpperCase()+this.state.pokemon.slice(1)}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Type(s): {this.state.tipo}
                </Text>
                <Text style={{marginLeft: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Abilities: {this.state.habilidade}
                </Text>
            </View>
          </View>
          <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
            <View style={cards.cardPadrao1}>
            <Image source={{uri: this.state.img2}} style={{width: 150, height: 150,}} />
            <Image source={require('./src/imgs/pokebola2.gif')} style={{width: 57, height: 50, marginTop: -30, marginLeft: 100}} />
            </View>
            <View style = {cards.cardPadrao2}>
              
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Base exp: {this.state.exp_base}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Height: {this.state.altura * 10}cm 
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Weight: {this.state.peso / 10}kg
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Held items: {this.state.itensCarregados}
                </Text>
            </View>
          </View>
          <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
            <View style={cards.cardLongo1}>
            <Image source={{uri: this.state.img3}} style={{width: 150, height: 150,}} />
            <Image source={require('./src/imgs/pokebola2.gif')} style={{width: 57, height: 50, marginTop: 10, marginLeft: 100}} />
            </View>
            <View style = {cards.cardLongo2}>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Hp: {this.state.stats[5]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Attack: {this.state.stats[4]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Defense: {this.state.stats[3]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Speed: {this.state.stats[0]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Special Attack: {this.state.stats[2]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Special Defense: {this.state.stats[1]}
                </Text>
            </View>
          </View>
          <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
            <View style={cards.cardLongo1}>
            <Image source={{uri: this.state.img4}} style={{width: 150, height: 150, alignSelf: "center"}} />
            <Image source={require('./src/imgs/pokebola2.gif')} style={{width: 57, height: 50, marginTop: 10, marginLeft: 100,}} />
            </View>
            <View style = {cards.cardLongo2}>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Moves: 
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  {this.state.golpes[0]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  {this.state.golpes[1]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  {this.state.golpes[2]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  {this.state.golpes[3]}
                </Text>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  {this.state.golpes[4]}
                </Text>
            </View>
          </View>
          <View style={{justifyContent: "space-around", flexDirection: 'row'}}>
            <View style={cards.cardLongo1}>
            <Image source={require('./src/imgs/pokeLogo.gif')} style={{width: 100, height: 60, marginTop: 5, marginLeft:25}} />
            <Image source={require('./src/imgs/treinerCharizard.gif')} style={{width: 100, height: 100, marginTop: 10, marginLeft: 30}} />
            </View>
            <View style = {cards.cardLongo2}>
                <Text style={{margin: 8, marginVertical: 8, flexDirection: 'column'}}>
                  Game Indicies: {this.state.gameIndicies}
                </Text>
            </View>
          </View>
        </ScrollView>
    
    )
  }
}

export default Pokemons;