const adicionarTarefa = (tarefa) => {
  return {
    type: 'ADICIONAR_TAREFA',
    tarefa,
  }
}

const atualizarConteudo = (texto) => {
  return {
    type: 'ATUALIZAR_CAIXA_DE_TEXTO',
    texto,
  }
}

export {adicionarTarefa, atualizarConteudo}