<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "../../pages/website/page-header.vue";
import OurWork from "../../pages/website/our-work.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader,OurWork },
    data() {
        return {
            title: "Influencer Marketing",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Servies",
                },
                {
                    text: "Influencer Marketing Campaigns",
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
        <div class="marketing-overlap-2">
            <div class="marketing-group-4">
                <p class="marketing-text-wrapper-4">We foster dynamic relationships between brands and influencers</p>
                <div class="marketing-flexcontainer">
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">The Middle East is home to some of the world’s biggest
                            influencers, and Arabia Talents helps brands
                            to engage audiences in the region. <br /></span>
                    </p>
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">This is done through the development and execution of
                            creative marketing strategies that are
                            specifically designed to tell your brand’s story. <br /></span>
                    </p>
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">Our experience means that this can be done on a large
                            scale, allowing your story to reach millions of
                            people and make a big impact. <br /></span>
                    </p>
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">Alongside our dedicated data analysis team, we combine
                            the statistics with our own expertise,
                            ensuring that only the influencers who create the most relevant, unique content are matched
                            with your
                            brand.</span>
                    </p>
                </div>
            </div>
            <div class="marketing-overlap-2">

                <div class="marketing-group-20">
                    <div class="marketing-overlap-3">
                        <div class="marketing-rectangle-3"></div>
                        <img class="marketing-rectangle-4"
                            src="https://c.animaapp.com/G5LxjVCd/img/rectangle-11155@2x.png" />
                        <img class="marketing-rectangle-5"
                            src="https://c.animaapp.com/G5LxjVCd/img/rectangle-11156@2x.png" />
                        <div class="marketing-text-wrapper-17">Top Creators</div>
                        <div class="marketing-group-21">
                            <div class="marketing-overlap-group-5">
                                <div class="marketing-rectangle-6"></div>
                                <img class="marketing-mask-group"
                                    src="https://c.animaapp.com/G5LxjVCd/img/mask-group@2x.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marketing-group-22">
                    <div class="marketing-group-23">
                        <div class="marketing-text-wrapper-18">50+</div>
                        <div class="marketing-text-wrapper-19">Game Promoted</div>
                    </div>
                    <img class="marketing-game" src="https://c.animaapp.com/G5LxjVCd/img/game@2x.png" />
                </div>
                <div class="marketing-group-24">
                    <div class="marketing-group-23">
                        <div class="marketing-text-wrapper-18">27%</div>
                        <div class="marketing-text-wrapper-20">Game Promoted</div>
                    </div>
                    <div class="marketing-ellipse-wrapper">
                        <img class="marketing-ellipse" src="https://c.animaapp.com/G5LxjVCd/img/ellipse-600@2x.png" />
                    </div>
                </div>
            </div>
            <img class="marketing-dots" src="https://c.animaapp.com/G5LxjVCd/img/dots-4@2x.png" />

            <div class="marketing-group-20">
                <div class="marketing-overlap-3">
                    <div class="marketing-rectangle-3"></div>
                    <img class="marketing-rectangle-4"
                        src="https://c.animaapp.com/G5LxjVCd/img/rectangle-11155@2x.png" />
                    <img class="marketing-rectangle-5"
                        src="https://c.animaapp.com/G5LxjVCd/img/rectangle-11156@2x.png" />
                    <div class="marketing-text-wrapper-17">Top Creators</div>
                    <div class="marketing-group-21">
                        <div class="marketing-overlap-group-5">
                            <div class="marketing-rectangle-6"></div>
                            <img class="marketing-mask-group"
                                src="https://c.animaapp.com/G5LxjVCd/img/mask-group@2x.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="marketing-group-22">
                <div class="marketing-group-23">
                    <div class="marketing-text-wrapper-18">50+</div>
                    <div class="marketing-text-wrapper-19">Game Promoted</div>
                </div>
                <img class="marketing-game" src="https://c.animaapp.com/G5LxjVCd/img/game@2x.png" />
            </div>
            <div class="marketing-group-24">
                <div class="marketing-group-23">
                    <div class="marketing-text-wrapper-18">27%</div>
                    <div class="marketing-text-wrapper-20">Game Promoted</div>
                </div>
                <div class="marketing-ellipse-wrapper">
                    <img class="marketing-ellipse" src="https://c.animaapp.com/G5LxjVCd/img/ellipse-600@2x.png" />
                </div>
            </div>
        </div>
        <div class="marketing-group-200">
            <div class="marketing-group-53">
                <div class="marketing-group-54">
                    <div class="marketing-overlap-group-9">
                        <div class="marketing-text-wrapper-37">Statistics</div>
                        <div class="marketing-text-wrapper-38">See Video Statistics</div>
                        <img class="marketing-kebab-menu"
                            src="https://c.animaapp.com/G5LxjVCd/img/kebab-menu-2@2x.png" />
                        <div class="marketing-overlap-13">
                            <img class="marketing-ellipse-2"
                                src="https://c.animaapp.com/G5LxjVCd/img/ellipse-604@2x.png" />
                            <div class="marketing-group-55">
                                <div class="marketing-total-views">Total&nbsp;&nbsp;Views</div>
                                <div class="marketing-text-wrapper-39">+28%</div>
                            </div>
                        </div>
                        <div class="marketing-group-56">
                            <div class="marketing-group-57">
                                <div class="marketing-text-wrapper-40">Total&nbsp;&nbsp;Views</div>
                                <div class="marketing-rectangle-8"></div>
                            </div>
                            <div class="marketing-group-58">
                                <div class="marketing-text-wrapper-40">Targeting</div>
                                <div class="marketing-rectangle-9"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marketing-group-59">
                    <div class="marketing-overlap-14">
                        <div class="marketing-rectangle-10"></div>
                        <img class="marketing-my-project-copy"
                            src="https://c.animaapp.com/G5LxjVCd/img/my-project-copy-1@2x.png" />
                    </div>
                </div>
                <div class="marketing-group-60">
                    <div class="marketing-overlap-15">
                        <div class="marketing-rectangle-11"></div>
                        <div class="marketing-rectangle-12"></div>
                        <img class="marketing-portrait-happy"
                            src="https://c.animaapp.com/G5LxjVCd/img/portrait-happy-businessman-using-smartphone-white-background-1@2x.png" />
                        <div class="marketing-ellipse-3"></div>
                        <div class="marketing-group-61">
                            <img class="marketing-mask-group-2"
                                src="https://c.animaapp.com/G5LxjVCd/img/mask-group-1@2x.png" />
                            <div class="marketing-group-62">
                                <div class="marketing-text-wrapper-41">Sajon.co</div>
                                <div class="marketing-text-wrapper-42">FETISH•Come Check This</div>
                            </div>
                            <img class="marketing-kebab-menu-2"
                                src="https://c.animaapp.com/G5LxjVCd/img/kebab-menu-1@2x.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="marketing-group-39">
                <div class="marketing-text-wrapper-31">Influencer Marketing Solution:</div>
                <div class="marketing-flexcontainer-3">
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">Whether you’ve never worked with an influencer before, or
                            you’re simply looking to recruit the very
                            best talent, our specialized teams are on hand to guide you through the entire process of
                            influencer
                            marketing, from start to finish. <br /></span>
                    </p>
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">This involves following some predefined steps: First, we
                            work with you to define your Key Performance
                            Indicators (KPIs) and work out exactly what you want to achieve from your campaign. Then, we
                            take an
                            inter-disciplinary approach to determine and locate your target audience. <br /></span>
                    </p>
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">Finally, we’ll find the best influencers for the job –
                            these will be professional, experienced content
                            creators who can seamlessly blend into your marketing campaign and help you achieve your
                            established
                            objectives.</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="marketing-overlap-4">
            <p class="marketing-we-are-the">We Are The Influencer Marketing Experts.</p>
            <p class="marketing-text-wrapper-21">
                When it comes to influencer marketing, we’re the experts. That’s why we never cut corners with your
                campaigns – we’ll handle it all, and make sure that from the development of inspiring creative concepts
                to
                effective marketing, you can be sure that every detail is handled correctly. When we analyze your
                results,
                we’ll report them back to you in a clear, comprehensive way.
            </p>
            <div class="marketing-group-25">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-22">
                        Content creators hold a lot of influence over their audience, and we work closely with them to
                        develop
                        innovative influencer marketing strategies that have the power to work effectively long-term.
                    </p>
                    <img class="marketing-vector-3" src="https://c.animaapp.com/G5LxjVCd/img/vector-2-3@2x.png" />
                    <div class="marketing-text-wrapper-23">Influencer Marketing Strategies</div>
                    <img class="marketing-remove" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                </div>
            </div>
            <div class="marketing-group-26">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-22">
                        Our content strategies are about more than just advertising – we offer influencers the
                        opportunity to
                        tell their story, how they see it. Audiences follow creators who they identify with, so it’s
                        important
                        that their content is as authentic as possible.
                    </p>
                    <img class="marketing-vector-3" src="https://c.animaapp.com/G5LxjVCd/img/vector-2-3@2x.png" />
                    <div class="marketing-text-wrapper-24">Content Strategies</div>
                    <img class="marketing-remove-2" src="https://c.animaapp.com/G5LxjVCd/img/remove-1@2x.png" />
                </div>
            </div>
            <div class="marketing-group-27">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-22">
                        Anyone can work with an influencer, but not everyone knows how to find someone that will be the
                        perfect
                        fit for their campaign. That’s where we come in – we always source influencers who consistently
                        engage
                        in high-impact conversations with their followers.
                    </p>
                    <div class="marketing-text-wrapper-23">Influencer Matchmaking</div>
                    <img class="marketing-remove" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                    <img class="marketing-vector-3" src="https://c.animaapp.com/G5LxjVCd/img/vector-2-3@2x.png" />
                </div>
            </div>
            <div class="marketing-group-28">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-25">
                        Campaigns are demanding, and if you’re investing time and money, you’ll want to make sure that
                        you have
                        reliable, appropriate support. At Arabia Talents, we have a dedicated team of experienced
                        influencer and
                        campaign managers who can offer hands-on support for the duration of your campaign – no matter
                        what,
                        we’re here for you.
                    </p>
                    <img class="marketing-vector-4" src="https://c.animaapp.com/G5LxjVCd/img/vector-7@2x.png" />
                    <div class="marketing-text-wrapper-26">Campaign Management</div>
                    <img class="marketing-remove" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                </div>
            </div>
            <div class="marketing-group-29">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-25">
                        In a fast-paced digital world, having the newest or most creative approach to marketing is a
                        great way
                        to get noticed as an influencer. However, there are plenty of traditional methods that can still
                        bring
                        value to your campaign, and here at Arabia Talents, we combine these two methods of marketing to
                        elevate
                        your content creation and help you stand out.
                    </p>
                    <img class="marketing-vector-4" src="https://c.animaapp.com/G5LxjVCd/img/vector-7@2x.png" />
                    <div class="marketing-text-wrapper-27">Production &amp; Content Creation</div>
                    <img class="marketing-remove" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                </div>
            </div>
            <div class="marketing-group-30">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-25">
                        As an influencer or growing brand, the last thing you want to be thinking about is the legal
                        side of
                        things – after all, your power lies in connecting with your audience and delivering incredible
                        content.
                        That’s why our teams of legal experts are on hand to deal with compliance related matters, such
                        as
                        partnership disclosure regulations and collaboration contract details.
                    </p>
                    <img class="marketing-vector-4" src="https://c.animaapp.com/G5LxjVCd/img/vector-7@2x.png" />
                    <div class="marketing-text-wrapper-27">Legal &amp; Compliance</div>
                    <img class="marketing-remove" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                </div>
            </div>
            <div class="marketing-group-31">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-25">
                        Thanks to our experienced finance department, we can take care of all things financial
                        administration –
                        for influencers who use multiple platforms or have various income streams, this is a popular
                        service
                        that is very well received.
                    </p>
                    <img class="marketing-vector-4" src="https://c.animaapp.com/G5LxjVCd/img/vector-7@2x.png" />
                    <div class="marketing-text-wrapper-27">Payment &amp; Transaction Services</div>
                    <img class="marketing-remove" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                </div>
            </div>
            <div class="marketing-group-32">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-25">
                        While you might want to jump straight into your new campaign head-first, we understand the
                        importance of
                        setting data-driven and goal-oriented KPIs before you begin your new project. Through dedicated
                        campaign
                        tracking and measurement, we can guarantee your success – from start to end, you’ll get educated
                        insights on every step of your journey.
                    </p>
                    <img class="marketing-vector-5" src="https://c.animaapp.com/G5LxjVCd/img/vector-2-3@2x.png" />
                    <div class="marketing-tracking-measurement">Tracking &amp; Measurement</div>
                    <img class="marketing-remove-3" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                </div>
            </div>
            <div class="marketing-group-33">
                <div class="marketing-overlap-5">
                    <p class="marketing-text-wrapper-25">
                        Social Media is the cornerstone to your success as an influencer, so our digital marketing teams
                        know
                        exactly how to make the most out of your platform, using paid media to support your marketing
                        campaign.
                        This is a proven strategy to optimize results that we’ve tested time and time again.
                    </p>
                    <img class="marketing-vector-6" src="https://c.animaapp.com/G5LxjVCd/img/vector-2-4@2x.png" />
                    <div class="marketing-text-wrapper-28">Social Media Advertising</div>
                    <img class="marketing-remove-4" src="https://c.animaapp.com/G5LxjVCd/img/remove-8@2x.png" />
                </div>
            </div>
        </div>
        <div class="marketing-group-200">
            <div class="marketing-group-34">
                <div class="marketing-flexcontainer-2">
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">Our knowledgeable team is ready to guide your company
                            through the
                            influencer marketing process. <br /></span>
                    </p>
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">We follow several predetermined procedures to define your
                            KPIs in
                            order to design a successful
                            campaign. <br /></span>
                    </p>
                    <p class="marketing-text">
                        <span class="marketing-text-wrapper-5">We choose the right content creators and influencers who
                            can help
                            you reach your goals after we&#39;ve
                            determined your target audience.</span>
                    </p>
                </div>
                <div class="marketing-overlap-6">
                    <img class="marketing-rectangle-7"
                        src="https://c.animaapp.com/G5LxjVCd/img/rectangle-5486@2x.png" />
                    <p class="marketing-create-successful">Create Successful Influencer Marketing Campaigns</p>
                </div>
                <div class="marketing-group-35">
                    <div class="marketing-overlap-group-6">
                        <div class="marketing-text-wrapper-29">Exclusive Influencers</div>
                        <div class="marketing-img-wrapper">
                            <img class="marketing-vuesax-bold-arrow-up"
                                src="https://c.animaapp.com/G5LxjVCd/img/vuesax-bold-arrow-up-4@2x.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="marketing-group-63">
                <div class="marketing-group-54">
                    <div class="marketing-overlap-group-9">
                        <div class="marketing-text-wrapper-37">Statistics</div>
                        <div class="marketing-text-wrapper-38">See Video Statistics</div>
                        <img class="marketing-kebab-menu"
                            src="https://c.animaapp.com/G5LxjVCd/img/kebab-menu-2@2x.png" />
                        <div class="marketing-overlap-16">
                            <img class="marketing-ellipse-2"
                                src="https://c.animaapp.com/G5LxjVCd/img/ellipse-604-1@2x.png" />
                            <div class="marketing-group-55">
                                <div class="marketing-total-views">Total&nbsp;&nbsp;Views</div>
                                <div class="marketing-text-wrapper-39">+28%</div>
                            </div>
                        </div>
                        <div class="marketing-group-56">
                            <div class="marketing-group-57">
                                <div class="marketing-text-wrapper-40">Total&nbsp;&nbsp;Views</div>
                                <div class="marketing-rectangle-8"></div>
                            </div>
                            <div class="marketing-group-58">
                                <div class="marketing-text-wrapper-40">Targeting</div>
                                <div class="marketing-rectangle-9"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="marketing-group-59">
                    <div class="marketing-overlap-14">
                        <div class="marketing-rectangle-10"></div>
                        <img class="marketing-my-project-copy"
                            src="https://c.animaapp.com/G5LxjVCd/img/my-project-copy-1-1@2x.png" />
                    </div>
                </div>
                <div class="marketing-group-60">
                    <div class="marketing-overlap-17">
                        <div class="marketing-rectangle-11"></div>
                        <div class="marketing-rectangle-12"></div>
                        <img class="marketing-portrait-happy"
                            src="https://c.animaapp.com/G5LxjVCd/img/portrait-happy-businessman-using-smartphone-white-background-1-1@2x.png" />
                        <div class="marketing-ellipse-3"></div>
                        <div class="marketing-group-61">
                            <img class="marketing-mask-group-2"
                                src="https://c.animaapp.com/G5LxjVCd/img/mask-group-2@2x.png" />
                            <div class="marketing-group-62">
                                <div class="marketing-text-wrapper-41">Sajon.co</div>
                                <div class="marketing-text-wrapper-42">FETISH•Come Check This</div>
                            </div>
                            <img class="marketing-kebab-menu-2"
                                src="https://c.animaapp.com/G5LxjVCd/img/kebab-menu-3@2x.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p class="marketing-a-step-by-step">
                A Step-by-step Description Of Your Next Influencer Campaign With Us Can Be Found Below:
            </p>
            <div class="marketing-group-36">
                <div class="marketing-group-37">
                    <div class="marketing-overlap-group-2">
                        <p class="marketing-p"><span class="marketing-text-wrapper">01. </span> <span
                                class="marketing-span">SET KPIS.</span></p>
                        <p class="marketing-text-wrapper-3">
                            First things first, we’ll work with you to clarify your vision for the campaign, and
                            establish your
                            objectives.
                        </p>
                    </div>
                </div>
            </div>
            <div class="marketing-overlap-7">
                <div class="marketing-group-38">
                    <div class="marketing-overlap-group-2">
                        <p class="marketing-p"><span class="marketing-text-wrapper">02. </span> <span
                                class="marketing-span">TARGET AUDIENCE.</span></p>
                        <p class="marketing-text-wrapper-30">
                            Next, we’ll help you to identify your target audience so that your marketing campaign can
                            grab their
                            attention.
                        </p>
                    </div>
                </div>
                <img class="marketing-line-3" src="https://c.animaapp.com/G5LxjVCd/img/line-55@2x.png" />
            </div>
            <div class="marketing-overlap">
                <div class="marketing-group">
                    <div class="marketing-group-2">
                        <div class="marketing-overlap-group-wrapper">
                            <div class="marketing-overlap-group">
                                <p class="marketing-p">
                                    <span class="marketing-text-wrapper">04. </span> <span
                                        class="marketing-span">EXECUTING PROMOTIONS.</span>
                                </p>
                                <p class="marketing-text-wrapper-2">
                                    Our content creators and influencers can build engaging, inspiring campaigns for
                                    your goods, and our
                                    experienced teams have dedicated project leads who will manage each promotion.
                                </p>
                            </div>
                        </div>
                        <img class="marketing-line" src="https://c.animaapp.com/G5LxjVCd/img/line-57@2x.png" />
                    </div>
                    <div class="marketing-overlap-wrapper">
                        <div class="marketing-overlap-group">
                            <p class="marketing-p"><span class="marketing-text-wrapper">05. </span> <span
                                    class="marketing-span">CONTENT APPROVAL.</span></p>
                            <p class="marketing-text-wrapper-2">
                                Our team cooperate closely with selected influencers, to preview their content before
                                it’s published,
                                checking for errors and providing feedback where needed.
                            </p>
                        </div>
                    </div>
                    <div class="marketing-div-wrapper">
                        <div class="marketing-overlap-group">
                            <p class="marketing-p"><span class="marketing-text-wrapper">06. </span> <span
                                    class="marketing-span">CAMPAIGN REPORTING.</span></p>
                            <p class="marketing-text-wrapper-2">
                                To measure the success of your campaign, we not only track your predefined KPIs, but we
                                also take into
                                account the content reach, brand mentions and the performance of your social media
                                initiatives.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="marketing-group-3">
                    <div class="marketing-overlap-group-2">
                        <p class="marketing-p"><span class="marketing-text-wrapper">03. </span> <span
                                class="marketing-span">SELECTING INFLUENCERS.</span></p>
                        <p class="marketing-text-wrapper-3">
                            Once we’ve established who your target audience is, we’ll help you reach them by selecting
                            the right
                            influencers.
                        </p>
                    </div>
                </div>
                <img class="marketing-img" src="https://c.animaapp.com/G5LxjVCd/img/line-55@2x.png" />
                <img class="marketing-line-2" src="https://c.animaapp.com/G5LxjVCd/img/line-57@2x.png" />
            </div>
            <img class="marketing-line-6" src="https://c.animaapp.com/G5LxjVCd/img/line-54-1@2x.png" />
        </div>
        <OurWork />
        <img class="marketing-dots-4" src="https://c.animaapp.com/G5LxjVCd/img/dots-2@2x.png" />
        <img class="marketing-dots-5" src="https://c.animaapp.com/G5LxjVCd/img/dots-3@2x.png" />
       
    </Layout>
</template>