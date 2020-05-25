
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import BotaoAdicionar from './src/components/BotaoAdicionar'
import EntradaDeTexto from './src/components/EntradaDeTexto'
import ListaDeTarefas from './src/components/ListaDeTarefas'

const store = createStore(adicionarTarefa);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1, margin: 10}}>
        <Text style={styles.tituloCabecalho}>TAREFAS A FAZER</Text>
        <ListaDeTarefas />
        <EntradaDeTexto />
        <BotaoAdicionar />
      </SafeAreaView>
    </Provider>
  );
};

const styles = {
  tituloCabecalho: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 24,
  },
};
export default App;