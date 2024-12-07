<template>
  <div class="success-page" @keyup.enter="goToMenu">
    <div class="container">
      <div v-motion-slide-top>
        <h1 class="title">🥳 Bravo {{ username }}! 🎉</h1>
      </div>
      <div v-motion-pop>
        <p class="message">Vous avez résolu l'énigme !🕵️‍♂️</p>
      </div>
      <div v-motion-slide-bottom>
        <button @click="goToMenu" class="button">Continuer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success',
  computed: {
    username() {
      return localStorage.getItem('userName') || '';
    },
  },
  methods: {
    goToMenu() {
      this.$router.push('/menu');
    },
  },
};
</script>

<style scoped>
.success-page {
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.container {
  text-align: center;
}

.title {
  font-size: 90px;
  color: black;
  margin-bottom: 10px;
}

.message {
  font-size: 50px;
  color: black;
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 23px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  max-width: 160px;
  margin-top: 30px;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}

button:active {
  background-color: #004085;
  transform: translateY(0);
}

button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}
</style>