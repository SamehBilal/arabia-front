<script>
export default {
    components: {},
    props: {
        partners: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<template>
    <div class="group-15" v-if="partners">
        <div class="frame-4">
          <div class="about-our-company-5">-Clients And Partners-</div>
        </div>
        <p class="thank-you-for">Thank You For Supporting Our Talents</p>
        <div class="EA-wrapper"><img class="EA" src="@/assets/img/ea.svg" /></div>
        <div class="epicgames-wrapper"><img class="epicgames" src="@/assets/img/epicgames.svg" /></div>
        <div class="huawei-logo-wrapper"><img class="huawei-logo" src="@/assets/img/huawei-logo.svg" /></div>
        <div class="talabat-logo-wrapper"><img class="talabat-logo" src="@/assets/img/talabat-logo.svg" /></div>
        <div class="pngfind-wrapper"><img class="pngfind" src="@/assets/img/pngfind.svg" /></div>
        <div class="activision-wrapper"><img class="activision" src="@/assets/img/activision.svg" /></div>
      </div>
</template>