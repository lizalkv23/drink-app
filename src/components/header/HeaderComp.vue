<template>
    <header class="header">
        <router-link :to="ROUTER_PATHS.HOME">
            <div class="logo" > <img src="../../assets/img/cocktail-logo.png" alt=""></div>
        </router-link>
        
        <div class="header__user">
            <div class="header__back">
                <custom-button
                @click="goBack"
                 > <font-awesome-icon :icon="['far', 'circle-left']" /> </custom-button>
                </div>
            <div class="header__local">
                <custom-button>
                    <font-awesome-icon :icon="['fass', 'globe']" />
                </custom-button>
            </div>
            <div class="header__reg">
                <custom-button>
                    <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                </custom-button>
            </div>
        </div>
    </header>
</template>

<script>
import {  mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'
import { ROUTER_PATHS } from '@/constants/router';
export default {
    name: 'HeaderComp',
    data() {
        return {
            ROUTER_PATHS
        }
    },

    methods: {
        ...mapActions(useRootStore, ['setIngredient']),

     goBack(){
          this.$router.go(-1)
     }
 },

    
}
</script>

<style lang="scss" scoped>
@import './../../assets/style/index.scss';
// .btn--hover {
//     padding: 5px;
// }
.logo{
    width: 70px;
    cursor: pointer;
    img{
        max-width: 100%;
    }
}
</style>
