<template>
  <div class="tab" v-on:click="emitClickEvent" v-bind:class="{active: active}">
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
  },
  methods: {
    emitClickEvent() {
      this.$emit('clickEvent', this.title);
    }
  }
}
</script>

<style scoped>
.tab {
  background-color: white;
  width: inherit;
  text-align: center;
  line-height: 30px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
}

.active {
  color: white;
  background-color: black;
  opacity: 0.8;
}
</style>
