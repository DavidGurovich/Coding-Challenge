<script setup>
import Facebook from './components/icons/Facebook.vue';
import Instagram from './components/icons/Instagram.vue';
import Plus from './components/icons/Plus.vue';

import HomePage from './components/HomePage.vue'
</script>

<template>
  <div id='app'>
    
    <div class="flex flex-col">
      <div>
        <h1 class="text-white text-9xl font-serif">Explore</h1>
        
      </div>
      <div class="flex flex-row items-center gap-x-4">
        <Plus/>
        <p class="text-white font-sans text-xl" >More Details</p>
      </div>
    </div>
    <div class="flex flex-col gap-y-5 fixed right-5 bottom-5">
      <Facebook/>
      <Instagram/>
    </div>
  </div>

 
</template>

<style>
#app {
    background-image: linear-gradient(to left, transparent 70%, #5b0b04 40%),url('./assets/Coding-Challenge-Image.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: screen;
    width: 100vw;
    height: 100vh;
  }
</style>
