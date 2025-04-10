<template>
    <div class="container">
        <div class="row mt-4">
            <!-- Evento Click -->
            <div class="col-12 text-center">
                <h4>Evento Click</h4>
                <button @click="mostrarAlerta('Gracias por darle clic')" class="btn btn-danger" type="button">clic</button>
                <button @click="mostrarAlerta('Soy un botón')" class="btn btn-warning mx-2" type="button">clic2</button>
            </div>

            <!-- Evento Change - Nombre -->
            <div>
                <h4>Evento Change - Nombre</h4>
                <label class="form-control">Ingresa tu nombre</label>
                <input class="form-control mt-2" type="text" @change="actualizarNombre">
                <p>El nombre ingresado es: <strong>{{ nombre }}</strong></p>
            </div>

            <!-- Evento Change - Nacionalidad -->
            <div>
                <h4>Evento Change - Nacionalidad</h4>
                <label class="form-control">Selecciona tu nacionalidad</label>
                <select class="form-control mt-2" @change="actualizarNacionalidad">
                    <option value="">Seleccione...</option>
                    <option value="Mexicana">Mexicana</option>
                    <option value="Estadounidense">Estadounidense</option>
                    <option value="Canadiense">Canadiense</option>
                </select>
                <p>Tu nacionalidad es: <strong>{{ nacionalidad }}</strong></p>
            </div>

            <!-- Evento Change - Municipio o Ciudad -->
            <div>
                <h4>Evento Change - Municipio o Ciudad</h4>
                <label class="form-control">Ingresa tu municipio o ciudad</label>
                <input class="form-control mt-2" type="text" @change="actualizarCiudad">
                <p>Vives en: <strong>{{ ciudad }}</strong></p>
            </div>

            <!-- Evento de mouseenter y mouseleave -->
            <div class="col-12 mt-4 text-center">
                <h3>Evento de mouseenter y mouseleave</h3>
                <div class="d-inline-block text-center"
                    style="color: white; width: 300px;height: 200px; background-color: black; text-align: center; padding: 15px; border-radius: 14px;"
                    @mouseenter="mostrarMensajeMouse" @mouseleave="ocultarMensajeMouse">
                    <p>Pase el mouse</p>
                    <p>{{ mensaje }}</p>
                </div>
            </div>

            <!-- Evento Input -->
            <div>
                <h4>Evento Input</h4>
                <label class="form-control">Actualizar texto</label>
                <input class="form-control mt-2" type="text" @input="actualizarTexto">
                <p>El texto ingresado es: <strong>{{ texto }}</strong></p>
            </div>

            <!-- Evento Input con Enter -->
            <div>
                <h4>Evento Input con Enter</h4>
                <input type="text" class="form-control" @keyup.enter="actualizarTexto"
                    placeholder="Escribe algo y presiona Enter...">
                <p>Texto ingresado: <strong>{{ texto }}</strong></p>
            </div>

            <!-- Evento Focus y Blur -->
            <div>
                <h4>Evento Focus y Blur</h4>
                <input type="text" class="form-control" @focus="mostrarMensaje" @blur="validarTexto" placeholder="Escribe algo...">
                <p>{{ mensajeFocus }}</p>
            </div>

            <!-- Evento Input - Nosotros -->
            <div>
                <h4>Evento Input - Nosotros</h4>
                <label class="form-control">Nosotros</label>
                <input class="form-control mt-2" type="text" @input="actualizarNosotros">
                <p>El dato ingresado es: <strong>{{ nosotros }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: '',
            nacionalidad: '',
            ciudad: '',
            texto: '',
            mensajeFocus: '',
            mensaje: '',
            nosotros: ''  // Nueva variable para "Nosotros"
        }
    },

    methods: {
        mostrarAlerta(mensaje) {
            alert(mensaje);
        },
        actualizarNombre(event) {
            this.nombre = event.target.value;
        },
        actualizarNacionalidad(event) {
            this.nacionalidad = event.target.value;
        },
        actualizarCiudad(event) {
            this.ciudad = event.target.value;
        },
        actualizarTexto(event) {
            this.texto = event.target.value;
        },
        actualizarNosotros(event) {
            this.nosotros = event.target.value;  // Nuevo método para "Nosotros"
        },
        mostrarMensaje() {
            this.mensajeFocus = "Estás escribiendo...";
        },
        validarTexto(event) {
            this.mensajeFocus = event.target.value.trim() === "" 
                ? "No puedes dejar el campo vacío." 
                : "Texto validado correctamente.";
        },
        mostrarMensajeMouse() {
            this.mensaje = "El mouse está dentro del rectángulo";
        },
        ocultarMensajeMouse() {
            this.mensaje = "El mouse está fuera del rectángulo";
        }
    }
}
</script>

<style scoped>
/* Estilos generales */
.container {
    max-width: 800px;
    margin: auto;
}

/* Estilos para los títulos */
h2, h3 {
    color: #333;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
}

/* Estilos para los botones */
.btn {
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 8px;
}

/* Agregar estilos personalizados para los campos de entrada */
input.form-control {
    margin-bottom: 10px;
}
</style>
