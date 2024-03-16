<script>
import Layout from "../../layouts/front.vue";
import PageHeader from "../../pages/website/page-header.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            title: "About Us",
            items: [
                {
                    text: "Homepage"
                },
                {
                    text: "Services",
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
    </Layout>
</template>