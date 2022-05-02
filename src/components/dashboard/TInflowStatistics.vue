<template>
  <div class="bg-white rounded-xl shadow-card-shadow p-5 h-96">
    <h3 class="font-semibold text-lg">User Inflow Statistics</h3>
    <div class="">
      <!-- <CustomChart /> -->
      <Bar :styles="myStyles" />
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { computed } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// import CustomChart from "../../components/chart/customChart";

export default {
  components: { Bar },

  setup() {
    const myStyles = computed(() => {
      return {
        height: "200px",
        position: "relative",
      };
    });

    return { myStyles };
  },
};
</script>

<style></style>
