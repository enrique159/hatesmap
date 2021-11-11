<template>
  <div class="card pl-1 pr-1">
    <vs-row vs-justify="center">
      <vs-col class="dflex j-start a-center" w="10">
        <div class="logo dflex j-end a-center pr-2">
          <img class="imagen" src="@/assets/icons/icon-hate.svg" alt="" />
          <img
            class="checked"
            v-if="puesto.Verificado"
            src="@/assets/icons/checked.svg"
            alt=""
          />
        </div>
        <div class="dflex fd-col j-center a-start">
          <span v-if="puesto.Verificado" class="subtitle">Verificado</span>
          <span v-else class="subtitle">Nombre</span>
          <h2 class="title mb-1">{{ puesto.Nombre }}</h2>
        </div>
      </vs-col>
      <vs-col class="price dflex fd-col j-center a-center" w="2">
        <span class="subtitle">Hotdog</span>
        <div class="price-hotdog">
          <span class="mt-1">{{ puesto.PrecioHate }}</span>
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-button icon color="danger" border size="small" class="m-0">
        <i class="bx bxs-heart bx-xs"></i>
        <span class="ml-1">{{ puesto.Likes }}</span>
      </vs-button>
      <vs-button
        :disabled="!puesto.Telefono"
        icon
        circle
        dark
        border
        size="small"
        class="m-0 ml-2"
        @click="openPhone(puesto.Telefono)"
      >
        <i class="bx bxs-phone bx-xs"></i>
        <span class="ml-1 mr-1">Llamar</span>
      </vs-button>
      <vs-button
        :disabled="!puesto.FacebookLink"
        icon
        circle
        primary
        flat
        size="small"
        class="m-0 ml-2"
        @click="openLink(puesto.FacebookLink)"
      >
        <i class="bx bxl-facebook-circle bx-xs"></i>
      </vs-button>
    </vs-row>
    <!-- -------------------- DIRECCION --------------------------- -->
    <vs-row class="mt-3">
      <vs-col class="dflex fd-col" w="7">
        <span class="subtitle">Calles</span>
        <p class="mt-1 texto">{{ puesto.Calles }}</p>
      </vs-col>
      <vs-col class="dflex fd-col" w="5">
        <span class="subtitle">Colonia</span>
        <p class="mt-1 texto">{{ puesto.Colonia }}</p>
      </vs-col>
    </vs-row>
    <!-- -------------------- DESCRIPCION ------------------------- -->
    <vs-row class="mt-3">
      <vs-col class="dflex fd-col" w="12">
        <span class="subtitle">Descripcion</span>
        <p class="mt-1 texto">{{ puesto.Descripcion }}</p>
      </vs-col>
    </vs-row>
    <!-- -------------------- APERTURA ------------------------- -->
    <vs-row class="mt-3">
      <span class="subtitle">Apertura</span>
      <vs-col class="dflex mt-1" w="12">
        <div
          class="day dflex j-center a-center mr-1"
          :class="{ disable: !dias.active }"
          v-for="dias in puesto.Apertura"
          :key="dias.index"
        >
          <span>{{ dias.name }}</span>
        </div>
      </vs-col>
    </vs-row>
    <!-- -------------------- BOTONES DE ACCION ------------------------- -->
    <vs-row class="mt-4 pt-4">
      <vs-col class="dflex j-center a-center" w="5">
        <button
          class="botones getMap m-0 dflex j-center a-center"
          @click="openMaps(puesto)"
        >
          <img src="@/assets/icons/path.svg" alt="" />
          <span class="ml-2">Como llegar</span>
        </button>
      </vs-col>
      <vs-col class="dflex j-center a-center pl-2" w="7">
        <button
          class="botones m-0 dflex j-center a-center"
          :class="puesto.RelMenu ? 'getRel' : 'getRelDisabled'"
          @click="openLink(puesto.RelMenu)"
        >
          <img src="@/assets/icons/cubiertos.svg" alt="" />
          <span class="ml-2">Realizar pedido</span>
        </button>
      </vs-col>
    </vs-row>
    <!-- -------------------- AVISO ------------------------- -->
    <vs-row class="dflex j-center a-center mt-4 aviso-reporte">
      <p>¿Algo de esta información es erróneo o desactualizado?</p>
      <a href="#" >Haz click aqui para reportar</a>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: ["puesto"],
  data() {
    return {
      numLikes: 8,
      price: 23,
    };
  },
  mounted() {
    console.log(this.puesto);
  },
  methods: {
    openMaps(mark) {
      let link = "geo:" + mark.Lat + "," + mark.Long + ";u=35";
      //window.open(link, '_blank');
      // If it's an iPhone..
      if (
        navigator.platform.indexOf("iPhone") != -1 ||
        navigator.platform.indexOf("iPod") != -1 ||
        navigator.platform.indexOf("iPad") != -1 ||
        navigator.platform.indexOf("MacIntel") != -1
      )
        window.open("maps://maps.apple.com/?q=" + mark.Lat + "," + mark.Long);
      else
        window.open(
          "https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" +
            mark.Lat +
            "," +
            mark.Long
        );
    },
    openLink(link) {
      if (link) {
        window.open(link, "_blank");
      }
    },
    openPhone(phone) {
      window.open("tel:" + phone, "_system");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/grid.css");
//////////////////////////////////
.card {
  height: fit-content;
  box-sizing: border-box;
  width: 100%;
  .logo {
    position: relative;
    .imagen {
      width: 32px;
    }
    .checked {
      position: absolute;
      width: 24px;
      top: -8px;
      right: 2px;
    }
  }
  .subtitle {
    color: #c9c9c9;
    font-size: 0.8rem;
    font-weight: 500;
    text-align: left;
  }
  .title {
    margin: 0;
    text-align: left;
    width: 100%;
    font-size: 1.5em;
    color: black;
  }
  .price {
    .price-hotdog {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #42cea3;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      span {
        font-size: 1.1rem;
        font-weight: 700;
        color: #42cea3;
      }
    }
  }
  .texto {
    margin: 0;
    width: 100%;
    font-size: 1em;
    color: black;
  }
  .day {
    width: 22px;
    height: 22px;
    border: 2px solid black;
    border-radius: 10px;
    span {
      margin-top: 2px;
      font-weight: 700;
    }
  }
  .disable {
    opacity: 0.2;
  }
  .botones {
    width: 100%;
    height: 48px;
    font-family: "Givonic";
    font-size: 1rem;
    transition: 0.3s ease-in-out;
    color: white;
    border-radius: 18px;
    border: none;
    span {
      margin-top: 2px;
    }
  }
  .getMap {
    background: linear-gradient(
      90deg,
      rgb(34, 180, 253) 0%,
      rgb(0, 55, 255) 100%
    );
    -webkit-box-shadow: 0px 16px 24px -8px #0095ff8d;
    box-shadow: 0px 16px 24px -8px #0095ff8d;
    &:hover {
      box-shadow: 0px 16px 24px -2px rgba(0, 145, 255, 0.692);
    }
  }
  .getRel {
    background-color: #5900ff;
    -webkit-box-shadow: 0px 16px 24px -8px #2903ff59;
    box-shadow: 0px 16px 24px -8px #2903ff59;
    &:hover {
      box-shadow: 0px 16px 24px -2px #2805b469;
    }
  }
  .getRelDisabled {
    background-color: #e2e2e2;
  }
  .aviso-reporte {
    p,
    a {
      margin: 0;
      text-align: center;
      font-size: 0.8rem;
    }
    a {
      text-decoration: none;
      color: rgb(0, 149, 255);
    }
  }
}
</style>