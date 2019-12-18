<template>
  <div class="beij">
    <div class="box-one">
      <div class="layout-one">
        <p class="one">新消息提醒</p>
        <p class="one-txt">已开启</p>
      </div>
    </div>
    <div class="box-one">
      <div class="layout-one">
        <p class="one">客服</p>
        <!-- <p class="one-txt">已开启</p> -->
        <mt-switch v-model="val"></mt-switch>
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one">
        <p class="one">平台通知</p>
        <!-- <p class="one-txt">已开启</p> -->
        <mt-switch v-model="val1"></mt-switch>
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one">
        <p class="one">营销活动</p>
        <!-- <p class="one-txt">已开启</p> -->
        <mt-switch v-model="val2"></mt-switch>
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one">
        <p class="one">铃声提醒</p>
        <!-- <p class="one-txt">已开启</p> -->
        <mt-switch v-model="val3"></mt-switch>
      </div>
    </div>
    <div class="box-one box-two">
      <div class="layout-one">
        <p class="one">振动提醒</p>
        <!-- <p class="one-txt">已开启</p> -->
        <mt-switch v-model="val4"></mt-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { Switch } from "mint-ui";
export default {
  data() {
    return {
      val: true,
      val1: true,
      val2: true,
      val3: true,
      val4: true,

    };
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 667px;
}
.layout-one /deep/ .mint-switch-core {
  background-color: #4dd865;
  border: 1px solid #e5e5e5;
}
.box-one {
  background-color: #fff;
  width: 375px;
  height: 44px;
  font-size: 14px;
  margin-bottom: 10px;
}
.layout-one {
  width: 343px;
  margin: 0 auto;
  padding-top: 13px;
  display: flex;
  justify-content: space-between;
}
.one-txt {
  color: #c5c5c5;
}
.layout-one img {
  width: 53px;
  height: 34px;
  margin-top: -5px;
}
.box-two {
  margin-bottom: 1px;
}
</style>