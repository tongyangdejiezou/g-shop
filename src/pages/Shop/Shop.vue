<template>
  <div>
    <shop-header></shop-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
        <router-link to="/shop/ratings" replace>评价</router-link>
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader'
export default {
  components: {
    ShopHeader
  },
  mounted () {
    this.$store.dispatch('getShopInfo')
  }
}
</script>
<style lang="stylus" scoped>
.tab
  // margin-bottom 10px
  height 48px
  box-sizing border-box
  background-color #fff
  .tab-item
    display flex
    justify-content space-between
    margin 0 50px
    a
      width 15%
      height 30px
      text-align center
      line-height 30px
      padding 5px
      display inline-block
      &.router-link-active
        color #02a774
        border-bottom 3px solid #02a774
</style>
