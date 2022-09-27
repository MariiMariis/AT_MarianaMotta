import { createStore } from 'vuex'

export default createStore({
        state: {
            livros: [
                {
                    titulo: "O Senhor dos Aneis - A sociedade do anel",
                    genero: "Fantasia",
                    autor: "J.R.R. Tolkien",
                    editora: "HarperCollins",
                    descricao: " A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits.",
                    data: "29/12/2020"
                },
                {
                    titulo: "IT - A Coisa",
                    genero: "Terror",
                    autor: "Stephen King",
                    editora: "Hodder",
                    descricao: "Coisa se alimenta dos medos e fobias das pessoas. Um personagem medroso ou que possua alguma fobia..",
                    data: "14/10/2005"
                },
                {
                    titulo: "A Roda do Tempo -  O Olho do Mundo",
                    genero: "Terror",
                    autor: "Robert Jordan",
                    editora: "Intrínseca",
                    descricao: "Um dia houve uma guerra tão definitiva que rompeu o mundo, e no girar da Roda do Tempo o que ficou na memória dos homens virou esteio das lendas.",
                    data: "01/03/2010"
                },
                {
                    titulo: "Harry Potter e a Pedra Filosofal",
                    genero: "Fantasia",
                    autor: "J.K. Rowling",
                    editora: "Rocco ",
                    descricao: "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. ",
                    data: "01/01/1999"
                },
                
            ]
        },
        getters: {
            getLivros: state => state.livros,
        },
        mutations: {
            addLivro: (state, newLivro) => state.livros.push(newLivro),
        },
        actions: {
            commitLivro: ({ commit }, newLivro ) => commit('addLivro', newLivro),
        },
    
    }) 

