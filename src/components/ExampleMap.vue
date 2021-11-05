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
      <CardContent :puesto="selectedMarker"/>
    </vs-dialog>
  </div>
</template>

<script>
import axios from "axios";
import Mapbox from "mapbox-gl";
import { exampleStaticData } from "@/common/static-data.js";
import CardContent from "@/components/CardContent.vue";
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglMarker,
} from "vue-mapbox";

export default {
  name: "ExampleMap",
  components: { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker, CardContent },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiZW5yaWtlMTU5IiwiYSI6ImNrdml6NWlvYWNwa3IycG56NWRzNzVvc3QifQ.POKhqV37-hGkEs4jA6dWyA",
      mapStyle: "mapbox://styles/enrike159/cjuwtsxus02h51fpw502l7ixq",
      active: false,
      markers: null,
      selectedMarker: "",
      percentCompleted: 0,
    };
  },
  async created() {
    this.mapbox = Mapbox;
    this.markers = exampleStaticData;
    await axios
      .get("https://hatesmaps.herokuapp.com/carritos", {
        onDownloadProgress: (progressEvent) => {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(progressEvent.lengthComputable);
          console.log(percentCompleted);
        },
      })
      .then((result) => {
        this.markers = result.data;
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
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
  height: 100vh;
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
</style>