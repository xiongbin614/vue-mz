<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item._id">
          <!-- {{name}}{{item}} -->
            <img :src="item.imgUrl" alt="">
        </div>
        <!-- <div class="swiper-slide">Slide 2</div> -->
        <!-- <div class="swiper-slide">Slide 3</div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  data () {
    return {
      bannerList: [],
      mySwiper: null
    }
  },
  methods: {
    initSwiper () {
    /* eslint-disable */
      this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay:true,
      pagination: {
      el: '.swiper-pagination'
    }
    })
    /* eslint-enable */
    }
  },
  created () {
    axios.get('http://localhost:3000/banner/get', {
      params: {
        pageSize: 6,
        pageNum: 1
      }
    }).then((res) => {
      console.log(res.data.data)
      this.bannerList = res.data.data
      this.$nextTick(() => {
        this.initSwiper()
      })
    })
  },
  mounted () {
    /* eslint-disable */
    new Swiper('.swiper-container', {
      loop: true,
      autoplay:true,
      pagination: {
      el: '.swiper-pagination'
    }
    })
    /* eslint-enable */
  }
}
</script>
<style lang='less'>
 .swiper-container {
        width: 100%;
        height: 210px;
        img{
          height: 210px;
        }
    }
</style>
