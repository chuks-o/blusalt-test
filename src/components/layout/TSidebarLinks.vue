<template>
  <ul class="flex flex-col px-[13px]">
    <li
      class="flex items-center px-3 text-white h-9 mb-[28px] text-sm rounded-[5px]"
      v-for="(item, index) in sidebarLinks"
      :key="index"
    >
      <router-link to="/">
        <a href="#" class="flex">
          <component :is="item.icon"></component>
          <span class="text-sm ml-4 opacity-60">{{ item.title }}</span>
        </a>
      </router-link>
    </li>
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
        name: "",
      },
      {
        title: "Requests",
        icon: RequestIcon,
        name: "",
      },
      {
        title: "KYCs",
        icon: KYCIcon,
        name: "",
      },
      {
        title: "Reports",
        icon: ReportIcon,
        name: "",
      },
      {
        title: "Audit Trail",
        icon: AuditTrail,
        name: "",
      },
      {
        title: "Users",
        icon: UsersIcon,
        name: "",
      },
      {
        title: "Settings",
        icon: SettingIcon,
        name: "",
      },
    ];

    return { sidebarLinks };
  },
};
</script>

<style></style>
