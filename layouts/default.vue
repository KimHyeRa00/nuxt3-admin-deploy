<script setup lang="ts">
import { useToast, TwFeather, TwToast } from "vue3-tailwind";
const { toasts } = useToast();
const cookieDark = useCookie('dark-mode');
</script>

<template>
  <div id="dark-mode" :class="cookieDark ? 'dark vt-dark' : ''">
    <TwToast position="bottom-right" :toasts="toasts" />
    <div>
      <!-- <LayoutFloating /> -->
      <div class="py-4 px-0 md:px-1">
        <div class="flex">
          <LayoutSidebar/>
          <div class="w-full md:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)]  bg-white ">
                 
           <LayoutHeader />
            <div class="p-4">
              <slot />
              
            </div>
            
          </div>
        </div>
  
      </div>
    </div>
  </div>
</template>

<style></style>
