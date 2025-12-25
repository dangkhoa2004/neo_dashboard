import { createApp } from 'vue'
import './style.css' // CSS của Tailwind
import App from './App.vue'
import router from './router' // Router bạn đã tạo ở câu trả lời trước

const app = createApp(App)

app.use(router)
app.mount('#app')