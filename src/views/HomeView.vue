<script>
import {ref} from 'vue';
import { useTarefasStore } from '../stores/tarefas';

import Lista from '../components/Lista/Lista.vue';

export default {
  components: {
    Lista
  },
  setup() {
    const descricaoTarefa = ref('');
    const store = useTarefasStore();

    function addTarefa(descricao) {
      if (descricao === "") {
        return;
      }

      store.adicionarTarefa(descricao);
      descricaoTarefa.value = '';
    }

    return {descricaoTarefa, addTarefa}
  }
}
</script>
<template>
  <div
  class="flex w-full h-screen items-center justify-center"
>
  <div class="p-5 bg-white rounded-md text-black w-500">
    <h1 class="font-bold mb-4">Lista de Tarefas</h1>

    <div id="todo-input" class="flex gap-2 w-full items-center mb-4">
      <form 
      @submit.prevent="addTarefa(descricaoTarefa)"
      class="flex w-full gap-2 items-center">
        <input
          v-model="descricaoTarefa"
          type="text"
          placeholder="Ex: lavar o carro"
          class="w-full rounded-md border-solid p-2 border-2 border-gray-300 hover:border-purple-600"
        />
        <button
          type="submit"
          class="w-10 h-10 items-center justify-center p-2 rounded-md bg-purple-600 flex font-bold text-white text-lg"
        >
          +
        </button>
      </form>
    </div>

    <Lista />
  </div>
</div>
</template>
