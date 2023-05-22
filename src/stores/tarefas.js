import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTarefasStore = defineStore('tarefas', () => {
  const tarefas = ref([])

  const adicionarTarefa = (tarefa) => {
    tarefas.value.push(tarefa)
  }

  const removerTarefa = (id) => {
    tarefas.value = tarefas.value.filter((tarefa) => tarefa.id !== id)
  }

  const editarTarefa = (id, novaTarefa) => {
    const index = tarefas.value.findIndex((tarefa) => tarefa.id === id)
    if (index !== -1) {
      tarefas.value.splice(index, 1, novaTarefa)
    }
  }

  const count = computed(() => tarefas.value.length)
  const doubleCount = computed(() => count.value * 2)

  return { tarefas, adicionarTarefa, removerTarefa, editarTarefa, count, doubleCount }
})
