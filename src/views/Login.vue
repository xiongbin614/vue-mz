<template>
    <div>
        <div class="logo">
            <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
        </div>
        <div class="from">
            <div class="phone">
                <input type="text" placeholder="手机号">
                <span>获取验证码</span>
            </div>
            <div class="phone">
                <input type="text" placeholder="验证码">
            </div>
            <div class="submit">
                <span>登录</span>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .logo{
        height: 60px;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        margin: 79px auto 40px;
        img{
            height: 60px;
        }
    }
    .from{
        .phone{
            box-sizing: border-box;
            display: flex;
            position: relative;
            padding: 0 25px;
            input{
                height: 55px;
                border: 0;
                width: 325px;
                outline: none;
                border-bottom: 1px solid red;
            }
            span{
                position: absolute;
                right: 25px;
                top: 22px;
            }
        }
    }
    .submit{
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        height: 44px;
        background: #ff5f16;
        width: 325px;
        margin: 0 auto;
        margin-top: 70px;
        border-radius: 3px;
        span{
            color: #fff;
        }
    }
</style>
