<template>
    <h1 class="title title-cards">{{ ingredient }}</h1>
    <div class="cocktail__wrapper"  v-if="cocktails.length > 0">
        <swiper-vue  ></swiper-vue>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'
import SwiperVue from '../swiper/SwiperVue.vue'
export default {
    name: 'CocktailComp',
 components: {
    SwiperVue
 },
 data() {
    return {
        cocktailsList: []
    }
 },
    computed: {
        ...mapState(useRootStore, ['ingredients', 'cocktails', 'ingredient']),


    },
    methods: {
        ...mapActions(useRootStore, ['getIngredients','setIngredient']),
    },
    created() {
        useRootStore().loadFromLocalStorage();
        useRootStore().loadIngredientFromLocalStorage();
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/index';
.title-cards{
    align-self: flex-end;
}
</style>
