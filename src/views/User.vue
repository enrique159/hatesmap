<template>
  <div class="container dflex fd-col j-start a-center">
    <div class="logInScreen dflex fd-col j-around a-center">
      <vs-row class="logotipo dflex j-center a-center">
        <img src="@/assets/logo.svg" alt="">
        <h4>Hates Map</h4>
      </vs-row>
      <SignUp />
    </div>
  </div>
</template>

<script>
import AboutUs from '@/components/about/AboutUs.vue'
import SignUp from '@/components/auth/SignUp.vue'
export default {
  name: "User",
  components: {
    SignUp,
    AboutUs
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: rgba($color: #fff, $alpha: 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  height: calc(var(--vh, 1vh) * 100);
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
  }
}
</style>