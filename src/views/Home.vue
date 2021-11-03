<template>
  <div class="home">
    <ExampleMap/>
    <NavBarSax/>
    <BottomBar/>
  </div>
</template>

<script>
import ExampleMap from '@/components/ExampleMap.vue'
import NavBarSax from '@/components/NavbarSax.vue'
import BottomBar from '@/components/BottomBar.vue'
export default {
  name: 'Home',
  components: {
    ExampleMap,
    NavBarSax,
    BottomBar
  }
}
</script>
