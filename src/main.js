import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'

//main js general setup for application. may update if something to apply to the entire app. 
let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')
