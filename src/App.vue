<template>
  <div id="app">
    <MainMap />
    <router-view />
    <BottomBar/>
  </div>
</template>

<script>
import MainMap from './components/MainMap.vue'
import BottomBar from '@/components/BottomBar.vue'
export default {
  name: 'App',
  components: {
    MainMap,
    BottomBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import "./assets/fonts.css";

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
  font-family: 'Givonic', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
