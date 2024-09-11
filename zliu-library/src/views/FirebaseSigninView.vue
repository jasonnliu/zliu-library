<template>
    <div class="login-container">
      <h1>Sign in</h1>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="signin">Sign in via Firebase</button></p>
      <div v-if="loginError" class="error">{{ loginError }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
  import { useRouter } from "vue-router"
  
  const email = ref("")
  const password = ref("")
  const loginError = ref("")
  const router = useRouter()
  const auth = getAuth()
  
  const adminEmail = "admin@gmail.com"
  const adminPassword = "adminPassword"
  
  const signin = () => {
    if (email.value === adminEmail && password.value === adminPassword) {
      console.log("Admin Login Successful!")
      alert("Logged in as Admin");
      router.push("/Login")
    } else {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log("Firebase Login Successful!")
          router.push("/")
          console.log(auth.currentUser)
        })
        .catch((error) => {
          loginError.value = "Invalid email or password"
          console.log(error.code)
        })
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  input {
    margin-bottom: 10px;
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  