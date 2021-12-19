<template>
  <div class="contenedor">
    <vs-row style="padding-left: 14px">
      <vs-col w="2">
        <vs-avatar color="#27377d" size="60">
          <i class="bx bx-user"></i>
        </vs-avatar>
      </vs-col>
      <vs-col class="info-user" w="10">
        <h2>{{ user.username }}</h2>
        <h3>{{ user.email }}</h3>
      </vs-col>
    </vs-row>
    <div class="options mt-4">
      <div
        v-for="option in options"
        :key="option.action"
        class="option dflex a-center"
        @click="handleSelector(option.action)"
      >
        <i class="icono" :class="option.icon"></i>
        <span>{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { logoutUser } from "@/services/auth";
export default {
  name: "ProfileUser",
  data() {
    return {
      user: {},
      options: [
        {
          text: "Creados por mi",
          icon: "bx bxs-hot",
          action: "created",
        },
        {
          text: "Reportar un problema",
          icon: "bx bx-message-square-error",
          action: "report",
        },
        {
          text: "Acerca de nosotros",
          icon: "bx bx-code-alt",
          action: "about",
        },
        {
          text: "Cerrar Sesión",
          icon: "bx bx-log-out",
          action: "logout",
        },
      ],
    };
  },
  created() {
    this.user = store.getters.getUser;
  },
  methods: {
    logout() {
      logoutUser();
    },
    handleSelector(option) {
      switch (option) {
        case "created":
          this.$router.push("/created");
          break;
        case "report":
          this.$router.push("/report");
          break;
        case "about":
          this.$router.push("/about");
          break;
        case "logout":
          this.logout();
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contenedor {
  .info-user {
    padding: 4px 12px;
    h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 800;
      color: rgb(0, 0, 0);
    }
    h3 {
      margin: 6px 0 0;
      font-size: 1.2rem;
      font-weight: 400;
      color: rgb(71, 71, 71);
    }
  }
  .options {
    width: 100%;
    overflow-y: auto;
    .option {
      padding: 18px;
      border-radius: 18px;
      transition: 0.2s ease-in-out;
      &:hover {
        background: rgba(86, 86, 86, 0.1);
      }
      .icono {
        margin-right: 12px;
        font-size: 1.6rem;
        color: rgb(0, 0, 0);
      }
      span {
        margin-top: 3px;
        font-size: 1.3rem;
        font-weight: 500;
        color: rgb(71, 71, 71);
      }
    }
  }
}
</style>