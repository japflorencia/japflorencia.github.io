import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import font awesome core and css */
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icon libraries */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* configure fontawesome */
config.autoAddCss = false

/* add all icons to library */
library.add(
  fas as any,
  far as any,
  fab as any
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')

/* Console Easter Egg */
if (typeof window !== 'undefined') {
  const styles = {
    title: 'font-size: 24px; font-weight: bold; color: #667eea; text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);',
    subtitle: 'font-size: 14px; color: #764ba2; margin-top: 10px;',
    text: 'font-size: 12px; color: #718096; line-height: 1.6;',
    accent: 'font-size: 12px; color: #f97316; font-weight: bold;'
  }

  console.log(
    '%c🚀 Hey there, code explorer!',
    styles.title
  )
  console.log(
    '%cWelcome to my portfolio',
    styles.subtitle
  )
  console.log(
    `%cLooking for interesting code? Check out my GitHub: 
    %chttps://github.com/japflorencia

Want to work together? Reach out: 
    https://linkedin.com/japflorencia
    `,
    styles.text,
    styles.accent
  )
  console.log(
    '%c✨ Built with Vue 3 + TypeScript + ❤️',
    styles.text
  )
}
