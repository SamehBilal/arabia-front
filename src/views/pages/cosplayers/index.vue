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
      title: "Cosplayers",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Cosplayers",
          active: true
        }
      ],
      ordersData: [
        {
          total_followers: "30M",
          created_at: "28 Mar, 2024",
          name: "Frank Dean",
          total: "$164",
          status: "Inactive"
        },
        {
          total_followers: "25M",
          created_at: "28 Mar, 2024",
          name: "Eddy Torres",
          total: "$141",
          status: "Active"
        },
        {
          total_followers: "15M",
          created_at: "29 Mar, 2024",
          name: "Jamison Clark",
          total: "$123",
          status: "Active"
        },
        {
          total_followers: "13.5M",
          created_at: "30 Mar, 2024",
          name: "Jewel Buckley",
          total: "$112",
          status: "Active"
        },
        {
          total_followers: "13.2M",
          created_at: "31 Mar, 2024",
          name: "Jeffrey Waltz",
          total: "$105",
          status: "Inactive"
        },
        {
          total_followers: "13M",
          created_at: "01 Apr, 2024",
          name: "Jefferson Allen",
          total: "$160",
          status: "Active"
        },
        {
          total_followers: "12.5M",
          created_at: "02 Apr, 2024",
          name: "Paul Jones",
          total: "$183",
          status: "Active"
        },
        {
          total_followers: "12M",
          created_at: "03 Apr, 2024",
          name: "Donald Bailey",
          total: "$146",
          status: "Active"
        },
        {
          total_followers: "10M",
          created_at: "03 Apr, 2024",
          name: "Jimmy Barker",
          total: "$165",
          status: "Inactive"
        },
        {
          total_followers: "9M",
          created_at: "04 Apr, 2024",
          name: "Walter Brown",
          total: "$172",
          status: "Active"
        },
        {
          total_followers: "8M",
          created_at: "06 Apr, 2024",
          name: "James Hamilton",
          total: "$152",
          status: "Active"
        }
      ],
      totalRows: 1,
      tabIndex: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "total_followers",
      sortDesc: true,
      fields: [
        { key: "name", sortable: true, label: "Name" },
        { key: "created_at", sortable: true, label: "Created at" },
        { key: "total_followers", sortable: true, label: "Total Followers" },
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
                  <a class="font-weight-bold active">All Cosplayers</a>
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
                        <BFormInput v-model="filter" type="search" class="form-control form-control-sm ms-2"/>
                      </label>
                    </div>
                  </div>
                  <!-- End search -->
                </div>
                <div class="table-responsive mb-0">
                  <BTable class="table-centered datatable dt-responsive nowrap" :items="ordersData" :fields="fields" :total-rows="rows" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                    <template v-slot:cell(name)="ordersData">
                      <img src="@/assets/images/product/img-2.png" style="height: 32px;margin-right: 10px;" alt class="img-rounded" />         
                      <span>{{ ordersData.item.name }}</span>
                    </template>
                    <template v-slot:cell(status)="ordersData">
                      <div class="badge font-size-12" :class="{
                            'bg-success-subtle text-success': `${ordersData.item.status}` === 'Active',
                            'bg-warning-subtle text-danger': `${ordersData.item.status}` === 'Inactive'
                          }">{{ ordersData.item.status }}</div>
                    </template>
                    <template v-slot:cell(action)="ordersData">
                      <router-link to="influencer-single-1">
                      <a href="javascript:void(0);" class="me-3 text-primary" v-b-tooltip.hover title="View">
                            <i class="mdi mdi-eye font-size-18"></i>
                          </a>
                        </router-link>
                      <a href="javascript:void(0);" class="me-3 text-primary" v-b-tooltip.hover title="Edit">
                            <i class="mdi mdi-pencil font-size-18"></i>
                          </a>
                          <a href="javascript:void(0);" class="text-danger" v-b-tooltip.hover title="Delete">
                            <i class="mdi mdi-trash-can font-size-18"></i>
                          </a>
                    </template>
                  </BTable>
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