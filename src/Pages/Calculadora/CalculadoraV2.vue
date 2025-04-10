<script>
export default{
    data() {
        return{
           display:'',
           currentValue:0,

        }
    },methods:{
        agregarNumero(numero){
            this.display +=numero;
        },calculo(){
            try{
                this.currentValue=eval(this.display);
                this.display=this.currentValue.toString();
            }catch(error){
                this.display='Error';
            }
           
        },
        limpiarpantalla(){
             this.display='';
        },
        eliminarnumero(){
            this.display=this.display.slice(0,-1);
        }
    }
   
}
</script>

<template>
    <div class="container d-flex justify-content-center mt-4"  style="height: 420px;" >
        <div class="card p-3" style="width: 300px; background-color:#606462;">
            <div class="card-body">
                <h6 class="text-center title"> Calculadora V2</h6>
                <!-- Display de calculadora -->
                 <div class="mb-3"> 
                    <input type="text"class="form-control" v-model="display" disabled>
                 </div>
                 <div class="d-flex justify-content-between ">
                    <button class=" btn btn-light" @click="">%</button>
                    <button class=" btn btn-light" @click="limpiarpantalla">CE</button>
                    <button class=" btn btn-light" @click="limpiarpantalla">C</button>
                    <button class="btn btn-light" @click="eliminarnumero">B</button>
                  </div>
                 <!-- Botones de la calculadora -->
                  <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-light" @click="agregarNumero(7)">7</button>
                    <button class=" btn btn-light" @click="agregarNumero(8)">8</button>
                    <button class=" btn btn-light" @click="agregarNumero(9)">9</button>
                    <button class="btn btn-warning" @click="agregarNumero('/')">/</button>
                  </div>
                  <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-light" @click="agregarNumero(4)">4</button>
                    <button class=" btn btn-light" @click="agregarNumero(5)">5</button>
                    <button class=" btn btn-light" @click="agregarNumero(6)">6</button>
                    <button class="btn btn-warning" @click="agregarNumero('*')">x</button>
                  </div>
                  <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-light" @click="agregarNumero(1)">1</button>
                    <button class=" btn btn-light" @click="agregarNumero(2)">2</button>
                    <button class=" btn btn-light" @click="agregarNumero(3)">3</button>
                    <button class="btn btn-warning" @click="agregarNumero('-')">-</button>
                  </div>
                  <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-light" @click="calculo">=</button>
                    <button class=" btn btn-light" @click="agregarNumero">0</button>
                    <button class=" btn btn-light" @click="agregarNumero('.')">.</button>
                    <button class="btn btn-warning" @click="agregarNumero('+')">+</button>
                  </div>
            </div>

        </div>

    </div>
</template>
<style scoped>
 button {
    width: 45PX;
    height: 40px; 
    font-size: 20px; 
    text-align: center;
  }
  .title {
    color: white !important; 
    font-size: 24px; 
    font-weight:bolder; 
    text-transform:uppercase; 
    letter-spacing: 1px; 
    
}
</style>