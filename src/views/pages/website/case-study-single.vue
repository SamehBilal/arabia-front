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
            title: "Dragon Tamer 2022",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Case Study"
                },
                {
                    text: "Dragon Tamer",
                    active: true
                }
            ],
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
        <PageHeader :title="title" :items="items"   />
        <div class="case-single-overlap-2">
          <div class="case-single-group-4">
            <div class="case-single-hero">
              <div class="case-single-overlap-group-3">
                <img class="case-single-quote-sketchline" src="https://c.animaapp.com/Je6NXOC7/img/quote-sketchline-2x-1--1.png" />
                <div class="case-single-text-wrapper-2">Influencers</div>
                <div class="case-single-text-wrapper-3">Clicks</div>
                <div class="case-single-text-wrapper-4">Impressions</div>
                <div class="case-single-text-wrapper-5">Engagement Rate</div>
                <div class="case-single-text-wrapper-6">6</div>
                <div class="case-single-element">3.4m+</div>
                <div class="case-single-text-wrapper-7">4.3%</div>
                <div class="case-single-element-k">135k+</div>
                <img class="case-single-vector" src="https://c.animaapp.com/Je6NXOC7/img/vector-16@2x.png" />
                <img class="case-single-vector-2" src="https://c.animaapp.com/Je6NXOC7/img/vector-17@2x.png" />
                <img class="case-single-vector-3" src="https://c.animaapp.com/Je6NXOC7/img/vector-18@2x.png" />
              </div>
              <p class="case-single-dragon-tamer-is-a">
                Dragon Tamer Is A Turn-based Strategy Game By Bekko Games. For This Campaign, Youtube Creators Have
                Integrated Advertisements Into Their Video Content To Present The Game To Their Viewers And To Animate
                Them To Join.
              </p>
              <img class="case-single-gamelogo" src="https://c.animaapp.com/Je6NXOC7/img/gamelogo-p29-264f300-1@2x.png" />
            </div>
            <div class="case-single-overlap-wrapper">
              <div class="case-single-overlap-3">
                <div class="case-single-text-wrapper-8">Next</div>
                <div class="case-single-text-wrapper-9">Case</div>
                <img class="case-single-arrow" src="https://c.animaapp.com/Je6NXOC7/img/arrow-1@2x.png" />
              </div>
            </div>
            <div class="case-single-overlap-group-wrapper">
              <div class="case-single-overlap-4">
                <div class="case-single-text-wrapper-10">Prev</div>
                <div class="case-single-text-wrapper-11">Case</div>
                <img class="case-single-arrow-2" src="https://c.animaapp.com/Je6NXOC7/img/arrow-1-1@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="case-single-overlap">
          <img class="case-single-rectangle" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-99.png" />
          <img class="case-single-img" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-99.png" />
          <img class="case-single-rectangle-2" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-90.png" />
          <img class="case-single-rectangle-3" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-98.png" />
          <div class="case-single-overlap-group">
            <div class="case-single-icon"><img class="case-single-fi-play" src="https://c.animaapp.com/Je6NXOC7/img/fi-play-5@2x.png" /></div>
          </div>
          <div class="case-single-div">
            <div class="case-single-group">
              <div class="case-single-rectangle-wrapper">
                <img class="case-single-rectangle-4" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-94-2.png" />
              </div>
              <div class="case-single-img-wrapper">
                <img class="case-single-rectangle-4" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-94-2.png" />
              </div>
              <div class="case-single-group-2">
                <img class="case-single-rectangle-4" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-94-2.png" />
              </div>
            </div>
            <div class="case-single-fi-play-wrapper">
              <img class="case-single-fi-play" src="https://c.animaapp.com/Je6NXOC7/img/fi-play-5@2x.png" />
            </div>
            <div class="case-single-icon-2"><img class="case-single-fi-play" src="https://c.animaapp.com/Je6NXOC7/img/fi-play-5@2x.png" /></div>
            <div class="case-single-icon-3"><img class="case-single-fi-play" src="https://c.animaapp.com/Je6NXOC7/img/fi-play-5@2x.png" /></div>
          </div>
          <div class="case-single-icon-wrapper">
            <div class="case-single-icon-4"><img class="case-single-fi-play" src="https://c.animaapp.com/Je6NXOC7/img/fi-play-5@2x.png" /></div>
          </div>
          <div class="case-single-group-3">
            <div class="case-single-overlap-group-2">
              <img class="case-single-rectangle-5" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-5486@2x.png" />
              <div class="case-single-text-wrapper">Content Preview</div>
            </div>
            <p class="case-single-influencers-for-this">
              Influencers For This Campaign Posted On Facebook, Instagram, And Twitter. Posts Incorporated
              Campaign-specific Tags And Hashtags.
            </p>
            <img class="case-single-cs" src="https://c.animaapp.com/Je6NXOC7/img/cs-phase1-2x-2@2x.png" />
          </div>
          <img class="case-single-dots" src="https://c.animaapp.com/Je6NXOC7/img/dots@2x.png" />
          <img class="case-single-dots-2" src="https://c.animaapp.com/Je6NXOC7/img/dots-1@2x.png" />
        </div>
        <div class="case-single-overlap-12">
          <div class="case-single-rectangle-8"></div>
          <div class="case-single-LOGO-wrapper"><img class="case-single-LOGO" src="https://c.animaapp.com/Je6NXOC7/img/logo@2x.png" /></div>
          <div class="case-single-carousel">
            <div class="case-single-left-carousel">
              <img class="case-single-vector-8" src="https://c.animaapp.com/Je6NXOC7/img/vector-58-2@2x.png" />
            </div>
          </div>
          <div class="case-single-list-of-the">List Of The Contributors</div>
          <p class="case-single-meet-the-awesome">Meet The Awesome People Behind The Campaign</p>
          <div class="case-single-group-29">
            <div class="case-single-overlap-13">
              <div class="case-single-text-wrapper-26">Kaitlyn Lowry</div>
              <img class="case-single-rectangle-9" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-100-1@2x.png" />
            </div>
          </div>
          <div class="case-single-group-30">
            <div class="case-single-overlap-14">
              <div class="case-single-text-wrapper-27">Deena Nicole Cortese</div>
              <img class="case-single-rectangle-10" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-101@2x.png" />
            </div>
          </div>
          <div class="case-single-group-31">
            <div class="case-single-overlap-13">
              <div class="case-single-text-wrapper-28">Dorinda Medley</div>
              <img class="case-single-rectangle-9" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-102@2x.png" />
            </div>
          </div>
          <div class="case-single-group-32">
            <div class="case-single-overlap-15">
              <div class="case-single-text-wrapper-29">Taranasha Wallace</div>
              <img class="case-single-rectangle-11" src="https://c.animaapp.com/Je6NXOC7/img/rectangle-103@2x.png" />
            </div>
          </div>
          <img class="case-single-mask-group" src="https://c.animaapp.com/Je6NXOC7/img/mask-group@2x.png" />
          <div class="case-single-right-carousel">
            <img class="case-single-vector-9" src="https://c.animaapp.com/Je6NXOC7/img/vector-57@2x.png" />
          </div>
          <div class="case-single-group-33">
            <img class="case-single-line-3" src="https://c.animaapp.com/Je6NXOC7/img/line-53@2x.png" />
            <img class="case-single-line-4" src="https://c.animaapp.com/Je6NXOC7/img/line-53@2x.png" />
            <div class="case-single-ellipse"></div>
          </div>
        </div>
        <div class="case-single-group-34">
          <div class="case-single-group-35">
            <div class="case-single-group-36">
              <img class="case-single-img-3" src="https://c.animaapp.com/Je6NXOC7/img/group-13325-5@2x.png" />
            </div>
            <div class="case-single-group-37">
              <img class="case-single-img-3" src="https://c.animaapp.com/Je6NXOC7/img/group-13326-5@2x.png" />
            </div>
            <div class="case-single-tiktok-wrapper">
              <img class="case-single-img-3" src="https://c.animaapp.com/Je6NXOC7/img/tiktok-5@2x.png" />
            </div>
            <div class="case-single-group-38">
              <img class="case-single-img-3" src="https://c.animaapp.com/Je6NXOC7/img/group-13324-5@2x.png" />
            </div>
            <div class="case-single-youtube-wrapper">
              <img class="case-single-img-3" src="https://c.animaapp.com/Je6NXOC7/img/youtube-4@2x.png" />
            </div>
            <div class="case-single-group-39">
              <img class="case-single-img-3" src="https://c.animaapp.com/Je6NXOC7/img/group-13327-5@2x.png" />
            </div>
          </div>
          <div class="case-single-share-it">Share It</div>
          <div class="case-single-rectangle-12"></div>
        </div>
    </Layout>
</template>