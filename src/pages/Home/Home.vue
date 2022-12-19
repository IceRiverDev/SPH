<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Like/>
    <Floor v-for="(floor, _) in floorList" :key="floor.id" :floor="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/ListContainer.vue";
import Recommend from "@/pages/Home/Recommend/Recommend.vue";
import Like from "@/pages/Home/Like/Like.vue";
import Floor from "@/pages/Home/Floor/Floor.vue";
import Brand from "@/pages/Home/Brand/Brand.vue";
import {mapState} from "vuex";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getFloorList")
  },
  computed: {
    ...mapState({floorList: state => state.home.floorList})
  },
  components: {
    ListContainer,
    Recommend,
    Like,
    Floor,
    Brand
  }
}
</script>

<style scoped>

</style>
