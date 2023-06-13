<template>
    <div class="container mx-auto">
      <div class="flex justify-center">
        <button
          @click="isOpen = true"
          class="text-white font-Lato font-light text-[25px]"
          type="button"
        >
          More Details
        </button>
  
        <div
          v-show="isOpen"
          class="
            absolute
            inset-0
            flex
            items-center
            justify-center
           
          "
        >
          <div class="w-[580px] h-[690px] left-[140px] top-[159px] p-6 bg-[#FFFFFF] shadow-xl">
            <div class="flex items-center justify-between">
              <h3 class="text-[66px] font-Didot font-[700] leading-[85px] text-[#611818]">Explore</h3>
              <svg
                @click="isOpen = false"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-red-900 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="mt-4">
              <p class="text-left leading-[22px] font-Lato font-[18px] w-[442px] h-[345px] text-[#282828]">
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
              <button
                id="button"
                @click="isOpen = false"
                class="uppercase w-[235px] h-[55px] font-Lato text-[#FFFFFF] border solid #979797 "
              >
                Read More
              </button>
              
            </div>
          </div>
        </div>
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
</style>