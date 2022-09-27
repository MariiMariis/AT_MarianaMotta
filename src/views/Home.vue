<template>
    <div class="d-flex flex-column h-100">
        <NavBar />
        <main class="flex-shrink-0">
            <div class="row mt-5">
                <h1 class="mb-5">Livros Disponíveis</h1>
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Gênero</th>
                            <th>Autor</th>
                            <th>Editora</th>
                            <th>Descrição</th>
                            <th>Data do Lançamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(livro, i) in getLivros" :key="i">
                            <td>{{ livro.titulo }}</td>
                            <td>{{ livro.genero }}</td>
                            <td>{{ livro.autor }}</td>
                            <td>{{ livro.editora }}</td>
                            <td>{{ livro.descricao }}</td>
                            <td>{{ livro.data }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <FooterBar />
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/Footer.vue'

    export default {
        name: 'HomePage',
        components: {
            NavBar, FooterBar
        },
        computed: {
            getLivros() {
                return this.$store.getters.getLivros
            }
        }
    }
</script>

<style>
</style>