<template>
  <nav class="h-20 bg-white min-w-full">
    <div class="md:flex items-center justify-between h-full pl-5 pr-[25px]">
      <div>
        <h2 class="font-bold text-2xl text">Dashboard</h2>
      </div>

      <div class="flex">
        <div class="relative h-10">
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
          class="outline-none focus-outline-none ml-12 text-tgray-300"
        >
          <option value="EN">EN</option>
          <option value="FR">FR</option>
        </select>

        <div class="ml-5">
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
