<template>
  <div
    class="flex gap-2 items-center bg-gray-200 mb-1 rounded-md p-2 h-fit justify-between hover:cursor-pointer"
    @click="alteraStatusTarefa"
  >
    <div class="flex items-center">
      <input type="checkbox" @click="alteraStatusTarefa" :checked="tarefa.status" class="mr-2"/>
    <p
      :id="idTarefa"
      class="text-sm font-medium break-words max-w-full"
      :class="{
        'line-through': tarefa.status,
        editavel: modoEdicao.valor
      }"
      :contenteditable="modoEdicao.valor"
      @input="editarDescricao"
    >
      {{ tarefa.descricao }}
    </p>
    </div>

    <div class="flex w-24 gap-2">
      <button
        v-if="!modoEdicao.valor"
        class="bg-gray-600 flex items-center justify-center p-2 rounded-md font-bold text-white"
        @click="iniciarEdicao"
      >
        Editar
      </button>
      <button
        v-else
        class="bg-green-600 flex items-center justify-center p-2 rounded-md font-bold text-white"
        @click="salvarEdicao"
      >
        Salvar
      </button>
      <button
        class="bg-red-600 flex items-center justify-center p-2 rounded-md font-bold"
        @click="removeTarefa"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
import { useTarefasStore } from '../../stores/tarefas'
import { reactive } from 'vue'

export default {
  name: 'CartaoTarefa',
  setup(props) {
    const { editarTarefa, removerTarefa, alterarStatusTarefa } = useTarefasStore()

    const modoEdicao = reactive({ valor: false })

    const iniciarEdicao = () => {
      modoEdicao.valor = true
    }

    const salvarEdicao = () => {
      modoEdicao.valor = false
      editarTarefa(props.idTarefa, props.tarefa.descricao)
    }

    const editarDescricao = (event) => {
      let novaDescricao = event.target.textContent
      if (novaDescricao) {
        editarTarefa(props.tarefa.id, novaDescricao);
      }
    }

    const removeTarefa = () => {
      removerTarefa(props.tarefa.id);
    }

    const alteraStatusTarefa = () => {
      alterarStatusTarefa(props.tarefa.id)
    }

    return {
      idTarefa: props.idTarefa,
      tarefa: props.tarefa,
      iniciarEdicao,
      salvarEdicao,
      editarDescricao,
      removeTarefa,
      alteraStatusTarefa,
      modoEdicao
    }
  },
  props: ['idTarefa', 'tarefa']
}
</script>

<style>
.line-through {
  text-decoration: line-through;
}

.editavel {
  border: 1px solid gray;
  padding: 4px;
  cursor: text;
}
</style>
