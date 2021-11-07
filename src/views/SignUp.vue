<template>
  <div class="container">
    <div class="fade-effect">
      <img src="@/assets/logo.svg" alt="" />
      <h1>Hates Map</h1>
      <p>Este sitio se encuentra en desarrollo</p>
      <span>Desarrollado por @enriquemarin</span>
      <router-link class="goBack" to="/">Regresar a Inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style lang="scss" scoped>
.container {
  background: rgba($color: #fff, $alpha: 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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