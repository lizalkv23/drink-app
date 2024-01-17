<template>
    <header class="header">
        <div  @click="goHome">
            <div class="logo" > <img src="../../assets/img/cocktail-logo.png" alt=""></div>
        </div>

        <div class="header__user">

            <div class="header__back" v-if="btnHidden">
                <custom-button
                @click="goBack"
                 > <font-awesome-icon :icon="['far', 'circle-left']" /> </custom-button>
                </div>

            <div class="header__local">
                <custom-button  @click="toggleDropdown"  class="header__lang">
                    <font-awesome-icon :icon="['fass', 'globe']" />
                </custom-button>
                <div class="header__dropdown" v-if="isDropdownOpen" @click="toggleDropdown">
                    <div class="header__dropdown-opt" @click="changeLocal('ru')">RU</div>
                    <div class="header__dropdown-opt" @click="changeLocal('en')">EN</div>
                </div>
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
            ROUTER_PATHS,
            isDropdownOpen: false,
        }
    },
computed: {
    btnHidden() {
        if(this.$route.name == ROUTER_PATHS.HOME){
            return false
        }
        return true
    }
},
    methods: {
        ...mapActions(useRootStore,['reset']),
        goHome(){
            this.$router.push(ROUTER_PATHS.HOME)
            this.reset()   
        },
        goBack(){
            this.$router.go(-1)
        },
        toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen
            },
        changeLocal(lang){
            this.$i18n.locale = lang
            localStorage.setItem('lastLanguage', this.$i18n.locale)
        }
 },
    created() {
            this.$i18n.locale = localStorage.getItem('lastLanguage') || 'en'
            if (localStorage.getItem('lastLanguage') !== this.$i18n.locale) {
                localStorage.setItem('lastLanguage', this.$i18n.locale)
            }
            const self = this
            window.addEventListener('storage', function () {
                if (self.$i18n.locale !== localStorage.getItem('lastLanguage')) {
                    self.$i18n.locale = localStorage.getItem('lastLanguage')
                    self.$router.go()
                }
            })
        },
    mounted(){
        if(this.$route.name == ROUTER_PATHS.HOME){
                this.reset() 
            }
    }
}
</script>

<style lang="scss" scoped>
@import './../../assets/style/index.scss';
.logo{
    width: 70px;
    cursor: pointer;
    img{
        max-width: 100%;
    }
}
.change-lang{
    position: relative;
}
</style>
