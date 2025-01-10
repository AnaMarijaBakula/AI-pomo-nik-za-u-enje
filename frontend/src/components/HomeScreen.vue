<template>
  <div :class="['desktop-container', className]"> <!-- Glavni container za cijeli desktop -->
    <div class="content-area"> <!-- Glavni prostor gdje se nalazi sav sadržaj -->
      <div class="background-pravokutnik" /> <!-- Pozadinski pravokutnik sa gradijentom -->
      <button class="get-start">Get Started</button>
      <div class="headline-text">Learning With AI</div>
      <p class="description-text">
        Learning has never been so intuitive and efficient,
        <br>with support that follows your pace and needs!
      </p>
    </div>
  </div>
  <!-- dodat logo-->
</template>

<script>

</script>

<style>
/*crni dio prostora*/
.desktop-container {
  background-color: #131313;
  height: 100vh;
  width: 100%;
  overflow: hidden; /* spriječavanje pomicanja stranice */
}

/* Glavni prostor u kojem je sadržaj */
.content-area {
  height: 80vh;
  width: 80%;
  padding: 50px; /* Unutarnji razmak */
}

/* plavi dio */
.background-pravokutnik {
  background: linear-gradient(#99BADB, #7DA1C5, #577FA7, #0B3A6A);
  border-radius: 25px;
  height: 100%;
  width: 100%;
  position: absolute; /* ovaj dio stavljamo kako bi se plava boja dobro poslozila na desnoj strani*/
}

/* Gumb za početak */
.get-start {
  color: white;
  font-family: "Jomolhari", sans-serif;
  font-size: 30px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%); /* Dovodi gumb u sredinu */
  background-color: #131313;
  border-radius: 10px;
  padding: 20px 40px;
}

/* Naslov stranice */
.headline-text {
  color: white;
  font-family: "Jomolhari", sans-serif;
  font-size: 90px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); /* Pomicanje za centriranje */
  text-shadow: 2px 6px 6px rgba(0, 0, 0, 0.7); /* Sjena za naslov */
}

/* Opis stranice */
.description-text {
  color: white;
  font-family: "Jomolhari", sans-serif;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Pomicanje za centriranje */
  text-shadow: 2px 6px 6px rgba(0, 0, 0, 0.7);
}

/* Responsive dizajn za manje ekrane */
@media (max-width: 768px) {
  /* Smanjujemo razmake za manju širinu ekrana */
  .content-area {
    padding: 20px; /* Manji razmak u sadržaju */
  }

  .headline-text {
    font-size: 50px; /* Manja veličina fonta za manje ekrane */
  }

  .description-text {
    font-size: 20px; /* Manja veličina fonta za manje ekrane */
  }

  .get-start {
    font-size: 25px; /* Manja veličina fonta za gumb */
    padding: 15px 30px; /* Manji unutarnji razmak za gumb */
  }
}
</style>
