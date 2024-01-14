<template>
    <div v-if="ingredients.length > 0" class="home">
        <div class="home__item">
            <video class="home__video" :src="srcVideo" autoplay muted loop></video>
        </div>


        <div class="main">
        <header-comp :backFun="goHome"></header-comp>
            <slot>
            </slot>
        </div>
    </div>
    <div v-else class="load error">
        <div class="error__text load__text">
            <font-awesome-icon :icon="['fas', 'heart']" spin />
            <p>Loading</p>
        </div>
    </div>
</template>

<script>
import HeaderComp from '@/components/header/HeaderComp.vue'
import { ROUTER_PATHS } from '@/constants/router'

import { mapState, mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'

export default {
    name: 'masterPage',
    components: {
        HeaderComp,

    },
    props:{
        srcVideo:{
            type: String,
            required: true
        }
    },
    
    computed: {
        ...mapState(useRootStore, ['ingredients', 'cocktails', 'ingredient']),

    },
    methods: {
        ...mapActions(useRootStore, ['getIngredients','setIngredient']),
        goHome() {
         
         if(this.$route.name == ROUTER_PATHS.HOME) {
            this.setIngredient(null)
        }
      
     },
    },
    mounted() {
        this.getIngredients()
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/index';
// .load{

// }
</style>
