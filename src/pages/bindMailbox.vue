<template>
  <div class="bindMailbox">
    <div class="box">
        <p class="box-txt">邮箱账号</p>
        <div class="box-one">
          <input type="" class="inp"  />
        </div>
    </div>
    <div class="box">
        <p class="box-txt yz-txt">输入邮箱验证码</p>
        <div class="yz">
        <div class="yz_inp">
            <input type="text"  maxlength="11"  class="inp" />
        </div>
        <div class="yz_btn">
            <p class="four-txt" >获取验证码</p>
        </div>
        </div>
    </div>
    <div class="box-button" >完成</div>
  </div>
</template>

<script>

  export default {
    name:'bindMailbox',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>
* {
  margin: 0;
  padding: 0;
}
.bindMailbox {
  background-color: #f5f5f5;
  height: 667px;
  margin-top: -25px;
  padding-top: 15px;
}
.box {
  width: 375px;
  height: 50px;
  margin: 20px 0 40px 0;
}
.box-one {
  width: 343px;
  margin: 0 auto;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 45px;

}
.box-txt {
  font-size: 12px;
  margin: 25px 0 10px 20px;
}
.inp {
  width: 200px;
  height: 25px;
  border: none;
  outline: none;
  color: #c5c5c5;
  font-size: 14px;
  display: block;
  padding-left: 10px;
}
.yz {
  width: 343px;
  margin: 0 auto;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-top: 15px;
  margin-top: -20px;
}
.yz_inp {
  height: 25px;
  display: inline-block;
}
.yz_inp input  {
  width: 196px;
  height: 45px;
  margin-right: 10px;
}
.yz_btn {
  height: 45px;
  display: inline-block;
}
.yz_btn p {
  width: 130px;
  margin-top: 15px;
  text-align: center;
  height: 35px;
  padding-top: 5px;
}
.yz-txt {
  margin-bottom: 4px;
}
.four-txt {
  color: #fff;
  background-color: #ee753c;
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 32px;
  font-size: 12px;
}
.box-button {
  width: 343px;
  height: 44px;
  margin: 0 auto;
  background-color: rgba(238, 117, 60, 0.7);
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  line-height: 44px;
  border-radius: 44px;
  font-size: 16px;
  margin-top: 100px;
}
</style>