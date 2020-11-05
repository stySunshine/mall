<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- <home /> -->
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
  import MainTabBar from './components/content/mainTabBar/MainTabBar'
  import Home from './views/home/home'

  export default {
    name: 'App',
    components: {
      MainTabBar,
      Home
    }
  }
</script>

<style>
  @import 'assets/css/base.css'
</style>
