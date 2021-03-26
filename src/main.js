import { createApp } from 'vue';
import { TroisJSVuePlugin } from 'troisjs';
import App from './App.vue';
import './index.css';
import {createWebHistory, createRouter, createWebHashHistory} from 'vue-router';
import Accueil from './views/Accueil.vue';
import Projets from './views/Projets.vue';
import Contact from './views/Contact.vue';
import Infos from './views/Infos.vue';

const routes = [
    { path: '/', name:'Accueil', component: Accueil },
    { path: '/Projets',  name: 'Projets', component: Projets },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/Infos', name: 'Infos', component: Infos },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
})

const app = createApp(App);
app.use(router);
app.use(TroisJSVuePlugin);


app.mount('#app');