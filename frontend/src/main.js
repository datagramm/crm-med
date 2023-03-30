import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/store";
import Router from "@/router"

const app = createApp(App)

app.use(Router)
app.use(store)
app.mount('#app')
