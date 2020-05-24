<template>
  <div class="tabs-window">
  <TabsNavbar class="tabs-navbar">
    <TabNav title="Employer" active="true"/>
    <TabNav title="Employee"/>
  </TabsNavbar>
  </div>
</template>

<script>
import TabNav from './TabNav.vue'
import TabsNavbar from './TabsNavbar.vue'

export default {
  name: 'tabs-window',
  components: {
    TabNav,
    TabsNavbar
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .tabs-window {
    width: 50vw;
    height: 30vh;
    border: 1px solid lightgray;
    margin-bottom: 30%;
    box-shadow: 2px 6px 12px #00000059;
    display: flex;
  }
</style>
