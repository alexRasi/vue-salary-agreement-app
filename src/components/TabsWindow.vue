<template>
  <div class="tabs-window">
  <TabsNavbar class="tabs-navbar">
    <TabNav title="Employer" v-bind:active="this.activeTab === 'Employer'" v-on:clickEvent="tabClicked" />
    <TabNav title="Employee" v-bind:active="this.activeTab === 'Employee'" v-on:clickEvent="tabClicked"/>
  </TabsNavbar>
   <div v-if="this.activeTab === 'Employer'">
    Employer formm
  </div>
  <div v-else-if="this.activeTab === 'Employee'">
    Employee formm
  </div>
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
  data: function () {
    return {
      activeTab: 'Employer'
    }
  },
  methods: {
    tabClicked(title) {
      this.activeTab = title;
    }
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
  }
</style>
