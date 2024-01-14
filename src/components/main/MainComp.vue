<template>
    <main class="main__section">
        <h1  class="title">You ready? Let's throw a party🍹</h1>

            <div class="container-select-section">
                <custom-select
                ref="customSelect"
                    class="main__select"
                    :ingredientsCocktail="ingredients"
                    @option="setIngredient"
                    :selectedOption="ingredient"
                ></custom-select>
 <router-link v-if="ingredient" :to="{name :ROUTER_PATHS.COCKTAILS_CARDS}">

     <custom-button @click="getCocktailByIngr(ingredient)" class="main__btn-link"> GO
         <font-awesome-icon :icon="['fas', 'martini-glass-citrus']"
     /></custom-button>
 </router-link>
            </div>
            <div class="main__info">

                <p>
                    Unleash your inner <span>mixologist</span> with our array of tantalizing cocktail recipes and
                    elevate your <span>drinking experience</span>to new heights
                </p>
            </div>
            <!-- <swiper-vue :cocktailList="cocktails" /> -->
        <custom-button class="main__btn"
            >Get Random Cocktail <font-awesome-icon :icon="['fas', 'martini-glass']" />
        </custom-button>
    </main>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'
import { ROUTER_PATHS } from '@/constants/router'
// import SwiperVue from '@/components/swiper/SwiperVue.vue'
// import { moviesImg } from '@/constants/api'
export default {
    name: 'MainComp',
    // components: {
    //     SwiperVue
    // },
    data() {
        return {
            // selectedOption: 'Chose your ingredient',
            // moviesImg,
            cocktailsList: [],
            disabledBtn: true,
            ROUTER_PATHS
        }
    },
    computed: {
        ...mapState(useRootStore, ['ingredients', 'cocktails', 'ingredient'])
        // disBtn() {
        //     if (this.selectedOption !== 'Chose your ingredient') {
        //         return (this.disabledBtn = !this.disabledBtn)
        //     }
        //     return this.disabledBtn
        // }
        // setIngredients() {
        //     return (this.ingredientsCocktail = this.ingredients)
        // }
    },
    methods: {
        ...mapActions(useRootStore, ['getIngredients', 'getCocktails','setIngredient']),
        titleOption(ingredientVal) {
            // this.ingredient = ingredientVal.strIngredient1
            this.setIngredient(ingredientVal)
        },

        getCocktailByIngr(ingredient) {
            this.getCocktails(ingredient)
            this.cocktailsList = this.cocktails
            this.$refs.customSelect.clearInput();
            // if (this.cocktailsList.length > 0) {
            //     this.$route.params.cocktailsList
            // }
        },
        clearInput() {
        this.filterText = '';
    }

        // async getCocktailByIngr(ingredient) {
        //     try {
        //         const cocktailsData = await this.getCocktails(ingredient)
        //         this.cocktailsList = cocktailsData
        //     } catch (error) {
        //         console.error('Error fetching cocktails:', error)
        //     }
        // }
    },
    mounted() {
        this.getIngredients()
        // this.moviesImg
    }

    // watch: {
    //     selectedOption(newIngredient, oldIngredient) {
    //         if (newIngredient !== oldIngredient) {
    //             this.getCocktailByIngr(newIngredient)
    //         }
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.container-select-section {
    display: flex;
    justify-content: center;
    gap: 25px;
    align-self: center;
}
</style>
