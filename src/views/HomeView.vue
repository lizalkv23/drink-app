<template>
    <div>
        <master-page :srcVideo="urlSrc">
            <main-comp></main-comp>  
        </master-page>
    </div>
</template>

<script>
import MasterPage from '@/components/masterPages/MasterPage.vue'
import MainComp from '@/components/main/MainComp.vue'
import cocktail1Video from '@/assets/img/cocktail.mp4'
export default {
    name: 'HomeView',
    components: {
        MasterPage,MainComp
    },
    computed: {
        urlSrc() {
            return cocktail1Video
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/index';
</style>
