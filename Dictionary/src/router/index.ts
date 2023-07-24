import {createRouter, createWebHistory, Router} from "vue-router";
import HomeView from "../views/HomeView.vue";
import EntryView from "../views/EntryView.vue";

const router:Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
          path:'/',
          name:'home',
          component:HomeView,
        },
        {
          path:'/search',
          name:'search',
          component:EntryView,
        },
    ]

})

export default router