<script>
import DatePicker from "vue3-datepicker";
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import appConfig from "@/app.config";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import DropZone from "@/components/dropzone.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { VueDraggableNext } from 'vue-draggable-next'
import { todoTasks, progressTasks, completedTasks } from "./data";

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
    title: "Add Service",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { DatePicker, Layout, PageHeader, DropZone, Multiselect, ckeditor: CKEditor.component, draggable: VueDraggableNext, },
  data() {
    return {
      title: "Add Service",
      items: [
        {
          text: "Overview",
          href: "/admin"
        },
        {
          text: "Add Service",
          active: true
        }
      ],
      todoTasks: todoTasks,
      progressTasks: progressTasks,
      completedTasks: completedTasks,
      editor: ClassicEditor,
      editorData:
        "<h5><b>Insert content.</b></h5>",
      options3: [
        "Egypt",
        "United Arab Emirates",
        "Saudi Arabia",
        "Qatar",
        "Jordan",
        "Tunisia",
        "Libya",
      ],
      defaultdate: "",
      autoClose: "",
      daterange: "",
      demoMonth: "",
      demoYear: "",
      time: null,
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
        "Descriptions",
        "Casters",
        "Analysts",
      ],
      options1: [
        "Facebook",
        "X",
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
                  <div class="p-3">
                    <BDropdown right class="float-end" variant="white" menu-class="dropdown-menu-end">
                      <template #button-content>
                        <i class="mdi mdi-dots-vertical m-0 text-muted font-size-20"></i>
                      </template>
                      <BDropdownItem>Edit</BDropdownItem>
                      <BDropdownItem>Delete</BDropdownItem>
                    </BDropdown>

                    <!-- end dropdown -->
                    <h4 class="card-title">Sections</h4>
                    <p class="mb-0">3 Sections</p>
                  </div>

                  <div id="todo-task" class="task-list">
                    <draggable class="list-group" group="tasks" :list="todoTasks">
                      <div v-for="task in todoTasks" :key="task.id" class="card task-box">
                        <div class="progress progress-sm animated-progess" style="height: 3px">
                          <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="card-body">
                          <div class="float-end ms-2">
                            <div>{{ task.date }}</div>
                          </div>
                          <div class="mb-3">
                            <a href="#" class>{{ task.id }}</a>
                          </div>
                          <div>
                            <h5 class="font-size-16">
                              <a href="javascript: void(0);" class="text-dark">
                                <img :src="`${task.user[0]}`" class="rounded-circle avatar-xs" alt /> {{ task.title }}</a>
                            </h5>
                            <p class="mb-4">{{ task.text }}</p>
                          </div>

                          <!-- <div class="d-inline-flex team mb-0">
                            <div class="me-3 align-self-center">Team :</div>
                            <div class="team-member">
                              <a href="javascript: void(0);" class="team-member d-inline-block" v-b-tooltip.hover
                                data-placement="top" title="Calvin Redrick">
                                <img :src="`${task.user[0]}`" class="rounded-circle avatar-xs" alt />
                              </a>
                            </div>

                            <div class="team-member">
                              <a href="javascript: void(0);" class="team-member d-inline-block" v-b-tooltip.hover
                                data-placement="top" title="David Martinez" v-if="task.user[1]">
                                <img :src="`${task.user[1]}`" class="rounded-circle avatar-xs" alt />
                              </a>
                            </div>
                          </div> -->
                        </div>
                      </div>
                    </draggable>
                    <!-- end task card -->

                    <div class="text-center">
                      <a href="javascript: void(0);" class="btn btn-primary mt-1 waves-effect waves-light" @click="showmodal = true">
                        <i class="mdi mdi-plus me-1"></i> Add New
                      </a>
                    </div>
                  </div>

                </BCol>
              </BRow>
              <!-- <BButton variant="primary" type="submit">Submit form</BButton> -->
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="3">
        <BCard no-body>
          <BCardBody>
            <div class="mb-3">
              <label>Title</label>
              <BFormInput v-model="form.fname" placeholder="Title" :class="{
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
            <div class="mb-3">
              <label>Excerpt</label>
              <div>
                <BFormTextarea v-model="typeform.textarea" :class="{
      'is-invalid': typesubmit && v$.typeform.textarea.$error,
      'is-valid': typesubmit && !v$.typeform.textarea.$error,
    }" rows="5"></BFormTextarea>
                <div v-if="typesubmit && v$.typeform.textarea.$error" class="invalid-feedback">
                  <span v-if="!v$.typeform.textarea.required">This value is required.</span>
                </div>
              </div>
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
                    <label for="validationTooltipUsername">Active</label>
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
    <BModal id="modal-1" v-model="showmodal" scrollable title="Add Sections" title-class="text-dark font-18" hide-footer>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <h5 class="card-title">Sections</h5>
          <p class="card-title-desc">Select sections to be displayed at service page.</p>
          <div class="row">
            <div class="col-lg-12 col-sm-6">
              <div class="card border rounded active shipping-address">
                <div class="card-body">
                  <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                  <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-7.png" alt
                      class="align-middle me-2 avatar-sm" /> Section 1</h5>

                  <h5 class="font-size-14">Description</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="card border rounded active shipping-address">
                <div class="card-body">
                  <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                  <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-6.png" alt
                      class="align-middle me-2 avatar-sm" /> Section 2</h5>

                  <h5 class="font-size-14">Description</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="card border rounded active shipping-address">
                <div class="card-body">
                  <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                  <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-5.png" alt
                      class="align-middle me-2 avatar-sm" /> Section 3</h5>

                  <h5 class="font-size-14">Description</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="card border rounded active shipping-address">
                <div class="card-body">
                  <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                  <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-4.png" alt
                      class="align-middle me-2 avatar-sm" /> Section 4</h5>

                  <h5 class="font-size-14">Description</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="card border rounded active shipping-address">
                <div class="card-body">
                  <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                  <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-2.png" alt
                      class="align-middle me-2 avatar-sm" /> Section 5</h5>

                  <h5 class="font-size-14">Description</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="card border rounded active shipping-address">
                <div class="card-body">
                  <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                  <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-1.png" alt
                      class="align-middle me-2 avatar-sm" /> Section 6</h5>

                  <h5 class="font-size-14">Description</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6">
              <div class="card border rounded active shipping-address">
                <div class="card-body">
                  <a href="javascript:void(0);" class="float-end ms-1" @click="showmodal = true">Edit</a>
                  <h5 class="font-size-14 mb-4"><img src="@/assets/images/companies/img-3.png" alt
                      class="align-middle me-2 avatar-sm" /> Section 7</h5>

                  <h5 class="font-size-14">Description</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
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