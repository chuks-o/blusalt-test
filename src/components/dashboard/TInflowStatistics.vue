<template>
  <div class="bg-white rounded-xl shadow-card-shadow p-5 h-auto">
    <div class="md:flex items-start justify-between">
      <h3 class="font-semibold text-lg mb-1">User Inflow Statistics</h3>
      <div class="flex md:px-10 space-x-8 mb-4 md:mb-0">
        <div>
          <p class="flex text-xs text-tgray-700 mb-2">
            <span
              class="h-3 w-3 mr-2 bg-tpurple-100 rounded-full flex flex-shrink-0"
            ></span>
            <span> AGENTS </span>
          </p>
          <p class="text-tdark-100 font-medium">475 273</p>
        </div>

        <div>
          <p class="flex text-xs text-tgray-700 mb-2">
            <span
              class="h-3 w-3 mr-2 bg-tgreen-100 rounded-full flex flex-shrink-0"
            ></span>
            <span> USERS </span>
          </p>
          <p class="font-medium text-tdark-100">782 396</p>
        </div>
      </div>
    </div>

    <div id="chart">
      <apexchart
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      >
      </apexchart>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },

  setup() {
    const series = [
      {
        name: "PRODUCT A",
        data: [25, 35, 23, 60, 22, 45, 25],
      },
      {
        name: "PRODUCT B",
        data: [15, 25, 20, 40, 25, 15, 19],
      },
    ];

    const chartOptions = {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#8e8da4",
          },
          offsetX: 0,
        },

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      xaxis: {
        type: "category",
        categories: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      title: {
        text: "Nov - July",
        align: "left",
        offsetX: -9,
        style: {
          fontSize: "14px",
          fontWeight: "normal",
          fontFamily: undefined,
          color: "#B9B9B9",
        },
      },
      tooltip: {
        shared: true,
      },
      // legend: {
      //   // show: true,
      //   position: "top",
      //   horizontalAlign: "right",
      //   offsetX: -10,
      // },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        borderColor: "#EEEEEE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
      },
    };

    return { series, chartOptions };
  },
});
</script>

<style></style>
