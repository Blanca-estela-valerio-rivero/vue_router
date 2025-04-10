<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navegacion</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <di class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Calculadora
                </a>
                <ul class="dropdown-menu">
                  <a class="dropdown-item" href="#"> <router-link to="/CalculadoraV1"> CalculadoraV1</router-link> </a>
                  <a class="dropdown-item" href="#"> <router-link to="/CalculadoraV2"> CalculadoraV2</router-link> </a>
                </ul>
              </di>

              <di class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Horario
                </a>
                <ul class="dropdown-menu">
                  <a class="dropdown-item" href="#"> <router-link to="/Horario">Horario</router-link> </a>
                  <a class="dropdown-item" href="#"> <router-link to="/Horario2">Horario2</router-link> </a>
                </ul>
              </di>
              <di class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Ciclos
                </a>
                <ul class="dropdown-menu">
                  <a class="dropdown-item" href="#"> <router-link to="/Recorrido">Recorrido</router-link> </a>
                  <a class="dropdown-item" href="#"> <router-link to="/Recorrido1">Recorrido1</router-link> </a>
                </ul>
              </di>
              <di class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Eventos
                </a>
                <ul class="dropdown-menu">
                  <a class="dropdown-item" href="#"> <router-link to="/Eventos">Eventos</router-link> </a>
                </ul>
              </di>
              <di class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Props
                </a>
                <ul class="dropdown-menu">
                  <a class="dropdown-item" href="#"> <router-link to="/Padre">Padre</router-link> </a>
                </ul>
              </di>
              <di class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Card
                </a>
                <ul class="dropdown-menu">
                  <!-- <a class="dropdown-item" href="#"> <router-link to="/Card/">Card</router-link> </a> -->
                  <a class="dropdown-item" href="#"> <router-link to="/CardPrincipal">CardPrincipal</router-link> </a>

                </ul>
              </di>

            </ul>
          </div>
        </div>
      </nav>







      <!-- <h1> Vue Router</h1> -->
      <!-- <nav>
 
 </nav> -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
/* General container */
.container {
  margin-top: 20px;
  padding: 0 15px;
}

/* Navbar base */
.navbar {
  background-color: #343a40 !important;
  border-radius: 10px;
  padding: 10px 20px;
}

/* Navbar brand */
.navbar-brand {
  color: #ffffff;
  font-weight: bold;
  font-size:2 px;
}


/* Navbar links */
.nav-link {
  color: #ffffff !important;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}

.nav-link:hover {
  color: #18a1a1 !important;
}


/* Dropdown menu */
.dropdown-menu {
  background-color: #212529;
  border-radius: 8px;
  border: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}


.dropdown-item:hover {
  background-color: #dee4eb;
  color: #ffc107;
}

/* Navbar toggler icon */
.navbar-toggler {
  border-color: #ffffff;
}


</style>

