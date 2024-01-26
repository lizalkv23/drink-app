<template>
  <div class="auth">
    <div class="auth__container">
      <h1 class="auth__title">Sing in to Cocktail App</h1>
      <div class="auth__inner">
        <custom-button class="auth__btn" @click="loginWithGoogleUse">GOOGLE</custom-button>

        <div class="auth__regest">
          <custom-input
            class="auth__email"
            :placeholderTitle="login"
            v-model="loginUser"
          ></custom-input>
          <custom-input
            class="auth__password"
            :placeholderTitle="password"
            v-model="passwordUser"
          ></custom-input>
          <slot></slot>
          <custom-button
            class="auth__btn"
            @click="loginWithEmailAndPassword(this.loginUser, this.passwordUser)"
            >Enter</custom-button
          >
        </div>
        <div class="auth__text">
          <div class="auth__create-acc">No account? <span>Create one</span></div>
        </div>
      </div>
    </div>
  </div>
  <div @click="goHome">
    <div class="logo auth__logo"><img src="../../assets/img/cocktail-logo.png" alt="" /></div>
  </div>
</template>

<script>
import { ROUTER_PATHS } from '@/constants/router'
import { mapActions } from 'pinia'
import { useUsersStore } from '@/stores/user'
export default {
  name: 'AuthPage',
  data() {
    return {
      login: 'email',
      password: 'password',
      loginUser: null,
      passwordUser: null
    }
  },

  methods: {
    ...mapActions(useUsersStore, ['loginWithGoogle', 'signUpWithWithEmailAndPassword']),
    goHome() {
      this.$router.push(ROUTER_PATHS.HOME)
    },
    loginWithGoogleUse() {
      this.loginWithGoogle().then(() => {
        this.$router.push(ROUTER_PATHS.HOME)
      })
    },
    loginWithEmailAndPassword(val1, val2) {
      this.signUpWithWithEmailAndPassword(val1, val2)
      this.$router.push(ROUTER_PATHS.HOME)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets//style/index.scss';
</style>
