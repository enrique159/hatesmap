<template>
  <div class="container">
    <div class="boton" @click="select(0), openPage(0)">
      <img class="icono" src="@/assets/icons/map.svg" alt="" />
      <span :class="{ active: selected[0].active }"></span>
    </div>
    <div class="boton" @click="select(1), openPage(1)">
      <img class="icono" src="@/assets/icons/category.svg" alt="" />
      <span :class="{ active: selected[1].active }"></span>
    </div>
    <vs-button circle icon floating dark style="margin: 0 8px" @click="select(2), openPage(2)">
      <img class="icono" src="@/assets/icons/plus.svg" alt="" />
    </vs-button>
    <div class="boton" @click="select(3), openPage(3)">
      <img class="icono" src="@/assets/icons/star.svg" alt="" />
      <span :class="{ active: selected[3].active }"></span>
    </div>
    <div class="boton" @click="select(4), openPage(4)">
      <img class="perfil" src="@/assets/icons/profile.svg" alt="" />
      <span :class="{ active: selected[4].active }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      selected: [
        {
          icon: "map",
          active: true
        },
        {
          icon: "category",
          active: false
        },
        {
          icon: "add",
          active: false
        },
        {
          icon: "star",
          active: false
        },
        {
          icon: "profile",
          active: false
        }
      ]
    };
  },
  methods: {
    select(index) {
      this.selected.forEach((item, i) => {
        if (i === index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
    openPage(index) {
      switch(index) {
        case 0:
          this.$router.push({ name: "Home" });
          break;
        case 1:
          this.$router.push({ name: "List" });
          break;
        case 2:
          this.$router.push({ name: "Add" });
          break;
        case 3:
          this.$router.push({ name: "Favorites" });
          break;
        case 4:
          this.$router.push({ name: "SignUp" });
          break;
        default:
          this.$router.push({ name: "Home" });
      }
    },
  },
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
  height: 64px;
  width: 90%;
  max-width: 480px;
  bottom: 36px;
  margin: 0 auto;
  z-index: 30;


  .boton {
    position: relative;
    transition: 0.2s ease-in-out;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 62px;
    &:hover {
      background-color: #f6f6f6;
    }
    &:active {
      background-color: #d9d9d9;
    }
    .active {
      &::before {
        content: "";
        position: absolute;
        background-color: black;
        bottom: 4px;
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
    height: 26px;
  }
}
</style>