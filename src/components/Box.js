import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import action from '../actions/actions'

const Box = ({color, on, dispatch}) => {
  return (
    <View style={[styles.box, {backgroundColor: color}]}>
      {on ? <Text>Ligado</Text> : <Text>Desligado</Text>}
      <Button title="Ligar/Desligar" onPress={() => dispatch(action(!on))} />
      <Button title="Ligar/Desligar TODAS CAIXAS" onPress={() => dispatch(action(!on))} />
    </View>
  );
};

const mapStateToProp = (store)=>{
  return {
    on: store.on
  }
}

const styles = {
  box: {flex: 1},
};

export default connect(mapStateToProp)(Box)