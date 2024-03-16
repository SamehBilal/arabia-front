<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import DropZone from "@/components/dropzone.vue";
import useVuelidate from "@vuelidate/core";
import Multiselect from "@vueform/multiselect";

import {
  required,
  helpers,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum,
} from "@vuelidate/validators";


/**
 * Dripicons component
 */
export default {
  page: {
    title: "Add Icon",
    meta: [{ name: "description" }]
  },
  components: { Layout, PageHeader,DropZone,Multiselect },
  data() {
    return {
      title: "Add Icon",
      items: [
        {
          text: "Dashboard",
          href: "/"
        },
        {
          text: "Add Icon",
          active: true
        }
      ],
      options: [
        "Social Media",
        "Website",
        "tournament",
      ],
      form: {
        fname: "",
        slug: "",
        lname: "",
        city: "",
        state: "",
        zipcode: "",
      },
      tooltipform: {
        fname: "",
        slug: "",
        lname: "",
        username: "",
        city: "",
        state: "",
      },
      range: {
        minlen: "",
        maxlength: "",
        between: "",
        minval: "",
        maxval: "",
        rangeval: "",
        expr: "",
      },
      typeform: {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        url: "",
        digit: "",
        number: "",
        alphanum: "",
        textarea: "",
      },
      submitted: false,
      submitform: false,
      submit: false,
      typesubmit: false
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    form: {
      fname: {
        required: helpers.withMessage("Full Name is required", required),
      },
      slug: {
        required: helpers.withMessage("Slug is required", required),
      },
      lname: {
        required: helpers.withMessage("Last Name is required", required),
      },
      city: { required: helpers.withMessage("Platform is required", required) },
      state: { required: helpers.withMessage("State is required", required) },
      zipcode: {
        required: helpers.withMessage("Zipcode is required", required),
      },
    },
    tooltipform: {
      fname: { required: helpers.withMessage("FUll name is required", required) },
      slug: { required: helpers.withMessage("Slug is required", required) },
      lname: { required: helpers.withMessage("Lname is required", required) },
      username: {
        required: helpers.withMessage("Username is required", required),
      },
      city: { required: helpers.withMessage("Platform is required", required) },
      state: { required: helpers.withMessage("State is required", required) },
    },
    range: {
      minlen: {
        required: helpers.withMessage("Minlen is required", required),
        minLength: minLength(6),
      },
      maxlength: {
        required: helpers.withMessage("Maxlength is required", required),
        maxLength: maxLength(6),
      },
      between: {
        required: helpers.withMessage("Between is required", required),
        minLength: minLength(5),
        maxLength: maxLength(10),
      },
      minval: {
        required: helpers.withMessage("Minval is required", required),
        minValue: minValue(6),
      },
      maxval: {
        required: helpers.withMessage("Maxval is required", required),
        maxValue: maxValue(6),
      },
      rangeval: {
        required: helpers.withMessage("Rangeval is required", required),
        minValue: minValue(6),
        maxValue: maxValue(100),
      },
      expr: { required: helpers.withMessage("Expr is required", required) },
    },
    typeform: {
      name: { required: helpers.withMessage("Name is required", required) },
      password: {
        required: helpers.withMessage("Password is required", required),
        minLength: minLength(6),
      },
      confirmPassword: {
        required: helpers.withMessage("ConfirmPassword is required", required),
        sameAsPassword: sameAs("password"),
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email,
      },
      url: { required: helpers.withMessage("Url is required", required), url },
      digit: {
        required: helpers.withMessage("Digit is required", required),
        numeric,
      },
      number: {
        required: helpers.withMessage("Number is required", required),
        numeric,
      },
      alphanum: {
        required: helpers.withMessage("Alphanum is required", required),
        alphaNum,
      },
      textarea: {
        required: helpers.withMessage("Textarea is required", required),
      },
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
    },

    tooltipForm() {
      this.submitform = true;
      this.v$.$touch();
    },

    /**
     * Range validation form submit
     */
    // eslint-disable-next-line no-unused-vars
    rangeform(e) {
      this.submit = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
    /**
     * Validation type submit
     */
    // eslint-disable-next-line no-unused-vars
    typeForm(e) {
      this.typesubmit = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$touch;
      if (this.$invalid) {
        return;
      } else {
        const name = this.customers.name;
        const balance = this.customers.balance;
        const email = this.customers.email;
        const phone = this.customers.phone;
        const date = this.customers.date;
        const active = this.customers.active;
        this.customersData.push({
          name,
          email,
          balance,
          phone,
          date,
          active,
          password,
          password_confirmation
        });
        this.showmodal = false;
      }
      this.submitted = false;
      this.customers = {};
    },
    /**
     * hode mondal on close
     */
    // eslint-disable-next-line no-unused-vars
    hideModal(e) {
      this.submitted = false;
      this.showmodal = false;
      this.contacts = {};
    },

    /**
     * Filter the data of search
     */
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <!-- <BCol lg="9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Add Icon</h4>
            <p class="card-title-desc mb-2">
              <code>
                copy the icon code to icon name input.
              </code>
            </p>

            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-alarm"></i> dripicons-alarm
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-align-center"></i> dripicons-align-center
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-align-justify"></i> dripicons-align-justify
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-align-left"></i> dripicons-align-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-align-right"></i> dripicons-align-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-anchor"></i> dripicons-anchor
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-archive"></i> dripicons-archive
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-down"></i> dripicons-arrow-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-left"></i> dripicons-arrow-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-right"></i> dripicons-arrow-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-thin-down"></i> dripicons-arrow-thin-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-thin-left"></i> dripicons-arrow-thin-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-thin-right"></i> dripicons-arrow-thin-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-thin-up"></i> dripicons-arrow-thin-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-arrow-up"></i> dripicons-arrow-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-article"></i> dripicons-article
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-backspace"></i> dripicons-backspace
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-basket"></i> dripicons-basket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-basketball"></i> dripicons-basketball
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-battery-empty"></i> dripicons-battery-empty
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-battery-full"></i> dripicons-battery-full
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-battery-low"></i> dripicons-battery-low
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-battery-medium"></i> dripicons-battery-medium
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-bell"></i> dripicons-bell
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-blog"></i> dripicons-blog
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-bluetooth"></i> dripicons-bluetooth
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-bold"></i> dripicons-bold
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-bookmark"></i> dripicons-bookmark
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-bookmarks"></i> dripicons-bookmarks
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-box"></i> dripicons-box
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-briefcase"></i> dripicons-briefcase
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-brightness-low"></i> dripicons-brightness-low
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-brightness-max"></i> dripicons-brightness-max
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-brightness-medium"></i> dripicons-brightness-medium
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-broadcast"></i> dripicons-broadcast
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-browser"></i> dripicons-browser
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-browser-upload"></i> dripicons-browser-upload
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-brush"></i> dripicons-brush
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-calendar"></i> dripicons-calendar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-camcorder"></i> dripicons-camcorder
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-camera"></i> dripicons-camera
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-card"></i> dripicons-card
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-cart"></i> dripicons-cart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-checklist"></i> dripicons-checklist
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-checkmark"></i> dripicons-checkmark
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-chevron-down"></i> dripicons-chevron-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-chevron-left"></i> dripicons-chevron-left
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-chevron-right"></i> dripicons-chevron-right
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-chevron-up"></i> dripicons-chevron-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-clipboard"></i> dripicons-clipboard
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-clock"></i> dripicons-clock
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-clockwise"></i> dripicons-clockwise
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-cloud"></i> dripicons-cloud
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-cloud-download"></i> dripicons-cloud-download
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-cloud-upload"></i> dripicons-cloud-upload
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-code"></i> dripicons-code
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-contract"></i> dripicons-contract
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-contract-2"></i> dripicons-contract-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-conversation"></i> dripicons-conversation
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-copy"></i> dripicons-copy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-crop"></i> dripicons-crop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-cross"></i> dripicons-cross
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-crosshair"></i> dripicons-crosshair
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-cutlery"></i> dripicons-cutlery
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-device-desktop"></i> dripicons-device-desktop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-device-mobile"></i> dripicons-device-mobile
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-device-tablet"></i> dripicons-device-tablet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-direction"></i> dripicons-direction
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-disc"></i> dripicons-disc
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-document"></i> dripicons-document
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-document-delete"></i> dripicons-document-delete
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-document-edit"></i> dripicons-document-edit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-document-new"></i> dripicons-document-new
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-document-remove"></i> dripicons-document-remove
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-dot"></i> dripicons-dot
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-dots-2"></i> dripicons-dots-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-dots-3"></i> dripicons-dots-3
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-download"></i> dripicons-download
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-duplicate"></i> dripicons-duplicate
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-enter"></i> dripicons-enter
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-exit"></i> dripicons-exit
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-expand"></i> dripicons-expand
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-expand-2"></i> dripicons-expand-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-experiment"></i> dripicons-experiment
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-export"></i> dripicons-export
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-feed"></i> dripicons-feed
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-flag"></i> dripicons-flag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-flashlight"></i> dripicons-flashlight
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-folder"></i> dripicons-folder
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-folder-open"></i> dripicons-folder-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-forward"></i> dripicons-forward
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-gaming"></i> dripicons-gaming
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-gear"></i> dripicons-gear
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-graduation"></i> dripicons-graduation
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-graph-bar"></i> dripicons-graph-bar
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-graph-line"></i> dripicons-graph-line
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-graph-pie"></i> dripicons-graph-pie
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-headset"></i> dripicons-headset
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-heart"></i> dripicons-heart
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-help"></i> dripicons-help
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-home"></i> dripicons-home
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-hourglass"></i> dripicons-hourglass
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-inbox"></i> dripicons-inbox
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-information"></i> dripicons-information
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-italic"></i> dripicons-italic
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-jewel"></i> dripicons-jewel
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-lifting"></i> dripicons-lifting
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-lightbulb"></i> dripicons-lightbulb
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-link"></i> dripicons-link
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-link-broken"></i> dripicons-link-broken
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-list"></i> dripicons-list
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-loading"></i> dripicons-loading
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-location"></i> dripicons-location
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-lock"></i> dripicons-lock
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-lock-open"></i> dripicons-lock-open
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-mail"></i> dripicons-mail
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-map"></i> dripicons-map
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-loop"></i> dripicons-media-loop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-next"></i> dripicons-media-next
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-pause"></i> dripicons-media-pause
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-play"></i> dripicons-media-play
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-previous"></i> dripicons-media-previous
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-record"></i> dripicons-media-record
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-shuffle"></i> dripicons-media-shuffle
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-media-stop"></i> dripicons-media-stop
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-medical"></i> dripicons-medical
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-menu"></i> dripicons-menu
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-message"></i> dripicons-message
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-meter"></i> dripicons-meter
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-microphone"></i> dripicons-microphone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-minus"></i> dripicons-minus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-monitor"></i> dripicons-monitor
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-move"></i> dripicons-move
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-music"></i> dripicons-music
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-network-1"></i> dripicons-network-1
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-network-2"></i> dripicons-network-2
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-network-3"></i> dripicons-network-3
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-network-4"></i> dripicons-network-4
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-network-5"></i> dripicons-network-5
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-pamphlet"></i> dripicons-pamphlet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-paperclip"></i> dripicons-paperclip
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-pencil"></i> dripicons-pencil
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-phone"></i> dripicons-phone
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-photo"></i> dripicons-photo
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-photo-group"></i> dripicons-photo-group
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-pill"></i> dripicons-pill
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-pin"></i> dripicons-pin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-plus"></i> dripicons-plus
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-power"></i> dripicons-power
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-preview"></i> dripicons-preview
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-print"></i> dripicons-print
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-pulse"></i> dripicons-pulse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-question"></i> dripicons-question
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-reply"></i> dripicons-reply
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-reply-all"></i> dripicons-reply-all
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-return"></i> dripicons-return
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-retweet"></i> dripicons-retweet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-rocket"></i> dripicons-rocket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-scale"></i> dripicons-scale
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-search"></i> dripicons-search
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-shopping-bag"></i> dripicons-shopping-bag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-skip"></i> dripicons-skip
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-stack"></i> dripicons-stack
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-star"></i> dripicons-star
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-stopwatch"></i> dripicons-stopwatch
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-store"></i> dripicons-store
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-suitcase"></i> dripicons-suitcase
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-swap"></i> dripicons-swap
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-tag"></i> dripicons-tag
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-tag-delete"></i> dripicons-tag-delete
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-tags"></i> dripicons-tags
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-thumbs-down"></i> dripicons-thumbs-down
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-thumbs-up"></i> dripicons-thumbs-up
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-ticket"></i> dripicons-ticket
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-time-reverse"></i> dripicons-time-reverse
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-to-do"></i> dripicons-to-do
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-toggles"></i> dripicons-toggles
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-trash"></i> dripicons-trash
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-trophy"></i> dripicons-trophy
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-upload"></i> dripicons-upload
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-user"></i> dripicons-user
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-user-group"></i> dripicons-user-group
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-user-id"></i> dripicons-user-id
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-vibrate"></i> dripicons-vibrate
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-view-apps"></i> dripicons-view-apps
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-view-list"></i> dripicons-view-list
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-view-list-large"></i> dripicons-view-list-large
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-view-thumb"></i> dripicons-view-thumb
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-volume-full"></i> dripicons-volume-full
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-volume-low"></i> dripicons-volume-low
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-volume-medium"></i> dripicons-volume-medium
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-volume-off"></i> dripicons-volume-off
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-wallet"></i> dripicons-wallet
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-warning"></i> dripicons-warning
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-web"></i> dripicons-web
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-weight"></i> dripicons-weight
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-wifi"></i> dripicons-wifi
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-wrong"></i> dripicons-wrong
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-zoom-in"></i> dripicons-zoom-in
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="dripicons-zoom-out"></i> dripicons-zoom-out
              </div>
            </div>
          </div>
        </div>
      </BCol> -->
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BTabs justified nav-class="nav-tabs-custom" content-class="p-3 text-muted">
              <BTab active>
                <template #title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Image</span>
                </template>
                <div class="mb-3">
                  <label>Image</label>
                  <!-- file upload -->
                  <DropZone />
                </div>
              </BTab>
              <BTab>
                <template #title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Icon</span>
                </template>
                <BRow>
                <BCol md="12">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Icon Code</label>
                    <BInputGroup>
                      <BInputGroupPrepend is-text><i class="ri-code-line"></i></BInputGroupPrepend>
                      <BFormInput v-model="tooltipform.username" placeholder="Icon Code" :class="{
                          'is-invalid': submitform && v$.tooltipform.username.$error,
                          'is-valid': submitform && !v$.tooltipform.username.$error,
                        }" />
                      <div v-if="submitted && v$.tooltipform.username.$error" class="invalid-feedback">
                        <span v-if="v$.tooltipform.username.required.$message">{{
                          v$.tooltipform.username.required.$message }}</span>
                      </div>
                    </BInputGroup>
                  </div>
                </BCol>
              </BRow>
              </BTab>
              <BRow>
                <BCol md="12">
                  <BForm class="needs-validation" @submit.prevent="tooltipForm">
                    <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Icon Name</label>
                    <BInputGroup>
                      <BInputGroupPrepend is-text><i class="ri-brush-line"></i></BInputGroupPrepend>
                      <BFormInput v-model="tooltipform.username" placeholder="Icon Name" :class="{
                          'is-invalid': submitform && v$.tooltipform.username.$error,
                          'is-valid': submitform && !v$.tooltipform.username.$error,
                        }" />
                      <div v-if="submitted && v$.tooltipform.username.$error" class="invalid-feedback">
                        <span v-if="v$.tooltipform.username.required.$message">{{
                          v$.tooltipform.username.required.$message }}</span>
                      </div>
                    </BInputGroup>
                  </div>
                    <div class="mb-3">
                      <label>Type</label>
                      <Multiselect v-model="value1" :options="options" mode="tags"></Multiselect>
                    </div>
                    <BButton variant="primary" type="submit">Submit form</BButton>
                  </BForm>
                  </BCol>
                  </BRow>
            </BTabs>
            
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    
    <!-- end row -->
  </Layout>
</template>