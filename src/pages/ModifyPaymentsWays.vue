<template>
  <div class="beij">
    <div class="box">
      <p>选择一种方式进行进一步验证</p>
    </div>
    <div class="box-one">
      <div class="layout-one" @click="way1">
        <p>手机号验证</p>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </div>
    <div class="box-one">
      <div class="layout-one"  @click="way2">
        <p>身份验证</p>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
 import request from "../common/request";
  export default {
    name:'beij',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      way1 () {
        this.$router.push('/ModifyPaymentsWay1Step1');
      },
      way2 () {
        this.$router.push('/ModifyPaymentsWay2Step1');
      },
    },

    watch: {}

  }

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 100vh;
  font-size: 14px;
}
.box{
    width:343px;
    margin:0 auto;
    font-size:12px;
}
.box p{
    width:343px;
    height:44px;
    line-height: 44px;
   color:#C5C5C5;
}
.box-one{
    width:100vw;
    background-color:#fff;
}
.layout-one{
    width:343px;
    height:44px;
    margin:0 auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:1px;
}
.layout-one img{
    width:6px;
    height:11px;
}
</style>