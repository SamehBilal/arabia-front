<script>
import Layout from "../../../layouts/front.vue";
import PageHeader from "../sections/page-header.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            title: "Find The Best Talent",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Talents",
                    active: true
                },
            ],
            desc: "",
        };
    },
};

</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" :desc="desc" />
        <div class="page-overlap">
          <img class="page-vector-stroke" src="https://c.animaapp.com/SvVqsHAI/img/vector-3--stroke-.png" />
          <img class="page-BG" src="https://c.animaapp.com/SvVqsHAI/img/bg.png" />
          <div class="page-group"><img class="page-img" src="https://c.animaapp.com/SvVqsHAI/img/group-103@3x.png" /></div>
          <img class="page-group-2" src="https://c.animaapp.com/SvVqsHAI/img/group-1000003082.png" />
          <img class="page-group-3" src="https://c.animaapp.com/SvVqsHAI/img/group-1000003083.png" />
          <img class="page-group-4" src="https://c.animaapp.com/SvVqsHAI/img/group-1000003178.png" />
          <img class="page-content" src="https://c.animaapp.com/SvVqsHAI/img/content.png" />
          <div class="page-div">
            <router-link to="/influencers-all">
            <img class="page-discover-the-list" src="https://c.animaapp.com/SvVqsHAI/img/discover-the-list@2x.png" />
          </router-link>
            <div class="page-vuesax-bold-arrow-up-wrapper">
              <img
                class="page-vuesax-bold-arrow-up"
                src="https://c.animaapp.com/SvVqsHAI/img/vuesax-bold-arrow-up-6@2x.png"
              />
            </div>
          </div>
          <div class="page-group-wrapper">
            <div class="page-group-5">
              <router-link to="/on-air-all">
                <img class="page-meet-the-faces" src="https://c.animaapp.com/SvVqsHAI/img/meet-the-faces@2x.png" />
              </router-link>
              <div class="page-img-wrapper">
                <img
                  class="page-vuesax-bold-arrow-up"
                  src="https://c.animaapp.com/SvVqsHAI/img/vuesax-bold-arrow-up-6@2x.png"
                />
              </div>
            </div>
          </div>
          <img class="page-dots" src="https://c.animaapp.com/SvVqsHAI/img/dots-2@2x.png" />
          
        </div>
        <div class="page-CTA">
          <div class="page-overlap-4">
            <div class="page-BG-2">
              <div class="page-overlap-group-5">
                <div class="page-overlap-5">
                  <img class="page-dots-2" src="https://c.animaapp.com/SvVqsHAI/img/dots@2x.png" />
                  <div class="page-button">
                    <img class="page-OUR-WORK" src="https://c.animaapp.com/SvVqsHAI/img/our-work@2x.png" />
                    <div class="page-group-38">
                      <img
                        class="page-vuesax-bold-arrow-up"
                        src="https://c.animaapp.com/SvVqsHAI/img/vuesax-bold-arrow-up-7@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <img class="page-dots-3" src="https://c.animaapp.com/SvVqsHAI/img/dots-1@2x.png" />
                <img
                  class="page-driven-by-our"
                  src="https://c.animaapp.com/SvVqsHAI/img/driven-by-our-passion-for-the-industry--and-our-team-s-creativit.png"
                />
              </div>
            </div>
            <img class="page-title" src="https://c.animaapp.com/SvVqsHAI/img/title.png" />
            <img class="page-group-39" src="https://c.animaapp.com/SvVqsHAI/img/group-1000002945@2x.png" />
          </div>
        </div>
    </Layout>
</template>