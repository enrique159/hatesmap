<template>
  <div class="container">
    <h1>Hates Map</h1>
    <p>Este sitio se encuentra en desarrollo</p>
    <span>Desarrollado por @enriquemarin</span>
    <router-link class="goBack" to="/">Regresar a Inicio</router-link>
  </div>
</template>

<script>
  export default {
    name: 'SignUp',
  }
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .goBack {
    margin-top: 1rem;
    color: purple;
  }

  span {
    font-size: 0.8rem;
  }
}
</style>