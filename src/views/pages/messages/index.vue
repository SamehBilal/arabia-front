<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";

import Toolbar from "./toolbar.vue";

import { emailData } from "./data-inbox";

/**
 * Email-inbox component
 */
export default {
  page: {
    title: "Messages",
    meta: [{ name: "description" }]
  },
  components: { Layout, PageHeader, Toolbar, ckeditor: CKEditor.component },
  data() {
    return {
      emailData: emailData,
      paginatedEmailData: emailData,
      title: "Messages",
      items: [
        {
          text: "Dashboard",
          href: "/"
        },
        {
          text: "Messages",
          active: true
        }
      ],
      // page number
      currentPage: 1,
      // default page size
      perPage: 15,

      // start and end index
      startIndex: 1,
      endIndex: 15,
      showModal: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>"
    };
  },
  computed: {
    rows() {
      return this.emailData.length;
    }
  },
  created() {
    this.startIndex = 0;
    this.endIndex = this.perPage;

    this.paginatedEmailData = this.emailData.slice(
      this.startIndex,
      this.endIndex
    );
  },
  methods: {
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <!-- Right Sidebar -->
      <div class="col-12">
        <div class="email-rightbar mb-3">
          <div class="card">
            <!-- <div class="btn-toolbar p-3">
              <Toolbar />
            </div> -->
            <div class="mt-3">
              <ul class="message-list">
                <li v-for="(email, index) in paginatedEmailData" :key="index" :class="{ 'unread': `${email.unread}` === 'true' }">
                  <div class="col-mail col-mail-1">
                    <div class="checkbox-wrapper-mail">
                      <input :id="`chk-${index}`" type="checkbox" />
                      <label :for="`chk-${index}`"></label>
                    </div>
                    <span class="star-toggle far fa-star"></span>
                    <a class="title">{{ email.title }}</a>
                  </div>
                  <div class="col-mail col-mail-2">
                    <a class="subject">{{ email.subject }}</a>
                    <div class="date">{{ email.date }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-md-between align-items-md-center">
            <div class="col-xl-7">Showing {{ startIndex }} - {{ endIndex }} of {{ rows }}</div>
            <!-- end col-->
            <div class="col-xl-5">
              <div class="text-md-end float-xl-end mt-2 pagination-rounded">
                <BPagination v-model="currentPage" :total-rows="rows" :per-page="perPage" @input="onPageChange" />
              </div>
            </div>
            <!-- end col-->
          </div>
        </div>
      </div>
    </div>
    <BModal v-model="showModal" title="New Message" size="lg" centered hide-footer>
      <form>
        <div class="mb-3">
          <input type="email" class="form-control" placeholder="To" />
        </div>

        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Subject" />
        </div>
        <div class="mb-3">
          <ckeditor v-model="editorData" :editor="editor"></ckeditor>
        </div>
      </form>
      <div class="text-end">
        <BButton variant="secondary" class="me-2" @click="showModal = false">Close</BButton>
        <BButton variant="primary">Send <i class="fab fa-telegram-plane ms-1"></i></BButton>
      </div>
    </BModal>
  </Layout>
</template>