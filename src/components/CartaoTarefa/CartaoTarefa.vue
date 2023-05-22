<template>
  <div
    class="flex gap-2 items-center bg-gray-200 mb-1 rounded-md p-2 h-fit justify-between hover:cursor-pointer"
  >
    <p
      :id="idTarefa"
      class="text-sm font-medium break-words max-w-full"
      :class="{
        'line-through': tarefa.status === 'concluída'
      }"
    >
      {{ tarefa.descricao }}
    </p>

    <div class="flex w-24 gap-2">
      <button
        v-if="mostraBotaoExcluir"
        class="bg-gray-600 flex items-center justify-center p-2 rounded-md font-bold text-white"
        @click="remover"
      >
        Editar
      </button>
      <button
        v-if="mostraBotaoExcluir"
        class="bg-red-600 flex items-center justify-center p-2 rounded-md font-bold"
        @click="excluir"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostraBotaoExcluir: true,
      mostraBotaoEditar: false
    }
  },
  props: ['idTarefa', 'tarefa', 'removerTarefa'],
  mounted() {
    console.log(this.tarefa)
  },
  methods: {
    excluir() {
      console.log('excluir...')
      this.removerTarefa(this.idTarefa)
    }
  }
}
</script>

<style>
.line-through {
  text-decoration: line-through;
}
</style>
