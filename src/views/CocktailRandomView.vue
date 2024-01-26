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
                           {{ $t('description.one_part') }} <span>{{ infoListRandom.strDrink }}</span>, {{ $t('description.two_part') }} <span>{{ infoListRandom.strDrink }}</span>  {{ $t('description.three_part') }}
                        </p>
                    </div>
                </div>
               <random-cocktail ></random-cocktail>
            </div>
            <div class="drink__img">
                <img :src="infoListRandom.strDrinkThumb" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from '@/components/header/HeaderComp.vue'
import { COCKTAIL_RANDOM } from '@/constants/api'
import axios from 'axios'
import RandomCocktail from '@/components/UI/RandomCocktail.vue'
export default {
    name: 'CocktailView',
    components: {
        HeaderComp,
        RandomCocktail
    },
    data() {
      return {
            infoListRandom: null
        }
    },

    computed: {
        getRecipe(){
            const recipe = []
            for (let i = 1; i < 15; i++) {
                if(!this.infoListRandom[`strIngredient${[i]}`]) {
                    break
                }
                const recipeIng = {
                    id: Date.now(),
                    name : this.infoListRandom[`strIngredient${[i]}`],
                }
                recipe.push(recipeIng)
            }
            return recipe
        }
    },
         methods: {
        async getRandomCocktail() {
            const data = await axios.get(COCKTAIL_RANDOM)
            console.log();
            this.infoListRandom = data?.data?.drinks[0]
            console.log(this.infoListRandom);
        }
    },
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

