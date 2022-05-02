<template>
  <div class="relative lg:flex w-full overflow-x-hidden">
    <!-- sidebar -->
    <div
      class="lg:fixed hidden lg:block lg:h-screen lg:top-0 lg:bottom-0 lg:left-0"
    >
      <t-sidebar />
    </div>

    <main class="lg:ml-[253px] w-full">
      <!-- navbar -->
      <t-navbar />

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

export default {
  components: { TSidebar, TNavbar },
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* margin: 0;
  padding: 0; */
}
</style>
