<script>
import Layout from "../../../layouts/front.vue";
// import "https://www.tiktok.com/embed.js";

/**
 * Shops Component
 */
export default {
    components: { Layout },
    data() {
        return {
            showmodal: false,
        };
    },
    methods: {
    
    // eslint-disable-next-line no-unused-vars
    hideModal(e) {
      this.showmodal = false;
      // selects the parent container
      const parentContainer = document.querySelector(".video-container");
      parentContainer.innerHTML = "";
    },

    showModal(){
        /* this.videoSrc = document.getElementById('yvideo').getAttribute("data-src"); */

        // update variable with the Youtube ID
        const videoID = "TKrJDcNjZj4";

        // selects the parent container
        const parentContainer = document.querySelector(".video-container");

        // create a new responsive video container
        const responsiveVideoContainer = document.createElement("div");

        // apply responsive classes from bootstrap
        responsiveVideoContainer.classList.add(
            "embed-responsive",
            "embed-responsive-16by9"
        );

        // create the iFrame with the video embed
        const videoIframe = document.createElement("iframe");

        videoIframe.classList.add("embed-responsive-item");

        videoIframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`;

        videoIframe.setAttribute("allow", "autoplay");

        // add the iFrame to the video container
        responsiveVideoContainer.appendChild(videoIframe);

        // add the video container to the parent container
        parentContainer.appendChild(responsiveVideoContainer);

        this.showmodal = true;
    },

    showModalReel(){
        var html = "<blockquote class=\"tiktok-embed\" cite=\"https://www.tiktok.com/@nourmar5/video/7348849884566506757\" data-video-id=\"7348849884566506757\" data-embed-from=\"oembed\" style=\"max-width:605px; min-width:325px;\"> <section> <a target=\"_blank\" title=\"@nourmar5\" href=\"https://www.tiktok.com/@nourmar5?refer=embed\">@nourmar5</a> <p>كل عام وانتي بخير يا امي❤️ <a title=\"جلادين\" target=\"_blank\" href=\"https://www.tiktok.com/tag/%D8%AC%D9%84%D8%A7%D8%AF%D9%8A%D9%86?refer=embed\">#جلادين</a> <a title=\"نورمار\" target=\"_blank\" href=\"https://www.tiktok.com/tag/%D9%86%D9%88%D8%B1%D9%85%D8%A7%D8%B1?refer=embed\">#نورمار</a> <a title=\"امي\" target=\"_blank\" href=\"https://www.tiktok.com/tag/%D8%A7%D9%85%D9%8A?refer=embed\">#امي</a> </p> <a target=\"_blank\" title=\"♬ الصوت الأصلي - Nour Mar5 🦁\" href=\"https://www.tiktok.com/music/الصوت-الأصلي-7348849999359101701?refer=embed\">♬ الصوت الأصلي - Nour Mar5 🦁</a> </section> </blockquote>"
        // selects the parent container
        const parentContainer = document.querySelector(".video-container");
        parentContainer.innerHTML = html;

        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://www.tiktok.com/embed.js')
        parentContainer.appendChild(recaptchaScript)
        this.showmodal = true;
    },

    showModelPost(){
        var html='<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ggPHyRct7AvX2HYR1YS5aDZbtbbbzJb2N8EG6EcTD4ArkDRnG9UmpJDGGawETzV2l%26id%3D1516129585170912&show_text=true&width=500" width="500" height="193" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>';
        // selects the parent container
        const parentContainer = document.querySelector(".video-container");
        parentContainer.innerHTML = html;
        this.showmodal = true;
    }
  },
};

</script>

<template>
    <Layout :isHeaderMultiple="false" :partners="false" :isFooterMultiple="false">
        <div class="esport-overlap">
            <!-- <img class="esport-frame" src="@/assets/img/frame-4@2x.png" /> -->
            <img class="esport-rectangle" src="@/assets/img/rectangle-4.png" />
            <div class="esport-influencer-overlap-group-wrapper">
                <div class="esport-influencer-div-wrapper">
                    <div class="esport-influencer-text-wrapper-2">View Insights</div>
                </div>
            </div>
            <div class="esport-group">
                <div class="esport-overlap-group">
                    <div class="esport-contact-me">Contact Me</div>
                </div>
            </div>
            <img class="esport-ellipse img-thumbnail" style="border-radius: 50%"
                src="@/assets/images/product/img-1.png" />
            <img class="esport-influencer-inner-plugin-iframe" src="@/assets/img/inner-plugin-iframe@2x.png" />
            <p class="esport-text-wrapper">Total Reach: 28.6M</p>
            <div class="esport-group-2">
                <div class="esport-div-wrapper">
                    <div class="esport-text-wrapper-2">Nour Mar5</div>
                </div>
                <img class="esport-influencer-img" src="@/assets/img/group-1000003245.svg" />
                <!-- <div class="ejsport-vector-wrapper">
                    <img class="esport-vector" src="@/assets/img/vector-6@2x.png" />
                </div> -->
            </div>
        </div>
        <div class="esport-influencer-group-6">
            <div class="esport-influencer-overlap-2">
                <img class="esport-influencer-img-2" src="@/assets/img/youtube-2.svg" />
                <div class="esport-influencer-text-wrapper-5">8.4M</div>
            </div>
            <div class="esport-influencer-overlap-3">
                <div class="esport-influencer-text-wrapper-5">3.2M</div>
                <img class="esport-influencer-img-2" src="@/assets/img/youtube-2.svg" />
            </div>
            <div class="esport-influencer-overlap-4">
                <div class="esport-influencer-text-wrapper-5">14.6M</div>
                <img class="esport-influencer-img-2" src="@/assets/img/tiktok-2.svg" />
            </div>
            <div class="esport-influencer-overlap-5">
                <div class="esport-influencer-text-wrapper-5">2.4M</div>
                <img class="esport-influencer-img-2" src="@/assets/img/instagram.svg" />
            </div>
            <div class="esport-influencer-overlap-6">
                <img class="esport-influencer-facebook" src="@/assets/img/facebook.svg" />
                <div class="esport-influencer-text-wrapper-5">50K</div>
            </div>
            <div class="esport-influencer-overlap-7">
                <div class="esport-influencer-text-wrapper-5">N/A</div>
                <img class="esport-influencer-img-2" src="@/assets/img/snapchat.svg" />
            </div>
            <div class="esport-influencer-overlap-8">
                <div class="esport-influencer-text-wrapper-5">N/A</div>
                <img class="esport-influencer-img-2" src="@/assets/img/twitch.svg" />
            </div>
            <div class="esport-influencer-overlap-9">
                <div class="esport-influencer-text-wrapper-5">N/A</div>
                <div class="esport-influencer-link-wrapper">
                    <img class="esport-influencer-link" src="@/assets/img/link@2x.png" />
                </div>
            </div>
        </div>


        <div class="esport-favorite-games">Brand Collaborations</div>
        <div class="esport-group-36">
            <div class="esport-electronic-arts-logo-wrapper">
                <img class="esport-electronic-arts-logo" src="@/assets/img/ea.svg" />
            </div>
            <div class="esport-epicgames-wrapper">
                <img class="esport-epicgames" src="@/assets/img/epicgames.svg" />
            </div>
            <div class="esport-huawei-logo-wrapper">
                <img class="esport-huawei-logo" src="@/assets/img/huawei-logo.svg" />
            </div>
            <div class="esport-talabat-logo-wrapper">
                <img class="esport-talabat-logo" src="@/assets/img/talabat-logo.svg" />
            </div>
            <div class="esport-pngfind-wrapper">
                <img class="esport-pngfind" src="@/assets/img/pngfind.svg" />
            </div>
            <div class="esport-activision-wrapper">
                <img class="esport-activision" src="@/assets/img/activision.svg" />
            </div>
        </div>
        <div class="esport-text-wrapper-7">Latest Videos</div>
        <div class="esport-group-21">
            <div class="esport-overlap-8">
                <img class="esport-vector-6" src="@/assets/img/vector-65-3@2x.png" />
            </div>
            <div class="esport-group-18">
                <img class="esport-vector-6" src="@/assets/img/vector-66-3@2x.png" />
            </div>
        </div>
        <div class="esport-group-9">
            <div class="esport-div-2">
                <div class="esport-div-2">
                    <div class="esport-rectangle-wrapper" style="background-image: url('https://i.ytimg.com/vi/TKrJDcNjZj4/maxresdefault.jpg');">
                        <div class="esport-rectangle-2"></div>
                    </div>
                </div>
                <div class="esport-group-10">
                    <div class="esport-group-11">
                        <div class="esport-group-12">
                            <p class="esport-element"><span class="esport-span">61M</span> <span
                                    class="esport-text-wrapper-8">&nbsp;</span></p>
                            <img class="esport-group-13" src="@/assets/img/group-10@2x.png" />
                        </div>
                    </div>
                    <img class="esport-group-14" id="yvideo" @click="showModal()" data-src="https://www.youtube.com/watch?v=TKrJDcNjZj4" src="@/assets/img/group-5@2x.png" />
                    <div class="esport-group-15">
                        <div class="esport-text-wrapper-9">61 M</div>
                        <img class="esport-group-16" src="@/assets/img/group-148-4@2x.png" />
                    </div>
                </div>
            </div>
            <div class="esport-overlap-5">
                <div class="esport-div-2">
                    <img class="esport-rectangle-3" src="@/assets/img/rectangle-3@2x.png" />
                </div>
                <div class="esport-group-10">
                    <div class="esport-group-11">
                        <div class="esport-group-12">
                            <p class="esport-element"><span class="esport-span">61M</span> <span
                                    class="esport-text-wrapper-8">&nbsp;</span></p>
                            <img class="esport-group-13" src="@/assets/img/group-10@2x.png" />
                        </div>
                    </div>
                    <img class="esport-group-14" src="@/assets/img/group-5@2x.png" />
                    <div class="esport-group-15">
                        <div class="esport-text-wrapper-9">61 M</div>
                        <img class="esport-group-16" src="@/assets/img/group-148-4@2x.png" />
                    </div>
                </div>
            </div>
            <div class="esport-overlap-6">
                <div class="esport-div-2">
                    <div class="esport-overlap-7">
                        <div class="esport-rectangle-2"></div>
                    </div>
                </div>
                <div class="esport-group-10">
                    <div class="esport-group-11">
                        <div class="esport-group-12">
                            <p class="esport-element"><span class="esport-span">61M</span> <span
                                    class="esport-text-wrapper-8">&nbsp;</span></p>
                            <img class="esport-group-13" src="@/assets/img/group-10@2x.png" />
                        </div>
                    </div>
                    <img class="esport-group-14" src="@/assets/img/group-5@2x.png" />
                    <div class="esport-group-15">
                        <div class="esport-text-wrapper-9">61 M</div>
                        <img class="esport-group-16" src="@/assets/img/group-148-4@2x.png" />
                    </div>
                </div>
            </div>
        </div>
        <div class="esport-text-wrapper-10">Latest Reels</div>
        <div class="esport-group-21">
            <div class="esport-overlap-8">
                <img class="esport-vector-6" src="@/assets/img/vector-65-3@2x.png" />
            </div>
            <div class="esport-group-18">
                <img class="esport-vector-6" src="@/assets/img/vector-66-3@2x.png" />
            </div>
        </div>
        <div class="esport-overlap-wrapper">
            <div class="esport-overlap-9">
                <div class="esport-group-22">
                    <div class="esport-overlap-group-4">
                        <div class="esport-rectangle-4"></div>
                    </div>
                </div>
                <div class="esport-group-23">
                    <div class="esport-group-12">
                        <p class="esport-element"><span class="esport-span">61M</span> <span
                                class="esport-text-wrapper-8">&nbsp;</span></p>
                        <img class="esport-group-13" src="@/assets/img/group-10@2x.png" />
                    </div>
                </div>
                <div class="esport-group-24">
                    <div class="esport-text-wrapper-9">61 M</div>
                    <img class="esport-group-16" src="@/assets/img/group-148-5@2x.png" />
                </div>
                <img class="esport-group-25" @click="showModalReel()" src="@/assets/img/group-11@2x.png" />
            </div>
            <div class="esport-group-26">
                <div class="esport-overlap-10">
                    <div class="esport-rectangle-5"></div>
                    <div class="esport-group-27">
                        <div class="esport-group-12">
                            <p class="esport-element"><span class="esport-span">61M</span> <span
                                    class="esport-text-wrapper-8">&nbsp;</span></p>
                            <img class="esport-group-13" src="@/assets/img/group-10@2x.png" />
                        </div>
                    </div>
                    <div class="esport-group-28">
                        <div class="esport-text-wrapper-9">61 M</div>
                        <img class="esport-group-16" src="@/assets/img/group-148-4@2x.png" />
                    </div>
                    <img class="esport-group-29" src="@/assets/img/group-11@2x.png" />
                </div>
            </div>
            <div class="esport-group-30">
                <div class="esport-overlap-9">
                    <div class="esport-group-22">
                        <div class="esport-overlap-group-5">
                            <div class="esport-rectangle-4"></div>
                        </div>
                    </div>
                    <div class="esport-group-31">
                        <div class="esport-group-12">
                            <p class="esport-element"><span class="esport-span">61M</span> <span
                                    class="esport-text-wrapper-8">&nbsp;</span></p>
                            <img class="esport-group-13" src="@/assets/img/group-10@2x.png" />
                        </div>
                    </div>
                    <div class="esport-group-24">
                        <div class="esport-text-wrapper-9">61 M</div>
                        <img class="esport-group-16" src="@/assets/img/group-148-5@2x.png" />
                    </div>
                    <img class="esport-group-25" src="@/assets/img/group-11@2x.png" />
                </div>
            </div>
        </div>
        <div class="esport-text-wrapper-11">Latest Posts</div>
        <div class="esport-group-20">
            <div class="esport-overlap-8">
                <img class="esport-vector-6" src="@/assets/img/vector-65-3@2x.png" />
            </div>
            <div class="esport-group-18">
                <img class="esport-vector-6" src="@/assets/img/vector-66-3@2x.png" />
            </div>
        </div>
        <img class="esport-dots" src="@/assets/img/dots@2x.png" />
        <img class="esport-rectangle-6" @click="showModelPost" src="@/assets/img/rectangle-7@2x.png" />
        <img class="esport-rectangle-7" @click="showModelPost" src="@/assets/img/rectangle-8@2x.png" />
        <img class="esport-rectangle-8" @click="showModelPost" src="@/assets/img/rectangle-9@2x.png" />
        <div class="esport-text-wrapper-12">Gallery Section</div>
        <div class="esport-group-21">
            <div class="esport-overlap-8">
                <img class="esport-vector-6" src="@/assets/img/vector-65-3@2x.png" />
            </div>
            <div class="esport-group-18">
                <img class="esport-vector-6" src="@/assets/img/vector-66-3@2x.png" />
            </div>
        </div>
        <img class="esport-rectangle-9" @click="showModal" src="@/assets/img/rectangle-7-1@2x.png" />
        <img class="esport-rectangle-10" @click="showModal" src="@/assets/img/rectangle-8-1@2x.png" />
        <img class="esport-rectangle-11" @click="showModal" src="@/assets/img/rectangle-9-1@2x.png" />
        <img class="esport-rectangle-12" @click="showModal" src="@/assets/img/rectangle-10-1@2x.png" />
        <div class="esport-group-37">
            <div class="esport-overlap-15">
                <div class="esport-text-wrapper-20">Browse More Talents</div>
                <div class="esport-group-38">
                    <div class="esport-vuesax-bold-arrow-up-wrapper">
                        <img class="esport-vuesax-bold-arrow-up" src="@/assets/img/vuesax-bold-arrow-up-3@2x.png" />
                    </div>
                </div>
            </div>
        </div>
        <img class="esport-dots-2" src="@/assets/img/dots-1@2x.png" />

        <!-- Modal -->
        <BModal id="modal-1" @click="hideModal" size="lg" title-class="text-dark font-18" v-model="showmodal" title="Video" hide-footer>
            <BRow>
                <BCol md="12">
                    <div class="video-container">
                        </div>
                </BCol>
                <BButton class="mt-3" variant="outline-info" block @click="hideModal">Close Me</BButton>
            </BRow>
        </BModal>
    </Layout>
</template>
