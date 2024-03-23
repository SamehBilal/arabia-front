<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "./sections/page-header.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            title: "Let's Talk",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Contact Us",
                    active: true
                }
            ],
            desc: "Whatever your question, we're here to help. Whether you&#39;re an Influencer, an Agency or an advertiser wishing to work with us or contribute to our Case Studies, please get in touch - we'd love to work with you. If you'd like to work with a leading Agency on your next campaign please use this form to get a quote ",
            extra: "Please use the form below to get in touch. You’ll hear back from us within one business day."
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
        <div class="page-contact-overlap-wrapper">
          <div class="page-contact-overlap-4">
            <div class="page-contact-first-name-field">
              <p class="page-contact-comments-questions">
                <span class="page-contact-text-wrapper-11">Comments / Questions </span> <span class="page-contact-text-wrapper-12">*</span>
              </p>
              <div class="page-contact-overlap-group-3"><div class="page-contact-text-wrapper-13">Description</div></div>
            </div>
            <div class="page-contact-message-wrapper">
              <img class="page-contact-message" src="https://c.animaapp.com/6lzhwbE0/img/message@2x.png" />
            </div>
            <div class="page-contact-first-name-field-2">
              <div class="page-contact-SEND-MESSAGE-wrapper"><div class="page-contact-SEND-MESSAGE">Send Message</div></div>
            </div>
            <div class="page-contact-group-14">
              <div class="page-contact-first-name-field-3">
                <div class="page-contact-overlap-group-4">
                  <p class="page-contact-p">
                    <span class="page-contact-text-wrapper-11">How did you hear about us? </span>
                    <span class="page-contact-text-wrapper-12">*<br /></span>
                  </p>
                  <div class="page-contact-div-2"></div>
                  <img class="page-contact-frame-3" src="https://c.animaapp.com/6lzhwbE0/img/frame-4@2x.png" />
                  <div class="page-contact-text-wrapper-14">Please Select</div>
                </div>
              </div>
              <p class="page-contact-whatsapp-wechat">
                <span class="page-contact-text-wrapper-15">WhatsApp, WeChat (</span>
                <span class="page-contact-text-wrapper-16">optional</span>
                <span class="page-contact-text-wrapper-15">)</span>
              </p>
              <div class="page-contact-div-2"><div class="page-contact-country-code">+country Code</div></div>
            </div>
            <div class="page-contact-group-15">
              <div class="page-contact-first-name-field-4">
                <p class="page-contact-p"><span class="page-contact-text-wrapper-11">Subject </span> <span class="page-contact-text-wrapper-12">*</span></p>
                <div class="page-contact-overlap-group-5"><div class="page-contact-text-wrapper-17">Subject</div></div>
              </div>
              <p class="page-contact-email-address">
                <span class="page-contact-text-wrapper-11">Email Address </span> <span class="page-contact-text-wrapper-12">*</span>
              </p>
              <div class="page-contact-overlap-5"><div class="page-contact-text-wrapper-18">Joe@mail.com</div></div>
            </div>
            <div class="page-contact-group-16">
              <div class="page-contact-div-2"><p class="page-contact-text-wrapper-19">Content Creator , Brand, or Agency...</p></div>
              <p class="page-contact-full-name">
                <span class="page-contact-text-wrapper-20">Full Name </span> <span class="page-contact-text-wrapper-21">*</span>
              </p>
              <div class="page-contact-overlap-6"><div class="page-contact-text-wrapper-22">Joe Anderson</div></div>
              <p class="page-contact-which-one-do-you">
                <span class="page-contact-text-wrapper-20">Which one do you represent : </span>
                <span class="page-contact-text-wrapper-21">*</span>
              </p>
            </div>
          </div>
        </div>
        <img class="page-contact-dots" src="https://c.animaapp.com/6lzhwbE0/img/dots@2x.png" />
        <img class="page-contact-dots-2" src="https://c.animaapp.com/6lzhwbE0/img/dots-1@2x.png" />
    </Layout>
</template>