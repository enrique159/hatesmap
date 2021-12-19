<template>
  <div class="container">
    <div class="fade-effect">
      <h1>Favoritos</h1>
      <span>Aqui es donde se guardan tus Hates</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Favorites',
  }
</script>

<style lang="scss" scoped>
.container {
  background: rgba($color: #FFF, $alpha: 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .fade-effect {
    animation: fadeIn 0.5s ease-in-out;
  }
}
</style>