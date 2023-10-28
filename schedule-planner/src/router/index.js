import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Scheduler from "../views/Scheduler.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Scheduler",
        name: "Scheduler",
        component: Scheduler,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;