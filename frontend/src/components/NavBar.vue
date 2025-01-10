<script setup>
import Button from "@/components/NavBarButton.vue";
</script>

<template>
  <div class="navbar">

    <img
      class="logo"
      src="@/assets/Logo.svg"
      alt="Logo"
    />

    <!-- Links i Button -->
    <div class="nav-links">
      <span class="nav-item">About Us</span>
      <span class="nav-item">Contact</span>
      <Button class="nav-button" />
    </div>
  </div>
</template>

<style scoped>
/* Navbar container */
.navbar {
  width: 100%;
  height: auto;
  position: fixed; /* Ostaje na vrhu stranice */
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 98px; /* Padding za unutrašnje razmake */
  background-color: transparent; /* Pozadina navbar-a */
  z-index: 1000; /* Prikazuje se iznad drugih elemenata */
}

/* Logo */
.logo {
  width: 91px;
  height: 71px;
}

/* Linkovi i dugme */
.nav-links {
  display: flex;
  align-items: center;
  gap: 48px; /* Razmak između stavki */
}

.nav-item {
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #624f82;
  cursor: pointer;
}

.nav-item:hover {
  text-decoration: underline; /* Efekat na hover */
}

.nav-button {
  flex-shrink: 0;
}
</style>
