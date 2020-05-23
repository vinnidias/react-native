import React, {useState} from 'react';

import {Text, TouchableOpacity} from 'react-native';

const Tarefa = ({tarefa}) => {
  const [selecionada, seleciona] = useState(false);
  return (
    <TouchableOpacity
      style={styles.tarefa}
      onPress={() => seleciona(!selecionada)}>
      {selecionada && <Text style={{marginRight: 10}}>✔️</Text>}
      <Text>{tarefa}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  tarefa: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
  },
};

export default Tarefa;