<template>
    <div class="container">
        <div v-motion-slide-top>
            <h1>Les mots de passe robustes 🔒</h1>
            <p>
                Un mot de passe robuste protège vos données, "123456" ou "password" est facile à deviner. 🕵️‍♂️<br>❗ Un
                mot de passe robuste doit suivre certaines règles essentielles :
            </p>
        </div>
        <div v-motion-slide-right class="example">
            <ul>
                <li>✔ Contenir au moins <strong>8 caractères</strong>.</li>
                <li>✔ Inclure des <strong>lettres majuscules</strong> et <strong>minuscules</strong>.</li>
                <li>✔ Ajouter des <strong>chiffres</strong></li>
                <li>✔ Utiliser des <strong>caractères spéciaux</strong> (ex. : !, @, #).</li>
            </ul>
            <p>
                <strong>password</strong> <span style="color:#007bff ; font-size: 25px"><strong> → </strong></span>
                <strong>P@ssw0rd!45</strong>
            </p>
        </div>
        <div v-motion-slide-bottom>
            <p class="undertext">
                <br>💡 Conseil : Évite les informations personnelles comme ton prénom ou ta date de naissance.
            </p>
            <div class="continueBtn" @click="goToEnigma">Faire l'énigme</div>
            <button @click="goHome" class="home-button">
                < Retour</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheoriePassword",
    methods: {
        goToEnigma() {
            this.$router.push("/enigma2");
        },
        goHome() {
            this.$router.push('/menu');
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
    padding: 20px;
}

h1 {
    font-size: 2.5rem;
    color: black;
    margin-bottom: 20px;
}

.undertext {
    color: #333;
}

p {
    font-size: 1.2rem;
    color: black;
    margin-bottom: 15px;
    line-height: 1.6;
}

ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    text-align: left;
}

ul li {
    font-size: 1.2rem;
    color: black;
    margin-bottom: 10px;
}

ul li strong {
    color: #007bff;
}

.example {
    background: #eef6ff;
    border-left: 5px solid #007bff;
    padding: 15px;
    margin: 20px 0;
    border-radius: 5px;
}

.home-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #dddddd;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.home-button:hover {
    background-color: #cecece;
    transform: scale(0.95);
}

.continueBtn {
    display: block;
    background-color: #007bff;
    color: white;
    font-size: 17px;
    width: 100%;
    max-width: 170px;
    padding: 15px;
    margin: 6px auto;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.continueBtn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.continueBtn:active {
    background-color: #004085;
    transform: translateY(0);
}
</style>
