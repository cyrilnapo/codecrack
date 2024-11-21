<template>
    <div class="container">
        <div class="intro">
            <h1>🕵️‍♂️ Mission d'espionnage : Déchiffrez le message ! 🔐</h1>
            <p>
                Un espion a laissé un message codé 📨. Déchiffrez-le en utilisant la clé 🔑 : <span style="color:#007bff ; font-size: 35px">+4</span>.
            </p>
            <p>
                Modifiez les lettres ci-dessous avec les flèches ↑ et ↓ pour révéler le message original ! 😎
            </p>
        </div>

        <form>
            <div class="input-group">
                <div v-motion-slide-left v-for="(input, index) in inputs.slice(0, greeting.length)" :key="index" class="input-wrapper greeting">
                    <button type="button" class="arrow up" @click="changeLetter(index, 1)">
                        ↑
                    </button>
                    <input type="text" :maxlength="1" v-model="inputs[index]" @input="moveFocus(index)"
                        :ref="el => inputRefs[index] = el" />
                    <button type="button" class="arrow down" @click="changeLetter(index, -1)">
                        ↓
                    </button>
                </div>
                
                <div class="space"></div>

                <div v-motion-slide-right v-for="(input, index) in inputs.slice(greeting.length)" :key="index + greeting.length" class="input-wrapper crypted">
                    <button type="button" class="arrow up" @click="changeLetter(index + greeting.length, 1)">
                        ↑
                    </button>
                    <input type="text" :maxlength="1" v-model="inputs[index + greeting.length]" @input="moveFocus(index + greeting.length)"
                        :ref="el => inputRefs[index + greeting.length] = el" />
                    <button type="button" class="arrow down" @click="changeLetter(index + greeting.length, -1)">
                        ↓
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const userName = ref(localStorage.getItem('userName') || 'User');
const greeting = 'FVEZS';

const caesarCipher = (text, shift = 4) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return text
    .toUpperCase()
    .split('')
    .map((char) => {
      if (alphabet.includes(char)) {
        let newIndex = (alphabet.indexOf(char) + shift) % alphabet.length;
        return alphabet[newIndex];
      }
      return char;
    })
    .join('');
};

const cryptedUserName = ref(caesarCipher(userName.value, 4));

const inputs = ref(
  [...greeting.split(''), ...cryptedUserName.value.split('').map(letter => letter.toUpperCase())]
);

const inputRefs = ref([]);

const moveFocus = (index) => {
  if (inputs.value[index].length === 1 && index < inputs.value.length - 1) {
    nextTick(() => {
      const nextInput = inputRefs.value[index + 1];
      if (nextInput) nextInput.focus();
    });
  }
};

const changeLetter = (index, direction) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const currentLetter = inputs.value[index].toUpperCase();
  const currentIndex = alphabet.indexOf(currentLetter);

  if (currentIndex !== -1) {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = alphabet.length - 1;
    if (newIndex >= alphabet.length) newIndex = 0;

    inputs.value[index] = alphabet[newIndex];
  }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: white;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

.intro {
    text-align: center;
    margin-bottom: 50px;
    padding: 0 30px;
    font-size: 22px;
    color: #333;
}

.intro h1 {
    font-size: 2.5em;
    color: #007bff;
}

.input-group {
    display: flex;
    gap: 20px;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-wrapper input {
    width: 60px;
    height: 60px; 
    text-align: center;
    font-size: 24px; 
    margin: 8px;
    border: 3px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease;
    background-color: #fff;
}

input:focus {
    border-color: #007bff;
    background-color: #007bff36;
}

.arrow {
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
    margin: 5px;
}

.arrow:focus {
    outline: none;
}

.space {
    width: 60px;  
}

</style>
