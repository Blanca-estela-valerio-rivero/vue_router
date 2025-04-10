<script setup>
import { ref } from 'vue'
import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';




</script>

<template>
    <div class="container mt-4">
      <div class="card">
        <h2 class="props text-center">PROPS</h2>
            <div class="row mt-4">
          <div class="col-md-4 ">
            <div class="card" style=" width: 21 rem;">
              <h4 class="text-center" > Soy la madre de Lynco y Lily </h4>
              <img src="https://i.pinimg.com/originals/3b/54/ff/3b54ff0c0308f2ec6c93428aceb3748d.png" alt="">
            </div>
          </div>
          <div class="col-md-4">
            <div class="card " style="width: 21rem; ">
                <h4 class="text-center"> Me llamo Lynco Lound </h4>   
            <img src="https://vignette.wikia.nocookie.net/the-loud-10/images/a/af/Lincoln_Loud_(OV).png/revision/latest?cb=20190327175507&path-prefix=es" alt="">
            <Hijo1 class="mt-4"edad=" 11 años"/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 21rem;" >
                <h4 class="text-center"> Me llamo Lily Lound </h4>   
                <img src="https://th.bing.com/th/id/OIP.31DGNYavpT-UBrUw7IGmiQHaKu?rs=1&pid=ImgDetMain" alt="">
                <Hijo2 class="mt-4"edad=" 2 años"/>
            </div>
          </div>
        </div>
      </div>
       
        </div>
</template>

<style scoped></style>
