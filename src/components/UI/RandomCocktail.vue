<template>
        <custom-button
        class="main__btn"
        @click="goRandomCocktail"
        >
        {{$t('home.button.random')}} <font-awesome-icon :icon="['fas', 'martini-glass']" />
        </custom-button>
</template>

<script>
import { ROUTER_PATHS } from '@/constants/router'
    export default {
        methods: {
            goRandomCocktail(){
            this.$router.push(ROUTER_PATHS.COCKTAIL_RANDOM)

            if(this.$route.name == ROUTER_PATHS.COCKTAIL_RANDOM)
            this.$router.go(0)
        }
    },
    }
</script>

<style lang="scss" scoped>
@import './../../assets/style/index.scss'
</style>
