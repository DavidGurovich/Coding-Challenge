

<template>
    <div class="container mx-auto">
      <div class="flex justify-center
      ">
        <button
          @click="isOpen = true"
          class="text-white   flex flex-row items-center gap-x-5"
          type="button"
        >
        <svg class="transform active:scale-75 transition-transform" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"><g><g><path fill="#fff" d="M29.295 22.139h-6.833v7.17h-1.934v-7.17h-6.833v-1.815h6.833v-7.11h1.934v7.11h6.833zM21.5 0C9.626 0 0 9.626 0 21.5S9.626 43 21.5 43 43 33.374 43 21.5A21.5 21.5 0 0 0 21.5 0z"/></g></g></svg>
          <p class="font-Lato text-[25px] font-light transform active:scale-75 transition-transform">More Details</p>
        </button>
        <transition name="fade" appear>
  
        <div
          v-show="isOpen"
          class="
            absolute
            inset-0
            flex
            items-center
            left-60
          "
        >
          <div class="w-[580px] h-[690px] left-[140px] top-[159px] p-6 bg-[#FFFFFF] shadow-xl">
            <div class="flex items-center justify-between">
              <h3 class="text-[66px] font-Didot font-[700] leading-[85px] text-[#611818] mt-12 pl-14">Explore</h3>
              <div class="text-[#611818] w-[22px] h-[22px] pb-[140px]" @click="isOpen = false">
                <svg viewPort="32 32 32 32" version="1.1"
                xmlns="http://www.w3.org/2000/svg" height="100" w="100" >
                <line x1="1" y1="18" 
                    x2="18" y2="1" 
                    stroke="#611818" 
                    stroke-width="2"/>
                <line x1="1" y1="1" 
                    x2="18" y2="18" 
                    stroke="#611818" 
                    stroke-width="2"/>
                </svg>
            </div>
            </div>
            <div class="mt-4 px-4">
              <p class="text-left pl-10 pt-2 leading-[22px] font-Lato text-[18px] w-[442px] h-[345px] text-[#282828]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
              </p>
              
              
            </div>
            <button
                id="button"
                @click="isOpen = false"
                class="mt-8 mr-[190px] uppercase w-[235px] h-[55px] font-Lato text-[#FFFFFF] text-[18px] border solid #979797"
              >
                Read More
              </button>
          </div>
        </div></transition>
      </div>
    </div>
  </template>

  <script>
    

  export default {
    data() {
      return {
        isOpen: false,
      };
    },
  };

  
  </script>

  <style>
    #button {
        background:linear-gradient(90deg, #611818 0%, #A36754 100%);
    }
    .fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

</style>