<template>
    <div class="cinema">
        <div class="top">
            <span>深圳<i>5</i></span>
            <p>影院</p>
            <i>6</i>
        </div>
        <div class="nav">
            <div>
                <span>全程</span>
                <i>1</i>
            </div>
            <div>
                <span>最近去过</span>
                <i>2</i>
            </div>
        </div>
            <MzFilmAdress v-for="item in list" :key="item"></MzFilmAdress>
            <MzFilmAdress></MzFilmAdress>
    </div>
</template>

<script>
import MzFilmAdress from '../components/MzFilmAdress/MzFilmAdress.vue'
export default {
  data () {
    return {
      list: ['4', '5', '6', '7', '8', '9', '10', '11']
    }
  },
  components: {
    MzFilmAdress
  }
}
</script>

<style lang="less">
    .cinema{
        .top{
            display: flex;
            box-sizing: border-box;
            justify-content: space-between;
            height: 44px;
            align-items: center;
            width: 90%;
            margin: auto;
            span{
                font-size: 13px;
            }
            p{
                font-size: 17px;
            }
            i{
                font-size: 18px;
            }
        }
        .nav{
            height: 49px;
            display: flex;
            box-sizing: border-box;
            background: red;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>
