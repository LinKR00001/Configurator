import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/Configurator/sw.js')
      .catch(err => console.error('SW registration failed:', err));
  });
}

createApp(App).mount('#app')

