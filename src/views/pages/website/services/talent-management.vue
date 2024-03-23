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
            title: "Join Our Network",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Services",
                },
                {
                    text: "Talent Management",
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
        <div class="page-management-overlap">
            <div class="page-management-overlap-group">
                <img class="page-management-vector" src="https://c.animaapp.com/EGnXkPCo/img/vector-3.png" />
                <div class="page-management-div"></div>
                <div class="page-management-BG"></div>
                <div class="page-management-group">
                    <p class="page-management-text">
                        Whatever your talent and the things you do, we have the expertise needed to build your personal
                        brand
                        and shape a long and successful career.
                    </p>
                    <p class="page-management-title">Reasons To Join Arabia Talents.</p>
                    <div class="page-management-group-2">
                        <p class="page-management-text-wrapper">
                            Growth and improvement strategies for talent interested in levelling up their skills, reach,
                            and
                            professional network.
                        </p>
                        <div class="page-management-ellipse"></div>
                        <div class="page-management-title-2">Talent Development</div>
                    </div>
                    <div class="page-management-group-3">
                        <p class="page-management-text-wrapper">
                            Your profile will be discoverable by the world&#39;s top brands, where you will gain great
                            opportunities to&nbsp;&nbsp;enhance your revenue levels.
                        </p>
                        <div class="page-management-ellipse"></div>
                        <div class="page-management-title-2">Earn Money</div>
                    </div>
                    <div class="page-management-group-4">
                        <p class="page-management-text-wrapper">
                            You agree terms with the brand, they deposit your money to us. You complete the campaign, we
                            send you
                            payment.
                        </p>
                        <div class="page-management-ellipse"></div>
                        <div class="page-management-title-2">Protected Payment</div>
                    </div>
                </div>
                <img class="page-management-dots" src="https://c.animaapp.com/EGnXkPCo/img/dots-1@2x.png" />
                <img class="page-management-img" src="https://c.animaapp.com/EGnXkPCo/img/ellipse-605.png" />
                <img class="page-management-element" src="https://c.animaapp.com/EGnXkPCo/img/44859-1.png" />
                <div class="page-management-group-5">
                    <div class="page-management-group-wrapper">
                        <div class="page-management-group-6">
                            <div class="page-management-rectangle"></div>
                            <div class="page-management-rectangle-2"></div>
                            <div class="page-management-rectangle-3"></div>
                        </div>
                    </div>
                    <div class="page-management-overlap-group-wrapper">
                        <div class="page-management-overlap-group-2">
                            <div class="page-management-text-wrapper-2">10+</div>
                            <div class="page-management-text-wrapper-3">Publications</div>
                        </div>
                    </div>
                </div>
                <div class="page-management-overlap-wrapper">
                    <div class="page-management-overlap-2">
                        <div class="page-management-text-wrapper-4">Influencer Activity</div>
                        <div class="page-management-group-7">
                            <div class="page-management-group-8"></div>
                            <div class="page-management-group-9">
                                <div class="page-management-text-wrapper-5">Oliver Quenn</div>
                                <div class="page-management-text-wrapper-6">Art Director</div>
                            </div>
                            <div class="page-management-div-wrapper">
                                <div class="page-management-text-wrapper-7">12k</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img class="page-management-dots-2" src="https://c.animaapp.com/EGnXkPCo/img/dots@2x.png" />
            <div class="page-management-group-13">
                <div class="page-management-group-14">
                    <p class="page-management-get-paid-for-your">Get Paid For Your Dopeness.</p>
                    <div class="page-management-flexcontainer">
                        <p class="page-management-span-wrapper">
                            <span class="page-management-span">You are a content creator or broadcaster and in need of
                                support? Then we need to talk. <br /></span>
                        </p>
                        <p class="page-management-span-wrapper">
                            <span class="page-management-span">Our management team will give you the support you need.
                                <br /></span>
                        </p>
                        <p class="page-management-span-wrapper">
                            <span class="page-management-span">We will provide our help in channel management, connect
                                you with top brands and expand your
                                community. <br /></span>
                        </p>
                        <p class="page-management-span-wrapper">
                            <span class="page-management-span">Join the most exclusive, vetted network of diverse
                                content creators and take part in campaigns for
                                the world’s biggest brands.
                            </span>
                        </p>
                    </div>
                </div>
                <div class="page-management-frame">
                    <button class="page-management-button">Apply Now</button>
                    <div class="page-management-group-15">
                        <div class="page-management-vuesax-bold-arrow-up-wrapper">
                            <img class="page-management-vuesax-bold-arrow-up"
                                src="https://c.animaapp.com/EGnXkPCo/img/vuesax-bold-arrow-up-5@2x.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-management-overlap-3">

                <div class="page-management-group-29">
                    <img class="page-management-rectangle-6"
                        src="https://c.animaapp.com/EGnXkPCo/img/rectangle-11164@2x.png" />
                    <img class="page-management-rectangle-7"
                        src="https://c.animaapp.com/EGnXkPCo/img/rectangle-11166@2x.png" />
                    <img class="page-management-mask-group"
                        src="https://c.animaapp.com/EGnXkPCo/img/mask-group@2x.png" />
                </div>
            </div>
        </div>
    </Layout>
</template>