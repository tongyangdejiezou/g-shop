<template>
  <div class="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqFoodCategorys} from './api/index.js'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  async mounted () {
    const result = await reqFoodCategorys()
    console.log(result)
  }
}
</script>

<style lang="stylus" scoped>
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
