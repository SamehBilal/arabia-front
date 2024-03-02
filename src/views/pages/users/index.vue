<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import Multiselect from "@vueform/multiselect";
import { required, email, helpers } from "@vuelidate/validators";
/**
 * Users Component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Multiselect
  },
  data() {
    return {
      options: [
        "Owner",
        "Admin",
        "Editor",
        "Visitor",
      ],
      title: "Users",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Users",
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

    /**
     * Filter the data of search
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div>
              <a href="javascript:void(0);" class="btn btn-success mb-2" @click="showmodal = true">
                <i class="mdi mdi-plus me-2"></i> Add User
              </a>
            </div>
            <div class="table-responsive mt-3">
              <table class="table table-centered datatable dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                <thead class="thead-light">
                  <tr>
                    <!-- <th style="width: 20px;">
                      <div class="form-check custom-checkbox">
                        <input type="checkbox" class="form-check-input" id="customercheck" />
                      </div>
                    </th> -->
                    <th>User</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <!-- <th>Wallet Balance</th> -->
                    <th>Joining Date</th>
                    <th>Status</th>
                    <th style="width: 120px;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in customersData" :key="index">
                    <!-- <td>
                      <div class="form-check custom-checkbox">
                        <input type="checkbox" class="form-check-input" :id="`customercheck${index}`" />
                      </div>
                    </td> -->
                    <td><img src="@/assets/images/product/man.png" style="height: 32px;margin-right: 10px;" alt class="img-rounded" />{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                    <!-- <td>{{ item.balance }}</td> -->
                    <td>{{ item.date }}</td>
                    <Btd>
                          <div class="badge font-size-12 text-black" :class="{
                            'bg-success-subtle text-success': `${item.active}` === true,
                            'bg-warning-subtle text-warning': `${item.active}` === false
                          }">{{ item.active ? 'Active':'Inactive' }}</div>
                          
                    </Btd>
                    <td>
                      <a href="javascript:void(0);" class="me-3 text-primary" v-b-tooltip.hover title="Edit">
                        <i class="mdi mdi-pencil font-size-18"></i>
                      </a>
                      <a href="javascript:void(0);" class="text-danger" v-b-tooltip.hover title="Delete">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <BModal id="modal-1" v-model="showmodal" title="Add User" title-class="text-dark font-18" hide-footer>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label" for="name">Full Name</label>
          <input id="name" v-model="customers.name" type="text" class="form-control" placeholder="Enter fullname" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="exampleInputEmail1">Email</label>
          <input id="email" v-model="customers.email" type="email" name="email" class="form-control" placeholder="Enter email" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="position">Phone <small>(Optional)</small></label>
          <input id="position" v-model="customers.phone" type="text" class="form-control" placeholder="Enter phone number" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Password</label>
          <input id="password" v-model="customers.password" type="password" class="form-control" placeholder="Enter password" required/>
        </div>
        <div class="mb-3">
          <label class="form-label" for="confirmation">Confirm Password</label>
          <input id="confirmation" v-model="customers.password_confirmation" type="password" class="form-control" placeholder="Enter password confirmation" required/>
        </div>
        <div class="mb-3">
          <label class="form-label">Role</label>

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