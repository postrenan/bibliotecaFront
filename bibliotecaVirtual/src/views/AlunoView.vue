<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AlunoView",
  data(){

  },
  mounted(){

  },
  methods: {

  }
})
</script>

<template>
  <nav class="cabecalho">
    <h3 class="titulo">Painel de Livros</h3>
    <div class="botoes">
      <button class="botaoSair"><router-link to="/">Sair</router-link></button>
    </div>
  </nav>
  <div class="conteudo">
    <div class="pesquisaConteiner">
      <input type="text" class="pesquisa">
      <button class="botaoPesquisa">Pesquisar</button>
    </div>

    <div class="livros">
      <h2>Livros</h2>
      <div>
        <div>
          <img>
          <p>Titulo: </p>
          <p>Descrição: </p>
          <p>Autor: </p>
          <p>Categoria: </p>
          <p>Ano de publicação: </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: beige;
  padding: 1em;
}

.titulo {
  margin: 0;
}

.botoes {
  display: flex;
  gap: 1rem;
}

.botaoSair{
  border-radius: 15px;
  text-decoration: none;
}

.pesquisaConteiner{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1em;
  gap: 1em;
}

.pesquisa, .botaoPesquisa{
  border-radius: 15px;
  padding: 0.2em;
}

.conteudo{
  display: flex;
  flex-direction: column;
}

.livros{
  display: flex;
  flex-direction: row;
}
</style>