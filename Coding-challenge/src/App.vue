<script setup>
import Facebook from './components/icons/Facebook.vue';
import Instagram from './components/icons/Instagram.vue';
import Modal from './components/icons/Modal.vue';
import Plus from './components/icons/Plus.vue';

</script>

<template>
  <div id='app' class="">
    <div class="flex flex-col md:pt-[600px] md:pl-[290px] px-20">
      <transition name="slide" appear>
        <div class="md:w-[909px] md:h-[289px]">
          <h1  class="text-[#FFFFFF] md:text-[224px] text-[80px] leading-[289px] font-medium font-Didot ">Explore</h1>
      </div>
      </transition>
      <div >
        <button class="flex flex-row items-center gap-x-5 " >
          <Modal/>
        </button>

      </div>
    </div>
    <div class="flex flex-col gap-y-5 fixed right-5 bottom-5">
      <a href=""><Facebook class="w-[67px]"/></a>
      <a href=""><Instagram class="w-[67px]"/></a>
    </div>
  </div>
  
 
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato&family=Quicksand:wght@300;400&display=swap');

:root {
  --url: url('./assets/Coding-Challenge-Image.png')
}

#app {
    background-image: linear-gradient(to left, transparent 70%, #611818 40%), url('./assets/Coding-Challenge-Image.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: screen;
    width: 100vw;
    height: 100vh;
    
  }
body {
  overflow: hidden;
} 
.slide-enter { 
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1.5s ease-in forwards;
  transition: opacity .5s;
}

.slide-leave {
  
}

.slide-leave-active {
  animation: slide-out 2s ease-out forwards; 
  opacity: 0;
  transition: opacity 1s;
}


@keyframes slide-in {
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(500px);
  }
}

</style>
