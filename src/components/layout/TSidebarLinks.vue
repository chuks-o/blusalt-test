<template>
  <ul class="flex flex-col px-[13px]">
    <router-link
      v-for="(item, index) in sidebarLinks"
      :key="index"
      :to="{ name: item.name }"
      v-slot="{ href, navigate, isExactActive }"
      custom
    >
      <li
        :class="[
          isExactActive &&
            'bg-white bg-opacity-10 text-white border-r-[3px] border-white',
        ]"
        class="flex justify-between items-center px-2 text-white h-9 mb-[28px] text-sm rounded-[5px]"
      >
        <a :href="href" @click="navigate" class="flex w-full">
          <component :is="item.icon"></component>
          <span class="text-sm ml-4 opacity-60">{{ item.title }}</span>
        </a>

        <div
          v-if="item.children.length > 0"
          class="flex items-center justify-center h-5 w-5 flex-shrink-0 rounded-full bg-white bg-opacity-40"
        >
          <chevron-right-icon />
        </div>
      </li>
    </router-link>
  </ul>
</template>

<script>
import AuditTrail from "../../assets/icons/AuditTrail.vue";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon.vue";
import HomeIcon from "../../assets/icons/HomeIcon.vue";
import KYCIcon from "../../assets/icons/KYCIcon.vue";
import ReportIcon from "../../assets/icons/ReportIcon.vue";
import RequestIcon from "../../assets/icons/RequestIcon.vue";
import SettingIcon from "../../assets/icons/SettingIcon.vue";
import UsersIcon from "../../assets/icons/UsersIcon.vue";

export default {
  components: { ChevronRightIcon },
  setup() {
    const sidebarLinks = [
      {
        title: "Dashboard",
        icon: HomeIcon,
        name: "Home",
        children: [],
      },
      {
        title: "Requests",
        icon: RequestIcon,
        name: "Requests",
        children: [],
      },
      {
        title: "KYCs",
        icon: KYCIcon,
        name: "KYC",
        children: [],
      },
      {
        title: "Reports",
        icon: ReportIcon,
        name: "Reports",
        children: [],
      },
      {
        title: "Audit Trail",
        icon: AuditTrail,
        name: "AuditTrail",
        children: ["Child one"],
      },
      {
        title: "Users",
        icon: UsersIcon,
        name: "Users",
        children: [],
      },
      {
        title: "Settings",
        icon: SettingIcon,
        name: "Settings",
        children: [],
      },
    ];

    return { sidebarLinks };
  },
};
</script>

<style></style>
