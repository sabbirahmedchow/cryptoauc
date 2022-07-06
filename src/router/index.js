import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Wallet from "@/views/Wallet.vue";
import CreateProfile from "@/views/CreateProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wallet",
    name: "WalletView",
    component: Wallet,
  },
  {
    path: "/create-profile/",
    name: "CreateUserProfile",
    component: CreateProfile,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;