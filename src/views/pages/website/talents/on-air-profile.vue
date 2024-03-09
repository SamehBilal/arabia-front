<script>
import Layout from "../../../layouts/front.vue";

/**
 * Shops Component
 */
export default {
    components: { Layout },
};

</script>

<template>
    <Layout :isHeaderMultiple="false" :partners="false" :isFooterMultiple="false">
        <div class="esport-favorite-games">Favorite Games</div>
        <div class="esport-group-36">
          <div class="esport-electronic-arts-logo-wrapper">
            <img class="esport-electronic-arts-logo" src="https://c.animaapp.com/GCUd8SDW/img/electronic-arts-logo@2x.png" />
          </div>
          <div class="esport-epicgames-wrapper">
            <img class="esport-epicgames" src="https://c.animaapp.com/GCUd8SDW/img/epicgames@2x.png" />
          </div>
          <div class="esport-huawei-logo-wrapper">
            <img class="esport-huawei-logo" src="https://c.animaapp.com/GCUd8SDW/img/huawei-logo@2x.png" />
          </div>
          <div class="esport-talabat-logo-wrapper">
            <img class="esport-talabat-logo" src="https://c.animaapp.com/GCUd8SDW/img/talabat-logo@2x.png" />
          </div>
          <div class="esport-pngfind-wrapper">
            <img class="esport-pngfind" src="https://c.animaapp.com/GCUd8SDW/img/pngfind@2x.png" />
          </div>
          <div class="esport-activision-wrapper">
            <img class="esport-activision" src="https://c.animaapp.com/GCUd8SDW/img/activision@2x.png" />
          </div>
        </div>
    </Layout>
</template>