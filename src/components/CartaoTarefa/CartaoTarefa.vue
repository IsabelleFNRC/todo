<template>
    <div class="flex gap-2 items-center">
        <p :id="idTarefa" @mouseover="hoverTarefa" @mouseout="hoverTarefa"  class="flex bg-gray-200 mb-1 rounded-md p-2 w-96 h-fit flex-wrap hover:cursor-pointer" :class="{
            'line-through': tarefa.status === 'concluída'
          }">
            {{ tarefa.descricao  }}
          </p>

    <div class="flex w-24 gap-2">
        <button v-if="mostraBotaoExcluir" class="bg-gray-600 flex items-center justify-center p-2 rounded-md font-bold text-white">Editar</button>
        <button v-if="mostraBotaoExcluir" class="bg-red-600 flex items-center justify-center p-2 rounded-md font-bold">X</button>
    </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
                mostraBotaoExcluir: false,
                mostraBotaoEditar: false,
            };
        },
    props: [
        'idTarefa',
        'tarefa'
    ],
    mounted() {
        console.log(this.tarefa)
    },
    methods: {
        hoverTarefa: function() {
            this.mostraBotaoExcluir = !this.mostraBotaoExcluir;
            this.mostraBotaoEditar = !this.mostraBotaoEditar;
        },
    }
}
</script>
<style>
.line-through {
  text-decoration: line-through;
}
</style>