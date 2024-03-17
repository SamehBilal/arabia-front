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
            title: "Our Projects",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Case Studies",
                    active: true
                }
            ],
            desc: "Driven by our passion for the industry, and our team’s creativity, Arabia Talents have created some of the most engaging influencer campaigns in gaming, esports, technology, and more.  ",
            extra: "Let’s look at some of the best examples of campaigns we have created."
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
        <PageHeader :title="title" :items="items" :desc="desc" :extra="extra" />
        <div class="case-study-page-group-25">
            <div class="case-study-page-group-26">
                <div class="case-study-page-group-27"></div>
                <div class="case-study-page-group-28"></div>
                <div class="case-study-page-group-29"></div>
                <div class="case-study-page-rectangle-wrapper">
                    <img class="case-study-page-rectangle-3"
                        src="https://c.animaapp.com/hkU0g8jY/img/rectangle-5-2@2x.png" />
                </div>
            </div>
            <div class="case-study-page-group-30">
                <div class="case-study-page-group-27"></div>
                <div class="case-study-page-group-28"></div>
                <div class="case-study-page-group-29"></div>
                <div class="case-study-page-group-31"></div>
            </div>
            <div class="case-study-page-group-32">
                <div class="case-study-page-group-27"></div>
                <div class="case-study-page-group-28"></div>
                <div class="case-study-page-group-29"></div>
                <div class="case-study-page-group-33">
                    <div class="case-study-page-overlap-7">
                        <img class="case-study-page-rectangle-3"
                            src="https://c.animaapp.com/hkU0g8jY/img/rectangle-5-2@2x.png" />
                        <div class="case-study-page-rectangle-4"></div>
                        <p class="case-study-page-we-selected-a-few">
                            We Selected A Few Content Creators And Worked On Films To Promote Riot Games’ Fresh New Fps
                            Title,
                            Valorant.
                        </p>
                        <div class="case-study-page-group-34">
                            <div class="case-study-page-group-35">
                                <div class="case-study-page-text-wrapper-15">35</div>
                                <div class="case-study-page-text-wrapper-16">Content Creators</div>
                            </div>
                            <div class="case-study-page-group-36">
                                <div class="case-study-page-group-37">
                                    <div class="case-study-page-overlap-group-4">
                                        <div class="case-study-page-element-m">120m</div>
                                        <div class="case-study-page-text-wrapper-16">Total Reach</div>
                                    </div>
                                </div>
                                <div class="case-study-page-group-38">
                                    <div class="case-study-page-element-7">50m</div>
                                    <div class="case-study-page-text-wrapper-17">Engagement</div>
                                </div>
                            </div>
                            <div class="case-study-page-group-39">
                                <div class="case-study-page-overlap-8">
                                    <div class="case-study-page-element-8">80m</div>
                                    <div class="case-study-page-text-wrapper-18">Total Views</div>
                                </div>
                            </div>
                        </div>
                        <img class="case-study-page-mask-group"
                            src="https://c.animaapp.com/hkU0g8jY/img/mask-group@2x.png" />
                        <img class="case-study-page-up" src="https://c.animaapp.com/hkU0g8jY/img/up@2x.png" />
                    </div>
                </div>
            </div>
        </div>
        <div class="case-study-page-frame-3">
            <button class="case-study-page-button">Load More</button>
            <div class="case-study-page-group-14">
                <div class="case-study-page-img-wrapper">
                    <img class="case-study-page-vuesax-bold-arrow-up"
                        src="https://c.animaapp.com/hkU0g8jY/img/vuesax-bold-arrow-up-5@2x.png" />
                </div>
            </div>
        </div>
        <img class="case-study-page-dots" src="https://c.animaapp.com/hkU0g8jY/img/dots@2x.png" />
        <img class="case-study-page-dots-2" src="https://c.animaapp.com/hkU0g8jY/img/dots-1@2x.png" />
    </Layout>
</template>