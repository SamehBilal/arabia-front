<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import appConfig from "@/app.config";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import DropZone from "@/components/dropzone.vue";


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
 * Form validation component
 */
export default {
  page: {
    title: "Add Influencer",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader,DropZone,Multiselect },
  data() {
    return {
      title: "Add Influencer",
      items: [
        {
          text: "Dashboard",
          href: "/"
        },
        {
          text: "Add Influencer",
          active: true
        }
      ],
      customersData: [
        {
          name: "Carolyn Harvey",
          email: "CarolynHarvey@rhyta.com",
          phone: "580-464-4694",
          balance: "$ 3245",
          date: "06 Apr, 2024",
          active: true
        },
        {
          name: "Angelyn Hardin",
          email: "AngelynHardin@dayrep.com",
          phone: "913-248-2690",
          balance: "$ 2435",
          date: "05 Apr, 2024",
          active: true
        },
        {
          name: "Carrie Thompson",
          email: "CarrieThompson@rhyta.com",
          phone: "734-819-9286",
          balance: "$ 2653",
          date: "04 Apr, 2024",
          active: false
        },
        {
          name: "Kathleen Haller",
          email: "KathleenHaller@dayrep.com",
          phone: "313-742-3333",
          balance: "$ 2135",
          date: "03 Apr, 2024",
          active: true
        },
        {
          name: "Martha Beasley",
          email: "MarthaBeasley@teleworm.us",
          phone: "301-330-5745",
          balance: "$ 2698",
          date: "02 Apr, 2024",
          active: true
        },
        {
          name: "Kathryn Hudson",
          email: "KathrynHudson@armyspy.com",
          phone: "414-453-5725",
          balance: "$ 2758",
          date: "02 Apr, 2024",
          active: true
        },
        {
          name: "Robert Bott",
          email: "RobertBott@armyspy.com",
          phone: "712-237-9899",
          balance: "$ 2836",
          date: "01 Apr, 2024",
          active: true
        },
        {
          name: "Mary McDonald",
          email: "MaryMcDonald@armyspy.com",
          phone: "317-510-25554",
          balance: "$ 3245",
          date: "31 Mar, 2024",
          active: true
        },
        {
          name: "Keith Rainey",
          email: "KeithRainey@jourrapide.com",
          phone: "214-712-1810",
          balance: "$ 3125",
          date: "30 Mar, 2024",
          active: true
        },
        {
          name: "Anthony Russo",
          email: "AnthonyRusso@jourrapide.com",
          phone: "412-371-8864",
          balance: "$ 2456",
          date: "30 Mar, 2024",
          active: true
        },
        {
          name: "Donna Betz",
          email: "DonnaBetz@jourrapide.com",
          phone: "626-583-5779",
          balance: "$ 3423",
          date: "29 Mar, 2024",
          active: true
        },
        {
          name: "Angie Andres",
          email: "AngieAndres@armyspy.com",
          phone: "213-494-4527",
          balance: "$ 3245",
          date: "28 Apr, 2024",
          active: true
        }
      ],
      customers: {
        name: "",
        email: "",
        balance: "",
        phone: "",
        date: "",
        active: "",
      },
      showmodal: false,
      options: [
        "Hosts",
        "Casters",
        "Analysts",
      ],
      options1: [
        "Facebook",
        "Twitter",
        "Instagram",
        "Tiktok",
        "Twitch",
        "Youtube",
        "Snapchat",
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
      <BCol lg="9">
        <BCard no-body>
          <BCardBody>
            <!-- <BCardTitle>Bootstrap Validation - Normal</BCardTitle>

            <p class="card-title-desc">
              Provide valuable, actionable feedback to your users with HTML5
              form validation–available in all our supported browsers.
            </p> -->
            <BForm class="needs-validation" @submit.prevent="formSubmit">
              <BRow>
                <BCol md="12">
                  <div class="mb-3">
                    <label>Image</label>
                    <!-- file upload -->
                    <DropZone />
                  </div>
                  <div class="mb-3">
                    <label>Full name</label>
                    <BFormInput v-model="form.fname" placeholder="Full name" :class="{
                      'is-invalid': submitted && v$.form.fname.$error,
                      'is-valid': submitted && !v$.form.fname.$error,

                    }" />
                    <div v-if="submitted && v$.form.fname.$error" class="invalid-feedback">
                      <span v-if="v$.form.fname.required.$message">
                        {{ v$.form.fname.required.$message }}
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label>Slug</label>
                    <BFormInput v-model="form.slug" placeholder="Slug" :class="{
                      'is-invalid': submitted && v$.form.slug.$error,
                      'is-valid': submitted && !v$.form.slug.$error,

                    }" />
                    <div v-if="submitted && v$.form.slug.$error" class="invalid-feedback">
                      <span v-if="v$.form.slug.required.$message">
                        {{ v$.form.slug.required.$message }}
                      </span>
                    </div>
                  </div>
                  <!-- <div class="mb-3">
                    <label>Type</label>
                    <Multiselect v-model="value1" :options="options" mode="tags"></Multiselect>
                  </div> -->

                  <div class="mb-3">
                    <h5 class="font-size-14">Brand Collaborations</h5>

                    <div class="row">
                      <div class="col-lg-4 col-sm-6">
                        <div>
                          <label class="card-radio-label mb-3">
                            <input type="radio" name="pay-method" id="pay-methodoption1" class="card-radio-input" />

                            <div class="card-radio">
                              <!-- <i class="fab fa-cc-mastercard font-size-24 align-middle me-2"></i> -->
                              <img src="@/assets/images/companies/img-1.png" alt class="align-middle me-2 avatar-sm" />
                              <span>EA</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div class="col-lg-4 col-sm-6">
                        <div>
                          <label class="card-radio-label mb-3">
                            <input type="radio" name="pay-method" id="pay-methodoption2" class="card-radio-input" />

                            <div class="card-radio">
                              <img src="@/assets/images/companies/img-2.png" alt class="align-middle me-2 avatar-sm" />
                              <span>Epic</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div class="col-lg-4 col-sm-6">
                        <div>
                          <label class="card-radio-label mb-3">
                            <input type="radio" name="pay-method" id="pay-methodoption3" class="card-radio-input" checked />

                            <div class="card-radio">
                              <img src="@/assets/images/companies/img-3.png" alt class="align-middle me-2 avatar-sm" />
                              <span>Activision</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <div class="mb-3">
                    <h5 class="font-size-14">Favourite Games</h5>

                    <div class="row">
                      <div class="col-lg-4 col-sm-6">
                        <div>
                          <label class="card-radio-label mb-3">
                            <input type="radio" name="pay-method1" id="pay-methodoption4" class="card-radio-input" />

                            <div class="card-radio">
                               <i class="fab fa-cc-mastercard font-size-24 align-middle me-2"></i>
                              <img src="@/assets/images/companies/img-1.png" alt class="align-middle me-2 avatar-sm" />
                              <span>EA</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div class="col-lg-4 col-sm-6">
                        <div>
                          <label class="card-radio-label mb-3">
                            <input type="radio" name="pay-method1" id="pay-methodoption5" class="card-radio-input" checked />

                            <div class="card-radio">
                              <img src="@/assets/images/companies/img-2.png" alt class="align-middle me-2 avatar-sm" />
                              <span>Epic</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div class="col-lg-4 col-sm-6">
                        <div>
                          <label class="card-radio-label mb-3">
                            <input type="radio" name="pay-method1" id="pay-methodoption6" class="card-radio-input"  />

                            <div class="card-radio">
                              <img src="@/assets/images/companies/img-3.png" alt class="align-middle me-2 avatar-sm" />
                              <span>Activision</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <!-- <div class="mb-3">
                    <h5 class="card-title">Tournaments</h5>
                    <p class="card-title-desc">It will be as simple as occidental in fact</p>
                    <div class="row">
                      <div class="col-lg-4 col-sm-6">
                        <div class="card border rounded active shipping-address">
                          <div class="card-body">
                            <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                            <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-1.png" alt class="align-middle me-2 avatar-sm" />  Tournaments 1</h5>

                            <h5 class="font-size-14">Host</h5>
                            <p class="mb-1">PUBG Mobile World Pro League - Arabia 2022</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6">
                        <div class="card border rounded shipping-address">
                          <div class="card-body">
                            <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Add</a>
                            <h5 class="font-size-14 mb-4">Add Tournament</h5>

                            <h5 class="font-size-14">
                              Add new tournament by filling the data
                            </h5>
                            <p class="mb-1">
                              <br>
                            </p>
                            <p class="mb-0">
                              <a href="javascript:void(0);" class="btn btn-success mb-2" @click="showmodal = true">
                                <i class="mdi mdi-plus me-2"></i> Add Tournament
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <BRow>
                    <BCol md="10">
                      <div class="mb-3">
                        <label>Videos</label>
                        <div>
                          <BFormInput v-model="typeform.url" placeholder="Videos" :class="{
                            'is-invalid': typesubmit && v$.typeform.url.$error,
                            'is-valid': typesubmit && !v$.typeform.url.$error,
                          }" />
                          <div v-for="(item, index) in v$.typeform.url.$errors" :key="index" class="invalid-feedback">
                            <span v-if="item.$message">{{ item.$message }}</span>
                          </div>
                        </div>
                      </div>
                    </BCol>
                    <BCol md="1">
                      <div class="mb-3">
                        <label>Action</label>
                      
                      <div>
                        <BButtonGroup class="btn-group-example mb-3">
                        <BButton variant="primary" class="w-xs">
                          <i class="mdi mdi-plus"></i>
                        </BButton>
                        <BButton variant="light" class="w-xs">
                          <i class="mdi mdi-minus"></i>
                        </BButton>
                      </BButtonGroup>
                      </div>
                    </div>
                    </BCol>
                  </BRow>
                  <BRow>
                    <BCol md="10">
                      <div class="mb-3">
                        <label>Reels</label>
                        <div>
                          <BFormInput v-model="typeform.url" placeholder="Videos" :class="{
                            'is-invalid': typesubmit && v$.typeform.url.$error,
                            'is-valid': typesubmit && !v$.typeform.url.$error,
                          }" />
                          <div v-for="(item, index) in v$.typeform.url.$errors" :key="index" class="invalid-feedback">
                            <span v-if="item.$message">{{ item.$message }}</span>
                          </div>
                        </div>
                      </div>
                    </BCol>
                    <BCol md="1">
                      <div class="mb-3">
                        <label>Action</label>
                      
                      <div>
                        <BButtonGroup class="btn-group-example mb-3">
                        <BButton variant="primary" class="w-xs">
                          <i class="mdi mdi-plus"></i>
                        </BButton>
                        <BButton variant="light" class="w-xs">
                          <i class="mdi mdi-minus"></i>
                        </BButton>
                      </BButtonGroup>
                      </div>
                    </div>
                    </BCol>
                  </BRow>
                  <BRow>
                    <BCol md="10">
                      <div class="mb-3">
                        <label>Posts</label>
                        <div>
                          <BFormInput v-model="typeform.url" placeholder="Videos" :class="{
                            'is-invalid': typesubmit && v$.typeform.url.$error,
                            'is-valid': typesubmit && !v$.typeform.url.$error,
                          }" />
                          <div v-for="(item, index) in v$.typeform.url.$errors" :key="index" class="invalid-feedback">
                            <span v-if="item.$message">{{ item.$message }}</span>
                          </div>
                        </div>
                      </div>
                    </BCol>
                    <BCol md="1">
                      <div class="mb-3">
                        <label>Action</label>
                      
                      <div>
                        <BButtonGroup class="btn-group-example mb-3">
                          <BButton variant="primary" class="w-xs">
                            <i class="mdi mdi-plus"></i>
                          </BButton>
                          <BButton variant="light" class="w-xs">
                            <i class="mdi mdi-minus"></i>
                          </BButton>
                        </BButtonGroup>
                      </div>
                    </div>
                    </BCol>
                  </BRow>
                </BCol>
              </BRow>
              <BRow>
                <BCol md="4">
                  <div class="mb-3">
                    <label>Platform</label>
                    <Multiselect v-model="form.city" :class="{
                      'is-invalid': submitted && v$.form.city.$error,
                      'is-valid': submitted && !v$.form.city.$error,
                    }" :options="options1"></Multiselect>
                    
                    <div v-if="submitted && v$.form.city.$error" class="invalid-feedback">
                      <span v-if="v$.form.city.required.$message">{{
                        v$.form.city.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
                <BCol md="2">
                  <div class="mb-3">
                    <label>Stats</label>
                    <BFormInput v-model="form.state" placeholder="Stats" :class="{
                      'is-invalid': submitted && v$.form.state.$error,
                      'is-valid': submitted && !v$.form.state.$error,
                    }" />
                    <div v-if="submitted && v$.form.state.$error" class="invalid-feedback">
                      <span v-if="v$.form.state.required.$message">{{
                        v$.form.state.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mb-3">
                    <label>Link</label>
                    <BFormInput v-model="form.url" placeholder="Link" :class="{
                      'is-invalid': submitted && v$.form.url.$error,
                      'is-valid': submitted && !v$.form.url.$error,
                    }" />
                    <div v-if="submitted && v$.form.url.$error" class="invalid-feedback">
                      <span v-if="v$.form.url.required.$message">{{
                        v$.form.url.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
                <BCol md="2">
                  <div class="mb-3">
                    <label>Action</label>
                    <div>
                        <BButtonGroup class="btn-group-example mb-3">
                          <BButton variant="primary" class="w-xs">
                            <i class="mdi mdi-plus"></i>
                          </BButton>
                          <BButton variant="light" class="w-xs">
                            <i class="mdi mdi-minus"></i>
                          </BButton>
                        </BButtonGroup>
                      </div>
                  </div>
                </BCol>
              </BRow>
              <BButton variant="primary" type="submit">Submit form</BButton>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="3">
        <BCard no-body>
          <BCardBody>
            <div class="mb-3">
              <label>Gallery</label>
              <!-- file upload -->
              <DropZone />
            </div>
            <BForm class="needs-validation" @submit.prevent="tooltipForm">
              <BRow>
                <!-- <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label>First name</label>
                    <BFormInput v-model="tooltipform.fname" placeholder="First name" :class="{
                      'is-invalid': submitform && v$.tooltipform.fname.$error,
                      'is-valid': submitform && !v$.tooltipform.fname.$error,
                    }" />
                    <div v-if="submitted && v$.tooltipform.fname.$error" class="invalid-feedback">
                      <span v-if="v$.tooltipform.fname.required.$message">{{
                        v$.tooltipform.fname.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol> -->

                <!-- <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label>Last name</label>
                    <BFormInput v-model="tooltipform.lname" placeholder="Last name" :class="{
                      'is-invalid': submitform && v$.tooltipform.lname.$error,
                      'is-valid': submitform && !v$.tooltipform.lname.$error,
                    }" />
                    <div v-if="submitted && v$.tooltipform.lname.$error" class="invalid-feedback">
                      <span v-if="v$.tooltipform.lname.required.$message">{{
                        v$.tooltipform.lname.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol> -->

                <BCol md="12">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Email</label>
                    <BInputGroup>
                      <BInputGroupPrepend is-text><i class="ri-inbox-line"></i></BInputGroupPrepend>
                      <BFormInput v-model="tooltipform.username" placeholder="Email" :class="{
                        'is-invalid': submitform && v$.tooltipform.username.$error,
                        'is-valid': submitform && !v$.tooltipform.username.$error,
                      }" />
                      <div v-if="submitted && v$.tooltipform.username.$error" class="invalid-feedback">
                        <span v-if="v$.tooltipform.username.required.$message">{{ v$.tooltipform.username.required.$message }}</span>
                      </div>
                    </BInputGroup>
                  </div>
                  <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Insights URL</label>
                    <BInputGroup>
                      <BInputGroupPrepend is-text><i class="ri-links-line"></i></BInputGroupPrepend>
                      <BFormInput v-model="tooltipform.username" placeholder="Insights" :class="{
                        'is-invalid': submitform && v$.tooltipform.username.$error,
                        'is-valid': submitform && !v$.tooltipform.username.$error,
                      }" />
                      <div v-if="submitted && v$.tooltipform.username.$error" class="invalid-feedback">
                        <span v-if="v$.tooltipform.username.required.$message">{{ v$.tooltipform.username.required.$message }}</span>
                      </div>
                    </BInputGroup>
                  </div>

                  <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Exclusive</label>
                    <div>
                      <input type="checkbox" id="switch6" switch="primary" checked />
                      <label for="switch6" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                  </div>
                </BCol>

              </BRow>
              <BButton variant="primary" type="submit">Submit form</BButton>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <!-- Modal -->
    <BModal id="modal-1" v-model="showmodal" title="Add Tournament" title-class="text-dark font-18" hide-footer>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label" for="name">Tournament Title</label>
          <input id="name" v-model="customers.name" type="text" class="form-control" placeholder="Enter tournament title" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="exampleInputEmail1">URL <small>(Optional)</small></label>
          <input id="email" v-model="customers.email" type="email" name="email" class="form-control" placeholder="URL" />
        </div>
        <div class="mb-3">
          <label>Icon</label>
          <!-- file upload -->
          <DropZone />
        </div>
        <div class="mb-3">
          <label class="form-label">Position</label>

          <Multiselect v-model="value1" :options="options" mode="tags"></Multiselect>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-success">Save</button>
          <BButton class="ms-1" variant="danger" @click="hideModal">Cancel</BButton>
        </div>
      </form>
    </BModal>
    <!-- end modal -->
  </Layout>
</template>