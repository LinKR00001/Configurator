import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}


createApp(App).mount('#app')

