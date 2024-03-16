<script>
export default {
    components: {},
    props: {
        title: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default: () => {
                return []
            },
        },
        desc: {
            type: String,
            default: '',
        },
    },
}
</script>

<template>
<!-- start page header -->
    <div class="influencer-group">
        <div class="influencer-overlap-group-wrapper">
            <div class="influencer-overlap-group">
                <div class="influencer-rectangle"></div>
                <div class="influencer-text-wrapper">{{ title }}</div>
            </div>
        </div>
        <div class="influencer-div">
            <div class="influencer-homepage">{{ items[0].text }}</div>
            <div class="influencer-text-wrapper-2">{{ items[1].text }}</div>
            <div class="influencer-text-wrapper-3" v-if="items[2]">{{ items[2].text }}</div>
            <div class="influencer-rectangle-2"></div>
            <img class="influencer-vector" src="@/assets/img/vector-60.png" />
            <img class="influencer-img" v-if="items[2]" src="@/assets/img/vector-60.png" />
        </div>
    </div>
    <p class="influencer-text-wrapper-4" v-if="desc">
        {{ desc }}
    </p>
    <!-- end page header -->
</template>
