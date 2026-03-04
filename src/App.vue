<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Serial from './components/Serial.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.jpg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="2026 Configurator-Alpha" />
    </div>
  </header>

  <main>
    <Serial />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: nowrap;
  }
}
</style>
