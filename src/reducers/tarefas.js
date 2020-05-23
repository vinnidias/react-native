const estadoInicial = {
  tarefas: [] 
} 

const adicionarTarefa = (state=estadoInicial, action) =>{
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return{...state, tarefas: [...state.tarefas, action.tarefa]};
    case 'ATUALIZAR_CAIXA_DE_TEXTO':
      console.log('caiu aqui')
      return {...state, caixaDeTexto: action.texto}
    default:
      return state;
  }
}

export default adicionarTarefa;