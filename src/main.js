import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs'
import App from './App.vue'
import './index.css'
import {createWebHistory, createRouter} from 'vue-router'
import Main from './components/Main.vue'
import Projets from "./components/Projets.vue"


const routes = [
    { path: '/', name:'Accueil', component: Main },
    { path: '/Projets',  name: 'Projets', component: Projets },
   
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active" // active class for *exact* links.
  })

const app = createApp(App);
app.use(router);
app.use(TroisJSVuePlugin);

app.mount('#app');