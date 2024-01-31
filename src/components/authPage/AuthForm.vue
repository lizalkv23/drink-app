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
            :typeInput="login"
            v-model="loginUser"
            required
          ></custom-input>
          <custom-input
            class="auth__password"
            :placeholderTitle="password"
            :typeInput="password"
            v-model="passwordUser"
            required
          ></custom-input>
          <custom-input
            v-if="createAcc"
            class="auth__password"
            :placeholderTitle="password"
            :typeInput="password"
            v-model="passwordUserAgain"
            required
          ></custom-input>
          <span v-if="error" class="span_requires"
            >* {{ $t('auth.one_part') }} <br />
            ** {{ $t('auth.two_part') }} @<br />
            *** {{ $t('auth.three_part') }}
          </span>
          <span v-else-if="deferentPassword" class="span_requires"
            >*{{ $t('auth.four_part') }}
          </span>

          <slot></slot>
          <div>
            <custom-button
              v-if="!createAcc"
              class="auth__btn"
              @click="loginWithEmailAndPassword(this.loginUser, this.passwordUser)"
              :disabled="isButtonDisabled"
              >Enter</custom-button
            >
            <custom-button
              v-else
              class="auth__btn"
              @click="createLoginWithEmailAndPassword(this.loginUser, this.passwordUser)"
              :disabled="isButtonDisabledCreate"
              >Create</custom-button
            >
          </div>
        </div>
        <div class="auth__text">
          <div class="auth__create-acc">
            <p v-if="!createAcc">No account? <span @click="createAccount">Create one</span></p>
            <p v-else class="goBack" @click="goBack">go back</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ROUTER_PATHS } from '@/constants/router'
import { mapState, mapActions } from 'pinia'
import { useUsersStore } from '@/stores/user'
export default {
  name: 'AuthPage',
  data() {
    return {
      login: 'email',
      password: 'password',
      loginUser: null,
      passwordUser: null,
      passwordUserAgain: null,
      createAcc: false,
      deferentPassword: false
    }
  },
  computed: {
    ...mapState(useUsersStore, ['error']),
    isButtonDisabled() {
      return !(this.loginUser && this.passwordUser)
    },
    isButtonDisabledCreate() {
      return !(this.loginUser && this.passwordUser && this.passwordUserAgain)
    }
  },
  methods: {
    ...mapActions(useUsersStore, [
      'loginWithGoogle',
      'signUpWithWithEmailAndPassword',
      'signInWithWithEmailAndPassword',
      'stateUser',
      'setError'
    ]),
    loginWithGoogleUse() {
      this.loginWithGoogle().then(() => {
        this.$router.push(ROUTER_PATHS.HOME)
        this.setError(null)
      })
    },
    loginWithEmailAndPassword(val1, val2) {
      if (this.loginUser !== null && this.passwordUser !== null)
        this.signInWithWithEmailAndPassword(val1, val2).then(() => {
          this.$router.push(ROUTER_PATHS.HOME)
        })
      this.resetData()
    },
    createLoginWithEmailAndPassword(val1, val2) {
      if (this.loginUser !== null && this.passwordUser !== null)
        if (this.passwordUser === this.passwordUserAgain) {
          this.signUpWithWithEmailAndPassword(val1, val2).then(() => {
            this.$router.push(ROUTER_PATHS.HOME)
          })
          this.resetData()
        } else this.deferentPassword = true
      this.resetData()
    },
    createAccount() {
      this.resetData()
      this.createAcc = true
      // this.resetDate()
    },
    goBack() {
      this.$router.go(0)
    },
    resetData() {
      this.loginUser = null
      this.passwordUser = null
      this.passwordUserAgain = null
      this.setError(null)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets//style/index.scss';
.span_requires {
  color: rgb(180, 11, 11);
}
.goBack {
  cursor: pointer;
}
</style>
