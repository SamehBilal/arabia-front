<script>
// import router from "@/router";
import Header from "../pages/website/header.vue";
import MainSection from "../pages/website/main-section.vue";
import Footer from "../pages/website/footer.vue";
import Partners from "../pages/website/partners.vue";
import TopFooter from "../pages/website/top-footer.vue";

export default {
  components: {
    Header,
    MainSection,
    Footer,
    Partners,
    TopFooter
  },
  props: {
    isHeaderMultiple: {
      type: Boolean,
      default: true,
    },
    isFooterMultiple: {
      type: Boolean,
      default: true,
    },
    partners: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    { }
  },
  computed: {
    //
  },
  methods: {},
  mounted() {
    // document.documentElement.setAttribute("dir", "rtl");
  }
};
</script>

<template>
  <!-- <div class="container"> -->
    <div class="element-home-page influencers esport talents our-services">
      <div class="element-home-page-v influencers-v">
        <Header :header="isHeaderMultiple"></Header>
        <slot />
        <Partners :partners="partners"></Partners>
        <Footer :footer="isFooterMultiple"></Footer>
        <!-- <MainSection></MainSection> -->
        <!-- <vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </vertical>

    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal> -->
      </div>
    </div>
  <!-- </div> -->
</template>


<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
@import '@/assets/scss/webiste.scss';
</style>