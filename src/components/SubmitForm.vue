<template>
    <form class="submit-form"  @submit.prevent @submit="emitSubmitEvent">
    <div v-if="showInput" class="input-container"><input type="number" min="0" class="salary-input" v-model="salary" v-bind:placeholder="placeholderValue"></div>
    <div v-if="showInput" class="submit-button-container"><button type ="button" class="submit-button" v-on:click="emitSubmitEvent">Submit</button></div>
    <div v-if="!showInput">Please Wait</div>
    </form>
</template>

<script>
export default {
  name: 'submit-form',
  data: function () {
  return {
    salary: null
    }
  },
  props: {
    showInput: Boolean,
    placeholderValue: String
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
  font-size: 16px;
}

.submit-button-container {
  height:10%;
}

.submit-button {
  height: 100%;
  width: 100;
}
</style>
