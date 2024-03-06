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
        "View Users",
        "Create Users",
        "Show Users",
        "Edit Users",
        "Delete Users",
      ],
      title: "Roles",
      items: [
        {
          text: "Dashboard",
          href: "/"
        },
        {
          text: "Roles",
          active: true
        }
      ],
      customersData: [
        {
          name: "Owner",
        },
        {
          name: "Admin",
        },
        {
          name: "Editor",
        },
        {
          name: "Visitor",
        },
       
      ],
      customers: {
        name: "",
      },
      submitted: false,
      showmodal: false
    };
  },
  validations: {
    name: {
      required: helpers.withMessage("Name is required", required),
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
        this.customersData.push({
          name,
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
                <i class="mdi mdi-plus me-2"></i> Add Role
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
                    <th>Role</th>
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
                    <td>{{ item.name }}</td>
                    <td>
                      <a href="javascript:void(0);" @click="showmodal = true" class="me-3 text-primary" v-b-tooltip.hover title="Edit">
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
    <BModal id="modal-1" v-model="showmodal" title="Add Role" title-class="text-dark font-18" hide-footer>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label" for="name">Name</label>
          <input id="name" v-model="customers.name" type="text" class="form-control" placeholder="Enter name" />
        </div>
        <div class="mb-3">
          <label class="form-label">Permissions</label>

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