<template>
  <div class="beij">
      <div class="box-one">
          <img src="../assets/scoped/AboutUs02.png" alt="" class="one">
          <div class="one-txt">
              <p class="txt-wz"></p>
              <p class="txt-wz1">让服务交易更简单</p>
              <p class="txt-wz2"></p>
          </div>
          <img src="../assets/scoped/AboutUs01.png" alt="" class="one-tp">
          <p class="txt-wez">扫描二维码的朋友也可以下载海海云舟客户端</p>
      </div>
      <div class="box-two">
          <div class="layout-two">
              <p>功能介绍</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div>
      <div class="box-two">
          <div class="layout-two">
              <p>版本更新</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 100vh;
}
.box-one .one{
    width:145px;
    height:40px;
    display: block;
    padding-top:50px;
    margin:0 auto 16px;
}
.txt-wz1{
    font-size:12px;
    color:#817F7F;
}
.one-txt{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom:16px;
}
.txt-wz{
    width:20px;
    height:1px;
    background:rgba(129,127,127,1);
    margin-right:6px;
}
.txt-wz2{
    width:20px;
    height:1px;
    background:rgba(129,127,127,1);
    margin-left:6px;
}
.one-tp{
    width:75px;
    height:75px;
    margin-bottom:10px;
    display:block;
    margin:0 auto;
}
.txt-wez{
    width:375px;
    font-size:12px;
    text-align:center;
    margin-bottom:50px;
}
.box-two{
    width:375px;
    height:44px;
    background-color:#fff;
    margin-bottom:1px;
}
.layout-two{
    width:343px;
    margin:0 auto;
    font-size:14px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top:15px;
}
.layout-two img{
    width:6px;
    height:11px;
}
</style>