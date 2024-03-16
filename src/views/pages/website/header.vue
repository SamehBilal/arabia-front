<script>
export default {
    components: {},
    props: {
        header: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<template>
  <div class="influencer-overlap-6">
    <img class="influencer-frame-7" src="@/assets/img/frame-3.png" />
  </div>
  <div class="group-71">
    <div class="group-75">
      <div class="language-selections">
        <img class="img-2" src="@/assets/img/frame-1.svg" />
        <div class="text-wrapper-46">English</div>
        <img class="frame-10" src="@/assets/img/frame-7.svg" />
      </div>
      <div class="group-82">
        <div class="toggle">
          <div class="overlap-group-14">
            <div class="rectangle-23"></div>
            <img class="oval" src="@/assets/img/oval-1.svg" />
          </div>
        </div>
        <div class="text-wrapper-47">Lite</div>
        <div class="text-wrapper-48">Dark</div>
      </div>
      <div class="group-76">
        <div class="group-77">
          <img class="group-78" src="@/assets/img/group-13325.svg" />
          <img class="group-79" src="@/assets/img/group-13326.svg" />
          <img class="tiktok-2" src="@/assets/img/tiktok.svg" />
          <img class="group-80" src="@/assets/img/group-13324.svg" />
          <img class="youtube-2" src="@/assets/img/youtube.svg" />
          <img class="group-81" src="@/assets/img/group-13327.svg" />
        </div>
      </div>
    </div>
    <header class="header" >
      <div class="navbar" v-if="header">
        <router-link to="front">
          <div class="text-wrapper-42">Home</div>
        </router-link>
        <router-link to="services">
        <div class="text-wrapper-43">Services</div>
      </router-link>
        <div class="group-72">
          <router-link to="talents">
            <div class="text-wrapper-42 active">Talents</div>
          </router-link>
          <img class="frames-9" src="@/assets/img/frame-2.svg" />
        </div>
        <router-link to="case-studies">
        <div class="text-wrapper-44">Case Studies</div>
      </router-link>
      <router-link to="about-us">
        <div class="text-wrapper-45">About Us</div>
      </router-link>
        <div class="group-73">
          <a href="#" class="text-wrapper-42">Branches</a>
          <img class="frame-9" src="@/assets/img/frame-2.svg" />
        </div>
      </div>
      <router-link to="front">
      <img class="white-2" src="@/assets/img/white-1.png" />
    </router-link>
      <div class="group-74" v-if="header">
        <router-link to="contact-us">
        <div class="overlap-group-8">
          <div class="text-wrapper-23">Let’s Talk</div>
          <div class="group-18">
            <div class="group-19">
              <img class="vuesax-bold-arrow-up-3" src="@/assets/img/vuesax-bold-arrow-up-2.svg" />
            </div>
          </div>
        </div>
      </router-link>
      </div>
      <div class="esport-menus" v-if="header === false">
      <router-link to="on-air-all">

        <div class="esport-on-air-talents">On-air Talents</div>
        </router-link>
      <router-link to="influencers-all">

        <div class="esport-text-wrapper-24">More Influencers</div>
        </router-link>
      </div>
    </header>
  </div>
</template>