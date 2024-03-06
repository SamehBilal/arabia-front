<script>
import { VueEcharts } from "vue3-echarts";

import {
  doughnutChart,
} from "./data";

export default {
  components: {  VueEcharts },
  data() {
    return {
      //
    };
  },
  computed: {
    option() {
      return {
        doughnutChart: doughnutChart,
      };
    },
  },
};
</script>

<template>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Doughnut Chart</h4>
            <vue-echarts :option="option.doughnutChart" style="height: 300px" />
          </div>
        </div>
      </div>
    </div>
    
</template>

<style lang="scss" scoped>
.echarts {
  height: 350px;
  width: 558px;
}
</style>