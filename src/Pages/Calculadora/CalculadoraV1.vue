<script>
export default{
    data() {
        return{
            numero1:0,
            numero2:0,
            resultado:0,

        }
    },
    methods:{
        sumar() {
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        resta() {
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        multiplacion() {
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        },
        division() {
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
        }
    }
}
</script>
<template>
   <div class="container mt-5">
    <div class="car shadow p-4">
        <h1 class="text-center">CALCULADORA </h1>
        <h2 class="text-center mt-4">Resultado: {{ resultado }} </h2>
        <div class="mb-3">
            <label for="">Numero 1</label>
            <input type="number"class="form-control" v-model="numero1">
        </div>

        <div class="mb-3">
            <label for="">Numero 2</label>
            <input type="number"class="form-control" v-model="numero2">
        </div>

        <div class="d-flex justify-content-center gap-2">
        <button @click="sumar" class="btn btn-danger">S</button>
        <button @click="resta" class="btn btn-warning">R</button>
        <button @click="multiplacion" class="btn btn-info">M</button>
        <button @click="division" class="btn btn-success">D</button>
    </div>

  
   
   </div> 
</div>
</template>