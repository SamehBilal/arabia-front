<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import img1 from "@/assets/images/product/facebook.png";
import img2 from "@/assets/images/product/instagram.png";
import img3 from "@/assets/images/product/twitter.png";
import img4 from "@/assets/images/product/snapchat.png";
import img5 from "@/assets/images/product/twitch.png";
import img6 from "@/assets/images/product/tik-tok.png";

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
      title: "Icons",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Icons",
          active: true
        }
      ],
      ordersData: [
        {
          type: "Social Media",
          date: "28 Mar, 2024",
          billingname: "Facebook",
          total: "$164",
          icon: img1
          
        },
        {
          type: "Social Media",
          date: "28 Mar, 2024",
          billingname: "Instagram",
          total: "$141",
          icon: img2
        },
        {
          type: "Social Media",
          date: "29 Mar, 2024",
          billingname: "X",
          total: "$123",
          icon: img3
        },
        {
          type: "Website",
          date: "30 Mar, 2024",
          billingname: "Snapchat",
          total: "$112",
          icon: img4
        },
        {
          type: "Website",
          date: "31 Mar, 2024",
          billingname: "Twitch",
          total: "$105",
          icon: img5
        },
        {
          type: "Website",
          date: "01 Apr, 2024",
          billingname: "TikTok",
          total: "$160",
          icon: img6
        },
      ],
      totalRows: 1,
      tabIndex: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "type",
      sortDesc: false,
      fields: [
        { key: "name", sortable: true, label: "Name" },
        { key: "created_at", sortable: true, label: "Created at" },
        { key: "type", sortable: true, label: "Type" },
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
                  <a class="font-weight-bold active">All Icons</a>
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
                <div class="table-responsive">
                  <BTableSimple class="table-centered datatable dt-responsive nowrap" sortBy="Payment Status">
                    <BThead class="table-light">
                      <BTr>
                        <BTh v-for="(label) in fields">{{ label.label }}</BTh>
                      </BTr>
                    </BThead>
                    <BTbody>
                      <BTr v-for="(transaction) in ordersData" :key="index">
                        <BTd><img :src="`${transaction.icon}`" style="height: 32px;margin-right: 10px;" alt class="img-rounded" />{{ transaction.billingname }}</BTd>
                        <BTd>{{ transaction.date }}</BTd>
                        <BTd>
                          <div class="badge font-size-12" :class="{
                            'bg-success-subtle text-success': `${transaction.type}` === 'Social Media',
                            'bg-warning-subtle text-danger': `${transaction.type}` === 'Website'
                          }">{{ transaction.type }}</div>
                          
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