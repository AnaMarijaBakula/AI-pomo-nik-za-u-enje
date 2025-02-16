<template>
  <div class="signin-container">
    <FrameCenter>
      <!-- Role Selection - opcija za prijavu ili registraciju -->
      <div class="role-selection" v-if="isLoggedOut">
        <button class="role-button" @click="setRole('guest')">Guest</button>
        <button class="role-button" @click="setRole('user')">User</button>
      </div>

      <!-- Registracija - prikazivanje forme za registraciju -->
      <div v-if="isRegistering" class="signin-form">
        <h2 class="role-title">Register as: {{ role }}</h2>
        <form @submit.prevent="submitRegisterForm">
          <input
            type="text"
            v-model="username"
            placeholder="Enter username"
            class="input-field"
            required
          />
          <input
            type="email"
            v-model="email"
            placeholder="Enter email"
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
          <button type="submit" class="submit-button">Register</button>
        </form>
      </div>

      <!-- Prijava - prikazivanje forme za prijavu -->
      <div v-if="!isRegistering && role" class="signin-form">
        <h2 class="role-title">Sign In as: {{ role }}</h2>
        <form @submit.prevent="submitSignInForm">
          <input
            type="email"
            v-model="email"
            placeholder="Enter email"
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

      <!-- Poruke za greške ili uspjeh -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </FrameCenter>
  </div>
</template>

<script>
import axios from "axios";
import FrameCenter from "@/components/FrameCenter.vue";

export default {
  name: 'SignIn',
  components: { FrameCenter },
  data() {
    return {
      role: null,
      email: '',
      password: '',
      username: '',
      isRegistering: false,
      isLoggedOut: false, // Ako korisnik nije prijavljen
      successMessage: '',
      errorMessage: '',
    };
  },
  mounted() {
    // Provjeravamo je li korisnik već prijavljen
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      // Ako je prijavljen, odmah omogućujemo odabir između gosta ili korisnika
      this.isLoggedOut = false;
    } else {
      // Ako nije prijavljen, otvaramo formu za registraciju
      this.isRegistering = true;
      this.isLoggedOut = true;
    }
  },
  methods: {
    setRole(role) {
      this.role = role;
      // Kada korisnik odabere ulogu, spremamo stanje u lokalnu pohranu
      localStorage.setItem('role', role);
      this.isLoggedOut = false; // Zaustavljamo odabir uloga nakon što je odabrana
    },
    async submitRegisterForm() {
      try {
        // Resetiraj prethodne poruke grešaka prije svakog novog pokušaja
        this.errorMessage = '';
        this.successMessage = '';

        // Slanje POST zahtjeva za registraciju
        const response = await axios.post('http://localhost:5001/api/user/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        // Ako je registracija uspješna
        this.successMessage = "User successfully registered!";
        localStorage.setItem('loggedIn', true); // Korisnik je uspješno registriran
        console.log("User registered:", response.data);
      } catch (error) {
        // Ako se dogodi greška
        this.errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Registration Error:", error.message);
      }
    },
    async submitSignInForm() {
      try {
        // Resetiraj prethodne poruke grešaka prije svakog novog pokušaja
        this.errorMessage = '';
        this.successMessage = '';

        // Slanje POST zahtjeva za prijavu
        const response = await axios.post('http://localhost:5001/api/user/login', {
          email: this.email,
          password: this.password,
        });

        // Ako je prijava uspješna
        this.successMessage = "Successfully signed in!";
        localStorage.setItem('loggedIn', true); // Korisnik je uspješno prijavljen
        console.log("User signed in:", response.data);
      } catch (error) {
        // Ako se dogodi greška
        this.errorMessage = error.response ? error.response.data.message : error.message;
        console.error("SignIn Error:", error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Stilovi za prijavu i registraciju */
.signin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.role-selection {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.role-button {
  background-color: #624F82;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.role-button:hover {
  background-color: #50366f;
}

.signin-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-field {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.submit-button {
  background-color: #624f82;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #50366f;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 20px;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 20px;
}
</style>
