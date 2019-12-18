<template>
  <div class="beij">
    <div class="box-one">
      <div class="layout-one">
        <p class="one">当前选择的语言：简体中文</p>
        <p class="one-txt">简体中文</p>
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">简体中文</p>
        <img src="../assets/scoped/RegionalSetup.png" alt="">
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">English (UK)</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">English (Australia)</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">English (India)</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">繁體中文</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">繁體中文（香港）</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">日本語</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">Espanol</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">Français</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-one box-two box-three">
      <div class="layout-one layout-two">
        <!-- <p class="one">当前选择的国家/地区：</p> -->
        <p class="one-txt">Français (Canada)</p>
        <!-- <img src="../assets/scoped/RegionalSetup.png" alt=""> -->
      </div>
    </div>
    <div class="box-four">确认</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 667px;
}
.box-one {
  width: 375px;
  height: 44px;
  font-size: 14px;
  background-color: #fff;
  margin-bottom: 9px;
}
.layout-one {
  display: flex;
  padding: 13px;
}
.layout-two{
    justify-content: space-between;
}
.layout-two img{
    width:16px;
    height:13px;  
    margin-top:3px;
}
.box-two{
    margin-bottom:1px;
}
.box-four{
    width:343px;
    height:40px;
    margin:0 auto;
    background-color:#EE753C;
    color:#fff;
    font-size:16px;
    text-align:center;
    line-height: 40px;
    border-radius: 40px;
    margin-top:18px;
}
</style>