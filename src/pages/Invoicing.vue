<template>
  <div class="Invoicing">
    <div class="beij">
        <div class="Invoicing-box">
            <div class="Invoicing-layout">
                <p class="layou-one">发票类型</p>
                <div class="one">
                    <p class="one-txy">电子发票</p>
                    <img src="../assets/scoped/sert4.png" alt="">
                </div>
            </div>
        </div>
        <div class="Invoicing-box-two">
            <div class="Invoicing-layout-two">
                <p class="layout-two">抬头类型</p>
                <div class="two" @click.stop="chux">
                    <div class="two-tp">
                        <img src="../assets/scoped/refunds4.png" class="two-img" v-show="tp" alt="">
                        <img src="../assets/scoped/refunds5.png" alt="">
                        
                        <p class="two-txt">个人</p>
                    </div>
                    <div class="two-tp" @click.stop="xiaos">
                        <img src="../assets/scoped/refunds5.png"  alt="">
                        <img src="../assets/scoped/refunds4.png" class="two-img" v-show="tp1" alt="">
                        <p class="two-txt">企业</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="Invoicing-box-two">
            <div class="Invoicing-layout-two">
                <p class="layout-two">单位名称</p>
                <input class="three-txt " v-model="name" placeholder="请填写单位名称" type="text" />
            </div>
        </div>
        <div class="Invoicing-box-two Invoicing-box-three">
            <div class="Invoicing-layout-two">
                <p class="layout-two">纳税人识别号</p>
                <input class="three-txt1 " v-model="name1" placeholder="请填写纳税人识别号" type="text" />
            </div>
        </div>
         <div class="Invoicing-box-two">
            <div class="Invoicing-layout-two">
                <p class="layout-two">收票人手机</p>
                <input class="three-txt " v-model="name2" placeholder="请填写收票人手机号" type="text" />
            </div>
        </div><div class="box-button1" @click="fn">提交</div>
    </div>
    
  </div>
</template>

<script>
export default {
  //   name="Invoicing"
  data(){
      return {
          name:"",//单位名称
          name1:"",//请填写纳税人识别号
          name2:"",//收票人手机号
          tp:false,
          tp1:true
      }
  },
  methods:{
      chux(){
          this.tp = !this.tp 
          if(this.tp1 = true){
              this.tp1 = false
          }
      },
      xiaos(){
          this.tp1 = !this.tp1 
           if(this.tp = true){
              this.tp = false
          }
      },
      fn(){
          
      }
  }
};
</script>

<style scoped lang="less">
.beij {
  background-color: #f5f5f5;
  height: 100vh;
  font-size: 14px;
}
.Invoicing-box{
    width:100%;
    height:44px;
    background-color:#fff;
    font-size:14px;
    margin-bottom:10px;
}
.Invoicing-layout{
    width:343px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top:15px;
    margin:0 auto;
}
.one{
     display:flex;
     justify-content: space-between;
     align-items: center;
}
.one img{
    width:6px;
    height:11px;
    margin-left:10px;
}
.Invoicing-box-two{
    width:375px;
    height:44px;
    background-color:#fff;
}
.Invoicing-layout-two{
    width:343px;
    padding-top:15px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:1px;
}
.two{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.two-tp{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left:16px;
    position:relative;
}
.two-tp img{
    width:16px;
    height:16px;
}
.two-tp p{
    margin-left:10px;
}
input {
  width: 266px;
  height: 15px;
  border: none;
  outline: none;
  background-color: #fff;
  font-size: 14px;
  display: block;
}
input::-webkit-input-placeholder {
  color: #c5c5c5;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c5c5c5;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c5c5c5;
}
.Invoicing-box-three{
    margin-bottom:10px;
}
.three-txt1{
    width:250px;
}
.two-img{
    position:absolute;
    top:1px;
    left:0;
}
.box-button1 {
  width: 343px;
  height: 44px;
  margin: 0 auto;
  background-color: #ee753c;
  color: #fff;
  text-align: center;
  line-height: 44px;
  border-radius: 44px;
  font-size: 16px;
  margin-top: 152px;
}
</style>