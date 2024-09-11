<template>
    <div class="register-container">
      <h1>Create an Account</h1>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="register">Save to Firebase</button></p>
    </div>
  </template>
    
  <script setup>
  import { ref } from "vue"
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
  import { useRouter } from "vue-router"
  
  const email = ref("")
  const password = ref("")
  const router = useRouter()
  const auth = getAuth()
  
  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Firebase Register Successful!")
        alert("Congratulation! You have registered successfully!")
        router.push("/FireLogin")
      })
      .catch((error) => {
        console.log(error.code)
      })
  }
  </script>  
  
  <style scoped>
  .register-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
  }
  
  input {
      width: 300px;
      padding: 10px;
      margin-bottom: 10px;
  }
  
  button {
      padding: 10px 20px;
      cursor: pointer;
  }
  </style>  