import { defineStore } from 'pinia'

export const useTarefasStore = defineStore('tarefas', {
  state: () => ({
    tarefas: [
      {
        id: 0,
        descricao: 'Tarefa 1',
        status: 0
      }
    ]
  }),
  actions: {
    adicionarTarefa(descricaoTarefa) {
      const novaTarefa = {
        id: this.tarefas.length,
        descricao: descricaoTarefa,
        status: 0
      }

      this.tarefas.push(novaTarefa)
    },
    editarTarefa(id, novaDescricao) {
      let tarefa = this.tarefas.find((tarefa) => tarefa.id === id)
      if (tarefa) {
        tarefa.descricao = novaDescricao
      }
    },
    removerTarefa(id) {
      this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id)
    },
    alterarStatusTarefa(id) {
      const tarefa = this.tarefas.find((item) => item.id === id)
      if (tarefa) {
        tarefa.status = !tarefa.status
      }
    }
  },
  persist: {
    enabled: true
  }
})
