import { createRouter,createWebHashHistory } from "vue-router";
// agregando paginas de la aplicacion
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import CalculadoraV1 from "../Pages/Calculadora/CalculadoraV1.vue";
import CalculadoraV2 from "../Pages/Calculadora/CalculadoraV2.vue";
import Horario from "../Pages/Horario/Horario.vue";
import Horario2 from "../Pages/Horario/Horario2.vue";
import Recorrido from "../Pages/Ciclos/Recorrido.vue";
import Recorrido1 from "../Pages/Ciclos/Recorrido1.vue";
import Eventos from "../Pages/Eventos .vue";
import Padre from "../Pages/Props/Padre.vue";
import Hijo1 from "../Pages/Props/Hijo1.vue";
import Hijo2 from "../Pages/Props/Hijo2.vue";
import CardPrincipal from "../Pages/Card/CardPrincipal.vue";

const routes =[
    {
        path:"/",
        name:"Home",
        component: Home,
    },
    {
        path:"/about",
        name:"about",
        component: About,
    },
    {
        path:"/CalculadoraV1",
        name:"CalculadoraV1",
        component: CalculadoraV1,
    },
    {
        path:"/CalculadoraV2",
        name:"CalculadoraV2",
        component: CalculadoraV2,
    },
    {
        path:"/Horario",
        name:"Horario",
        component: Horario,
    },
    {
        path:"/Horario2",
        name:"Horario2",
        component:Horario2,
    },
    {
        path:"/Recorrido",
        name:"Recorrido",
        component: Recorrido,
    },
    {
        path:"/Recorrido1",
        name:"Recorrido1",
        component:Recorrido1,
    },
    {
        path:"/Eventos",
        name:"Eventos",
        component:Eventos,
    },
    {
        path:"/Padre",
        name:"Padre",
        component:Padre,
    },
    {
        path:"/Hijo1",
        name:"Hijo1",
        component:Hijo1,
    },
    {
        path:"/Hijo2",
        name:"Hijo2",
        component:Hijo2,
    },
    {
        path:"/CardPrincipal",
        name:"CardPrincipal",
        component:CardPrincipal,
    },
    
]

const router= createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;