<template>
  <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
    <div
      v-for="(item, index) in statistics"
      :key="index"
      class="bg-white rounded-[10px] shadow-card-shadow pl-4 py-5 h-[123px]"
    >
      <div class="flex items-start">
        <div
          class="flex items-center justify-center bg-opacity-10 rounded-full w-[60px] h-[60px]"
          :class="item.background"
        >
          <component :is="item.icon"></component>
        </div>

        <div class="ml-2">
          <p class="text-tdark-100 text-2xl font-semibold">
            {{ item.figure }}
          </p>
          <p class="text-tgray-400 text-base font-normal mb-4 leading-5">
            {{ item.type }}
          </p>

          <div class="flex text-sm font-normal">
            <div class="flex">
              <component :is="trendingComp(item.trending)"></component>
              <span
                class="ml-1 text-sm"
                :class="{
                  'text-green-500': item.trending,
                  'text-red-500': !item.trending,
                }"
              >
                {{ item.percentage.toFixed(2) }}%
              </span>
            </div>
            <span class="text-tgray-500 ml-2">Last month</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApprovedRequest from "../../assets/icons/ApprovedRequest.vue";
import PendingRequest from "../../assets/icons/PendingRequest.vue";
import TotalRequest from "../../assets/icons/TotalRequest.vue";
import TotalUser from "../../assets/icons/TotalUser.vue";
import TrendDown from "../../assets/icons/TrendDown.vue";
import TrendUp from "../../assets/icons/TrendUp.vue";

export default {
  setup() {
    const statistics = [
      {
        icon: PendingRequest,
        background: "bg-tblue-100",
        figure: "1478 286",
        type: "Pending Requests",
        percentage: 4.07,
        trending: true,
      },
      {
        icon: ApprovedRequest,
        background: "bg-tyellow-100",
        figure: "478 520",
        type: "Approved Requests",
        percentage: 0.24,
        trending: true,
      },
      {
        icon: TotalRequest,
        background: "bg-tpurple-100",
        figure: "154 872",
        type: "Total Requests",
        percentage: 1.64,
        trending: false,
      },
      {
        icon: TotalUser,
        background: "bg-tgreen-100",
        figure: "167",
        type: "Total Users",
        percentage: 0.0,
        trending: false,
      },
    ];

    const trendingComp = (tradingValue) => {
      return tradingValue ? TrendUp : TrendDown;
    };

    return { statistics, trendingComp };
  },
};
</script>

<style></style>
