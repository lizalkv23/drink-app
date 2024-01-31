<template>
<auth-form></auth-form>
  <div @click="goHome">
    <div class="logo auth__logo"><img src="../../assets/img/cocktail-logo.png" alt="" /></div>
  </div>
</template>

<script>
import { ROUTER_PATHS } from '@/constants/router'
import AuthForm from '@/components/authPage/AuthForm.vue'
export default {
  name: 'AuthPage',
  components: { AuthForm },

  methods: {
    goHome() {
      this.$router.push(ROUTER_PATHS.HOME)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets//style/index.scss';
</style>
