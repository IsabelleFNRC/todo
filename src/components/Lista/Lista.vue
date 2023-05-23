<script>
import { watch, ref } from 'vue'
import CartaoTarefa from '../CartaoTarefa/CartaoTarefa.vue'

export default {
  name: 'Lista',
  components: {
    CartaoTarefa
  },
  props: ['tarefas'],
  setup(props) {
    const listaDeTarefas = ref(props.tarefas)

    watch(
      () => props.tarefas,
      (newTarefas) => {
        listaDeTarefas.value = newTarefas || []
      }
    )

    return {
      listaDeTarefas
    }
  }
}
</script>

<template>
  <div id="todo-list" class="pl-2">
    <CartaoTarefa
      v-for="tarefa in listaDeTarefas"
      :key="tarefa.id"
      :id-tarefa="tarefa.id"
      :tarefa="tarefa"
    />
  </div>
</template>
