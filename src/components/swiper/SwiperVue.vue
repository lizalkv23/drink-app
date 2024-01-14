<template>
    <swiper 
        class="slider"
        :slides-per-view="3"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false
        }"
        :spaceBetween="30"
        :navigation="true"
        :effect="'coverflow'"
        :grabCursor="true"
        :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true
        }"
        :modules="modules"
    >
 
        <swiper-slide v-for="drink in cocktails" :key="drink.idDrink" class="slide">
            <div class="slide__wrap" @click="getId(drink.idDrink)" >
                <!-- <router-link :to="`/cocktail/${routeIdCocktail}`"> -->
                    <div>

                        <div class="slide__img">
                            <img :src="drink.strDrinkThumb" alt="" />
                        </div>
                        <div class="slide__text">
                            {{ drink.strDrink }}
                        </div>
                    </div>
                <!-- </router-link> -->
            </div>
        </swiper-slide>
    </swiper>
    <!-- :to="`/cocktail/${drink.idDrink}`" -->
    <!-- :centeredSlides="true" -->

    <!-- @swiper="onSwiper"
        v-swiper="swiperR" -->
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules'
import { mapState } from 'pinia'
import { useRootStore } from '@/stores/root'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
// import 'swiper/css'
export default {
    name: 'swiperVue',
    components: {
        Swiper,
        SwiperSlide
    },
    // props: {
    //     cocktailList: {
    //         type: Array,
    //         required: true
    //     }
    // },
    data() {
        return {
            modules: [Autoplay, EffectCoverflow, Navigation],
            routeIdCocktail: '',
            // cocktailsList: []
            // swiperR: null
        }
    },
    computed:{
        ...mapState(useRootStore , ['cocktails']),

    },
    methods:{
        getId(id){
            this.routeIdCocktail = id
        },
        // getCocktailList(){
        //     return this.cocktailsList = this.cocktails
        // }
    },
    mounted(){
        // this.getIngredients()
    //    this.getCocktailList()
    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/index.scss';


</style>
