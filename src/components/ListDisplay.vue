<template>
  <div class="lista">
    <div class="lista_item" v-for="item in items" :key="item.index">
      <vs-row>
        <vs-avatar>
          <i class="bx bx-map"></i>
        </vs-avatar>
        <div class="infor">
          <div class="lista_item_title">
            {{ item.Nombre }}
          </div>
          <div class="lista_item_description">
            {{ item.Descripcion }}
          </div>
        </div>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListDisplay",
  data() {
    return {
      items: [],
    };
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