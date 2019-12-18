<template>
  <div class="beij">
    <div class="box-one">
      <div class="layout-one">
        <p>语言设置</p>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </div>
    <div class="box-two">
      <div class="layout-one">
        <p>WIFI下自动播放视频下载图片等开关</p>
        <!-- <img src="../assets/scoped/cache.png" alt="" class="one-tp"> -->
        <mt-switch v-model="value"></mt-switch>
      </div>
    </div>
    <div class="box-two">
      <div class="layout-one">
        <p>WIFI环境下自动升级</p>
        <!-- <img src="../assets/scoped/cache01.png" alt="" class="one-tp"> -->
        <mt-switch v-model="val"></mt-switch>
      </div>
    </div>
    <div class="box-two">
      <div class="layout-one">
        <p>清除缓存</p>
        <div class="one-txt">
          <p>30.62KB</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Switch } from "mint-ui";
export default {
  data() {
    return {
      value: true,
      val: false
    };
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.layout-one /deep/ .mint-switch-core {
  background-color: #4dd865;
  border: 1px solid #e5e5e5;
  margin-top: -6px;
}
.beij {
  background-color: #f5f5f5;
  height: 667px;
}
.box-one {
  width: 375px;
  height: 44px;
  background-color: #fff;
  margin-bottom: 10px;
}
.layout-one {
  width: 343px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  font-size: 14px;
}
.layout-one img {
  width: 6px;
  height: 11px;
  margin-top: 3px;
}
.layout-one .one-tp {
  width: 53px;
  height: 34px;
  margin-top: -8px;
}
.box-two {
  width: 375px;
  height: 44px;
  background-color: #fff;
  margin-bottom: 1px;
}
.one-txt {
  display: flex;
  /* font-weight:bold; */
}
.one-txt img {
  margin-left: 12px;
}
</style>