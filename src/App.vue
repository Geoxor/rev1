<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Header />
  <Sidebar />
  <router-view />
  <Footer />
</template>

<style lang="postcss">
#app {
  @apply bg-black;
}
</style>
