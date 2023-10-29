import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomTheme: ThemeDefinition = {
  dark: false,
  colors: {
    //background: '#FFFFFF',
    //surface: '#FFFFFF',
    primary: '#144b34',
    'primary-darken-1': '#144b34',
    secondary: '#b9c8c2',
    'secondary-darken-1': '#55766c',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    }
  }
})

createApp(App).use(router).use(vuetify).mount('#app')
