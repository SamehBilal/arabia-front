<script>
export default {
    components: {},
    props: {
        footer: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<template>
    <div class="overlap-12" v-if="footer">
        <div class="group-16">
          <div class="overlap-13">
            <div class="shapes">
              <div class="overlap-group-7">
                <img class="element-2" src="@/assets/img/1.png" /> <img class="element-3" src="@/assets/img/2.png" />
              </div>
              <div class="element-4"></div>
              <img class="element-5" src="@/assets/img/6.png" />
              <div class="element-6"></div>
              <div class="element-7"></div>
            </div>
            <p class="we-ve-helped-brands">
              We&#39;ve helped brands of all kinds and businesses of every size grow their online presense
            </p>
            <p class="text-wrapper-22">Are you ready to start your project? Contact us today and get started!</p>
            <div class="group-17">
              <router-link to="contact-us">
              <div class="overlap-group-8">
                <div class="text-wrapper-23">Let’s Talk</div>
                <div class="group-18">
                  <div class="group-19">
                    <img class="vuesax-bold-arrow-up-3" src="@/assets/img/vuesax-bold-arrow-up-8.svg" />
                  </div>
                </div>
              </div>
            </router-link>
            </div>
          </div>
        </div>
        <img class="group-20" src="@/assets/img/group.png" />
      </div>
    <div class="group-21" >
        <div class="overlap-14">
            <div class="group-23">
              <router-link to="talents">
                <div class="text-wrapper-24">Find Talent</div>
              </router-link>
                <router-link to="case-studies">
                <div class="text-wrapper-26">Case Studies</div>
              </router-link>
            </div>
            <div class="group-24">
                <img class="img-2" src="@/assets/img/group-13324-2.svg" />
                <img class="group-25" src="@/assets/img/group-13326-2.svg" />
                <img class="group-26" src="@/assets/img/group-13325-1.svg" />
                <img class="group-27" src="@/assets/img/group-13327-2.svg" />
                <img class="tiktok" src="@/assets/img/tiktok-1.svg" />
                <img class="youtube" src="@/assets/img/youtube-2.svg" />
            </div>
            <div class="overlap-15">
                <img class="line" src="@/assets/img/line-44-1.svg" />
                <img class="line-2" src="@/assets/img/line-45-1.svg" />
                <img class="white" src="@/assets/img/white-2-1.png" />
            </div>
            <p class="copyright">Copyright {{ new Date().getFullYear() }} Arabia Talents, All Rights Reserved.</p>
            <div class="group-22">
              <router-link to="terms-and-conditions">
              <div class="text-wrapper-24">Terms &amp; Conditions</div>
            </router-link>
              <router-link to="privacy-policy">
                <div class="text-wrapper-25">Privacy Policy</div>
              </router-link>
            </div>
        </div>
    </div>
</template>