<template>
    <h1 class="title">{{ ingredient }}</h1>
    <div class="cocktail__wrapper"  v-if="cocktails.length > 0">

        <div class="cocktail__card" v-for="cocktail in cocktails" :key="cocktail.idDrink">
            <router-link :to="`/cocktail/${cocktail.idDrink}`">
                <div class="cocktail__img">
                    <img :src="cocktail.strDrinkThumb" alt="" />
                </div>
                <div class="cocktail__title">
                    <p>{{ cocktail.strDrink }}.</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'

// import MasterPage from '@/components/masterPages/MasterPage.vue'
// import cocktail1Video from '@/assets/img/cocktail1.mp4'
export default {
    name: 'CocktailComp',
    // props: {
    //     cocktails: {
    //         type: Array,
    //         required: true,
    //         default: () => []
    //     },

    // },
    computed: {
        ...mapState(useRootStore, ['ingredients', 'cocktails', 'ingredient']),

    },
    methods: {
        ...mapActions(useRootStore, ['getIngredients','setIngredient']),


    },
}
// components: {
//     MasterPage
// },
// computed: {
//     urlSrc() {
//         return cocktail1Video
//     }
// }
</script>

<style lang="scss" scoped>
@import '../../assets/style/index';
</style>
