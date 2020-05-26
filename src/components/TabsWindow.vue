<template>
  <div class="tabs-window">
  <TabsNavbar class="tabs-navbar">
    <TabNav title="Employer" v-bind:active="this.activeTab === 'Employer'" v-on:clickEvent="tabClicked" />
    <TabNav title="Employee" v-bind:active="this.activeTab === 'Employee'" v-on:clickEvent="tabClicked"/>
  </TabsNavbar>
   <SubmitForm v-if="this.activeTab === 'Employer'" v-on:submitEvent="employerFormSubmit" key="employer"></SubmitForm>
   <SubmitForm v-else-if="this.activeTab === 'Employee'" v-on:submitEvent="employeeFormSubmit" key="employee"></SubmitForm>
    London now: {{currentTemperature}} °C
  </div>
</template>

<script>
import TabNav from './TabNav.vue'
import TabsNavbar from './TabsNavbar.vue'
import SubmitForm from './SubmitForm.vue'

import TemperatureFetchingService from '../services/TemperatureFetchingService';
const temperatureFetchingService = new TemperatureFetchingService();

export default {
  name: 'tabs-window',
  components: {
    TabNav,
    TabsNavbar,
    SubmitForm
  },
  data: function () {
    return {
      activeTab: 'Employer',
      currentTemperature: 5
    }
  },
  methods: {
    tabClicked(title) {
      this.activeTab = title;
    },
    employerFormSubmit(value) {
      console.log('employer');
      console.log(value);
    },
    employeeFormSubmit(value) {
      console.log('employee');
      console.log(value);
    }
  },
  created() {
    temperatureFetchingService.fetchWeather(this.$http, 'London,uk').then(res => {
     this.currentTemperature = temperatureFetchingService.convertKelvinToCelcius(res.data.main.temp)
    })
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
