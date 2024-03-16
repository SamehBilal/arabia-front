<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "../../pages/website/page-header.vue";

/**
 * Shops Component
 */
export default {
  components: { Layout,PageHeader },
  data() {
    return {
      title: "Popular Influencers",
      items: [
        {
          text: "Homepage"
        },
        {
          text: "Talents",
        },
        {
          text: "Influencers",
          active: true
        }
      ],
      desc: "We pair your brand up with the best social media influencers and content creators available to promote your brand and get you the exposure you want in the region.",
    };
  },
  methods: {
    tooggleGender() {
      document.getElementById('filter-gender').classList.toggle("div-active");
    },
  },
};

</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" :desc="desc" />
    <div class="influencer-overlap-3">
      <div class="influencer-filter-pre-bar"></div>
      <div class="influencer-frame">
        <img class="influencer-img-2" src="@/assets/img/material-symbols-filter-list-rounded.png" />
        <div class="influencer-frame-2">
          <div class="influencer-text-wrapper-6">Type</div>
          <div class="influencer-text-wrapper-7">Exclusive</div>
          <div class="influencer-group-8">
            <div class="influencer-vuesax-bold-arrow-up-wrapper">
              <img class="influencer-vuesax-bold-arrow-up" src="@/assets/img/vuesax-bold-arrow-up-1.png" />
            </div>
          </div>
        </div>
        <div class="influencer-frame-3" @click="tooggleGender()">
          <div class="influencer-text-wrapper-8">Gender</div>
          <div class="influencer-text-wrapper-9">All</div>
          <div class="influencer-group-9">
            <div class="influencer-group-10"><img class="influencer-vuesax-bold-arrow-up"
                src="@/assets/img/vuesax-bold-arrow-up-1.png" /></div>
          </div>
        </div>
        <img class="influencer-img-2" src="@/assets/img/grommet-icons-power-reset.png" />
      </div>
      <div class="influencer-frame-4" id="filter-gender">
        <div class="influencer-frame-5">
          <img class="influencer-img-3" src="@/assets/img/ic-sharp-radio-button-checked.png" />
          <div class="influencer-text-wrapper-10">All</div>
        </div>
        <div class="influencer-frame-5">
          <img class="influencer-img-3" src="@/assets/img/ic-baseline-radio-button-unchecked.png" />
          <div class="influencer-text-wrapper-11">Male</div>
        </div>
        <div class="influencer-frame-5">
          <img class="influencer-img-3" src="@/assets/img/ic-baseline-radio-button-unchecked.png" />
          <div class="influencer-text-wrapper-11">Female</div>
        </div>
      </div>
    </div>
    <div class="influencer-group-12">
      <router-link to="influencer-single">
      <div class="influencer-group-wrapper">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-4"
                src="@/assets/img/rectangle-39-11.png" /></div>
          </div>
          <div class="influencer-group-3">
            <div class="influencer-text-wrapper-5">Rima</div>
            <div class="influencer-group-4">
              <div class="influencer-element">11m</div>
              <img class="influencer-inner-plugin-iframe" src="@/assets/img/inner-plugin-iframe.png" />
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="influencer-single">
      <div class="influencer-group-14">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-5"
                src="@/assets/img/rectangle-39-10.png" /></div>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="influencer-single">
      <div class="influencer-group-15">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-5"
                src="@/assets/img/rectangle-39-9.png" /></div>
          </div>
        </div>
      </div>
    </router-link>
      <router-link to="influencer-single">
      <div class="influencer-group-16">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-5"
                src="@/assets/img/rectangle-39-8.png" /></div>
          </div>
        </div>
      </div>
    </router-link>
    </div>
    <div class="influencer-group-12">
      <router-link to="influencer-single">
      <div class="influencer-group-wrapper">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-4"
                src="@/assets/img/rectangle-39-11.png" /></div>
          </div>
          <div class="influencer-group-3">
            <div class="influencer-text-wrapper-5">Rima</div>
            <div class="influencer-group-4">
              <div class="influencer-element">11m</div>
              <img class="influencer-inner-plugin-iframe" src="@/assets/img/inner-plugin-iframe.png" />
            </div>
          </div>
        </div>
      </div>
    </router-link>
      <div class="influencer-group-14">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-5"
                src="@/assets/img/rectangle-39-10.png" /></div>
          </div>
        </div>
      </div>
      <div class="influencer-group-15">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-5"
                src="@/assets/img/rectangle-39-9.png" /></div>
          </div>
        </div>
      </div>
      <div class="influencer-group-16">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-13"><img class="influencer-rectangle-5"
                src="@/assets/img/rectangle-39-8.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="influencer-group-17">
      <div class="influencer-group-wrapper">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-7"><img class="influencer-rectangle-4" src="@/assets/img/rectangle-39-3.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="influencer-group-14">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-18">
              <div class="influencer-iconex-light-up-wrapper">
                <img class="influencer-iconex-light-up" src="@/assets/img/iconex-light-up-right-circle.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="influencer-group-15">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-7"><img class="influencer-rectangle-5" src="@/assets/img/rectangle-39-1.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="influencer-group-16">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-7"><img class="influencer-rectangle-5" src="@/assets/img/rectangle-39.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="influencer-group-19">
      <div class="influencer-group-wrapper">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-7"><img class="influencer-rectangle-4" src="@/assets/img/rectangle-39-3.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="influencer-group-14">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-18">
              <div class="influencer-iconex-light-up-wrapper">
                <img class="influencer-iconex-light-up" src="@/assets/img/iconex-light-up-right-circle.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="influencer-group-15">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-7"><img class="influencer-rectangle-5" src="@/assets/img/rectangle-39-1.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="influencer-group-16">
        <div class="influencer-group-2">
          <div class="influencer-group-6">
            <div class="influencer-group-7"><img class="influencer-rectangle-5" src="@/assets/img/rectangle-39.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="influencer-frame-6">
      <button class="influencer-button">Load More</button>
      <div class="influencer-group-20">
        <div class="influencer-group-21"><img class="influencer-vuesax-bold-arrow-up-2"
            src="@/assets/img/vuesax-bold-arrow-up-5.png" /></div>
      </div>
    </div>
    <router-link to="on-air-all">
    <div class="influencer-overlap-wrapper">
      <div class="influencer-overlap">
        <div class="influencer-rectangle-3"></div>
        <img class="influencer-mask-group" src="@/assets/img/inf-mask-group.png" />
        <img class="influencer-caster" src="@/assets/img/caster.png" />
        <p class="influencer-arabia-talents">Arabia Talents Features Also Professional On-air Esports Talents.</p>
        <p class="influencer-p">Hosts - Casters - Analysts</p>
      </div>
    </div>
  </router-link>
    <!-- <img class="influencer-dots" src="@/assets/img/inf-dots.png" />
        <img class="influencer-dots-2" src="@/assets/img/inf-dots-1.png" /> -->
  </Layout>
</template>