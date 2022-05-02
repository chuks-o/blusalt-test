<template>
  <div>
    <div>
      <t-statistics-card />
    </div>
    <div class="xl:grid grid-cols-4 mt-10 gap-x-5 mb-[27px]">
      <div class="lg:col-span-3 mb-5 xl:mb-0">
        <t-inflow-statistics />
      </div>

      <div
        class="xl:col-span-1 bg-primary-300 h-96 w-full rounded-[10px]"
      ></div>
    </div>
    <t-recent-requests />
  </div>
</template>

<script>
// @ is an alias to /src
import TStatisticsCard from "@/components/dashboard/TStatisticsCard.vue";
import TRecentRequests from "@/components/dashboard/TRecentRequests.vue";
import TInflowStatistics from "@/components/dashboard/TInflowStatistics.vue";

export default {
  name: "Home",
  components: {
    TStatisticsCard,
    TRecentRequests,
    TInflowStatistics,
  },
};
</script>
