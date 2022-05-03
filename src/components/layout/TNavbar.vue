<template>
  <nav class="h-20 bg-white min-w-full">
    <div class="flex items-center justify-between h-full pl-5 pr-[25px]">
      <div class="flex">
        <button
          class="lg:hidden outline-none focus:outline-none mr-3"
          @click="$emit('toggleMobileNav')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        <h2 class="font-bold text-2xl text">Dashboard</h2>
      </div>

      <div class="flex">
        <div class="relative h-10 hidden md:block">
          <input
            class="rounded-[8px] bg-tgray-100 h-full pl-10 pr-4 text-sm outline-none focus:outline-none placeholder-text-tgray-200"
            type="text"
            placeholder="Enter keywords ..."
          />
          <div class="absolute left-2 top-2 bottom-0">
            <search-icon />
          </div>
        </div>
        <select
          name="language"
          id=""
          class="outline-none focus-outline-none ml-12 text-tgray-300 hidden md:block"
        >
          <option value="EN">EN</option>
          <option value="FR">FR</option>
        </select>

        <div class="ml-5 hidden md:block">
          <toggle-theme-icon />
        </div>

        <div class="ml-4">
          <notification-icon />
        </div>

        <div class="ml-4">
          <img
            src="../../assets/avatar.png"
            class="rounded-full h-9 w-9"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NotificationIcon from "@/assets/icons/NotificationIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import ToggleThemeIcon from "@/assets/icons/ToggleThemeIcon.vue";

export default {
  components: { SearchIcon, NotificationIcon, ToggleThemeIcon },
};
</script>

<style></style>
