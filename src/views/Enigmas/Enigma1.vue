<template>
    <div class="container">
        <div v-motion-slide-top>
            <h1>Le chiffrement par décalage 🔐</h1>
            <p>
                Chaque lettre est remplacée par une autre, située plus loin dans l’alphabet.<br>Par exemple, si on
                utilise un
                décalage de <span style="color:#007bff ; font-size: 35px">+3</span>, alors :
            </p>
        </div>
        <div v-motion-slide-right class="example">
            <p><strong>Message d'origine :</strong> ABC</p>
            <p style="color:#007bff ; font-size: 35px"><strong>+3 ↓</strong> </p>
            <p><strong>🔒 Message chiffré :</strong> DEF</p>
            <p style="color:#007bff ; font-size: 35px"><strong>-3 ↓</strong> </p>
            <p><strong>Message original :</strong> ABC</p>
        </div>
        <div v-motion-slide-bottom>
            <p class="undertext">
                Pour déchiffrer un message codé, il faut connaître la règle du décalage.🧩
                <br>🕵️‍♂️✨ Une fois que tu as cette information, tu peux retrouver le message original.
            </p>
            <div class="continueBtn" @click="goToEnigma">Faire l'énigme</div>
            <button @click="goHome" class="home-button">
                < Retour</button>
        </div>
    </div>
</template>


<script>
export default {
    name: "Theorie",
    methods: {
        goToEnigma() {
            this.$router.push("/enigme");
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
</style>