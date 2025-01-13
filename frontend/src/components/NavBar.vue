<template>
  <v-container fluid class="navbar">
    <!-- V-row koristi se za horizontalno poravnavanje elemenata u navbaru -->
    <v-row align="center" justify="space-between" class="navbar-row">

      <!-- Logo u navbaru, koristi se v-col da bi se odredila širina kolone -->
      <v-col cols="auto" class="logo-col">
        <img class="logo" src="@/assets/Logo.svg" alt="Logo" /> <!-- Logo slike -->
      </v-col>

      <!-- Navigacijske stavke i dugme -->
      <v-col cols="auto" class="nav-links-col">

        <!-- Hamburger meni prikazuje se na manjim ekranima -->
        <v-menu v-if="isMobile" offset-y>
          <!-- Activator omogućuje otvaranje menija klikom na ikonu -->
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-menu</v-icon> <!-- Ikona hamburger menija -->
            </v-btn>
          </template>

          <!-- Lista stavki u meniju -->
          <v-list>
            <v-list-item v-for="item in navItems" :key="item">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>

            <!-- Dugme u meniju -->
            <v-list-item>
              <Button class="nav-button" />
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Standardna navigacija koja se prikazuje na većim ekranima -->
        <v-row v-else align="center" justify="center" class="nav-links">
          <!-- Iteriranje kroz sve stavke u navItems array-u i prikazivanje svake -->
          <v-col v-for="item in navItems" :key="item" cols="auto" class="nav-item-col">
            <span class="nav-item">{{ item }}</span>
          </v-col>

          <!-- Dugme u navigaciji -->
          <v-col cols="auto">
            <Button class="nav-button" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';  // Uvoz Vue funkcija za rad sa reaktivnim podacima
import Button from "@/components/NavBarButton.vue";  // Importiranje dugmeta za navigaciju

// Lista stavki u navigaciji
const navItems = ["About Us", "Contact"];

// Varijabla koja prati širinu prozora
const screenWidth = ref(window.innerWidth);

// Praćenje promjena u veličini ekrana
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;  // Ažuriranje širine ekrana kad se prozor promijeni
});

// Izračunava da li je ekran manji od ili jednak 768px
const isMobile = computed(() => screenWidth.value <= 768);
</script>

<style scoped>
/* Navigacijska traka */
.navbar {
  width: 100%;
  height: auto;
  position: fixed; /* Stavite navbar fiksno na vrh stranice */
  top: 0;
  left: 0;
  padding: 8px 98px; /* Unutrašnji razmaci */
  background-color: transparent; /* Transparentna pozadina */
  z-index: 1000; /* Prikazuje navbar iznad drugih elemenata */
  transition: padding 0.3s ease;  /* Tranzicija pri promjeni paddinga */
}

/* Stiliziranje loga */
.logo {
  width: 91px;
  height: 71px;
  transition: width 0.3s, height 0.3s; /*tranzicija pri promjeni velićine loga */
}

/* Razmak između navigacijskih stavki */
.nav-links {
  display: flex;
  align-items: center;  /* Poravnavanje elemenata po vertikali */
  gap: 48px;  /* Razmak između stavki */
  transition: gap 0.3s ease;  /* tranzicija pri promjeni razmaka između stavki */
}

/* Stiliziranje pojedinačnih navigacijskih stavki */
.nav-item {
  font-size: clamp(14px, 2.5vw, 16px);  /* Promjena fonta na temelju veličine ekrana */
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #624f82;  /* Boja teksta */
  cursor: pointer;  /* Pokazivač se mijenja na ruku */
  transition: font-size 0.3s ease;  /* Tranzicija pri promjeni veličine fonta */
}

/* Hover efekt na navigacijskim stavkama */
.nav-item:hover {
  text-decoration: underline;  /* Podcrtavanje teksta na hover */
}

/* Stiliziranje dugmeta */
.nav-button {
  flex-shrink: 0;  /* Dugme ne smanjuje veličinu */
}

/* Responsivni dizajn za mobilne uređaje */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;  /* Prebacivanje u vertikalni raspored */
    align-items: flex-start;  /* Poravnavanje sa početkom */
    padding: 16px 20px;  /* Povećanje paddinga za manji ekran */
  }

  .logo {
    width: 70px;
    height: 55px;  /* Manja veličina loga na manjim ekranima */
  }

  .nav-links {
    flex-direction: row;  /* Stavke ostaju u horizontalnom rasporedu */
    gap: 20px;
    margin-top: 20px;  /* Razmak od vrha */
  }

  .nav-item {
    font-size: clamp(12px, 4vw, 14px);  /* Smanjeni font za mobilne uređaje */
  }
}

/* Vrlo mali ekran (mobitel u portret režimu) */
@media (max-width: 480px) {
  .navbar {
    padding: 10px 15px;  /* Manji padding za još manji ekran */
  }

  .nav-links {
    gap: 15px;  /* Manji razmak između stavki */
  }

  .logo {
    width: 60px;
    height: 50px;  /* Smanjeni logo na vrlo malim ekranima */
  }

  .nav-item {
    font-size: clamp(10px, 5vw, 12px);  /* Dodatno smanjen font za izuzetno male ekrane */
  }
}
</style>
