<template>
  <div class="container">
    <div class="map">
      <img class="icono" src="@/assets/icons/map.svg" alt="" />
      <span :class="{ active: selected }"></span>
    </div>
    <div class="category">
      <img class="icono" src="@/assets/icons/category.svg" alt="" />
    </div>
    <vs-button circle icon floating dark>
      <img class="icono" src="@/assets/icons/plus.svg" alt="" />
    </vs-button>
    <div class="category">
      <img class="icono" src="@/assets/icons/star.svg" alt="" />
    </div>
    <div class="profile">
      <img class="perfil" src="@/assets/icons/profile.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      selected: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  -webkit-box-shadow: 0px 16px 36px 22px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 16px 36px 22px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  align-items: center;
  padding: 0 12px;
  height: 64px;
  width: 90%;
  max-width: 480px;
  bottom: 36px;
  margin: 0 auto;
  z-index: 30;

  .agregar {
    background-color: black;
    -webkit-box-shadow: 0px 8px 18px 4px rgba(0, 0, 0, 0.409);
    box-shadow: 0px 8px 18px 4px rgba(0, 0, 0, 0.403);
    border-radius: 50%;
    padding: 8px;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
    }
  }
  .map {
    position: relative;
    .active {
      &::before {
        content: "";
        position: absolute;
        background-color: black;
        bottom: -6px;
        left: calc(50% - 3px);
        border-radius: 3px;
        width: 6px;
        height: 6px;
      }
    }
  }

  .icono {
    height: 28px;
  }
  .perfil {
    height: 24px;
  }
}
</style>