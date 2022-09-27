<template>
    <NavBar/>
    <div class="mt-5">
        <h1>Adicionar Livro</h1>
            <form @submit.prevent="addLivro" class="container">
                <div class="d-flex flex-row justify-content-center">
                    <div class="d-flex flex-fill m-3 form-floating">
                        <input name="titulo-livro" class="form-control" type="text" placeholder="Nome do Livro" v-model="livro.titulo"> 
                        <label for="titulo-livro">Nome</label>
                    </div>
                    <div class="d-flex flex-fill m-3 form-floating">
                        <select name="gen-livro" class="form-select" v-model="livro.genero">
                            <option disabled>Selecione o gênero</option>
                            <option>Ação</option>
                            <option>Aventura</option>
                            <option>Suspense</option>
                            <option>Ficção Científica</option>
                            <option>Romance</option>
                            <option>Auto Ajuda</option>
                            <option>Biografia</option>
                            <option>Fantasia</option>
                            <option>Terror</option>
                        </select>
                        <label for="gen-livro">Gênero</label>
                    </div>
                    <div class="d-flex flex-fill m-3 form-floating">
                        <input class="form-control" name="dev-livro" type="text" placeholder="Autor" v-model="livro.autor"> 
                        <label for="dev-livro">Autor</label>
                    </div>
                    <div class="d-flex flex-fill m-3 form-floating">
                        <input class="form-control" name="plat-livro" type="text" placeholder="Editora" v-model="livro.editora"> 
                        <label for="plat-livro">Editora</label>
                    </div>
                </div>
                <div class="d-flex m-3 form-floating">
                    <textarea name="descr-livro" class="form-control" style="height: 150px" placeholder="Digite uma breve descrição." v-model="livro.descricao"></textarea>
                    <label for="desc-livro">Descrição</label>
                </div>
                <button type="submit" class="btn btn-go ">Adicionar</button>
                <button class="btn btn-dark" @click="$router.push('/')">Voltar</button>
            </form>
    </div>
    <FooterBar/>
</template>

<script>
 import NavBar from '../components/NavBar.vue'
 import FooterBar from '../components/Footer.vue'
 
 export default {
     name: 'AdicionarLivro',
     components: {
            NavBar, FooterBar
        },
    data(){
        return {
            livro: {
                titulo: "",
                genero: "",
                autor: "",
                editora: "",
                descricao: "",
                data: ""
            }
        }
    },
    methods: {
        addLivro() {
            this.$store.dispatch("commitLivro", {
                    titulo: this.livro.titulo, 
                    genero: this.livro.genero,
                    autor: this.livro.autor,
                    editora: this.livro.editora,
                    descricao: this.livro.descricao,
                    data: new Date().toLocaleDateString()})
            this.$router.push('/')
            window.alert("Livro adicionado!")
        }
    }
}
</script>

<style scoped>
    .btn-go{
    background: #9836f4;
    margin-right: 2rem;
    }
</style>