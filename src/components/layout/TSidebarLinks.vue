<template>
  <ul class="flex flex-col px-[13px]">
    <router-link
      v-for="(item, index) in sidebarLinks"
      :key="index"
      :to="{ name: item.name }"
      v-slot="{ href, navigate, isActive }"
      exact
    >
      <!-- :class="[
          item.name === route.name &&
            'bg-white bg-opacity-10 text-white border-r-[3px] border-white',
        ]" -->
      <li
        class="flex items-center px-3 text-white h-9 mb-[28px] text-sm rounded-[5px]"
      >
        <a :active="isActive" :href="href" @click="navigate" class="flex">
          <component :is="item.icon"></component>
          <span class="text-sm ml-4 opacity-60">{{ item.title }}</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
import AuditTrail from "../../assets/icons/AuditTrail.vue";
import HomeIcon from "../../assets/icons/HomeIcon.vue";
import KYCIcon from "../../assets/icons/KYCIcon.vue";
import ReportIcon from "../../assets/icons/ReportIcon.vue";
import RequestIcon from "../../assets/icons/RequestIcon.vue";
import SettingIcon from "../../assets/icons/SettingIcon.vue";
import UsersIcon from "../../assets/icons/UsersIcon.vue";

export default {
  setup() {
    const sidebarLinks = [
      {
        title: "Dashboard",
        icon: HomeIcon,
        name: "Home",
      },
      {
        title: "Requests",
        icon: RequestIcon,
        name: "Requests",
      },
      {
        title: "KYCs",
        icon: KYCIcon,
        name: "NotFound",
      },
      {
        title: "Reports",
        icon: ReportIcon,
        name: "NotFound",
      },
      {
        title: "Audit Trail",
        icon: AuditTrail,
        name: "NotFound",
      },
      {
        title: "Users",
        icon: UsersIcon,
        name: "NotFound",
      },
      {
        title: "Settings",
        icon: SettingIcon,
        name: "NotFound",
      },
    ];

    return { sidebarLinks };
  },
};
</script>

<style></style>
