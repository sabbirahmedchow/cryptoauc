import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import iziToast from "izitoast";
import axios from "axios";

const app = createApp(App).use(router)

app.config.globalProperties.axios=axios
app.config.globalProperties.iziToast=iziToast


app.mount('#app');
