<template>
    <main class="main__section">
        <h1  class="title">{{$t('home.title')}}🍹</h1>
            <div class="container-select-section">

                <custom-select
                    class="main__select"
                    :ingredientsCocktail="ingredients"
                    @option="setIngredient"
                    :selectedOption="ingredient"
                ></custom-select>

            <router-link v-if="ingredient" :to="{name :ROUTER_PATHS.COCKTAILS_CARDS}">
                <custom-button @click="getCocktailByIngr(ingredient)" class="main__btn-link">{{$t('home.button.go')}}
                    <font-awesome-icon :icon="['fas', 'martini-glass-citrus']"
                /></custom-button>
            </router-link>

        </div>
            <div class="main__info">

                <p>
                    {{ $t('home.info.one_part') }} <span>{{ $t('home.info.span1') }}</span> {{ $t('home.info.two_part') }} <span>{{ $t('home.info.span2') }}</span> {{ $t('home.info.three_part') }}
                </p>
                <p> </p>
            </div>

    </main>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'
import { ROUTER_PATHS } from '@/constants/router'
export default {
    name: 'MainComp',
    data() {
        return {
            cocktailsList: [],
            disabledBtn: true,
            ROUTER_PATHS
        }
    },
    computed: {
        ...mapState(useRootStore, ['ingredients', 'cocktails', 'ingredient'])
    },
    methods: {
        ...mapActions(useRootStore, ['getIngredients', 'getCocktails','setIngredient']),
        titleOption(ingredientVal) {
            this.setIngredient(ingredientVal)
        },
        getCocktailByIngr(ingredient) {
            this.getCocktails(ingredient)
            this.cocktailsList = this.cocktails
        },
    },
    mounted() {
        this.getIngredients()
    }
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
