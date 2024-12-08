<template>
    <div class="container">
        <div v-motion-slide-top>
            <h1>Éviter le Phishing ⚠️</h1>
        </div>
        <div class="indication" v-motion-pop>
            <p>{{ currentMessage }}</p>
        </div>
        <div v-motion-pop class="emails-section">
            <div class="email" @click="checkEmail('A')">
                <div class="header">
                    <p class="from">De : <span class="email-address">{{ emails[currentStep].A.email }}</span></p>
                    <p class="date">Il y a 5 minutes</p>
                </div>
                <p class="subject">{{ emails[currentStep].A.subject }}</p>
                <p class="body">{{ emails[currentStep].A.body.replace("{userName}", userName) }}</p>
            </div>
            <div class="email" @click="checkEmail('B')">
                <div class="header">
                    <p class="from">De : <span class="email-address">{{ emails[currentStep].B.email }}</span></p>
                    <p class="date">Il y a 10 minutes</p>
                </div>
                <p class="subject">{{ emails[currentStep].B.subject }}</p>
                <p class="body">{{ emails[currentStep].B.body.replace("{userName}", userName) }}</p>
            </div>
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
            currentStep: 0,
            transit: false,
            showError: false,
            userName: localStorage.getItem('userName') || 'User',
            emails: [
                {
                    A: {
                        email: "bank@labanquebcv.bg",
                        subject: "MISE A JOUR URGENTE DE VOTRE COMPTE BANCAIRE !!",
                        body: "Bonjour {userName}, cliquez vite ici pour sécuriser votre compte avant qu'il ne soit verrouillé."
                    },
                    B: {
                        email: "support@bcv.ch",
                        subject: "Mise à jour de votre compte bancaire",
                        body: "Bonjour {userName}, votre compte a besoin d'une mise à jour. Veuillez cliquer pour plus d'infos."
                    }
                },
                {
                    B: {
                        email: "security@labanquebcv.ch.com",
                        subject: "Action requise : votre compte a été compromis",
                        body: "Bonjour {userName}, vérifiez immédiatement votre activité pour protéger vos données."
                    },
                    A: {
                        email: "help@bcv.ch",
                        subject: "Réinitialisation de votre mot de passe",
                        body: "Bonjour {userName}, pour des raisons de sécurité, nous vous demandons de réinitialiser votre mot de passe."
                    }
                },
                {
                    B: {
                        email: "update@labanquebcv.com",
                        subject: "Mise à jour de sécurité nécessaire",
                        body: "Bonjour {userName}, cliquez ici pour installer les dernières mises à jour sur votre compte."
                    },
                    A: {
                        email: "account@bcv.ch",
                        subject: "Rappel : vérifiez votre sécurité",
                        body: "Bonjour {userName}, pour garder votre compte sécurisé, vérifiez votre activité de manière régulière."
                    }
                },
                {
                    B: {
                        email: "alerteOfficiel@labanquebcv.com",
                        subject: "Vérification de votre compte : Urgent !",
                        body: "Bonjour {userName}, nous avons remarqué une activité inhabituelle. Cliquez pour résoudre cette situation."
                    },
                    A: {
                        email: "notifications@bcv.ch",
                        subject: "Confirmation de sécurité de compte",
                        body: "Bonjour {userName}, votre compte semble sécurisé, mais nous vous conseillons de vérifier les dernières connexions."
                    }
                },
                {
                    A: {
                        email: "bcv@labanquebcv.com",
                        subject: "Suspicion de phishing sur votre compte",
                        body: "Bonjour {userName}, nous avons détecté un email suspect lié à votre compte. Cliquez pour plus de détails."
                    },
                    B: {
                        email: "transaction@bcv.ch",
                        subject: "Vérification de votre compte bancaire",
                        body: "Bonjour {userName}, nous vous conseillons de vérifier les récentes transactions sur votre compte."
                    }
                }
            ]
        };
    },
    computed: {
        currentMessage() {
            if (this.currentStep === 5) return "Bravo, tu as terminé l'énigme !";
            return `🕵️‍♂️ Trouve le mail fiable !`;
        },
    },
    methods: {
        checkEmail(selected) {
            const correctAnswer = this.getCorrectAnswer();
            if (selected === correctAnswer) {
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
        getCorrectAnswer() {
            const correctAnswers = ['B', 'A', 'A', 'A', 'B']; // Le bon email est toujours le B dans cet exemple.
            return correctAnswers[this.currentStep];
        },
        nextStep() {
            if (this.currentStep < this.emails.length - 1) {
                this.currentStep++;
            } else {
                this.$router.push("/success");
            }
        },
        goHome() {
            this.$router.push("/theoryEnigma3");
        }
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
    font-size: 25px;
    color: black;
    margin-bottom: 20px;
    line-height: 1.8;
}

.object {
    font-size: 1rem;
}

.emails-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 40px;
    width: 1000px;
}

.email {
    background-color: #f5f5f5;
    padding: 15px;
    width: 80%;
    max-width: 900px;
    margin: 10px 0;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    text-align: left;
}

.email:hover {
    background-color: #e2e2e2;
    transform: scale(1.02);
}

.email:active {
    transform: scale(0.90);
}

.email p {
    margin: 5px 0;
}

.header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #555;
}

.from {
    font-weight: bold;
}

.email-address {
    color: #007aff;
}

.date {
    color: #aaa;
}

.subject {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}

.body {
    font-size: 16px;
    margin-top: 5px;
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
