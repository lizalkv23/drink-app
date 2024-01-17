<template>
    <div>
        <master-page :srcVideo="urlSrc">
            <cocktail-cards></cocktail-cards>
        </master-page>
    </div>
    </template>
    
    <script>
    import MasterPage from '@/components/masterPages/MasterPage.vue'
    import CocktailCards from '@/components/main/CocktailCards.vue'
    import cocktail1Video from '@/assets/img/laptop.mp4'
    export default {
        name: 'HomeView',
        components: {
            MasterPage,CocktailCards
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
    