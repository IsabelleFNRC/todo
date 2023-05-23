<script>
import { storeToRefs } from 'pinia';
import { useTarefasStore } from '../../stores/tarefas';

import CartaoTarefa from '../CartaoTarefa/CartaoTarefa.vue'

export default {
  components: {
    CartaoTarefa
  },
  setup() {
    const store = useTarefasStore();
    const { tarefas } = storeToRefs(store);
    return {
      tarefas
    }
  }
}
</script>

<template>
  <div id="todo-list" class="pl-2">
    <CartaoTarefa
      v-for="tarefa in tarefas"
      :key="tarefa.id"
      :id-tarefa="tarefa.id"
      :tarefa="tarefa"
    />
  </div>
</template>
