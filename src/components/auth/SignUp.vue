<template>
  <div class="dflex j-center a-center w-100">
    <form id="signUp_Form" v-on:submit.prevent="checkForm" class="dflex fd-col">
      <div class="field mb-4">
        <i class='bx bx-user bx-sm icono'></i>
        <input
          type="text"
          id="userName_SignUp"
          placeholder="Nombre de usuario"
        />
      </div>
      <div class="field mb-4">
        <i class='bx bx-envelope bx-sm icono'></i>
        <input
          type="email"
          name="email"
          id="email_SignUp"
          placeholder="Correo electrónico"
        />
      </div>
      <div class="field mb-4">
        <i class='bx bx-lock-open bx-sm icono' ></i>
        <input
          type="password"
          name="password"
          id="password_SignUp"
          placeholder="Contraseña"
        />
      </div>
      <vs-button 
        circle
        gradient type="submit" 
        class="botonSubmit"
      >
        Crear Usuario
      </vs-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    checkForm(e) {
      console.log("si jala");
      e.stopPropagation();
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
#signUp_Form {
  width: 60%;
  max-width: 360px;
  .field {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    .icono {
      position: absolute;
      top: 4px;
    }
    input {
      width: 100%;
      font-family: "Givonic";
      font-size: 1.2rem;
      background-color: transparent;
      box-sizing: border-box;
      border-radius: 0;
      padding: 8px 0 8px 36px;
      border: none;
      border-bottom: 2px solid rgb(90, 90, 90);
      &::placeholder {
        color: rgb(142, 142, 142);
      }
    }
  }
  .botonSubmit {
    font-size: 1.2rem;
    font-weight: 800;
    font-family: "Givonic";
    padding: 8px 12px 6px;
    margin: 0;
  }
}
</style>