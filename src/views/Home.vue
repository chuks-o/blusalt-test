<template>
  <div>
    <t-statistics-card />
    <div class="xl:grid grid-cols-4 mt-10 gap-x-5 mb-[27px]">
      <div class="lg:col-span-3 mb-5 xl:mb-0">
        <t-inflow-statistics />
      </div>

      <div class="xl:col-span-1 w-full">
        <t-new-user-statistics />
      </div>
    </div>
    <t-recent-requests />
  </div>
</template>

<script>
// @ is an alias to /src
import TStatisticsCard from "@/components/dashboard/TStatisticsCard.vue";
import TRecentRequests from "@/components/dashboard/TRecentRequests.vue";
import TInflowStatistics from "@/components/dashboard/TInflowStatistics.vue";
import TNewUserStatistics from "@/components/dashboard/TNewUserStatistics.vue";

export default {
  name: "Home",
  components: {
    TStatisticsCard,
    TRecentRequests,
    TInflowStatistics,
    TNewUserStatistics,
  },
};
</script>
