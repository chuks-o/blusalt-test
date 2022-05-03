<template>
  <div class="bg-primary-300 w-full p-2 text-white rounded-[10px]">
    <div id="chart">
      <apexchart
        type="bar"
        height="300"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>

    <div class="mt-9 pl-4 pb-4">
      <p class="font-bold text-base text-white">New Users</p>
      <p class="text-sm">
        <span class="font-bold">(+23%)</span>
        <span> than last week</span>
      </p>
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
        name: "Net Profit",
        data: [440, 500, 570, 650, 710],
      },
    ];

    const chartOptions = {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        labels: {
          style: {
            colors: "#FFFFFF",
            fontSize: "10px",
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#FFFFFF",
            fontSize: "10px",
            fontWeight: 600,
          },
        },
        // title: {
        //   text: "$ (thousands)",
        // },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      colors: "#FFFFFF",
      grid: {
        show: true,
        borderColor: "rgba(255,255,255,0.2)",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
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

    return {
      series,
      chartOptions,
    };
  },
});
</script>

<style></style>
