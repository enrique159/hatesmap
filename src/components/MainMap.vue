<template>
  <div class="container">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoaded">
      <MglNavigationControl position="top-left" />
      <MglGeolocateControl position="top-left" />
      <MglMarker
        v-for="item in markers"
        :coordinates="[item.Long, item.Lat]"
        :key="item.id"
      >
        <img
          class="marcador"
          src="@/assets/icons/marker.svg"
          slot="marker"
          @click="selectMarker(item.id)"
        />
      </MglMarker>
    </MglMap>

    <vs-dialog overflow-hidden v-model="active">
      <template #header>
        <h4 class="not-margin">Informacion del lugar</h4>
      </template>
      <CardContent :puesto="selectedMarker" />
    </vs-dialog>
    <div class="alerta">
      <vs-alert :color="danger" v-model="error">
        {{ errorMessage }}
      </vs-alert>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Mapbox from "mapbox-gl";
import store from "@/store/index.js";
import CardContent from "@/components/CardContent.vue";
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglMarker,
} from "vue-mapbox";

export default {
  name: "ExampleMap",
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker,
    CardContent,
  },
  data() {
    return {
      accessToken: this.$store.state.mapboxToken,
      mapStyle: this.$store.state.mapboxStyle,
      active: false,
      markers: null,
      selectedMarker: "",
      danger: 'danger',
      errorMessage: "",
      error: false
    };
  },
  async created() {
    this.mapbox = Mapbox;
    await axios
      .get("carritos")
      .then((result) => {
        this.markers = result.data;
        store.state.markers = result.data;
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
        this.errorMessage = 'Error: ' + error.response.data.message;
      });
  },
  methods: {
    getMarker(id) {
      return this.markers.find((marker) => marker.id === id);
    },
    selectMarker(i) {
      this.active = !this.active;
      this.selectedMarker = this.getMarker(i);
    },
    async onMapLoaded(event) {
      const asyncActions = event.component.actions;
      const newParams = await asyncActions.flyTo({
        center: [-110.320255, 24.140917],
        zoom: 12,
        speed: 5,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  //height: calc(100vh - 60px);
  //padding-top: 60px;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  overflow-y: hidden !important;
  .marcador {
    object-fit: contain;
    width: 40px;
    height: 40px;
  }
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.alerta {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 48px;
  box-sizing: border-box;
  height: fit-content;
  z-index: 10;
}
</style>