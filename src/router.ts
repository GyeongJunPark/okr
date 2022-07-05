import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Goals from "./components/GoalsMy.vue";
import Allcompany from "./components/AllGoals.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/goals/my",
    name: "Goals",
    component: Goals,
  },
  {
    path: "/goals/allcompany",
    name: "Allcompany",
    component: Allcompany,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
