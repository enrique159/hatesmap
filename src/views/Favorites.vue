<template>
  <div class="container">
    <div class="fade-effect">
      <h1>Favorites</h1>
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
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .fade-effect {
    animation: fadeIn 0.5s ease-in-out;
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