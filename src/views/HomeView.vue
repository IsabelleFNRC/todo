<script setup>
import Lista from '../components/Lista/Lista.vue'
</script>

<template>
  <div
    class="flex w-full h-screen items-center justify-center bg-gradient-to-b from-cyan-500 to-blue-500"
  >
    <div class="p-5 bg-white rounded-md text-black w-500">
      <h1 class="font-bold mb-4">Lista de Tarefas</h1>

      <div id="todo-input" class="flex gap-2 w-full items-center mb-4">
        <input
          placeholder="Ex: lavar o carro"
          class="w-full rounded-md border-solid p-2 border-2 border-black hover:border-purple-600"
        />
        <button class="w-fit h-full p-2 rounded-md bg-purple-600 flex font-bold text-white text-lg">
          +
        </button>
      </div>

      <Lista :tarefas="tarefas"></Lista>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarefas: [
        {
          id: 1,
          descricao: 'Fazer qualquer coisa',
          status: 'concluida'
        },
        {
          id: 2,
          descricao: 'Comprar pao',
          status: 'concluida'
        },
        {
          id: 3,
          descricao: 'Comprar pao',
          status: 'concluida'
        }
      ]
    }
  }
}
</script>
