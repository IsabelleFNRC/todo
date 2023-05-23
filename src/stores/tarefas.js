import { reactive } from 'vue'

export const useTarefasStore = () => {
  const state = reactive({
    tarefas: [
      { id: 1, descricao: 'Tarefa 1', status: 'pendente' },
      { id: 2, descricao: 'Tarefa 2', status: 'concluida' },
      { id: 3, descricao: 'Tarefa 3', status: 'pendente' }
    ]
  })
  const alterarStatusTarefa = (id) => {
    const tarefa = state.tarefas.find((t) => t.id === id)
    if (tarefa) {
      if (tarefa.status === 'pendente') tarefa.status = 'concluida'
      if (tarefa.status === 'concluida') tarefa.status = 'pendente'
    }
  }

  const criarTarefa = (descricao) => {
    if (descricao.trim() !== '') {
      console.log('salvando tarefa')
      const novaTarefa = {
        id: state.tarefas.length + 1,
        descricao,
        status: 'pendente'
      }

      state.tarefas.push(novaTarefa)
    }
  }

  const editarTarefa = (id, novaDescricao) => {
    const tarefa = state.tarefas.find((t) => t.id === id)
    if (tarefa) {
      tarefa.descricao = novaDescricao
    }
  }

  const excluirTarefa = (id) => {
    state.tarefas = state.tarefas.filter((t) => t.id !== id)
    console.log(state.tarefas)
  }

  const obterTarefas = () => {}

  return {
    state,
    criarTarefa,
    alterarStatusTarefa,
    editarTarefa,
    excluirTarefa,
    obterTarefas
  }
}
