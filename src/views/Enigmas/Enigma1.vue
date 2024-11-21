<template>
    <div class="container">
      <form>
        <div class="input-group">
          <div
            v-for="(input, index) in inputs"
            :key="index"
            class="input-wrapper"
          >
            <button
              type="button"
              class="arrow up"
              @click="changeLetter(index, 1)"
            >
              ↑
            </button>
            <input
              type="text"
              :maxlength="1"
              v-model="inputs[index]"
              @input="moveFocus(index)"
              :ref="el => inputRefs[index] = el"
            />
            <button
              type="button"
              class="arrow down"
              @click="changeLetter(index, -1)"
            >
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
  const greeting = 'BRAVO';
  const inputs = ref(
    [...greeting.split(''), ...userName.value.split('').map(letter => letter.toUpperCase())]
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
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: white;
    margin: 0;
  }
  
  .input-group {
    display: flex;
    gap: 10px;
  }
  
  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 20px;
    margin: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    border-color: #007bff;
    background-color: #007bff36;
  }
  
  .arrow {
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin: 2px;
  }
  
  .arrow:focus {
    outline: none;
  }
  </style>
  