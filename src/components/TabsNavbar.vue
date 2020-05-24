<template>
  <div class="tabs-navbar" >
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'tabs-navbar',
}
</script>

<style scoped>
  .tabs-navbar {
    width: 100%;
    height: 15%;
    background-color: gray;
    display: flex;
  }
</style>
