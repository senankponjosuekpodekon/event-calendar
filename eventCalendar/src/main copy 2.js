import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import vuetify from './plugins/vuetify'
// import VueTextareaAutosize from 'vue-textarea-autosize'
import './index.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.mount('#app')

createApp(App).use(vuetify).mount('#app')
