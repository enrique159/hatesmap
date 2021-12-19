<template>
  <div class="container">
    <vs-button
      class="go-back"
      color="#000000"
      @click="goBack"
      circle
      icon
      flat
    >
      <i class='bx bx-left-arrow-alt' style="font-size: 1.8rem;" ></i>
    </vs-button>
    <div class="fade-effect p-4">
      <img class="logo-hatesmap" src="@/assets/logo.svg" alt="" />
      <h1>Hates Map</h1>
      <p class="text">
        Hates Map es un proyecto libre que busca juntar todos los puestos
        de hot dogs de la ciudad de La Paz en un solo lugar con la información
        necesaria para que puedas encontrar los hates que más te gusten.
      </p>
      <p class="subtext">
        En estos momentos Hates Map se está desarrollando por un equipo pequeño,
        pero esperamos que el proyecto se convierta en una herramienta que ayude
        a la comunidad paceña y crezca para todos, si te interesa ser parte del equipo
        puedes contactarnos a <a href="mailto:hatesmap@outlook.es">hatesmap@outlook.es</a>
      </p>
      <span>Desarrollado por</span>
      <img class="logo-codera" src="@/assets/logo-codera.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: rgba($color: #fff, $alpha: 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 98px;
  box-sizing: border-box;
  .go-back {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 1;
  }

  .fade-effect {
    animation: fadeIn 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .text {
      margin: 0;
      font-weight: 500;
    }
    .subtext {
      font-size: 0.9rem;
      margin-top: 2rem;
    }
    .logo-hatesmap {
      width: 98px;
      border-radius: 24px;
    }
    .goBack {
      margin-top: 1rem;
      color: purple;
    }
    span {
      font-size: 1rem;
    }

  }
}
@media screen and (max-width: 400px) {
  .container {
    .fade-effect {
      padding: 0 6px !important;
      .logo-hatesmap {
        width: 70px;
        border-radius: 18px;
      }
      .text {
        font-size: 0.9rem;
      }
      .subtext {
        font-size: 0.8rem;
      }
      .logo-codera {
        width: 80px;
      }
    }
  }
}
</style>