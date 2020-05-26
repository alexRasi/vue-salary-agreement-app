<template>
  <div class="tabs-window">
  <MessageModal 
    v-bind:visible="messageModalVisibility"
    v-bind:message="messageModalValue"
    v-on:modalCloseEvent="closeModal"
    />
  <TabsNavbar class="tabs-navbar">
    <TabNav title="Employer" v-bind:active="this.activeTab === 'Employer'" v-on:clickEvent="tabClicked" />
    <TabNav title="Employee" v-bind:active="this.activeTab === 'Employee'" v-on:clickEvent="tabClicked"/>
  </TabsNavbar>
   <SubmitForm v-if="this.activeTab === 'Employer'" 
    v-bind:showInput="this.showEmployerInput" 
    v-on:submitEvent="employerFormSubmit"
    placeholderValue="Enter maximum offer"
    key="employer"></SubmitForm>
   <SubmitForm v-else-if="this.activeTab === 'Employee'"
    v-bind:showInput="this.showEmployeeInput" 
    v-on:submitEvent="employeeFormSubmit" 
    placeholderValue="Enter minimum salary"
    key="employee"></SubmitForm>  
   <div class="small-margin">London now: {{currentTemperature}} °C</div>
   <div class="small-margin">Mock Employer's input 50.000 in the next 10 seconds <span><button v-on:click="mockEmployerInput">mock</button></span></div>
   <div class="small-margin">Mock Employee's input 50.000 in the next 10 seconds <span><button v-on:click="mockEmployeeInput">mock</button></span></div>
   <div class="small-margin">Clear values <span><button v-on:click="clearValues">clear</button></span></div>
  </div>
</template>

<script>
import TabNav from './TabNav.vue'
import TabsNavbar from './TabsNavbar.vue'
import SubmitForm from './SubmitForm.vue'
import MessageModal from './MessageModal.vue'

import TemperatureFetchingService from '../services/TemperatureFetchingService';
import MockSocketService from '../services/MockSocketService';

const mockSocketService = new MockSocketService();
const temperatureFetchingService = new TemperatureFetchingService();

export default {
  name: 'tabs-window',
  components: {
    TabNav,
    TabsNavbar,
    SubmitForm,
    MessageModal
  },
  data: function () {
    return {
      activeTab: 'Employer',
      currentTemperature: null,
      messageModalValue: '',
      messageModalVisibility: false,
      showEmployeeInput: true,
      showEmployerInput: true
    }
  },
  methods: {
    tabClicked(title) {
      this.activeTab = title;
    },
    employerFormSubmit(value) {
      mockSocketService.emitEmployerSalary(value);
      this.showModal('Sumbitted. Please wait for the employee\'s response');
      this.showEmployerInput = false;

      if(mockSocketService.getEmployeeLastValue()) {
        this.checkForMatchingSalaries(mockSocketService.getEmployeeLastValue(), value);
      }
    },
    employeeFormSubmit(value) {
      mockSocketService.emitEmployeeSalary(value);
      this.showModal('Sumbitted. Please wait for the employer\'s response');
      this.showEmployeeInput = false;

      if(mockSocketService.getEmployerLastValue()) {
        this.checkForMatchingSalaries(value, mockSocketService.getEmployerLastValue());
      }
    },
    checkForMatchingSalaries(employeeSalary, employerSalary) {
      if(employeeSalary === undefined || employerSalary === undefined) return;

      if(+employeeSalary <= +employerSalary) {
        this.showModal('Success!');
      } else {
        this.showModal('Failure!');
      }
    },
    showModal(message) {
      this.messageModalValue = message;
      this.messageModalVisibility = true;
    },
    closeModal() {
      this.messageModalValue = '';
      this.messageModalVisibility = false;
    },
    mockEmployeeInput() {
      console.log('Timeout mock set for employee');
      setTimeout( () => {
        console.log('Employee entered salary')
        mockSocketService.emitEmployeeSalary(50000);
      }, 10000);
    },
    mockEmployerInput() {
      console.log('Timeout mock set for employer');
      setTimeout( () => {
        console.log('Employer entered salary')
        mockSocketService.emitEmployerSalary(50000);
      }, 10000);
    },
    clearValues() {
      this.showModal('Values cleared');

      mockSocketService.reset();
      this.showEmployeeInput = true;
      this.showEmployerInput = true;
    }
  },
  created() {
    temperatureFetchingService.fetchWeather(this.$http, 'London,uk').then(res => {
     this.currentTemperature = temperatureFetchingService.convertKelvinToCelcius(res.data.main.temp)
    });

    mockSocketService.listenEmployee().subscribe(employeeSalary => {
      this.checkForMatchingSalaries(employeeSalary, mockSocketService.getEmployerLastValue());
    });

     mockSocketService.listenEmployer().subscribe(employerSalary => {
       this.checkForMatchingSalaries(mockSocketService.getEmployeeLastValue(), employerSalary);
    });
    
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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    }

  .small-margin {
    margin: 20px;
  }
</style>
