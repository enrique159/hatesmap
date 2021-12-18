<template>
  <div id="app">
    <MainMap />
    <router-view />
    <BottomBar />
  </div>
</template>

<script>
import MainMap from "./components/MainMap.vue";
import BottomBar from "@/components/BottomBar.vue";
import { setToken, setUser, setLoggedIn } from "@/services/auth";
export default {
  name: "App",
  components: {
    MainMap,
    BottomBar,
  },
  created() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    setToken(window.localStorage.getItem("jwt"));
    setUser(JSON.parse(window.localStorage.getItem("user")));
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/fonts.css";

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
  font-family: "Givonic", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
