<template>
    <div class="nowPlaingFilm">
        <img src="https://pic.maizuo.com/usr/movie/bed8f7edd414e5b8afd788be30b92f9f.jpg?x-oss-process=image/quality,Q_70" alt="">
        <div class="InfoFilm-item">
            <h1>流浪地球<i>2D</i></h1>
            <p class="grade">观众评分<i>7.9</i></p>
            <p class="actor">演员演员演员演员演员演员演员演员演员演员演员演员演员演员</p>
            <p class="time">中国大陆 | 100分钟</p>
        </div>
        <span>购票</span>
    </div>
</template>

<style lang="less">
    .nowPlaingFilm{
        height: 94px;
        background: darkgray;
        margin-bottom: 15px;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        img{
            height: 90px;
        }
        .InfoFilm-item{
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            justify-content: space-between;
            height: 80%;
            width: 210px;
            overflow: hidden;
            .grade{
                i{
                    color: #ffb232;
                }
            }
            .actor{
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
            h1{
                font-size: 16px;
                // position: relative;
                i{
                    // display: inline-block;
                    // position: absolute;
                    // right: 15px;
                    // top: 2px;
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                }
            }
        }
        span{
            height: 25px;
            width: 50px;
            color: #ff5f16;
            border-radius: 4px;
            border: 1px solid #ff5f16;
            display: flex;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
        }
    }
</style>
