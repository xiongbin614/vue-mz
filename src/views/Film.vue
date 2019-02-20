<template>
    <div>
        <MzBanner></MzBanner>
        <MzNav></MzNav>
        <div class="main">
          <router-link tag="div" to="/film/5">
            <MzNowPlayingFilm v-for="item in list" :key="item"></MzNowPlayingFilm>
          </router-link>
        </div>
    </div>
</template>
<script>
import MzBanner from '../components/MzBanner/MzBanner.vue'
import MzNav from '../components/MzNav/MzNav.vue'
import MzNowPlayingFilm from '../components/MzNowPlayingFilm/MzNowPlayingFilm.vue'
import axios from 'axios'
export default {
  data () {
    return {
      list: ['1', '2', '3', '4']
    }
  },
  components: {
    MzBanner,
    MzNav,
    MzNowPlayingFilm
  },
  created () {
    axios.get()
  }
}
</script>

<style lang="less">
  .main{
    padding: 15px 15px 0 15px;
  }
</style>
