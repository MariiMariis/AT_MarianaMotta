<template>
  <nav class="navbar navbar-expand-lg navbar-dark " >
    <div class="container-fluid">
      <img src="../assets/logo.png"/>
      <a class="navbar-brand" href="#">Cadastro de Livros</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          
          <a class="nav-link" @click="$router.push('/')" href="">Home</a> 
          <a class="nav-link" @click="$router.push('/adicionar')" href="#">Adicionar</a>
        </div>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
      export default{
          name: 'NavBar'
      }
  </script>
  
  <style scoped>
      .container-fluid{
      background: #9836f4;
      padding: 1rem;
      }

      img{
      padding-right: 1rem;
      }
  
  </style>