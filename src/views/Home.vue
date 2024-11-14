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

.input:hover {
    border-color: #007bff;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
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