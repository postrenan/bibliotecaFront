<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoginView",
  components: {

  },
  data() {
    return{
      senha: '',
      email: '',
    }
  },
  methods: {
    verificaEmail(email: string, password: string) {
      this.$router.push({ path: `/gerenciamento` });
    }
  },
  mounted() {

  },
})
</script>

<template>
<div class="pagina">
  <div class="conteudo">
    <div>
      <h2>Olá professor, seja bem vindo!</h2>
    </div>
    <div >
      <p>Email</p>
      <input class="input" type="email" v-model="email">
      <p>Senha</p>
      <input class="input" type="password" v-model="senha" /><br>
      <button class="botao" @click="verificaEmail(senha, email)">Entrar</button>
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

p{
  text-align: center;
  font-size: 1.5em;
}

.input{
  border-radius: 5px;
  padding: 0.2em;
}

.botao{
  border-radius: 5px;
  margin: 1em;
  font-size: 1.5em;
}
</style>