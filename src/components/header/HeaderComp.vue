<template>
  <header class="header">
    <div @click="goHome">
      <div class="logo"><img src="../../assets/img/cocktail-logo.png" alt="" /></div>
    </div>

    <div class="header__user">
      <div  v-if="btnHidden">
        <custom-button class="header__back" @click="goBack">
          <font-awesome-icon :icon="['far', 'circle-left']" />
        </custom-button>
      </div>

      <div class="header__local">
        <custom-button @click="toggleDropdown" class="header__lang">
          <font-awesome-icon :icon="['fass', 'globe']" />
        </custom-button>
        <div class="header__dropdown" v-if="isDropdownOpen" @click="toggleDropdown">
          <div class="header__dropdown-opt" @click="changeLocal('ru')">RU</div>
          <div class="header__dropdown-opt" @click="changeLocal('en')">EN</div>
        </div>
      </div>

      <div class="header__reg">
        <custom-button class="header__reg-btn" v-if="!user" @click="goAuthPage">
          <font-awesome-icon :icon="['far', 'user']" />

        </custom-button>

        <div class="header__login-item" v-else>
          <div class="header__img-reg" >
            <img v-if="user.photoURL" :src="user.photoURL" alt="" /> 
            <div class="header__letter-reg" v-else>
              {{ emailImg }}
            </div>
          </div>
          <div v-if="user.displayName" class="header__user-name">{{ user.displayName }}</div>
          <div v-else class="header__user-name">{{ user.email }}</div>
          <custom-button @click="logout">
          <font-awesome-icon :icon="['fas', 'right-to-bracket']"  />

          </custom-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useRootStore } from '@/stores/root'
import { useUsersStore } from '@/stores/user'
import { ROUTER_PATHS } from '@/constants/router'
export default {
  name: 'HeaderComp',
  data() {
    return {
      ROUTER_PATHS,
      isDropdownOpen: false
    }
  },
  computed: {
    ...mapState(useUsersStore, ['user']),
    btnHidden() {
      if (this.$route.name == ROUTER_PATHS.HOME) {
        return false
      }
      return true
    },
    emailImg(){
      return  this.user.email.charAt(0)
    }
  },
  methods: {
    ...mapActions(useRootStore, ['reset']),
    ...mapActions(useUsersStore, ['logout']),
    goHome() {
      this.$router.push(ROUTER_PATHS.HOME)
      this.reset()
    },
    goBack() {
      this.$router.go(-1)
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    changeLocal(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lastLanguage', this.$i18n.locale)
    },
    goAuthPage() {
      this.$router.push(ROUTER_PATHS.AUTH_PAGE)
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
  mounted() {
    if (this.$route.name == ROUTER_PATHS.HOME) {
      this.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/style/index.scss';

.change-lang {
  position: relative;
}
</style>
