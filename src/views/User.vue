<template>
  <div class="container dflex fd-col j-start a-center">
    <div v-if="getUser" class="logInScreen dflex fd-col j-around a-center">
      <vs-row class="logotipo dflex j-center a-center">
        <img src="@/assets/logo.svg" alt="" />
        <h4>Hates Map</h4>
      </vs-row>
      <div class="dflex fd-col a-center w-100">
        <div class="select-su-si">
          <button @click="signup = false">Iniciar Sesión</button>
          <button @click="signup = true">Registrarse</button>
        </div>
        <div class="selected-bar" :class="{ 'selected-signup': signup }"></div>
      </div>
      <div class="dflex" style="position: relative; width: 100%; height: 280px">
        <SignIn class="transicion" :class="{ 'banish-left': signup }" />
        <SignUp class="transicion" :class="{ 'banish-right': signup }" />
      </div>
    </div>
  </div>
</template>

<script>
import AboutUs from "@/components/about/AboutUs.vue";
import SignUp from "@/components/auth/SignUp.vue";
import SignIn from "@/components/auth/SignIn.vue";
import store from "@/store";
export default {
  name: "User",
  components: {
    SignUp,
    SignIn,
    AboutUs,
  },
  data() {
    return {
      signup: false,
    };
  },
  computed: {
    getUser() {
      if(store.getters.getUser) {
        return Object.keys(store.getters.getUser).length === 0
      } else return true
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: rgba($color: #fff, $alpha: 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  height: calc(var(--vh, 1vh) * 100);
  overflow-x: hidden;
  width: 100%;
  text-align: center;

  .logInScreen {
    width: 100%;
    height: 80%;
    animation: fadeIn 0.5s ease-in-out;
    .spacer {
      height: 30%;
    }
    .logotipo {
      img {
        width: 36px;
        border-radius: 12px;
        margin-right: 12px;
      }
      h4 {
        font-size: 1.6rem;
        font-weight: 900;
        padding-top: 6px;
        margin: 0;
      }
    }
    .select-su-si {
      width: 320px;
      button {
        width: 50%;
        height: 40px;
        border-radius: 12px;
        border: none;
        background: transparent;
        color: #000;
        font-size: 1.1rem;
        font-weight: 500;
        font-family: "Givonic";
        cursor: pointer;
        &:active {
          background: #f5f5f58c;
        }
      }
    }
    .selected-bar {
      width: 120px;
      height: 4px;
      background-color: #5100ff;
      transition: 0.2s ease-in-out;
      margin-right: 160px;
    }
    .selected-signup {
      background-color: rgb(0, 76, 255);
      margin-right: -160px;
    }
  }
}

.transicion {
  transition: 0.2s ease-in-out;
}

.banish-left {
  left: -100% !important;
}
.banish-right {
  left: 0 !important;
}
</style>