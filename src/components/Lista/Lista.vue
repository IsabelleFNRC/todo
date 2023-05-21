<script setup>
  import CartaoTarefa from '../CartaoTarefa/CartaoTarefa.vue'

</script>

<template>
  <div id="todo-list" class="pl-2">
    <CartaoTarefa v-for="tarefa in tarefas" :key="tarefa.id" :id-tarefa="tarefa.id" :tarefa="tarefa" />
  </div>
</template>

<script>
export default {
  props: [
    'tarefas'
  ],
  created() {
    console.log(this)
  }
}
</script>
