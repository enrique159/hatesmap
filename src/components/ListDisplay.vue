<template>
  <div class="lista">
    <div class="lista_item" v-for="item in items" :key="item.index" @click="selectMarker(item)">
      <vs-row>
        <vs-col w="1" class="dflex j-center a-center logo pt-1">
          <img class="imagen" src="@/assets/icons/icon-hate.svg" alt="" />
          <img
            class="checked"
            v-if="item.Verificado"
            src="@/assets/icons/checked.svg"
            alt=""
          />
        </vs-col>
        <vs-col w="11">
          <div class="infor">
            <div class="lista_item_title">
              {{ item.Nombre }}
            </div>
            <div class="lista_item_description">
              {{ item.Calles }} - {{ item.Colonia }}
            </div>
          </div>
        </vs-col>
      </vs-row>
    </div>
    <vs-dialog overflow-hidden v-model="active">
      <template #header>
        <h4 class="not-margin">Informacion del lugar</h4>
      </template>
      <CardContent :puesto="selectedMarker" />
    </vs-dialog>
  </div>
</template>

<script>
import CardContent from "@/components/CardContent.vue";
export default {
  name: "ListDisplay",
  components: {
    CardContent,
  },
  data() {
    return {
      items: [],
      active: false,
      selectedMarker: {},
    };
  },
  methods: {
    selectMarker(marker) {
      this.selectedMarker = marker;
      this.active = !this.active;
    },
  },
  mounted() {
    this.items = this.$store.state.markers;
  },
};
</script>

<style lang="scss" scoped>
.lista {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(90% - 64px);
  width: 100%;
  max-width: 480px;

  .logo {
    position: relative;
    .imagen {
      width: 32px;
    }
    .checked {
      position: absolute;
      width: 24px;
      top: 0px;
      right: -6px;
    }
  }

  .lista_item {
    margin-bottom: 12px;
    .infor {
      padding: 4px 6px;
      .lista_item_title {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
}
</style>