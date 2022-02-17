import { createApp } from 'vue'
import App from './App.vue'
import router from '/@/router'
import store from '/@/store'
import './permission' // permission control
import 'normalize.css/normalize.css'
import '/@/assets/css/global.less'
import 'animate.css'
import { changeStyle } from '/@/utils/factory';
import { menusModel } from '/@/utils/model';

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// 主题
const isTheme: any = localStorage.getItem('theme');
if(isTheme !== null){
  changeStyle(menusModel[isTheme]);
}
