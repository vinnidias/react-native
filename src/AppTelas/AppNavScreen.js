import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Alert, Image } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Dados = {
  usuario: 'vinidias',
  senha: '123',
  perfil: {
    nome: 'Vinicius Dias',
    idade: '27',
    cargo: 'Dev mobile jr'

  }
}

function Home ({navigation}) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const validaEntrada = (usuario, senha) =>{
    return senha === Dados.senha && usuario === Dados.usuario
  }

  const entrada = ()=>{
    navigation.navigate('Perfil', Dados.perfil)
  }

  return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text>Digite suas credenciais</Text>
        <TextInput style = {{
          height: 40, 
          width: 300,
          borderColor: 'black',
          borderWidth: 1,
          marginVertical: 5,
        }}
        placeholder="nome de usuário"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
        />
        <TextInput style = {{
          height: 40, 
          width: 300,
          borderColor: 'black',
          borderWidth: 1,
          marginVertical: 5,
        }}
        placeholder="senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        />
        <Button 
          onPress={ 
            validaEntrada(usuario, senha)
            ? entrada
            : () => Alert.alert('Usuário ou senha incorreto')
            }
          title = 'Iniciar'
          color = '#7b68ee'   
      />
      </View>
  )
}

const Perfil = ({route, navigation}) => {
  const {nome, idade, cargo} = route.params
  return(
    <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: "flex-start"}}>
      <Image style={{
              height: 100,
              width: 100,
              borderRadius: 64,
              justifyContent: "center",
              alignItems: 'center',
              marginVertical: 100
          }} source={require('./src/imgs/eumesmo.png') }/>
      <Text>
        Nome: {nome}
      </Text>
      <Text>
        Idade: {idade}
      </Text>
      <Text>
        Cargo: {cargo}
      </Text>
    </View>
  )
}

const Stack = createStackNavigator();

const App = ()=>{
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{
        title: 'Login',
        headerStyle: {backgroundColor:'#7b68ee'},
        headerTintColor: 'white'
      }}/>
      <Stack.Screen name='Perfil' component={Perfil} options={{
        title: 'Perfil',
        headerStyle: {backgroundColor:'#7b68ee'},
        headerTintColor: 'white'
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
};



export default App;


