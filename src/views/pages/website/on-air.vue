<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "../../pages/website/page-header.vue";

/**
 * Shops Component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Professional On-Air Talents",
      items: [
        {
          text: "Homepage"
        },
        {
          text: "Talents",
        },
        {
          text: "On-Air Talents",
          active: true
        }
      ],
      desc: "If you are looking to hire commentators, analysts or event hosts for your esports tournament, television show or corporate event, Arabia Talents's dedicated broadcast talent team can help source your ideal talent, and if requested, can advise you on the most suitable talent for your event.",
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
    <!-- <PageHeader :title="title" :items="items" :desc="desc" /> -->
    <div class="on-air-group-2">
      <div class="on-air-div-wrapper">
        <div class="on-air-overlap-group-2">
          <div class="on-air-rectangle"></div>
          <div class="on-air-text-wrapper-4">Professional On-Air Talents</div>
        </div>
      </div>
      <div class="on-air-group-3">
        <div class="on-air-homepage">Homepage</div>
        <div class="on-air-text-wrapper-5">Talents</div>
        <div class="on-air-on-air-talents">On-air Talents</div>
        <div class="on-air-rectangle-2"></div>
        <img class="on-air-vector" src="https://c.animaapp.com/arLvvMkQ/img/vector-58-1@2x.png" />
        <img class="on-air-img" src="https://c.animaapp.com/arLvvMkQ/img/vector-58-1@2x.png" />
      </div>
    </div>
    <p class="on-air-if-you-are-looking">
      If You Are Looking To Hire Commentators, Analysts Or Event Hosts For Your Esports Tournament, Television Show
      Or Corporate Event, Arabia Talents&#39;s Dedicated Broadcast Talent Team Can Help Source Your Ideal Talent,
      And If Requested, Can Advise You On The Most Suitable Talent For Your Event.
    </p>
    <div class="on-air-group">
      <div class="on-air-overlap">
        <div class="on-air-filter-pre-bar"></div>
        <div class="on-air-filter-bar"></div>
        <div class="on-air-div">
          <div class="on-air-overlap-group-wrapper">
            <div class="on-air-overlap-group">
              <div class="on-air-text-wrapper">Casters</div>
            </div>
          </div>
          <div class="on-air-text-wrapper-2">Hosts</div>
          <div class="on-air-text-wrapper-3">Analysts</div>
          <div class="on-air-ALL">All</div>
        </div>
      </div>
    </div>
    <div class="on-air-group-4">
      <div class="on-air-div-2">
        <div class="on-air-div-2">
          <div class="on-air-overlap-2">
            <div class="on-air-group-5">
              <div class="on-air-overlap-group-3">
                <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-11.png" />
                <div class="on-air-overlap-group-4">
                  <p class="on-air-tareq-khtatneh">
                    <span class="on-air-span">|</span>
                    <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                    <span class="on-air-span">|</span>
                  </p>
                  <div class="on-air-text-wrapper-7">Caster</div>
                  <div class="on-air-kde">K0de</div>
                </div>
              </div>
            </div>
            <router-link to="on-air-single">
            <div class="on-air-overlap-wrapper">
              <div class="on-air-overlap-group-3">
                <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-10.png" />
                <div class="on-air-overlap-group-4">
                  <p class="on-air-tareq-khtatneh">
                    <span class="on-air-span">|</span>
                    <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                    <span class="on-air-span">|</span>
                  </p>
                  <p class="on-air-p">Caster | Analyst | Host</p>
                  <div class="on-air-kde">K0de</div>
                </div>
              </div>
            </div>
          </router-link>
            <div class="on-air-group-6">
              <div class="on-air-overlap-group-3">
                <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-11.png" />
                <div class="on-air-overlap-group-4">
                  <p class="on-air-tareq-khtatneh">
                    <span class="on-air-span">|</span>
                    <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                    <span class="on-air-span">|</span>
                  </p>
                  <div class="on-air-text-wrapper-7">Caster</div>
                  <div class="on-air-kde">K0de</div>
                </div>
              </div>
            </div>
            <div class="on-air-group-7">
              <div class="on-air-overlap-group-3">
                <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-10.png" />
                <div class="on-air-overlap-group-4">
                  <p class="on-air-tareq-khtatneh">
                    <span class="on-air-span">|</span>
                    <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                    <span class="on-air-span">|</span>
                  </p>
                  <p class="on-air-p">Caster | Analyst | Host</p>
                  <div class="on-air-kde">K0de</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="on-air-iconex-light-up"
          src="https://c.animaapp.com/arLvvMkQ/img/iconex-light-up-right-circle-1@2x.png" />
      </div>
      <div class="on-air-group-8">
        <div class="on-air-overlap-2">
          <div class="on-air-group-5">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-11.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <div class="on-air-text-wrapper-7">Caster</div>
                <div class="on-air-kde">K0de</div>
              </div>
            </div>
          </div>
          <div class="on-air-overlap-wrapper">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-10.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <p class="on-air-p">Caster | Analyst | Host</p>
                <div class="on-air-kde">K0de</div>
              </div>
            </div>
          </div>
          <div class="on-air-group-6">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-11.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <div class="on-air-text-wrapper-7">Caster</div>
                <div class="on-air-kde">K0de</div>
              </div>
            </div>
          </div>
          <div class="on-air-group-7">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-10.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <p class="on-air-p">Caster | Analyst | Host</p>
                <div class="on-air-kde">K0de</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="on-air-group-9">
        <div class="on-air-overlap-2">
          <div class="on-air-group-5">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-11.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <div class="on-air-text-wrapper-7">Caster</div>
                <div class="on-air-kde">K0de</div>
              </div>
            </div>
          </div>
          <div class="on-air-overlap-wrapper">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-10.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <p class="on-air-p">Caster | Analyst | Host</p>
                <div class="on-air-kde">K0de</div>
              </div>
            </div>
          </div>
          <div class="on-air-group-6">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-11.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <div class="on-air-text-wrapper-7">Caster</div>
                <div class="on-air-kde">K0de</div>
              </div>
            </div>
          </div>
          <div class="on-air-group-7">
            <div class="on-air-overlap-group-3">
              <img class="on-air-MAO-gaming" src="https://c.animaapp.com/arLvvMkQ/img/mao-gaming-10.png" />
              <div class="on-air-overlap-group-4">
                <p class="on-air-tareq-khtatneh">
                  <span class="on-air-span">|</span>
                  <span class="on-air-text-wrapper-6">Tareq Khtatneh</span>
                  <span class="on-air-span">|</span>
                </p>
                <p class="on-air-p">Caster | Analyst | Host</p>
                <div class="on-air-kde">K0de</div>
              </div>
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
    <router-link to="influencers-all">
      <div class="influencer-overlap-wrapper">
        <div class="influencer-overlap">
          <div class="influencer-rectangle-3"></div>
          <img class="influencer-mask-group" src="@/assets/img/inf-mask-group.png" />
          <img class="influencer-caster-2" src="@/assets/img/caster-2.png" />
          <p class="influencer-arabia-talents">Arabia Talents features also influencers and content creators.</p>
          <p class="influencer-p">Tech - Beauty - Gaming</p>
        </div>
      </div>
    </router-link>
    <!-- <img class="influencer-dots" src="@/assets/img/inf-dots.png" />
        <img class="influencer-dots-2" src="@/assets/img/inf-dots-1.png" /> -->
  </Layout>
</template>