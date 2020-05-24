<template>
  <div id="app">
    <TabsWindow msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TabsWindow from './components/TabsWindow.vue'

export default {
  name: 'App',
  components: {
    TabsWindow
  }
}
</script>

<style>
body {
  margin:0;
  padding:0;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
