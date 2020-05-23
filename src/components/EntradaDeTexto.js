import React from 'react';
import {TextInput} from 'react-native';
import {connect} from 'react-redux'
import {atualizarConteudo} from '../actions/tarefas'

const EntradaDeTexto = ({caixaDeTexto, dispatch}) => {
  console.log('entrada de texto:', caixaDeTexto)
  return (
    <TextInput
      style={styles.entradaDeTexto}
      value={caixaDeTexto}
      onChangeText={(novoTexto)=> dispatch(atualizarConteudo(novoTexto))}
      placeholder= ' digite aqui uma tarefa a cumprir'
    />
  );
};

const styles = {
  entradaDeTexto: {
    height: 100,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#000',
    marginVertical: 10,
  },
};

const mapStateToProps = (store) => {
  return {
    caixaDeTexto: store.caixaDeTexto
  }
}

export default connect(mapStateToProps)(EntradaDeTexto)