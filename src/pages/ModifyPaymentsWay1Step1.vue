<template>
  <div class="beij">
    <div class="box-two">
      <p class="beij-p">绑定新的手机号</p>
    </div>
    <div class="box-one">
      <div class="box" @click="dianj">
        <select ref="sel">
          <option value="86">+86</option>
          <option value="87">+87</option>
          <option value="88">+88</option>
          <option value="89">+89</option>
        </select>
        <img :class="['box-img', {'box-imgs': isLiked}]" src="../assets/scoped/sert4.png" />
      </div>
      <p class="one-txt">
        <input type="text" v-model="mobile" maxlength="11"  />
      </p>
    </div>
    <div class="box-three">
      <p class="three">短信验证码</p>
    </div>
    <div class="box-four">
      <p class="four">
        <input type="text" placeholder="" class="four-input" v-model="verCode" />
      </p>
      <div>
        <p class="four-txt" @click="sendCode" v-if="show">获取验证码</p>
        <p class="four-txt gray" v-if="!show">{{ count }}</p>
      </div>
    </div>
    <div class="box-button" @click="nextStep">完成</div>
  </div>
</template>

<script>
import request from "../common/request";
import {Toast} from 'mint-ui';
  export default {
    name:'',
    props:[''],
    data () {
      return {
        condition: true,
        show: true,
        mobile: '',
        verCode: '',
        isLiked: false,
        count: 0,
        showBgc: false,
        member_id: '',
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      dianj() {
        this.isLiked = !this.isLiked;
      },
      sendCode () {
        if (this.mobile != "") {
          if (/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.mobile)) {
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false; 
              this.getPhoneCode(); 
              this.timer = setInterval(() => {
                if ( this.verCode != "") {
                    this.condition = false
                  }
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                } else {
                  // this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            }
          } else {
            Toast({message: '请输入正确的手机号码格式'})
          }
        } else {
          Toast({message: '请输入手机号码'})
        }

      },
      getPhoneCode () {
        let params = {
          mobile: this.mobile,
          type: 3
        }
        let This = this
        request.AJAX(this.$AjaxUrl.getSmsMessage, params, "getSmsMessage", This).then(() => {
          if (this.$store.state.getSmsMessage.data.data.code != 200) {
            Toast({message: this.$store.state.getSmsMessage.data.data.message})
              this.mobile = ""
              this.show = false
          }
        })
      },
      nextStep () {
        var This = this
        if (this.mobile == '') {
          Toast({message: '请完成短信验证'})
          return
        }
        let params = {
          member_id: this.$store.state.index.data.data.member_info.member_id,
          mobile: this.mobile,
          snscode: this.verCode
        }
        request.AJAX(this.$AjaxUrl.updatePhoneNumber1, params, "updatePhoneNumber1", This).then(() => {
          console.log(this.$store.state, '发送短信验证码')
          if (this.$store.state.updatePhoneNumber1.data.data.code == 200) {
              this.$router.push('/ModifyPaymentsSure');
          } else {
            Toast({message: this.$store.state.updatePhoneNumber1.data.data.message})
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
.box-two {
  width: 343px;
  margin: 0 auto;
  padding-top: 32px;
  margin-bottom: 10px;
}

.beij-p {
  font-size: 12px;
}
.box-one {
  width: 327px;
  height: 44px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* padding-top:15px; */
  padding-left: 16px;
  background-color: #fff;
  margin-bottom: 16px;
}
.one-txt {
  color: #c5c5c5;
}
.box-one img {
  width: 6px;
  height: 11px;
  margin-left: 10px;
  margin-right: 16px;
}
.box-three {
  width: 343px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.three{
  font-size:12px;
}
.box-four {
  width: 343px;
  height: 44px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.four {
  width: 227px;
  height: 44px;
  background-color: #fff;
  margin-right: 16px;
  display:flex;
  align-items: center;
}
.four-input{
  margin-left:15px;
}
input {
  width: 200px;
  height: 14px;
  border: none;
  outline: none;
  color: #c5c5c5;
  font-size: 14px;
  display:block;
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
.four-txt{
  color:#fff;
  background-color:#EE753C;
  width:100px;
  height:32px;
  text-align:center;
  line-height:32px;
  border-radius: 32px;
  font-size:12px;
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
.box img {
  width: 6px;
  height: 11px;
}
.box {
  margin-right: 16px;
}
.box .box-imgs {
  transform: rotate(90deg);
}
select {
  border: 0;
  font-size: 14px;
}
.cheng {
  position: absolute;
  top: 350px;
  right: 55px;
  width: 80px;
  height: 30px;
  background-color: rgba(197, 197, 197, 0);
  display: none;
}
.cheng-box {
  display: block;
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
.inp {
  width: 200px;
  height: 16px;
  border: none;
  outline: none;
  color: #c5c5c5;
  font-size: 14px;
  display: block;
}
</style>

