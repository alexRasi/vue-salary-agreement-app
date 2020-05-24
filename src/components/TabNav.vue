<template>
  <div class="tab" v-bind:class="{active: active}">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'tab-nav',
  props: {
    id: String,
    title: String,
    active: Boolean
  }
}
</script>

<style scoped>
.tab {
  background-color: white;
  width: inherit;
  text-align: center;
  line-height: 30px;
  border-bottom: 1px solid black;
  cursor: pointer;
}

.active {
  color: white;
  background-color: black;
  opacity: 0.8;
}
</style>
