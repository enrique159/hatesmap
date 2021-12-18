<template>
  <div class="dflex j-center a-center w-100 absoluto">
    <form id="signIn_Form" v-on:submit.prevent="checkForm" class="dflex fd-col j-center">
      <div class="field mb-4">
        <i class="bx bx-envelope bx-sm icono"></i>
        <input
          type="email"
          name="email"
          v-model="email"
          id="email_SignIn"
          placeholder="Correo electrónico"
        />
      </div>
      <div class="field mb-4">
        <i class="bx bx-lock-open bx-sm icono"></i>
        <input
          type="password"
          name="password"
          v-model="password"
          id="password_SignIn"
          placeholder="Contraseña"
        />
      </div>
      <vs-button :loading="loading" circle type="submit" class="botonSubmit">
        Ingresar
      </vs-button>
    </form>
  </div>
</template>

<script>
import store  from '@/store'
import { setToken, setUser, setLoggedIn } from "@/services/auth";
import axios from 'axios';
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMessage: "",
      errorStatus: "",
      loading: false,
    };
  },
  methods: {
    checkForm(e) {
      this.error = false;
      this.errorMessage = "";
      if (this.email.length < 1) {
        this.error = true;
        this.errorMessage = "El correo electrónico es requerido";
      } else if (this.password.length < 1) {
        this.error = true;
        this.errorMessage = "La contraseña es requerida";
      } else {
        this.signIn();
      }
      e.stopPropagation();
      e.preventDefault();
    },
    async signIn() {
      this.loading = true;
      const delay = ms => new Promise(res => setTimeout(res, ms));
      const credenciales = {
        identifier: this.email,
        password: this.password
      };
      await delay(500);
      await axios.post('auth/local',credenciales)
      .then((res) => {
        window.localStorage.setItem('jwt', res.data.jwt)
        window.localStorage.setItem('user', JSON.stringify(res.data.user))
        setToken(res.data.jwt);
        setUser(res.data.user);
        store.state.loggedIn = true;
        console.log('JWT: ', store.state.token);
        console.log('User: ', store.state.user);
        this.loading = false;
      })
      .catch(err => {
        this.error = true;
        this.errorMessage = err.response.data.message;
        this.errorStatus = err.response.status;
        console.log(this.errorStatus, this.errorMessage)
        this.password = "";
        this.loading = false;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.absoluto {
  position: absolute;
  top: 0;
  left: 0;
}
#signIn_Form {
  width: 80%;
  height: 280px;
  max-width: 360px;
  .field {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    .icono {
      position: absolute;
      top: 4px;
    }
    input {
      width: 100%;
      font-family: "Givonic";
      font-size: 1.2rem;
      background-color: transparent;
      box-sizing: border-box;
      border-radius: 0;
      padding: 8px 0 8px 36px;
      border: none;
      border-bottom: 2px solid rgb(90, 90, 90);
      &::placeholder {
        color: rgb(142, 142, 142);
      }
    }
  }
  .botonSubmit {
    font-size: 1.2rem;
    font-weight: 800;
    font-family: "Givonic";
    padding: 8px 12px 6px;

    background-color: #4c00ff;
    margin: 0;
  }
}
</style>