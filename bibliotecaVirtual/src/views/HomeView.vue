<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
name: "HomeView"
})
</script>

<template>
    <div class="pagina">
      <div class="conteudo">
        <div class="texto">
          <h1>Biblioteca Colégio Dom Erico Ferrari</h1>
          <p>Agudo - RS</p>
        </div>
        <div class="botoes">
          <RouterLink class="botao" to="/aluno">Sou aluno</RouterLink>
          <RouterLink class="botao" to="/login">Sou professor</RouterLink>
        </div>
      </div>
    </div>
</template>

<style scoped>
.pagina {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}


.conteudo{
  background: rgba(231, 202, 144, 0.68);
  border-radius: 15px;
  padding: 3em;
}

.botoes{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

}

.botao{
  margin: 1em;
  color: black;
  border-radius: 15px;
  border: 1px solid black;
  text-decoration: none;
  background: aliceblue;
  padding: 0.5em;
}
</style>