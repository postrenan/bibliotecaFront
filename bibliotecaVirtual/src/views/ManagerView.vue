<script lang="ts">
import { defineComponent, ref } from 'vue';
import IconDocumentation from "@/components/icons/IconDocumentation.vue";

interface Livro {
  titulo: string;
  descricao: string;
  autor: string;
  categoria: string;
  anoPublicacao: number;
  exemplares: number;
  localizacao: string;
}

interface LivroRetirado extends Livro {
  nomeAluno: string;
  turma: string;
}

export default defineComponent({
  name: 'ManagerView',
  components: { IconDocumentation },
  mounted() {
    function getBooks(){
        fetch('https://example.com/resource.json', {
          method: 'GET'
    })
            .then(res => {
             let livros = res.json()
            })
            .catch(err => console.log(err));
    }

    function fetchBooks(){

    }
  },
  setup() {
    const modal = ref(false);

    const livros = ref<Livro[]>([
      {
        titulo: "Dom Quixote",
        descricao: "Uma das maiores obras da literatura espanhola.",
        autor: "Miguel de Cervantes",
        categoria: "Romance",
        anoPublicacao: 1605,
        exemplares: 10,
        localizacao: "Prateleira A1"
      },
      {
        titulo: "Dom Quixot",
        descricao: "Uma das maior obras da literatura espanhola.",
        autor: "Miguel de Cervantes",
        categoria: "Romance",
        anoPublicacao: 1605,
        exemplares: 10,
        localizacao: "Prateleira A1"
      }
    ]);

    const livrosRetirados = ref<LivroRetirado[]>([
      {
        titulo: "A Divina Comédia",
        descricao: "Poema épico italiano.",
        autor: "Dante Alighieri",
        categoria: "Poesia",
        anoPublicacao: 1320,
        exemplares: 0,
        localizacao: "Prateleira B2",
        nomeAluno: "João Silva",
        turma: "3A"
      },
      {
        titulo: "Hamlet",
        descricao: "Tragédia de William Shakespeare.",
        autor: "William Shakespeare",
        categoria: "Drama",
        anoPublicacao: 1609,
        exemplares: 0,
        localizacao: "Prateleira C3",
        nomeAluno: "Maria Oliveira",
        turma: "2B"
      }
    ]);

    function openModal() {
      modal.value = true;
    }

    function closeModal() {
      modal.value = false;
    }

    function saveBook() {
      console.log('Livro salvo!');
      closeModal();
    }

    return {
      modal,
      livros,
      livrosRetirados,
      openModal,
      closeModal,
      saveBook
    };
  }
});
</script>

<template>
  <nav class="cabecalho">
    <h3 class="titulo">Painel de gestão</h3>
    <div class="botoes">
      <button class="botaoConfig">Configurações</button>
      <router-link to="/" class="botaoSair">Sair</router-link>
    </div>
  </nav>
  <div>
    <div class="pesquisaConteiner">
      <input type="text" class="pesquisa" placeholder="Pesquisar livros" />
      <button class="botaoPesquisa">Pesquisar</button>
    </div>
    <div>
      <h2>Livros Disponíveis</h2>
      <div class="estante">
        <div class="livro" v-for="(livro, index) in livros" :key="index">
          <img src="" alt="Imagem do Livro" />
          <p>Título: {{ livro.titulo }}</p>
          <p>Descrição: {{ livro.descricao }}</p>
          <p>Autor: {{ livro.autor }}</p>
          <p>Categoria: {{ livro.categoria }}</p>
          <p>Ano de publicação: {{ livro.anoPublicacao }}</p>
          <p>Exemplares: {{ livro.exemplares }}</p>
          <p>Localização: {{ livro.localizacao }}</p>
        </div>
      </div>

      <h2>Livros Retirados</h2>
      <div class="estante">
        <div class="livro" v-for="(livro, index) in livrosRetirados" :key="index">
          <img src="" alt="Imagem do Livro" />
          <p>Título: {{ livro.titulo }}</p>
          <p>Descrição: {{ livro.descricao }}</p>
          <p>Autor: {{ livro.autor }}</p>
          <p>Categoria: {{ livro.categoria }}</p>
          <p>Ano de publicação: {{ livro.anoPublicacao }}</p>
          <p>Exemplares: {{ livro.exemplares }}</p>
          <p>Localização: {{ livro.localizacao }}</p>
          <p>Nome do Aluno: {{ livro.nomeAluno }}</p>
          <p>Turma: {{ livro.turma }}</p>
        </div>
      </div>

      <div class="btnPesquisar">
        <div class="col-3 btnPesquisarBtn">
          <button class="btn btn-success btnCircular btnPrincipal" @click="openModal">
            <icon-documentation />
          </button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="modal" class="modal">
        <div>
          <h2>Adicione um novo livro</h2>
        </div>
        <div>
          <input type="text" placeholder="Título" />
          <input type="text" placeholder="Autor" />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Ano de publicação" min="1800" max="2090" />
          <input type="text" placeholder="Localização" />
        </div>
        <div>
          <button @click="saveBook">Salvar</button>
          <button @click="closeModal">Fechar</button>
        </div>
      </div>
    </transition>
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

.botaoConfig {
  border-radius: 15px;
}

.botaoSair {
  border-radius: 15px;
  text-decoration: none;
  background: rgba(255, 0, 0, 0.25);
  color: inherit;
  padding: 0.5em;
}

.pesquisaConteiner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1em;
  gap: 1em;
}

.pesquisa,
.botaoPesquisa {
  border-radius: 5px;
  padding: 0.2em;
}

.botoes {
  display: flex;
  gap: 1rem;
}

.estante {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.livro {
  background: rgba(128, 128, 128, 0.46);
  border-radius: 15px;
  border: 1px solid black;
  padding: 1em;
  margin: 1em;
  width: 200px;
}

.btnPesquisar {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 100;
}

.btnCircular {
  border-radius: 50%;
}

.btnPrincipal {
  font-size: 20px;
  padding: 15px;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 101;
}

</style>
