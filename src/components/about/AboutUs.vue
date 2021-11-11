<template>
  <div class="fade-effect">
    <img src="@/assets/logo.svg" alt="" />
    <h1>Hates Map</h1>
    <p>Este sitio se encuentra en desarrollo</p>
    <span>Desarrollado por @enriquemarin</span>
    <router-link class="goBack" to="/">Regresar a Inicio</router-link>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fade-effect {
  animation: fadeIn 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 148px;
    border-radius: 36px;
  }
  .goBack {
    margin-top: 1rem;
    color: purple;
  }

  span {
    font-size: 0.8rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>