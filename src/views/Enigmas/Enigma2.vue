<template>
    <div class="container">
        <div v-motion-slide-top>
            <h1>Créer un mot de passe robuste 🔒</h1>
        </div>
        <div class="indication" :class="{ shakey: transit }" v-motion-pop>
            <p>{{ currentMessage }}</p>
        </div>
        <div v-motion-pop class="input-section">
            <input v-model="password" type="text" placeholder="Tape ton mot de passe ici" class="password-input"
                :class="{ shake: showError }" @keydown.enter="checkCurrentStep" />
            <button @click="checkCurrentStep" class="submit-button">Vérifier</button>
            <p v-if="showError" class="error-message">Mot de passe incorrect pour cette étape !</p>
        </div>
        <div v-motion-slide-bottom>
            <button @click="goHome" class="home-button">
                < Retour </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: "",
            currentStep: 0,
            showError: false,
            transit: false,
            steps: [
                { message: "Ajoute au moins 8 caractères.", validator: (pwd) => pwd.length >= 8 },
                { message: "Ajoute au moins une majuscule.", validator: (pwd) => /[A-Z]/.test(pwd) },
                { message: "Ajoute au moins un chiffre.", validator: (pwd) => /[0-9]/.test(pwd) },
                { message: "Ajoute au moins un caractère spécial.", validator: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
            ],
        };
    },
    computed: {
        currentMessage() {
            return this.steps[this.currentStep]?.message || "Mot de passe complet !";
        },
    },
    methods: {
        checkCurrentStep() {
            const currentValidator = this.steps[this.currentStep]?.validator;
            if (currentValidator && currentValidator(this.password)) {
                this.nextStep();
                this.transit = true;
                setTimeout(() => {
                    this.transit = false;
                }, 1000);
            } else {
                this.showError = true;
                setTimeout(() => {
                    this.showError = false;
                }, 1000);
            }
        },
        nextStep() {
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep++;
            } else {
                this.$router.push("/success");
            }
        },
        goHome() {
            this.$router.push("/theoryEnigma2");
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 95vh;
    text-align: center;
    background: white;
    font-family: 'Arial', sans-serif;
    padding: 40px;
}

h1 {
    font-size: 3rem;
    color: black;
    margin-bottom: 20px;
}

p {
    font-size: 1.5rem;
    color: black;
    margin-bottom: 20px;
    line-height: 1.8;
}

.input-section {
    margin-top: 20px;
}

.password-input {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    font-size: 1.5rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    outline: none;
    margin-bottom: 20px;
    transition: border-color 0.2s;
    transition: border 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

.password-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
    transform: scale(1.02);
}

.password-input::placeholder {
    color: #aaa;
    font-style: italic;
    transition: color 0.3s ease;
}

.password-input:focus::placeholder {
    color: transparent;
}

.password-input:hover {
    border-color: #007bff;
}

.password-input.shake {
    animation: shake 0.3s ease;
}

.indication.shakey {
    animation: shakey 0.5s ease;
}

.submit-button {
    background-color: #007bff;
    color: white;
    font-size: 1.7rem;
    width: 100%;
    max-width: 200px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.error-message {
    font-size: 1.4rem;
    color: red;
    margin-top: 10px;
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

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    50% {
        transform: translateX(5px);
    }

    75% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes shakey {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-5px);
    }

    50% {
        transform: translateY(5px);
    }

    75% {
        transform: translateY(-5px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>
