<script>
 export default{
    data(){
        return{
            //DATOS DE ALUMNOS
            alumnos:[
                {nc:12345, nombre:'blanca', carrea:'ISC'},
                {nc:12345, nombre:'estela', carrea:'TICS'},
                {nc:12345, nombre:'valerio', carrea:'ISC'},
                {nc:12345, nombre:'rivero', carrea:'ISC'},
                
            ]
        }
    },
}
</script>
<template>

<div class="container">
    <h3 class="mt-4"> Lista de alumnos</h3>
    <ul>
        <li v-for="alumno in alumnos" :key="alumno.nc">
          <strong>{{ alumno.nombre }} </strong>
          <strong>{{ alumno.carrea }} </strong>
        </li>
    </ul>
</div>
</template>

<style scoped>
h3{
    color:orange;
    background-color: rgb(238, 88, 146);
    border-radius: 15px;
    padding: 10px;
    
}

ul{
  list-style-type: none;  
  padding: 0%;
}

li{
    color:white;
    background-color: black;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
}
</style>