import 'core-js/stable'
import 'regenerator-runtime'
import './js/common'

import { createApp } from 'vue'
import App from './App'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/ko'
import 'element-plus/dist/index.css'
import '@/scss/main.scss'

import router from './js/router'

const app = createApp(App)

app
    .use(router)
    .use(ElementPlus, {locale})
    .mount('#app')