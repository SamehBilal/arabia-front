<script>
import Layout from "../../../layouts/front.vue";
import PageHeader from "../sections/page-header.vue";
import OurWork from "../sections/our-work.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader, OurWork },
    data() {
        return {
            title: "Celebrity Collaboration",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Services",
                },
                {
                    text: "Celebrity Collaboration",
                    active: true
                }
            ],
            desc: "",
        };
    },
    methods: {
        //
    },
};

</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" :desc="desc" />
        <div class="page-cel-overlap-group">
            <div class="page-cel-group-4">
                <div class="page-cel-group-5">
                    <div class="page-cel-scale-with-celebrity">Scale With Celebrity<br />influencer Marketing</div>
                    <div class="page-cel-flexcontainer">
                        <p class="page-cel-span-wrapper">
                            <span class="page-cel-span">Scale your business with the power of celebrity influencer
                                marketing in the Middle East. By
                                utilizing the services of celebrity marketing and influencer marketing experts, you can
                                increase
                                sales and reach a whole new target audience by leveraging the appeal and credibility of
                                celebrities
                                and influencers to promote your brand.<br /></span>
                        </p>
                        <p class="page-cel-span-wrapper">
                            <span class="page-cel-span">Instead of traditional advertising methods, influencer marketing
                                relies on assigning one or a group
                                of influencers and social media celebrities to speak on behalf of your brand to their
                                loyal
                                followers. This strategy can significantly increase brand awareness and presence online,
                                as well as
                                expand your target audience by reaching new segments not typically reached through
                                traditional
                                marketing techniques.<br /></span>
                        </p>
                        <p class="page-cel-span-wrapper">
                            <span class="page-cel-span">Take advantage of the unique relationship between celebrities
                                and influencers to tap into new
                                opportunities and grow your business in the Middle East.</span>
                        </p>
                    </div>
                </div>
                <div class="page-cel-overlap-wrapper">
                    <div class="page-cel-overlap-2">
                        <div class="page-cel-content">
                            <div class="page-cel-element">
                                <div class="page-cel-BG-wrapper">
                                    <img class="page-cel-BG-2" src="https://c.animaapp.com/jKMwPOTO/img/bg@2x.png" />
                                </div>
                            </div>
                        </div>
                        <div class="page-cel-img-3">
                            <img class="page-cel-element-2" src="https://c.animaapp.com/jKMwPOTO/img/1-1@2x.png" />
                            <div class="page-cel-div-wrapper">
                                <div class="page-cel-div-2"><img class="page-cel-BG-3"
                                        src="https://c.animaapp.com/jKMwPOTO/img/bg-1@2x.png" /></div>
                            </div>
                            <div class="page-cel-element-3">
                                <div class="page-cel-div-2">
                                    <div class="page-cel-img-wrapper">
                                        <img class="page-cel-BG-3"
                                            src="https://c.animaapp.com/jKMwPOTO/img/bg-3@2x.png" />
                                    </div>
                                    <div class="page-cel-element-3">
                                        <div class="page-cel-img-wrapper">
                                            <img class="page-cel-BG-3"
                                                src="https://c.animaapp.com/jKMwPOTO/img/bg-3@2x.png" />
                                        </div>
                                        <div class="page-cel-element-4">
                                            <div class="page-cel-div-2">
                                                <img class="page-cel-BG-3"
                                                    src="https://c.animaapp.com/jKMwPOTO/img/bg-4@2x.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-cel-overlap">
            <img class="page-cel-vector" src="https://c.animaapp.com/jKMwPOTO/img/vector-3.png" />
            <div class="page-cel-vector-2"></div>
            <div class="page-cel-app"></div>
            <div class="page-cel-img"></div>
            <div class="page-cel-img-2"></div>
            <img class="page-cel-BG" src="https://c.animaapp.com/jKMwPOTO/img/bg-7.png" />
            <p class="page-cel-text">
                We are not limited to making influencers talk about the advantages of your brand only, but we are keen
                to
                include all the new techniques and methods, and among the strategies that can be followed:
            </p>
            <p class="page-cel-text-wrapper">Collaboration Helps Expand Your Reach</p>
            <div class="page-cel-group">
                <p class="page-cel-p">
                    Hosting special events and competitions can be a powerful tool for engaging with our target
                    audience,
                    building brand awareness and driving sales. By leveraging the influence of celebrities and social
                    media
                    influencers, we create a memorable experience for our audience and drive brand loyalty.
                    Additionally,
                    offering exclusive prizes as a part of the event can further increase engagement and interest in the
                    brand.
                </p>
                <p class="page-cel-hosting-special">Hosting Special Events And Competitions:</p>
                <div class="page-cel-ellipse"></div>
            </div>
            <div class="page-cel-group-2">
                <p class="page-cel-text-wrapper-2">
                    By providing them with exclusive products and asking them to share their honest review or unbox the
                    product, we can increase brand awareness and drive sales. This strategy is especially effective in
                    the
                    Middle East where the influence of celebrities is high. It creates a sense of authenticity and trust
                    among
                    the target audience, encouraging them to try the product for themselves. Additionally, it helps the
                    brand
                    to gain valuable insights and feedback from the influencer.
                </p>
                <div class="page-cel-reviews-and-unboxing">Reviews And Unboxing:</div>
                <div class="page-cel-ellipse-2"></div>
            </div>
            <div class="page-cel-group-wrapper">
                <div class="page-cel-group-3">
                    <p class="page-cel-text-wrapper-3">
                        Leverage the power of celebrity endorsements by building long-term partnerships with influencers
                        in your
                        industry. These brand ambassadors will become a consistent voice for your brand, promoting your
                        products
                        and services to their dedicated followers on a regular basis. This type of influencer marketing
                        strategy
                        can be highly effective in building brand awareness and driving sales. Additionally, consider
                        focusing
                        on influencer marketing services in the Middle East for a more targeted approach.
                    </p>
                    <div class="page-cel-text-wrapper-4">Get Brand Ambassadors:</div>
                    <div class="page-cel-ellipse-3"></div>
                </div>
            </div>
            <img class="page-cel-dots" src="https://c.animaapp.com/jKMwPOTO/img/dots-2@2x.png" />
            <img class="page-cel-dots-2" src="https://c.animaapp.com/jKMwPOTO/img/dots-3@2x.png" />
        </div>
        <OurWork />
    </Layout>
</template>