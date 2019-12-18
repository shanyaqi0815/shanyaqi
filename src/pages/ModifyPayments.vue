<template>
  <div class="beij">
    <div class="box">
      <p class="box-txt">输入原支付密码</p>
      <goodsPsd @success_pass="success_pass"></goodsPsd>
    </div>
    <div class="box-button" @click="nextStep">下一步</div>
  </div>
</template>


<script>
import request from "../common/request";
import goodsPsd from '../components/goodsPsd'
import { Toast } from 'mint-ui';
  export default {
    name:'beij',
    props:[''],
    data () {
      return {

      };
    },

    components: {
     goodsPsd 
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      nextStep () {
        this.$router.push('/ModifyPaymentsWays');
      },
      success_pass(data) {
        var This = this
        let params = {
          member_id : this.$store.state.index.data.data.member_info.member_id,
          paypwd : data.pass_word
        }
        request.AJAX(this.$AjaxUrl.checkPayPwd,params,'checkPayPwd',This).then(()=>{
          if (this.$store.state.checkPayPwd.data.data.code == 200) {
            this.$router.push('/ModifyPaymentsWays')
            Toast({message: this.$store.state.checkPayPwd.data.data.message+",选择验证方式"})
          } else {
            Toast({message: this.$store.state.checkPayPwd.data.data.message})
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
  padding-top: 50px;
}
.box-one {
  display: flex;
  width: 330px;
  height: 50px;
  justify-content: space-between;
  margin: 0 auto;
}
.box-one input {
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  /* color: #c5c5c5; */
  font-size: 20px;
  display: block;
  text-align: center;
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
.box {
  width: 343px;
  margin: 0 auto;
  font-size: 12px;
}
.box-txt {
  margin-bottom: 32px;
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

