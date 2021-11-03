<template>
  <vs-navbar
    color="#000"
    text-white
    square
    center-collapsed
    v-model="active"
  >
    <template #left>
      <h4 class="logo">Hates Map</h4>
    </template>
    <template #right>
      <vs-button color="#fff" flat>Entrar</vs-button>
      <vs-button color="#fff" border @click="openSignUp()">Crear Cuenta</vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {
  name: "NavbarSax",
  data: () => ({
    active: "guide",
  }),
  methods: {
    openSignUp() {
      this.$router.push("/signup");
    },
  }
};
</script>

<style lang="scss" scoped>
.logo {
  font-weight: 700;
}
</style>