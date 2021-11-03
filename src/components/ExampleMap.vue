<template>
  <div class="container">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoaded">
      <MglNavigationControl position="top-left" />
      <MglGeolocateControl position="top-left" />
      <MglMarker v-for="item in markers" :coordinates="item.coordinates" :key="item.id">
        <img class="marcador" src="@/assets/icons/marker.svg" slot="marker" @click="selectMarker(item.id)" />
      </MglMarker>
    </MglMap>

    <vs-dialog overflow-hidden full-screen v-model="active">
      <template #header>
        <h4 class="not-margin">Informacion del lugar</h4>
      </template>

      <div class="contenido">
        <h3 class="name">{{ selectedMarker.name }}</h3>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { exampleStaticData } from "@/plugins/static-data.js"
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglMarker,
} from "vue-mapbox";

export default {
  name: "ExampleMap",
  components: { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker},
  data() {
    return {
      accessToken: "pk.eyJ1IjoiZW5yaWtlMTU5IiwiYSI6ImNrdml6NWlvYWNwa3IycG56NWRzNzVvc3QifQ.POKhqV37-hGkEs4jA6dWyA",
      mapStyle: "mapbox://styles/enrike159/cjuwtsxus02h51fpw502l7ixq",
      active: false,
      markers: null,
      selectedMarker: '',
    };
  },
  created() {
    this.mapbox = Mapbox;
    this.markers = exampleStaticData;
  },
  methods: {
    selectMarker(i) {
      this.active = !this.active;
      this.selectedMarker = this.markers[i];
    },
    async onMapLoaded(event) {
      const asyncActions = event.component.actions;
      const newParams = await asyncActions.flyTo({
        center: [-110.298, 24.144],
        zoom: 12,
        speed: 5,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px);
  width: 100%;
  padding-top: 60px;
  overflow-y: hidden !important;

  .marcador {
    width: 40px;
    height: 40px;
  }
}
.not-margin {
	margin: 0px;
	font-weight: normal;
	padding: 10px;
}
.contenido {
  background-color: blue;
}
.footer-dialog {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: calc(100%);
	.new {
		margin: 0px;
		margin-top: 20px;
		padding: 0px;
		font-size: 0.7rem;
		a {
			color: var(--vs-primary);
			margin-left: 6px;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.vs-button {
		margin: 0px;
	}
}


</style>