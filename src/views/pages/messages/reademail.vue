<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";

import Toolbar from "./toolbar.vue";

/**
 * Email-read component
 */
export default {
  page: {
    title: "Message",
    meta: [{ name: "description" }]
  },
  components: {
    Layout,
    PageHeader,
    Toolbar,
    ckeditor: CKEditor.component
  },
  data() {
    return {
      title: "Message",
      items: [
        {
          text: "Overview",
          href: "/admin"
        },
        {
          text: "Message",
          active: true
        }
      ],
      showModal: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>"
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <!-- Right Sidebar -->
        <div class="email-rightbar mb-3">
          <div class="card">
            <div class="btn-toolbar p-3" role="toolbar">
              <Toolbar />
            </div>

            <div class="card-body">
              <div class="d-flex mb-4">
                <img class="d-flex me-3 rounded-circle avatar-sm" src="@/assets/images/users/avatar-2.jpg" alt="Generic placeholder image" />
                <div class="flex-1">
                  <h5 class="font-size-14 my-1">Humberto D. Champion</h5>
                  <small class="text-muted">support@domain.com</small>
                </div>
              </div>

              <h4 class="mt-0 font-size-16">This is Inquery</h4>

              <p>Dear Lorem Ipsum,</p>
              <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.</p>
              <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
              <p>Sincerly,</p>
              <hr />
              <a href="javascript: void(0);" class="btn btn-secondary waves-effect m-2">
                <i class="mdi mdi-plus"></i> 010123456789 
              </a> 
              <a href="javascript: void(0);" class="btn btn-info waves-effect ">
                <i class="fa fa-inbox"></i> support@domain.com 
              </a>
            </div>
          </div>
        </div>
        <!-- card -->
      </div>
      <!-- end Col-9 -->
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
