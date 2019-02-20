<template>
<div class="MzFilmAdress">
    <div class="MzFilmAdress-item">
        <div class="cinemaName">
            <p>英皇影院成</p>
            <span>深圳市宝安区后瑞村</span>
        </div>
        <div class="distance">
            <span>$54</span>
            <p>距离位置</p>
        </div>
    </div>
</div>
</template>

<style lang="less">
    .MzFilmAdress{
        padding: 15px;
        border-top: 1px solid red;
    }
    .MzFilmAdress-item{
        height: 45px;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        .cinemaName{
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            justify-content: space-between;
            span{
                color: #797d82;
            }
        }
        .distance{
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            span{
                color: #ff5f16;
            }
            p{
                color: #797d82;
            }
        }
    }
</style>
