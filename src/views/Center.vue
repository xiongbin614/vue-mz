<template>
    <div class="center">
        <router-link to="/login">
            <div class="login">
                <div class="nowLogin">
                    <i></i>
                    <span>立即登录</span>
                </div>
                <div></div>
            </div>
        </router-link>
        <div class="ordeForms">
            <div class="ordeForm">
               <i class="iconfont icon-dianying"></i>
               <span>电影订单</span>
            </div>
            <div class="ordeForm">
               <i class="iconfont icon-dianying"></i>
               <span>拼团订单</span>
            </div>
        </div>
        <div class="margin-set">
            <div class="card">
                <div class="cardLeft">
                    <i class="iconfont icon-dianying"></i>
                    <span>卖座卡</span>
                </div>
                <i class="iconfont icon-dianying"></i>
            </div>
            <div class="card">
                <div class="cardLeft">
                    <i class="iconfont icon-dianying"></i>
                    <span>卖座卡</span>
                </div>
                <div class="money">
                    <i>#</i>
                    <span>20</span>
                </div>
                <i class="iconfont icon-dianying"></i>
            </div>
            <div class="card">
                <div class="cardLeft">
                    <i class="iconfont icon-dianying"></i>
                    <span>卖座卡</span>
                </div>
                <i class="iconfont icon-dianying"></i>
            </div>
        </div>
    </div>
</template>
<style lang='less'>
    .center{
        .login{
            height: 200px;
            display: flex;
            box-sizing: border-box;
            justify-content: space-between;
            padding: 0 22px;
            align-items: center;
            background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
            .nowLogin{
                display: flex;
                box-sizing: border-box;
                align-items: center;
                i{
                    height: 67px;
                    width: 67px;
                    background: red;
                    border-radius: 50%;
                    margin-right: 20px;
                }
                span{
                    font-size: 16px;
                    color: white;
                }
            }
        }
    }
    .center .ordeForms{
        height: 49px;
        background: red;
        display: flex;
        box-sizing: border-box;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .center .ordeForm{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-around;
    }
    .margin-set .card{
        height: 49px;
        background: red;
        box-sizing: border-box;
        display: flex;
        border-bottom: 1px solid white;
        justify-content: space-between;
        padding: 0 15px;
        align-items: center;
    }
    .card .cardLeft{
        display: flex;
        box-sizing: border-box;
        align-items: center;
    }
    .card .money{
        margin-left: 20px;
    }
    .cardLeft span{
        margin-left: 15px;
    }
</style>
