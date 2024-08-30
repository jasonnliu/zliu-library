<script setup>
import BHeader from './components/BHeader.vue'
import router from './router';
import { ref } from 'vue';

</script>

<template>
  <header>
    <BHeader />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>