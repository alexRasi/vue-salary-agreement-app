<template>
  <div class="submit-form">
    <div class="input-container"><input type="number" class="salary-input" v-model="salary" placeholder="Enter salary"></div>
    <div class="submit-button-container"><button class="submit-button" v-on:click="emitSubmitEvent">Submit</button></div>
  </div>
</template>

<script>
export default {
  name: 'submit-form',
   data: function () {
  return {
    salary: 0
    }
  },
  methods: {
    emitSubmitEvent() {
      this.$emit('submitEvent', this.salary)
    }
  }
}
</script>

<style scoped>
.submit-form {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.submit-button {
  margin-top: 50%;
  cursor: pointer;
}

.input-container {
  background-color: yellow;
  width: 30%;
  height: 20%;
}

.salary-input {
  width: 100%;
  height: 100%;
  color: #2c3e50;
  font-size: 23px;
}

.submit-button-container {
  height:10%;
}

.submit-button {
  height: 100%;
  width: 100;
}
</style>
