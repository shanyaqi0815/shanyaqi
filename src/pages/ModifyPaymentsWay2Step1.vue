<template>
  <div class="beij">
    <div class="box">
      <p>请输入相关银行卡信息进行身份验证</p>
    </div>
    <div class="box-one">
      <p class="one">选择银行</p>
      <div class="layout-one">
        <p>建设银行储蓄卡（尾号1234）</p>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </div>
    <div class="box-two">
      <p class="two">银行卡号</p>
      <p class="two-txt">
        <input type="text" v-model="bank_code" />
      </p>
    </div>
    <div class="box-two">
      <p class="two">身份证号</p>
      <p class="two-txt">
        <input type="text" v-model="identy_code"/>
      </p>
    </div>
    <div class="box-two">
      <p class="two">真实姓名</p>
      <p class="two-txt">
        <input type="text" v-model="real_user_name" />
      </p>
    </div>
    <div class="box-button" @click="nextStep">下一步</div>
  </div>
</template>

<script>
import request from "../common/request";
import { Toast } from 'mint-ui';
  export default {
    name:'beij',
    props:[''],
    data () {
      return {
          bank_code:'',
          identy_code: '',
          real_user_name: ''
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      nextStep () {
        if(this.identy_code == '' || this.real_user_name ==''){
          Toast({
              message: '证件信息不可为空',
              position: 'center',
              duration: 5000
          })
          return
        }
        this.$ajax.post('http://h5.horizou.cn:8088/api/v1/personalInfo',
        {
            // params: {   
                member_id : this.$store.state.index.data.data.member_info.member_id,
                idcard : this.identy_code,
                realname:this.real_user_name
            // }
        })
        .then((res)=>{
            if(res.status == 205){
                this.$router.push('/ModifyPaymentsSure')
            } else {
                Toast({message: '操作有误'})
                this.$router.go(-1)
            }
  
        })
       
      }
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
.box {
  width: 343px;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 32px;
}
.box p {
  color: #c5c5c5;
}
.box-one {
  width: 343px;
  margin: 0 auto;
}
.one {
  margin-bottom: 10px;
  font-size: 12px;
}
.layout-one {
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin-bottom: 16px;
}
.layout-one p {
  margin-left: 16px;
  color: #616161;
}
.layout-one img {
  width: 6px;
  height: 11px;
  margin-right: 16px;
  /* 旋转90度 */
  transform: rotate(90deg);
}
.box-two {
  width: 343px;
  margin: 0 auto;
  margin-bottom:16px;
}
.two {
  font-size: 12px;
  margin-bottom: 10px;
}
.two-txt {
  width: 343px;
  background-color: #fff;
  height: 44px;
  display: flex;
  align-items: center;
}
input {
  width: 300px;
  border: none;
  outline: none;
  /* color: #c5c5c5; */
  font-size: 16px;
  text-indent: 16px;
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
