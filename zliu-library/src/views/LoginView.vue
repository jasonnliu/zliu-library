<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="loginError" class="error">{{ loginError }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const loginError = ref('');
  
  const handleLogin = () => {
    const validUsername = 'user';
    const validPassword = 'password';
  
    if (username.value === validUsername && password.value === validPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/about');
    } else {
      loginError.value = 'Invalid username or password';
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  