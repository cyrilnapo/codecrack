<template>
    <div class="container">
        <div class="intro" v-motion-slide-top>
            <h1>🕵️‍♂️ Mission d'espionnage : Déchiffrez le message ! 🔐</h1>
            <p>
                Un espion a laissé un message codé 📨. Déchiffrez-le en utilisant la clé 🔑 : <span
                    style="color:#007bff ; font-size: 35px">+3</span>.
            </p>
            <p>
                Modifiez les lettres ci-dessous avec les flèches ↑ et ↓ pour révéler le message original ! 😎
            </p>
        </div>

        <form>
            <div class="input-group">
                <div v-motion-slide-left v-for="(input, index) in inputs.slice(0, greeting.length)" :key="index"
                    class="input-wrapper greeting">
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

                <div v-motion-slide-right v-for="(input, index) in inputs.slice(greeting.length)"
                    :key="index + greeting.length" class="input-wrapper crypted">
                    <button type="button" class="arrow up" @click="changeLetter(index + greeting.length, 1)">
                        ↑
                    </button>
                    <input type="text" :maxlength="1" v-model="inputs[index + greeting.length]"
                        @input="moveFocus(index + greeting.length)"
                        :ref="el => inputRefs[index + greeting.length] = el" />
                    <button type="button" class="arrow down" @click="changeLetter(index + greeting.length, -1)">
                        ↓
                    </button>
                </div>
            </div>
        </form>
        <div style="text-align: center;" v-motion-slide-bottom>
            <button @click="log" class="validate">VALIDER</button>
            <br>
            <button @click="goHome" class="home-button">
                < Retour</button>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const userName = ref(localStorage.getItem('userName') || 'User');
const greeting = 'EUDYR';

const correct = "BRAVO" + userName.value.toUpperCase()

const caesarCipher = (text, shift = 3) => {
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

const cryptedUserName = ref(caesarCipher(userName.value, 3));

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


const goHome = () => {
    router.push('/theoryEnigma1');
};

const log = () => {
    if (inputs.value.join('') === correct) {
        router.push('/success');

    } else {
        alert("Ce n'est pas tout à fait ça. Essayez encore !");
    }
};
</script>

<style scoped>
.validate {
    margin: 25px;
    height: 60px;
    text-align: center;
    width: 170px;
    border-radius: 15px;
    border: 5px solid #007bff;
    color: #007bff;
    transition: background-color 0.3s ease, transform 0.2s ease;
    cursor: pointer;
    font-size: 18px;
    background-color: white;
}

.validate:hover {
    background-color: #dfefff;
    transform: scale(1.1);
}

.validate:active {
    transform: translateY(0);
}

.validate:focus {
    outline: none;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95vh;
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
    transition: transform 0.1s ease;
}

.arrow:focus {
    outline: none;
}

.arrow:hover {
    transform: scale(1.2);
}

.arrow:active {
    transform: translateY(3px);
}

.space {
    width: 60px;
}

.home-button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #dddddd;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    margin: 25px;
}

.home-button:hover {
    background-color: #cecece;
    transform: scale(0.95);
}
</style>
