<template>
  <mapview/>
  <MyLocationBtnVue/>
  <searchBarVue/> 
</template>

<script lang="ts">
import Mapview from "@/components/mapvue/Mapview.vue"
import MyLocationBtnVue from "@/components/my-location-btn/MyLocationBtn.vue";
import searchBarVue from "@/components/searchbar/search-bar.vue";
import { usePlacesStore } from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
      Mapview,
      MyLocationBtnVue,
      searchBarVue
  },

  setup(){
      usePlacesStore()
  }
});
</script>
