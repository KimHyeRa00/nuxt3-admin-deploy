<script setup lang="ts">
import { TwFeather } from "vue3-tailwind";

useHead({
  title: "Dashboard",
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Dashboard</h1>


    <hr class="my-2 border dark:border-gray-700" />

    <div class="lg:pl-10">
      <div class="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-4"><!--[-->
        <div
          class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
          <!---->
          <div class="flex-1 px-4 py-5 sm:p-6"><!--[--><a
              href="https://image.nuxt.com/?utm_source=nuxt_website&amp;utm_medium=modules" rel="noopener noreferrer"
              target="_blank" aria-label="Nuxt Image" class="focus:outline-none" tabindex="-1"><span
                class="absolute inset-0" aria-hidden="true"></span></a><!---->
            <p class="text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5"><!--[-->
              Nuxt Image <span class="i-ph-medal-duotone h-4 w-4 text-primary pointer-events-none"></span><!--]--></p>
            <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1"><!--[-->Plug-and-play image optimization.<!--]-->
            </p><!--[--><!--]--><!--]-->
          </div><!---->
        </div>
        <div
          class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
          <!---->
          <div class="flex-1 px-4 py-5 sm:p-6"><!--[--><a
              href="https://content.nuxt.com/?utm_source=nuxt_website&amp;utm_medium=modules" rel="noopener noreferrer"
              target="_blank" aria-label="Nuxt Content" class="focus:outline-none" tabindex="-1"><span
                class="absolute inset-0" aria-hidden="true"></span></a><!---->
            <p class="text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5"><!--[-->
              Nuxt Content <span class="i-ph-medal-duotone h-4 w-4 text-primary pointer-events-none"></span><!--]--></p>
            <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1"><!--[-->Git-based CMS with Markdown
              support.<!--]--></p><!--[--><!--]--><!--]-->
          </div><!---->
        </div>
        <div
          class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
          <!---->
          <div class="flex-1 px-4 py-5 sm:p-6"><!--[--><a
              href="https://devtools.nuxt.com/?utm_source=nuxt_website&amp;utm_medium=modules" rel="noopener noreferrer"
              target="_blank" aria-label="Nuxt DevTools" class="focus:outline-none" tabindex="-1"><span
                class="absolute inset-0" aria-hidden="true"></span></a><!---->
            <p class="text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5"><!--[-->
              Nuxt DevTools <span class="i-ph-medal-duotone h-4 w-4 text-primary pointer-events-none"></span><!--]--></p>
            <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1"><!--[-->Visual tools that help you to know your
              app.<!--]--></p><!--[--><!--]--><!--]-->
          </div><!---->
        </div>
        <div
          class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
          <!---->
          <div class="flex-1 px-4 py-5 sm:p-6"><!--[--><a
              href="https://ui.nuxt.com/?utm_source=nuxt_website&amp;utm_medium=modules" rel="noopener noreferrer"
              target="_blank" aria-label="Nuxt UI" class="focus:outline-none" tabindex="-1"><span class="absolute inset-0"
                aria-hidden="true"></span></a><!---->
            <p class="text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5"><!--[-->
              Nuxt UI <span class="i-ph-medal-duotone h-4 w-4 text-primary pointer-events-none"></span><!--]--></p>
            <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1"><!--[-->Fully styled and customizable
              components.<!--]--></p><!--[--><!--]--><!--]-->
          </div><!---->
        </div><!--]-->
      </div>
    </div>



    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full">
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Today's Money</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              $53,000
              <span class="text-sm text-yellow-600">+55%</span>
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4">
            <TwFeather type="dollar-sign"></TwFeather>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full">
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Today's Users</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              2,300
              <span class="text-sm text-yellow-600">+3%</span>
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4">
            <TwFeather type="aperture"></TwFeather>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full">
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">New Clients</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              +3,462
              <span class="text-sm text-red-600">+2%</span>
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4">
            <TwFeather type="users"></TwFeather>
          </div>
        </div>
    </div>
    <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <div class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full">
        <div class="flex flex-col justify-between">
          <div class="text-gray-500 dark:text-gray-400 font-medium">Sales</div>
          <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
            $103,430
            <span class="text-sm text-yellow-600">+5%</span>
          </div>
        </div>
        <div
          class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4">
          <TwFeather type="shopping-cart"></TwFeather>
        </div>
      </div>
    </div>
    </div>

</div></template>
