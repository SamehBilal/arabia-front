<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import { VueDraggableNext } from 'vue-draggable-next'

/**
 * Orders Component
 */
export default {
  components: {
    Layout,
    PageHeader,
    draggable: VueDraggableNext,
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
          order: 1,
          created_at: "28 Mar, 2024",
          name: "Frank Dean",
          total_followers: "$164",
          role: "Casters",
          status: "Inactive"
        },
        {
          order: 2,
          created_at: "28 Mar, 2024",
          name: "Eddy Torres",
          total_followers: "$141",
          role: "Hosts",
          status: "Active"
        },
        {
          order: 3,
          created_at: "29 Mar, 2024",
          name: "Jamison Clark",
          total_followers: "$123",
          role: "Analysts",
          status: "Active"
        },
        {
          order: 4,
          created_at: "30 Mar, 2024",
          name: "Jewel Buckley",
          total_followers: "$112",
          role: "Hosts",
          status: "Active"
        },
        {
          order: 5,
          created_at: "31 Mar, 2024",
          name: "Jeffrey Waltz",
          total_followers: "$105",
          role: "Casters",
          status: "Inactive"
        },
        {
          order: 6,
          created_at: "01 Apr, 2024",
          name: "Jefferson Allen",
          total_followers: "$160",
          role: "Analysts",
          status: "Active"
        },
        {
          order: 7,
          created_at: "02 Apr, 2024",
          name: "Paul Jones",
          total_followers: "$183",
          role: "Hosts",
          status: "Active"
        },
        {
          order: 8,
          created_at: "03 Apr, 2024",
          name: "Donald Bailey",
          total_followers: "$146",
          role: "Hosts",
          status: "Active"
        },
        {
          order: 9,
          created_at: "03 Apr, 2024",
          name: "Jimmy Barker",
          total_followers: "$165",
          role: "Analysts",
          status: "Inactive"
        },
      ],
      totalRows: 1,
      tabIndex: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "order",
      sortDesc: false,
      fields: [
        { key: "order", sortable: true, label: "Order" },
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
    },
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
    },
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
                <div class="table-responsive mb-0">
                  <BTable id="table" class="table-centered datatable dt-responsive nowrap draggable-table"
                    :items="ordersData" :fields="fields" :total-rows="rows" responsive="sm" :per-page="perPage"
                    :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
                    :filter-included-fields="filterOn" @filtered="onFiltered">
                    <!-- <template v-slot:row-details(1)="ordersData">
                      
                    </template> -->
                    <template v-slot:cell(order)="ordersData" style="width: 10px;">
                      <draggable class="list-group" group="orders" :list="ordersData">
                        <span><i class="mdi mdi-drag draggable font-size-18"></i> {{ ordersData.item.order }}</span>
                      </draggable>
                     
                    </template>
                    <template v-slot:cell(name)="ordersData">
                      <img src="@/assets/images/product/img-5.png" style="height: 32px;margin-right: 10px;" alt
                        class="img-rounded" />
                      <span>{{ ordersData.item.name }}</span>
                    </template>
                    <template v-slot:cell(role)="ordersData">
                      <div class="badge font-size-12" :class="{
      'bg-dark-subtle text-dark': `${ordersData.item.role}` === 'Hosts',
      'bg-info-subtle text-info': `${ordersData.item.role}` === 'Casters',
      'bg-secondary-subtle text-secondary': `${ordersData.item.role}` === 'Analysts'
    }">{{ ordersData.item.role }}</div>
                    </template>
                    <template v-slot:cell(status)="ordersData">
                      <div class="badge font-size-12" :class="{
      'bg-success-subtle text-success': `${ordersData.item.status}` === 'Active',
      'bg-warning-subtle text-danger': `${ordersData.item.status}` === 'Inactive'
    }">{{ ordersData.item.status }}</div>
                    </template>
                    <template v-slot:cell(action)="ordersData">
                      <router-link to="on-air-single-1">
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

<style>
.draggable {
  cursor: grabbing;
}
</style>