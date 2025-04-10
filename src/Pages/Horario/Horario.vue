<template>
    <div class="container">
        <h3 clases="mt-4">Horario de clases de sistemas </h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(h, index) in horario" :key="index"> 
          <td> {{h.hora}}</td>
          <td> {{h.lunes}}</td>
          <td> {{h.martes}}</td>
          <td> {{h.miercoles}}</td>
          <td> {{h.jueves}}</td>
          <td> {{h.viernes}}</td>

        </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script setup>
  import {h, ref} from 'vue';
  const horario=ref([
    {hora:'7:00-9:00',lunes:'IA',martes: 'Aqil',miercoles:'web',jueves:'IA',viernes:'movil'},
    {hora:'9:00-11:00',lunes:'IA',martes: 'Aqil',miercoles:'web',jueves:'IA',viernes:'movil'},
    {hora:'11:00-1:00',lunes:'IA',martes: 'Aqil',miercoles:'web',jueves:'IA',viernes:'movil'},
    {hora:'1:00-3:00',lunes:'IA',martes: 'Aqil',miercoles:'web',jueves:'IA',viernes:'movil'},
    {hora:'3:00-5:00',lunes:'IA',martes: 'Aqil',miercoles:'web',jueves:'IA',viernes:'movil'},
  
  ])
  </script>