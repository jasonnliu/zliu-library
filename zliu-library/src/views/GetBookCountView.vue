<template>
    <div id="app">
      <h1>Book Counter</h1>
      <button @click="getBookCount">Get Book Count</button>
      <p v-if="count !== null">Total number of books: {{ count }}</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        count: null,
        error: null,
      };
    },
    methods: {
      async getBookCount() {
        try {
          const response = await axios.get('https://countbooks-46bsbtueya-uc.a.run.app');
          this.count = response.data.count;
          this.error = null;
        } catch (error) {
          console.error('Error fetching book count:', error);
          this.error = error;
          this.count = null;
        }
      },
    },
  };
  </script>
  
  <style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers items horizontally in the flex container */
  justify-content: center; /* Centers items vertically in the flex container */
  height: 100vh; /* Full height of the viewport */
  text-align: center; /* Ensures text within the div is centered */
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 20px;
}
</style>
