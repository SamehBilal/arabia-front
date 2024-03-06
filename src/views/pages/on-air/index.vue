<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";

/**
 * Orders Component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "On-air",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "On-air",
          active: true
        }
      ],
      ordersData: [
        {
          date: "28 Mar, 2024",
          name: "Frank Dean",
          total: "$164",
          role: "Casters",
          paymentstatus: "Inactive"
        },
        {
          date: "28 Mar, 2024",
          name: "Eddy Torres",
          total: "$141",
          role: "Hosts",
          paymentstatus: "Active"
        },
        {
          date: "29 Mar, 2024",
          name: "Jamison Clark",
          total: "$123",
          role: "Analysts",
          paymentstatus: "Active"
        },
        {
          date: "30 Mar, 2024",
          name: "Jewel Buckley",
          total: "$112",
          role: "Hosts",
          paymentstatus: "Active"
        },
        {
          date: "31 Mar, 2024",
          name: "Jeffrey Waltz",
          total: "$105",
          role: "Casters",
          paymentstatus: "Inactive"
        },
        {
          date: "01 Apr, 2024",
          name: "Jefferson Allen",
          total: "$160",
          role: "Analysts",
          paymentstatus: "Active"
        },
        {
          date: "02 Apr, 2024",
          name: "Paul Jones",
          total: "$183",
          role: "Hosts",
          paymentstatus: "Active"
        },
        {
          date: "03 Apr, 2024",
          name: "Donald Bailey",
          total: "$146",
          role: "Hosts",
          paymentstatus: "Active"
        },
        {
          date: "03 Apr, 2024",
          name: "Jimmy Barker",
          total: "$165",
          role: "Analysts",
          paymentstatus: "Inactive"
        },
        {
          date: "04 Apr, 2024",
          name: "Walter Brown",
          total: "$172",
          role: "Casters",
          paymentstatus: "Active"
        },
        {
          date: "06 Apr, 2024",
          name: "James Hamilton",
          total: "$152",
          role: "Hosts",
          paymentstatus: "Active"
        }
      ],
      totalRows: 1,
      tabIndex: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "name",
      sortDesc: false,
      fields: [
        { key: "name", sortable: true, label: "Name" },
        { key: "created_at", sortable: true, label: "Created at" },
        { key: "role", sortable: true, label: "Role" },
        { key: "status", sortable: true, label: "Status" },
        { key: "action", label: "Action" }
      ]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.ordersData.length;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.ordersData.length;
  },
  methods: {
    /**
     * Search the table data with search input
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
          <div class="card-body pt-1">
            <BTabs v-model="tabIndex" nav-class="nav-tabs-custom">
              <BTab>
                <template v-slot:title>
                  <a class="font-weight-bold active">All On-air</a>
                </template>
                <div class="row mt-4">
                  <div class="col-sm-12 col-md-6">
                    <!-- <div id="tickets-table_length" class="dataTables_length">
                      <label class="d-inline-flex align-items-center">
                        Show&nbsp;
                        <BFormSelect v-model="perPage" size="sm" :options="pageOptions" />&nbsp;entries
                      </label>
                    </div> -->
                  </div>
                  <!-- Search -->
                  <div class="col-sm-12 col-md-6">
                    <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                      <label class="d-inline-flex align-items-center">
                        Search:
                        <BFormInput v-model="filter" type="search" class="form-control form-control-sm ms-2" />
                      </label>
                    </div>
                  </div>
                  <!-- End search -->
                </div>
                <div class="table-responsive">
                  <BTable :items="ordersData" :fields="fields" responsive="sm" :per-page="perPage"
                    :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
                    :filter-included-fields="filterOn" @filtered="onFiltered" :total-rows="rows"></BTable>
                  <BTableSimple class="table-centered datatable dt-responsive nowrap" sortBy="Payment Status">
                    <BThead class="table-light">
                      <BTr>
                        <BTh v-for="(label) in fields">{{ label.label }}</BTh>
                      </BTr>
                    </BThead>
                    <BTbody>
                      <BTr v-for="(transaction) in ordersData" :key="index">
                        <BTd><img src="@/assets/images/product/img-5.png" style="height: 32px;margin-right: 10px;" alt
                            class="img-rounded" />{{ transaction.name }}</BTd>
                        <BTd>{{ transaction.date }}</BTd>
                        <BTd>
                          <div class="badge font-size-12" :class="{
      'bg-dark-subtle text-dark': `${transaction.role}` === 'Hosts',
      'bg-info-subtle text-info': `${transaction.role}` === 'Casters',
      'bg-secondary-subtle text-secondary': `${transaction.role}` === 'Analysts'
    }">{{ transaction.role }}</div>
                        </BTd>
                        <BTd>
                          <div class="badge font-size-12" :class="{
      'bg-success-subtle text-success': `${transaction.paymentstatus}` === 'Active',
      'bg-danger-subtle text-danger': `${transaction.paymentstatus}` === 'Inactive'
    }">{{ transaction.paymentstatus }}</div>

                        </BTd>
                        <BTd>
                          <a href="javascript:void(0);" class="me-3 text-primary" v-b-tooltip.hover title="Edit">
                            <i class="mdi mdi-pencil font-size-18"></i>
                          </a>
                          <a href="javascript:void(0);" class="text-danger" v-b-tooltip.hover title="Delete">
                            <i class="mdi mdi-trash-can font-size-18"></i>
                          </a>
                        </BTd>
                      </BTr>
                    </BTbody>
                  </BTableSimple>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="dataTables_paginate paging_simple_numbers float-end">
                      <ul class="pagination pagination-rounded mb-0">
                        <!-- pagination -->
                        <BPagination v-model="currentPage" :total-rows="rows" :per-page="perPage" />
                      </ul>
                    </div>
                  </div>
                </div>
              </BTab>
            </BTabs>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>