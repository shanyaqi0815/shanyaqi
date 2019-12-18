<template>
  <div class="beij">
      <div class="box-one" @click="number(5)">
          <div class="layout-one">
              <p>实名认证</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div>
      <div class="box-one">
          <div class="layout-one" @click="number(1)">
              <p>修改登陆密码</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div> 
      <div class="box-one" @click="number(2)">
          <div class="layout-one">
              <p>修改手机号</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div> 
      <div class="box-one" @click="set_password()">
          <div class="layout-one">
              <p>设置支付密码</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div> 
      <div class="box-one box-two" @click="number(3)">
          <div class="layout-one">
              <p>修改支付密码</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div>
<!--      
       <div class="box-one box-two" @click="number(4)">
          <div class="layout-one">
              <p>邮箱绑定</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>    
      </div>  -->
  </div> 
</template>

<script>
export default {
    name:'',
    methods:{
        number(a){
            if(a == 1){
                this.$router.push("/ModifyLoginPassword")
            } 
            if(a == 2){
                this.$router.push("/ModifyPhoneNumber1")
            } 
            if(a == 3){
                this.$router.push("/ModifyPayments")
            } 
            if(a == 4){
                this.$router.push("/bindMailbox")
            } 
            if(a == 5){
                this.$router.push("/Verified")
            }            
        },
        set_password() {
            let params = {
                set_password : true
            }

            this.$router.push({ path: '/ModifyPaymentsSure', query: params})
        }
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.beij {
  background-color: #f5f5f5;
  height: 667px;
}
.box-one{
    width:375px;
    height:44px;
    margin-bottom:1px;
    font-size:14px;
    background-color:#fff;
}
.layout-one{
    width:343px;
    margin:0 auto;
    display:flex;
    padding-top:13px;
    justify-content: space-between;
}
.box-two{
    margin-bottom:10px;
}
.box-one img{
    width:6px;
    height:11px;
    margin-top:2px;
}
</style>
