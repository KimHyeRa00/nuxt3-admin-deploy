<script setup lang="ts">
import { TwButton, TwDropdownMenu, TwFeather } from "vue3-tailwind";
import { useSidebarStore } from "~~/store/sidebar";

const sidebarStore = useSidebarStore();
const animationOpenClose = useAnimationOpenClose();

const router = useRouter();

const logout = () => {
  router.push("/login");
};
</script>
<template>
  <header class="md:flex w-full text-gray-200 border-spacing-1 border-t-0  bg-white px-2 md:sticky md:top-0 z-20">
 
  
    <div class="h-14 flex items-center w-full justify-between px-4 md:px-10">
      <div class="">
        <!-- TODO: Add searchbar -->
      </div>
      <div class="">
        <TwDropdownMenu align="right" width="30">
          <template #trigger>
            <button>
              user
            </button>
          </template>

          <template #content>
            <NuxtLink to="/profile">
              <button
                class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">
                <div class="flex gap-2 items-center">
                  <TwFeather type="user" />
                  <div class="">Profile</div>
                </div>
              </button>
            </NuxtLink>
            <TwButton @click="logout" variant="none" icon="log-out"
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">
              Logout
            </TwButton>
          </template>
        </TwDropdownMenu>
      </div>
    </div>
  </header>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease-in-out;
  overflow: hidden;
}
</style>
