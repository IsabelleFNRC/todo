import { defineStore } from 'pinia'

export const useTarefasStore = defineStore('tarefas', {
  state: () => ({
    tarefas: []
  }),
  actions: {
    async obtemTarefas() {
      const opcoes = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      fetch('http://localhost:3000/tarefas', opcoes)
        .then((response) => response.json())
        .then((data) => {
          this.tarefas = data
        })
    },
    async adicionarTarefa(descricaoTarefa) {
      try {
        const novaTarefa = {
          id: this.tarefas.length,
          descricao: descricaoTarefa,
          status: 0
        }

        const opcoes = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(novaTarefa)
        }

        fetch('http://localhost:3000/tarefas', opcoes)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })

        this.tarefas.push(novaTarefa)
      } catch (error) {
        console.log('erro')
      }
    },
    async editarTarefa(id, novaDescricao) {
      try {
        let tarefa = this.tarefas.find((tarefa) => tarefa.id === id)
        if (tarefa) {
          tarefa.descricao = novaDescricao

          const opcoes = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ descricao: novaDescricao })
          }

          fetch('http://localhost:3000/tarefas/' + id, opcoes)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
            })
        }
      } catch (error) {}
    },
    async removerTarefa(id) {
      try {
        this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id)
        const opcoes = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }

        fetch('http://localhost:3000/tarefas/' + id, opcoes)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
      } catch (error) {
        console.log(error)
      }
    },
    alterarStatusTarefa(id) {
      const tarefa = this.tarefas.find((item) => item.id === id)
      if (tarefa) {
        tarefa.status = !tarefa.status
        const opcoes = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: !tarefa.status })
        }

        fetch('http://localhost:3000/tarefas/' + id, opcoes)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
      }
    }
  },
  getters: {
    useTarefasStore(state) {
      return state.tarefas
    }
  },
  persist: {
    enabled: true
  }
})
