<template>
    <div class="footer">
        <router-link to="/film"  active-class="a">
            <div class="foot">
                <i class="iconfont icon-dianying"></i>
                <span>电影</span>
            </div>
        </router-link>
        <router-link to="/cinema"  active-class="a">
            <div class="foot">
                <i class="iconfont icon-dianying"></i>
                <span>影院</span>
            </div>
        </router-link>
        <router-link to="/group"  active-class="a">
            <div class="foot">
                <i class="iconfont icon-dianying"></i>
                <span>9.9拼团</span>
            </div>
        </router-link>
        <router-link to="/center"  active-class="a">
            <div class="foot">
                <i class="iconfont icon-dianying"></i>
                <span>我的</span>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
}
</script>
<style>
    .footer{
        height: 49px;
        width: 100%;
        background: rgb(207, 165, 165);
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .a{
        color: brown;
    }
    .foot{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
</style>
