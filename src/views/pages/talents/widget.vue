<script>
import influencer from "@/assets/images/brands/video.png";
import cosplayer from "@/assets/images/brands/cosplay.png";
import onAir from "@/assets/images/brands/jobs.png";
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "On-Air Talents",
          icon: "ri-stack-line",
          image: onAir,
          value: "49",
          subvalue: " 2.4% ",
          plusvalue: " 0 ",
          href: "on-air"
        },
        {
          title: "Influencer Talents",
          icon: "ri-store-2-line",
          image: influencer,
          value: "22",
          subvalue: " 2.4% ",
          plusvalue: " 0 ",
          href: "influencers"
        },
        {
          title: "Cosplayer Talents",
          icon: "ri-briefcase-4-line",
          image: cosplayer,
          value: "12",
          subvalue: " 2.4% ",
          plusvalue: " 0 ",
          href: "cosplayers"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-4" v-for="(data, index) in statData" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-1 overflow-hidden">
              <p class="text-truncate font-size-14 mb-2">{{data.title}}</p>
              <h4 class="mb-0">{{data.value}}</h4>
            </div>
            <div class="ms-auto text-primary">
              <!-- <i :class="`${data.icon} font-size-24`"></i> -->
              <img :src="`${data.image}`" alt="{{data.title}}" height="42px">
            </div>
          </div>
        </div>

        <div class="card-body border-top py-3">
          <div class="text-truncate">
            <!-- <span class="text-muted ms-2">From previous period</span> -->
            <router-link :to="`${data.href}`">
              <BTn class="btn btn-primary btn-sm btn-lg" block > Check {{data.title}} </BTn>
            </router-link>

            <!-- <span class="badge float-end bg-success-subtle text-success font-size-11">
              <i class="mdi mdi-menu-up"></i>
              {{data.subvalue}}
            </span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>