<template>
    <div  class="menu-page">
        <h1 v-motion-slide-top class="title">Choisissez une énigme <span v-motion="motionGlowText" class="exclamation">!</span></h1>
        <div v-motion-slide-bottom class="sections">
            <div class="section" v-for="defi in defis" :key="defi">
                {{ defi }}
            </div>
        </div>
    </div>
</template>

<script>
import "../../styles/main.css";

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


export default {
    name: 'Menu',
    data() {
        return {
            motionGlowText,
            defis: ['🧩 Énigme 1', '🔍 Énigme 2', '🧠 Énigme 3', '🕵️‍♂️ Énigme 4', '💡 Énigme 5'],
        };
    }
};
</script>

<style scoped>
.menu-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    height: 80vh;
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

.sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
}

.section {
    background-color: #007bff;
    color: white;
    font-size: 20px;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    margin: 6px 0;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.section:hover {
    background-color: #0056b3;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}
</style>
