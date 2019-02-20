<template>
    <div class="film-item">
        <div class="top">
            <span>5</span>
            <p>流浪地球</p>
            <p></p>
        </div>
        <div class="filmImg">
            <img src="https://pic.maizuo.com/usr/movie/c1a690c732a9e752433fe9f2dbbbee97.jpg?x-oss-process=image/quality,Q_70" alt="">
        </div>
        <div class="info">
            <div class="title">
                <div>流浪地球<i>2D</i></div>
                <span>7.9分</span>
            </div>
            <div class="category grey-text">科幻</div>
            <div class="premieretime grey-text">上映时间</div>
            <div class="runtime grey-text">播放时间</div>
            <div class="introduction grey-text">简介</div>
        </div>
        <div class="actor">
            <div class="actor-person">演员人员</div>
            <div class="actors">
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span>郭凡</span>
                        <span>导演</span>
                    </div>
                </div>
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span>郭凡</span>
                        <span>导演</span>
                    </div>
                </div>
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span>郭凡</span>
                        <span>导演</span>
                    </div>
                </div>
                <div class="actors-item">
                    <img src="https://pic.maizuo.com/usr/movie/88357f5dd8a4e3736863f0dd04126b3b.jpg?x-oss-process=image/quality,Q_70" alt="">
                    <div class="actors-name">
                        <span>郭凡</span>
                        <span>导演</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="still"></div>
        <div class="footer">
            选座购票
        </div>
    </div>
</template>

<style lang="less">
    .film-item{
        .top{
            height: 44px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 10px;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: space-between;
            background: green;
            opacity: 0.5;
        }
        .filmImg{
            height: 211px;
            background: red;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            min-height: 189px;
            padding: 15px;
            background: gold;
            .title{
                display: flex;
                box-sizing: border-box;
                justify-content: space-between;
                font-size: 18px;
                i{
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                    display: inline-block;
                }
            }
            .grey-text{
                font-size: 13px;
                margin-top: 8px;
                color: #797d82;
            }
            .introduction{
                margin-top: 15px;
            }
        }
        .actor{
            height: 192px;
            background: saddlebrown;
            .actor-person{
                font-size: 16px;
                color: #191a1b;
                padding: 15px;
            }
            .actors{
                height: 127px;
                background: red;
                display: flex;
                box-sizing: border-box;
                overflow: auto;
                // overflow-x: hidden;
                .actors-item{
                    display: flex;
                    box-sizing: border-box;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                    justify-content: space-between;
                    margin-left: 10px;
                    img{
                        width: 85px;
                        height: 85px;
                        display: block;
                    }
                    .actors-name{
                        display: flex;
                        box-sizing: border-box;
                        flex-direction: column;
                        span{
                            color: #191a1b;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .still{
            height: 177px;
            background: seagreen;
        }
        .footer{
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            height: 49px;
            background: #ff5f16;
            color: white;
            font-size: 16px;
        }
    }
</style>
