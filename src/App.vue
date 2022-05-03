<template>
  <div class="relative lg:flex w-full overflow-x-hidden">
    <!-- sidebar -->
    <div
      class="lg:fixed hidden lg:block lg:h-screen lg:top-0 lg:bottom-0 lg:left-0"
    >
      <TSidebar />
    </div>

    <div
      :class="[
        sidebarOpen ? '-translate-x-0' : '-translate-x-full',
        'fixed lg:hidden z-40 w-full h-full transform transition duration-150 ease-in-out bg-black bg-opacity-40',
      ]"
      @click="toggleSidebar"
    >
      <TSidebar />
    </div>

    <main class="lg:ml-[253px] w-full">
      <!-- navbar -->
      <TNavbar @toggle-mobile-nav="toggleSidebar" />

      <!-- view -->
      <div class="px-5 py-10 bg-tgray-100">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import TNavbar from "@/components/layout/TNavbar.vue";
import TSidebar from "@/components/layout/TSidebar.vue";
import { ref } from "vue";

export default {
  components: { TSidebar, TNavbar },
  name: "App",

  setup() {
    const sidebarOpen = ref(false);
    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    return { sidebarOpen, toggleSidebar };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
