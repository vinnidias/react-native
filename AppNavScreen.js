import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Dados = {
  usuario: 'vinidias',
  senha: '123',
  perfil: {
    nome: 'Vinicius Dias',
    dn: '27/01/1993',
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
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

const Perfil = ({route, navigation}) => {
  const {nome, dn, cargo} = route.params
  return(
    <View style = {{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text>
        Nome: {nome}
      </Text>
      <Text>
        Data de Nascimento: {dn}
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
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Perfil' component={Perfil} />
    </Stack.Navigator>
  </NavigationContainer>
  )
};



export default App;