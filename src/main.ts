import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/index'
import service from '@/assets/service/bbs.service.js';//ts 引入js文件会报错 src下创建type.d.ts 中 实例引入

// import BesUI from 'bes-ui'

const ENV = import.meta.env;//获取生产/测试的配置
console.log('环境变量：', ENV.VITE_URL);

// import coco from  'coco-ui-1'
import Magou from 'magou-u1';
import 'magou-u1/dist/style.css'
const app = createApp(App);
app.use(router)
// app.use(BesUI)
   app.use(Magou)
// app.use(coco)
app.config.globalProperties.$service = service;//声明全局变量
app.mount('#app')
