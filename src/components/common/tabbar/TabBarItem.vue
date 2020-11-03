<template>
  <div id='tab-bar-item'>
    <slot name='item-icon'></slot>
    <slot name='item-text'></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem'
  }
</script>

<style>
  #tab-bar-item {
    flex: 1;
    text-align: center;
  }
  #tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
</style>