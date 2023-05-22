<template>
  <div
    class="flex w-full h-screen items-center justify-center bg-gradient-to from-cyan-500 to-blue-500"
  >
    <div class="p-5 bg-white rounded-md text-black w-500">
      <h1 class="font-bold mb-4">Lista de Tarefas</h1>

      <div id="todo-input" class="flex gap-2 w-full items-center mb-4">
        <form @submit.prevent="criarTarefa" class="flex w-full gap-2">
          <input
            v-model="novaTarefa"
            placeholder="Ex: lavar o carro"
            class="w-full rounded-md border-solid p-2 border-2 border-black hover:border-purple-600"
          />
          <button
            type="submit"
            class="w-fit h-full p-2 rounded-md bg-purple-600 flex font-bold text-white text-lg"
          >
            +
          </button>
        </form>
      </div>

      <Lista :tarefas="tarefas" :editarTarefa="editarTarefa" :removerTarefa="removerTarefa"></Lista>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTarefasStore } from '../stores/tarefas'
import Lista from '../components/Lista/Lista.vue'
const tarefasStore = useTarefasStore()
const novaTarefa = ref('')

const criarTarefa = () => {
  const novaTarefaObj = {
    id: Date.now(),
    descricao: novaTarefa.value,
    status: 'pendente'
  }
  tarefasStore.adicionarTarefa(novaTarefaObj)
  novaTarefa.value = ''
}

const editarTarefa = (id) => {
  const tarefa = tarefasStore.tarefas.find((t) => t.id === id)
  if (tarefa) {
    const novoNome = prompt('Digite o novo nome da tarefa', tarefa.descricao)
    if (novoNome) {
      const tarefaAtualizada = { ...tarefa, descricao: novoNome }
      tarefasStore.editarTarefa(id, tarefaAtualizada)
    }
  }
}

const removerTarefa = (id) => {
  console.log('removeno', id)
  tarefasStore.removerTarefa(id)
}

const tarefas = tarefasStore.tarefas
</script>
