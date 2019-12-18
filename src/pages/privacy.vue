<template>
  <div class="beij">
      <div class="box-one">
          <div class="layout-one">
              <p>系统设置</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div>
      <div class="box-one">
          <div class="layout-one" @click="privacy">
              <p>隐私政策</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div>
      <div class="box-one">
          <div class="layout-one">
              <p>常见问题</p>
              <img src="../assets/scoped/sert4.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"",
    methods:{
        privacy(){
            this.$router.push("/PrivacyPolicy")
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
    background-color:#fff;
    font-size:14px;
    margin-bottom:10px;
}
.layout-one{
    width:343px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    padding-top:13px;
}
.layout-one img{
    width:6px;
    height:11px;
    margin-top:2px; 
}
</style>