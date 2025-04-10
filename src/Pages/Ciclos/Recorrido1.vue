<script>
 export default{
    data(){
        return{
            //DATOS DE ALUMNOS
            alumnos:[
                {ID:22620189, nombre:'Blanca Estela Valerio Rivero', gusto:'Tenis'},
                {ID: 22620256, nombre: 'Juan Pérez Garcia', gusto: 'Atletismo'},
                {ID: 22620278, nombre: 'Martin Gómez perez', gusto: 'Natacion'},
                {ID: 20620123, nombre: 'Jorge Martínez luna', gusto: 'Boxeo'},
                {ID: 21620167, nombre: 'Luis Fernández hernandez', gusto: 'Ajedrez'},
                {ID: 18620054, nombre: 'Ana Rodríguez martinez', gusto: 'Ciclismo'},
                {ID: 15620098, nombre: 'Carlos Méndez dominguez', gusto: 'Voleibol'},
                {ID: 22620178, nombre: 'María López lopez', gusto: 'Futbol'},
                {ID: 22620222, nombre: 'Jorge Ramírez valverde', gusto: 'Esgrima'},
                {ID: 21620159, nombre: 'Sofía Herrera gonzaless', gusto: 'Skateboarding'},
                {ID: 20620101, nombre: 'Pedro Salinas ortiz', gusto: 'Parkour'},
                {ID: 21620254, nombre: 'Elena Vargas perez', gusto: 'Hockey'}
                
            ]
        }
    },
}
</script>
<template>

<div  class="container">
    <h3 class="mt-4"> LISTA DE ALUMNOS</h3>
    <ul>
        <li v-for="alumno in alumnos" :key="alumno.ID">

         <strong>{{ alumno.ID }} </strong>-
          <strong>{{ alumno.nombre }} </strong>-
          <strong>{{ alumno.gusto }} </strong>
        </li>
    </ul>
</div>
</template>

<style scoped>
h3{
    font-family:Georgia, 'Times New Roman', Times, serif;
    color:rgb(9, 10, 10);
    background-color: rgb(93, 149, 201);
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    
    
}


ul{
  list-style-type: none;  
  padding: 0%;
}

li{
    color:black;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(95, 178, 217);
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    text-align:center;
}
</style>