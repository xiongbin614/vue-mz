<template>
    <div class="nav">
        <span>正在热映</span>
        <span>即将上映</span>
    </div>
</template>
<style lang='less'>
  .nav{
      height: 49px;
      display: flex;
      box-sizing: border-box;
      justify-content: space-around;
      align-items: center;
      background: khaki;
      border-bottom:1px solid rebeccapurple;
      span{
          height: 100%;
          line-height: 49px;
          border-bottom: 1px solid red;
          font-size: 14px;
          color: #ff5f16;
      }
  }
</style>
