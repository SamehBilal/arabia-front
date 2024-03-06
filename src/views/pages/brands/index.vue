<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import { required, email, helpers } from "@vuelidate/validators";
import DropZone from "@/components/dropzone.vue";
import img1 from "@/assets/images/companies/img-1.png"
import img2 from "@/assets/images/companies/img-2.png"
import img3 from "@/assets/images/companies/img-3.png"
import img4 from "@/assets/images/companies/img-4.png"
import img5 from "@/assets/images/companies/img-5.png"
import img6 from "@/assets/images/companies/img-6.png"
import img7 from "@/assets/images/companies/img-7.png"
import img8 from "@/assets/images/companies/img-8.png"

/**
 * Shops Component
 */
export default {
  components: {
    Layout,
    PageHeader,
    DropZone
  },
  data() {
    return {
      title: "Clients",
      items: [
        {
          text: "Dashboard",
          href: "/"
        },
        {
          text: "Clients",
          active: true
        }
      ],
      shopsData: [
        {
          image: img1,
          title: "EA",
          name: "Wayne McClain",
          products: 86,
          date: "04 Apr, 2024",
          balance: "$12,456"
        },
        {
          image: img2,
          title: "Epic",
          name: "David Marshall",
          products: 72,
          date: "04 Apr, 2024",
          balance: "$10,352"
        },
        {
          image: img3,
          title: "Activision",
          name: "Katia Stapleton",
          products: 75,
          date: "04 Apr, 2024",
          balance: "$9,963"
        },
        {
          image: img4,
          title: "Lafayette",
          name: "Andrew Bivens",
          products: 65,
          date: "04 Apr, 2024",
          balance: "$14,568"
        },
        {
          image: img5,
          title: "Packer",
          name: "Mae Rankin",
          products: 82,
          date: "04 Apr, 2024",
          balance: "$16,445"
        },
        {
          image: img6,
          title: "Micro Design",
          name: " Brian Correa",
          products: 71,
          date: "04 Apr, 2024",
          balance: "$11,523"
        },
        {
          image: img7,
          title: "Keeney's",
          name: "Dean Odom",
          products: 66,
          date: "04 Apr, 2024",
          balance: "$13,478"
        },
        {
          image: img8,
          title: "Tech Hifi",
          name: "John McLeroy",
          products: 58,
          date: "04 Apr, 2024",
          balance: "$14,654"
        },
        {
          image: img1,
          title: "Nedick's",
          name: "Wayne McClain",
          products: 86,
          date: "04 Apr, 2024",
          balance: "$12,456"
        },
        {
          image: img2,
          title: "Brendle's",
          name: "David Marshall",
          products: 72,
          date: "04 Apr, 2024",
          balance: "$10,352"
        },
        {
          image: img3,
          title: "Tech Hifi",
          name: "Katia Stapleton",
          products: 75,
          date: "04 Apr, 2024",
          balance: "$9,963"
        },
        {
          image: img4,
          title: "Lafayette",
          name: "Andrew Bivens",
          products: 65,
          date: "04 Apr, 2024",
          balance: "$14,568"
        },
        {
          image: img5,
          title: "Packer",
          name: "Mae Rankin",
          products: 82,
          date: "04 Apr, 2024",
          balance: "$16,445"
        },
        {
          image: img6,
          title: "Micro Design",
          name: " Brian Correa",
          products: 71,
          date: "04 Apr, 2024",
          balance: "$11,523"
        },
        {
          image: img7,
          title: "Keeney's",
          name: "Dean Odom",
          products: 66,
          date: "04 Apr, 2024",
          balance: "$13,478"
        },
        {
          image: img8,
          title: "Tech Hifi",
          name: "John McLeroy",
          products: 58,
          date: "04 Apr, 2024",
          balance: "$14,654"
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
      submitted: false,
      showmodal: false
    };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
    name: {
      required: helpers.withMessage("Name is required", required),
    },
    balance: {
      required: helpers.withMessage("Balance is required", required),
    },
    phone: {
      required: helpers.withMessage("Phone is required", required),
    },
    date: {
      required: helpers.withMessage("Date is required", required),
    },
  },
  methods: {
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

  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div>
        <a href="javascript:void(0);" class="btn btn-success mb-3" @click="showmodal = true">
          <i class="mdi mdi-plus me-2"></i> Add Client
        </a>
      </div>
      <div class="col-xl-3 col-sm-6" v-for="(data, index) in shopsData" :key="index">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img :src="`${data.image}`" alt class="avatar-sm mt-2 mb-4" />
              <div class="flex-1">
                <h5 class="text-truncate">
                  <a href="#" class="text-dark">{{ data.title }}</a>
                </h5>
                <p class="text-muted">
                  <i class="mdi mdi-calendar me-1"></i> {{ data.date }}
                </p>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row text-center">
              <div class="col-6">
                <p class="text-muted mb-2">
                  <a href="javascript:void(0);" @click="showmodal = true">
                    <i class="mdi mdi-pencil me-1"></i> Edit
                  </a>
                </p>
                <!-- <h5>{{ data.products }}</h5> -->
              </div>
              <div class="col-6">
                <p class="text-muted mb-2">
                  <a href="javascript:void(0);" >
                    <i class="mdi mdi-trash-can me-1"></i> Delete
                  </a>
                </p>
                <!-- <h5>{{ data.balance }}</h5> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-primary">
            <i class="mdi mdi-loading mdi-spin font-size-20 align-middle me-2"></i> Load more
          </a>
        </div>
      </div>
    </div>
    <!-- end row -->

    <!-- Modal -->
    <BModal id="modal-1" v-model="showmodal" title="Add User" title-class="text-dark font-18" hide-footer>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label" for="name">Name</label>
          <input id="name" v-model="customers.name" type="text" class="form-control" placeholder="Enter name" required />
        </div> 
        <div class="mb-3">
          <label class="form-label" for="image">Image</label>
            <!-- file upload -->
            <DropZone />
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