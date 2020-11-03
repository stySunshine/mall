<template>
  <tabBar>
      <tabBarItem>
        <template v-slot:item-icon>
          <img src='../../../assets/img/tabbar/home.svg'>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tabBarItem>
      <tabBarItem>
        <template v-slot:item-icon>
          <img src='../../../assets/img/tabbar/category.svg'>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tabBarItem>
      <tabBarItem>
        <template v-slot:item-icon>
          <img src='../../../assets/img/tabbar/shopcart.svg'>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tabBarItem>
      <tabBarItem>
        <template v-slot:item-icon>
          <img src='../../../assets/img/tabbar/profile.svg'>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tabBarItem>
    </tabBar>
</template>

<script>
  import tabBar from '../../common/tabbar/Tabbar'
  import tabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      tabBar,
      tabBarItem
    }
  }
</script>

<style>

</style>