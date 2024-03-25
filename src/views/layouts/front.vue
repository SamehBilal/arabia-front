<script>
// import router from "@/router";
import Header from "../pages/website/sections/header.vue";
import MainSection from "../pages/website/sections/main-section.vue";
import Footer from "../pages/website/sections/footer.vue";
import Partners from "../pages/website/sections/partners.vue";
import TopFooter from "../pages/website/sections/top-footer.vue";

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
    Background: {
      type: String,
      default: '',
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
    <div class="element-home-page influencers esport talents our-services about-us on-air 
    influencer-marketing influencer-cel talent-management case-studies case-study-page contact-us element-not-found">
      <div class="element-home-page-v influencers-v privacy-policy terms-conditions">
        <Header :header="isHeaderMultiple" :Background="Background"></Header>
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
/* @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'; */
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
@import '@/assets/scss/webiste.scss';

@import 'https://code.jquery.com/jquery-3.2.1.slim.min.js';
@import 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> */
/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
 */
</style>