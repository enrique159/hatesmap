<template>
  <div class="container">
    <div class="fade-effect">
      <h1 class="title">Lista de Hates</h1>
      <ListDisplay />
    </div>
  </div>
</template>

<script>
import ListDisplay from '../components/ListDisplay.vue'
  export default {
    name: 'List',
    components: {
      ListDisplay
    },
  }
</script>

<style lang="scss" scoped>
.container {
  background: rgba($color: #FFF, $alpha: 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-sizing: border-box;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 36px 18px;
  overflow-y: hidden !important;
  .fade-effect {
    animation: fadeIn 0.5s ease-in-out;
    width: 100%;
    max-width: 480px;
  }

  .title {
    margin: 0 0 24px;
  }
}
</style>