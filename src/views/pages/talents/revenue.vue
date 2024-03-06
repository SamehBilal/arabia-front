<script>
/**
 * Revenue Analytics component
 */
export default {
  data() {
    return {
      series: [{
        data: [5, 7.5, 8, 10, 12.5, 13.2, 13.5, 15, 18, 20]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [/* '#34c38f', */'#5664d2'],
        grid: {
            borderColor: '#f1f1f1',
        },
        xaxis: {
            categories: ['Frank Dean', 'Eddy Torres', 'Jamison Clark', 'Jewel Buckley', 'Jeffrey Waltz', 'Jefferson Allen', 'Paul Jones', 'Donald Bailey', 'Jimmy Barker', 'Walter Brown'],
        }
    }
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="float-end d-none d-md-inline-block">
        <div class="btn-group mb-2">
          <button type="button" class="btn btn-sm btn-light">Influencers</button>
          <button type="button" class="btn btn-sm btn-light active">Cosplayers</button>
          <button type="button" class="btn btn-sm btn-light">On-Air</button>
        </div>
      </div>
      <h4 class="card-title mb-4">Top talents based on fans</h4>
      <div>
        <apexchart class="apex-charts" height="350" type="bar" dir="ltr" :series="series" :options="chartOptions"></apexchart>
      </div>
    </div>

    <div class="card-body border-top text-center">
      <div class="row">
        <div class="col-sm-4">
          <div class="d-inline-flex">
            <h5 class="me-2">$12,253</h5>
            <div class="text-success">
              <i class="mdi mdi-menu-up font-size-14"></i>2.2 %
            </div>
          </div>
          <p class="text-muted text-truncate mb-0">This month</p>
        </div>

        <div class="col-sm-4">
          <div class="mt-4 mt-sm-0">
            <p class="mb-2 text-muted text-truncate">
              <i class="mdi mdi-circle text-primary font-size-10 me-1"></i> This Year :
            </p>
            <div class="d-inline-flex">
              <h5 class="mb-0 me-2">$ 34,254</h5>
              <div class="text-success">
                <i class="mdi mdi-menu-up font-size-14"></i>2.1 %
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="mt-4 mt-sm-0">
            <p class="mb-2 text-muted text-truncate">
              <i class="mdi mdi-circle text-success font-size-10 me-1"></i> Previous Year :
            </p>
            <div class="d-inline-flex">
              <h5 class="mb-0">$ 32,695</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>