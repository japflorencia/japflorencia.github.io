import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons from regular */
import { 
  faUser, 
  faShareFromSquare, 
  faObjectGroup, 
  faIdCard
} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(
  faUser, 
  faShareFromSquare, 
  faObjectGroup, 
  faIdCard
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
