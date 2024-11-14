<template>
    <div v-motion-slide-bottom class="home-page">
      <div class="container">
        <h1 class="title">Bienvenue dans CrackCode <span v-motion="motionGlowText" class="exclamation">!</span></h1>
        <input v-model="userName" type="input" placeholder="Entrez votre nom..." class="input" /><br>
        <button class="continueBtn" @click="startGame">Continuer</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  const router = useRouter();
  const userName = ref('');
  
  const motionGlowText = {
    initial: {
      'text-shadow': '0 0 1px rgba(0, 0, 0, 0)',
    },
    enter: {
      'text-shadow': '0 0 10px rgb(60, 144, 255)',
      transition: {
        duration: 400,
        repeat: Infinity,
        repeatType: 'reverse',
      }
    }
  };
  
  function startGame() {
    if (userName.value) {
      router.push('/menu');
    } else {
      alert('Veuillez entrer votre nom.');
    }
  }
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    margin: 0;
  }
  
  .container {
    text-align: center;
  }
  
  .title {
    margin: 20px;
    font-size: 70px;
    cursor: default;
  }
  
  .exclamation {
    color: #007bff;
    font-size: 80px;
  }
  
  .input {
    width: 100%;
    max-width: 400px;
    padding: 12px 20px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border 0.3s ease, box-shadow 0.3s ease;
  }
  
  .input:focus {
    border-color: #007bff;
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
  }
  
  .input::placeholder {
    color: #aaa;
    font-style: italic;
    transition: color 0.3s ease;
  }
  
  .input:focus::placeholder {
    color: transparent;
  }
  
  .continueBtn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .continueBtn:hover {
    background-color: #0056b3;
  }
  </style>