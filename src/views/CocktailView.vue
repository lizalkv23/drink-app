<template>
    <div class="drink" v-if="drinkInfo">
        <div class="drink__wrapper">
        <header-comp class="header-cocktail"></header-comp>
            
            <div class="drink__info">
                <div class="title drink__title">
                    <p>{{ drinkInfo.strDrink}}</p>
                </div>
                <div class="drink__inner">
                    <ul class="drink__list">
                        <li class="drink__ing" v-for="item in getRecipe" :key="item.id">🍹{{ item.name }} <span v-if="item.measure"> | {{ item.measure }}</span></li>
                    </ul>
                    <div class="drink__recipe">
                        <p class="drink__text">
                            Take a sip of this the <span>{{ drinkInfo.strDrink }}</span>, and let the magic unfold in your glass. <br/>The  <span>{{ drinkInfo.strDrink }}</span> so exquisite, it turns every moment into a flavor-packed adventure.
                        </p>
                    </div>
                </div>
            
                    <!-- <swiper-vue v-if="cocktails.length > 0" class="drink__slider"  /> -->
               
            </div>
            <div class="drink__img">
                <img :src="drinkInfo.strDrinkThumb" alt="" />
            </div>
        </div>
    </div>
    <div v-else> loding</div>
</template>

<script>
import HeaderComp from '@/components/header/HeaderComp.vue'

import { mapState, mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'
// import SwiperVue from '@/components/swiper/SwiperVue.vue'
export default {
    name: 'CocktailView',
    components: {
        HeaderComp,
        // SwiperVue
    },
    data() {
        return {
            drinkId: null,
        }
    },

    computed: {
        ...mapState(useRootStore, [ 'cocktails','drinkInfo']),
        getRecipe(){
            const recipe = []
            for (let i = 1; i < 15; i++) {
               
                if(!this.drinkInfo[`strIngredient${[i]}`]) {
                    break
                }
                const recipeIng = {
                    id: Date.now(),
                    name : this.drinkInfo[`strIngredient${[i]}`],
                    measure :this.drinkInfo[`strMeasure${[i]}`]
                }
                recipe.push(recipeIng)



            }
            return recipe
        }

    },
    methods: {
        ...mapActions(useRootStore, ['getCocktailInfo']),
    },
    created(){
       this.drinkId = this.$route.params.id 
    }
    ,
    mounted () {
        this.getCocktailInfo(this.drinkId)
    },
}
</script>



<style lang="scss" scoped>
@import '../assets/style/index';
.title{
    align-self: auto;
}
.header-cocktail{
    width: 50%;
}
</style>
