<template>
  <div class="card">
    <vs-row vs-justify="center">
      <vs-col class="logo" vs-justify="center" vs-align="center" w="3">
        <img class="imagen" src="@/assets/icons/food.svg" alt="" />
      </vs-col>
      <vs-col class="dflex fd-col j-center a-start" w="9">
        <span class="subtitle">Nombre</span>
        <h2 class="title mb-1">{{ puesto.Nombre }}</h2>
        <div class="dflex j-center a-center">
          <vs-button icon color="danger" border size="small" class="m-0">
            <i class="bx bxs-heart bx-xs"></i>
            <span class="ml-1">{{ numLikes }}</span>
          </vs-button>
          <span class="ml-3">Hotdog:</span>
          <span class="ml-2 price">${{ price }}</span>
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col class="dflex fd-col j-center a-center mt-4" w="12">
        <span class="subtitle">Descripcion</span>
        <p class="mt-2 descripcion">{{ puesto.Descripcion }}</p>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-row>
        <vs-col class="dflex j-center a-center mt-4" w="12">
          <vs-button class="m-0" dark size="xl" @click="openMaps(puesto)">
            Abrir en Mapas
          </vs-button>
        </vs-col>
      </vs-row>
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
        window.open(
          "maps://maps.apple.com/?q=" + mark.Lat + "," + mark.Long
        );
      else
        window.open(
          "https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" +
            mark.Lat +
            "," +
            mark.Long
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/grid.css");
//////////////////////////////////
.card {
  height: fit-content;
  width: 100%;
  .logo {
    padding: 0 8px;
    .imagen {
      width: 100%;
    }
  }
  .subtitle {
    color: #a1a1a1;
    font-size: 0.8rem;
    font-weight: bold;
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
    font-weight: bold;
    color: #1a8e5a;
  }
  .descripcion {
    margin: 0;
    text-align: center;
    width: 100%;
    font-size: 1em;
    color: black;
  }
}
</style>