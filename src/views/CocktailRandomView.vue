<template>
    <div class="drink" v-if="infoListRandom" >
        <div class="drink__wrapper">
            <header-comp class="header-cocktail"></header-comp> 
            
            <div class="drink__info">
                <div class="title drink__title">
                    <p>{{ infoListRandom.strDrink}}</p>
                </div>
                <div class="drink__inner">
                    <ul class="drink__list">
                        <li class="drink__ing" v-for="item in getRecipe" :key="item.id">🍹{{ item.name }} </li>
                    </ul>
                    <div class="drink__recipe">
                        <p class="drink__text">
                            Take a sip of this the <span>{{ infoListRandom.strDrink }}</span>, and let the magic unfold in your glass. <br/>The  <span>{{ infoListRandom.strDrink }}</span> so exquisite, it turns every moment into a flavor-packed adventure.
                        </p>
                    </div>
                </div>
            <!-- <swiper-vue></swiper-vue> -->
               <random-cocktail ></random-cocktail>
            </div>
            <div class="drink__img">
                <img :src="infoListRandom.strDrinkThumb" alt="" />
            </div>
        </div>
    </div>
    <!-- <div > lodffffffffffffffffffdd ddddddddddddddding</div> -->
</template>

<script>
import HeaderComp from '@/components/header/HeaderComp.vue'
// import SwiperVue from '@/components/swiper/SwiperVue.vue'
// import { mapState, mapActions } from 'pinia'
// import { useRootStore } from '@/stores/root'
import { COCKTAIL_RANDOM } from '@/constants/api'
import axios from 'axios'
import RandomCocktail from '@/components/UI/RandomCocktail.vue'
export default {
    name: 'CocktailView',
    components: {
        HeaderComp,
        // SwiperVue ,
        RandomCocktail
    },
    data() {
      return {
            // drinkId: null,
            infoListRandom: null
        }
    },

    computed: {
        // ...mapState(useRootStore, [ 'cocktails','drinkInfo']),
        getRecipe(){
            const recipe = []
            for (let i = 1; i < 15; i++) {
               
                if(!this.infoListRandom[`strIngredient${[i]}`]) {
                    break
                }
                const recipeIng = {
                    id: Date.now(),
                    name : this.infoListRandom[`strIngredient${[i]}`],
                    // measure :this.drinkInfo[`strMeasure${[i]}`]
                }
                recipe.push(recipeIng)



            }
            return recipe
        }

    },
 
        // ...mapActions(useRootStore, ['getCocktailInfo']),
        methods: {
        async getRandomCocktail() {
            const data = await axios.get(COCKTAIL_RANDOM)
            console.log();
            this.infoListRandom = data?.data?.drinks[0]
            console.log(this.infoListRandom);
        }
    },
    // created(){
    //    this.drinkId = this.$route.params.id 
    // }
    // ,
    mounted () {
        this.getRandomCocktail()
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

