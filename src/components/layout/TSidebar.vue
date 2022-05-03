<template>
  <aside
    class="flex flex-col pt-[30px] pb-[110px] w-[80%] md:w-[253px] min-h-screen bg-primary-300 overflow-y-auto"
  >
    <div class="flex justify-center mb-[37px] border-b border-[#ffffff1a] mx-5">
      <div class="pb-4">
        <logo />
      </div>
    </div>

    <div class="">
      <t-sidebar-links />
    </div>

    <div class="mt-auto px-5">
      <div
        class="flex items-center bg-white bg-opacity-10 rounded-[10px] p-[10px]"
      >
        <img src="../../assets/avatar.png" class="rounded-full" alt="Avatar" />
        <div class="ml-2 text-white">
          <p class="font-semibold text-sm my-0">Nafisa Sh.</p>
          <p class="text-[10px] text-white text-opacity-50 font-medium my-0">
            Support manager
          </p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Logo from "../../assets/Logo.vue";
import TSidebarLinks from "./TSidebarLinks.vue";

export default {
  components: { Logo, TSidebarLinks },
};
</script>

<style></style>
