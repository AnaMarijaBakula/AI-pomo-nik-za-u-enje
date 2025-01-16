<template>
  <div class="signin-container">
    <FrameCenter>
      <h1 class="signin-title">Sign In</h1>
      <p class="signin-description">Choose your role below and sign in to access your personalized experience.</p>

      <!-- Role Selection -->
      <div class="role-selection">
        <button class="role-button" @click="setRole('guest')">Guest</button>
        <button class="role-button" @click="setRole('user')">User</button>
      </div>

      <!-- Sign In Form -->
      <div v-if="role" class="signin-form">
        <h2 class="role-title">Signing in as: {{ role }}</h2>
        <form @submit.prevent="submitForm">
          <input
            type="text"
            v-model="username"
            placeholder="Enter username"
            class="input-field"
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Enter password"
            class="input-field"
            required
          />
          <button type="submit" class="submit-button">Sign In</button>
        </form>
      </div>
    </FrameCenter>
  </div>
</template>

<script>
import FrameCenter from "@/components/FrameCenter.vue";

export default {
  name: 'SingIn',
  components: {FrameCenter},
  data() {
    return {
      role: null,
      username: '',
      password: ''
    };
  },
  methods: {
    setRole(role) {
      this.role = role;
    },
    submitForm() {
      // Here you can add logic for user login
      alert(`You are logged in as ${this.role} with username ${this.username}`);
    }
  }
};
</script>

<style scoped>
/* Osnovni stilovi za stranicu prijave */
.signin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.signin-title {
  text-align: center;
  font-size: 24px;
  font-family: 'DM Sans', sans-serif;
  color: #624F82;
}

.signin-description {
  text-align: center;
  font-size: 16px;
  color: #8ca2c0;
  margin-bottom: 16px;
}

.role-selection {
  display: flex;
  justify-content: center; /* Centriranje gumba za odabir uloga */
  gap: 20px; /* Razmak između tipki */
}

.role-button {
  background-color: #624F82;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: auto; /* Auto širina za gumbe */
  transition: background-color 0.3s ease;
}

.role-button:hover {
  background-color: #50366f;
}

.signin-form {
  display: flex;
  flex-direction: column;
}
/*Polja za unos email,lozinka*/
.input-field {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
}
.signin-form .input-field {
  margin-bottom: 10px; /* Razmak između polja za unos */
}

.submit-button {
  background-color: #624f82;
  color: white;
  padding: 12px; /* Veći razmak unutar gumba */
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #50366f;
}
/*sing in as:*/
.role-title {
  font-size: 15px;
  text-align: center;
  color: #624f82;
  font-weight: bold;
}
/*vertikalno postavljanje zaslona*/
@media (max-width: 600px) {
  .role-selection {
    flex-direction: column; /* Razmještanje gumba vertikalno */
    gap: 10px; /* Razmak između gumba */
  }
}


</style>
