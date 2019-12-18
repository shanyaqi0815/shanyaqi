<template>
  <div class="beij">
    <div class="servicee">
      <header>
        <div class="service-top">
          <img src="../assets/scoped/service1.png" alt />
          <div class="top-txt">
            <p class="txt-one">2019版 微服务时代Spring Boot企业微信点餐系统</p>
            <p class="txt-two">初级</p>
            <p class="txt-three">
              ￥ 1688
              <s>￥2200</s>
            </p>
          </div>
        </div>
      </header>
      <div class="service-list">
        <div class="list" @click="refund">
          <img src="../assets/scoped/sert2.png" alt class="list-tp1" />
          <div class="list-txt">
            <p class="txt-one">我要退款</p>
            <p class="txt-two">时间问题，或与卖家协商同意退款</p>
          </div>
          <img src="../assets/scoped/sert4.png" alt class="list-tp" />
        </div>
        <div class="list-one">
          <img src="../assets/scoped/str3.png" alt class="list-tp1" />
          <div class="list-txt" @click="dianj">
            <p class="txt-one">售后维权</p>
            <p class="txt-two">时间延期，服务态度差</p>
          </div>
          <img src="../assets/scoped/sert4.png" alt class="list-tp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
           
    }
  },
  methods:{
    refund(){
      this.$router.push('/refunds')
    },
    dianj(){
       this.$router.push('/protection');
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.servicee {
  width: 375px;
  height: 109px;
  color: #fff;
  background-color: #fff;
}
.service-top {
  display: flex;
  margin-bottom: 10px;
  padding: 15px 25px 15px 16px;
}
.service-top img {
  width: 112px;
  height: 78px;
}
.top-txt {
  width: 212px;
  height: 78px;
  font-size: 12px;
  margin-left: 10px;
}
.txt-one {
  width: 212px;
  height: 34px;
  margin-bottom: 6px;
}
.txt-two {
  color: #777777;
  margin-bottom: 4px;
}
.txt-three {
  font-size: 14px;
  color: #ea4940;
}
.txt-three s {
  font-size: 12px;
  color: #c5c5c5;
}
.list,
.list-one {
  display: flex;
}
.list {
  width: 360px;
  height: 76px;
  padding-top: 17px;
  padding-left: 15px;
  font-size: 14px;
  background-color: #fff;
  margin-bottom: 1px;
}
.list .list-tp1 {
  width: 21px;
  height: 19px;
  margin-top: 14px;
  margin-right: 13px;
}
.list .list-tp {
  width: 6px;
  height: 11px;
  margin-top: 18px;
}
.list .txt-one {
  width: 56px;
  height: 28px;
}
.list .txt-two {
  height: 26px;
  color: #c5c5c5;
  font-size: 12px;
  margin-right: 123px;
}
.list-one {
  width: 360px;
  height: 76px;
  padding-top: 17px;
  padding-left: 15px;
  font-size: 14px;
  background-color: #fff;
}
.list-one .list-tp1 {
  width: 17px;
  height: 21px;
  margin-top: 14px;
  margin-right: 13px;
}
.list-one .list-tp {
  width: 6px;
  height: 11px;
  margin-top: 18px;
}
.list-one .txt-one {
  width: 56px;
  height: 28px;
}
.list-one .txt-two {
  height: 26px;
  color: #c5c5c5;
  font-size: 12px;
  margin-right: 183px;
}
.beij {
  width: 100%;
  background-color: #f5f5f5;
  height: 667px;
}
</style>
