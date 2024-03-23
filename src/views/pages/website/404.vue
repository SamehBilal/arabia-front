<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "./sections/page-header.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            title: "Not Found",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "404",
                    active: true
                },
            ],
            desc: "",
        };
    },
};

</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" :desc="desc" />
        <div class="page-404-element-section">
          <div class="page-404-text-and-button">
            <div class="page-404-text">
              <p class="page-404-sorry-we-can-t-find">Sorry We Can’t Find That Page</p>
              <p class="page-404-p">
                The page you are looking for might have been removed had its name changed or is temporarily unavailable.
              </p>
            </div>
            <div class="page-404-back-to-hoem-button">
              <div class="page-404-overlap-group-4">
                <div class="page-404-text-wrapper-14">Back to Home</div>
                <img class="page-404-inner-plugin-iframe" src="https://c.animaapp.com/BnCiiCW2/img/inner-plugin-iframe@2x.png" />
              </div>
            </div>
          </div>
          <img class="page-404-vector-3" src="https://c.animaapp.com/BnCiiCW2/img/vector-.png" />
        </div>
        <img class="page-404-dots" src="https://c.animaapp.com/BnCiiCW2/img/dots@2x.png" />
        <img class="page-404-dots-2" src="https://c.animaapp.com/BnCiiCW2/img/dots-1@2x.png" />
    </Layout>
</template>