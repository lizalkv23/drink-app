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
            modifier: 1,
            slideShadows: true
        }"
        :modules="modules"
    >
 
        <swiper-slide v-for="drink in cocktails" :key="drink.idDrink" class="slide">
            <div class="slide__wrap"  >
                <router-link :to="`/cocktail/${drink.idDrink}`">
                    <div>

                        <div class="slide__img" @click="getId(drink.idDrink)">
                            <img :src="drink.strDrinkThumb" alt="" />
                        </div>
                        <div class="slide__text">
                            {{ drink.strDrink }}
                        </div>
                    </div>
                </router-link>
            </div>
        </swiper-slide>
    </swiper>
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
export default {
    name: 'swiperVue',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Autoplay, EffectCoverflow, Navigation],
            routeIdCocktail: '',
        }
    },
    computed:{
        ...mapState(useRootStore , ['cocktails']),

    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/index.scss';


</style>
