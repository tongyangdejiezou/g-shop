<template>
  <div class="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
// import {reqFoodCategorys} from './api/index.js'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted () {
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  }
}
</script>

<style lang="stylus" scoped>
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
