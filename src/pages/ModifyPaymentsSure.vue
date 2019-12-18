<template>
  <div class="beij">
    <div class="box">
      <p class="box-txt" v-if="this.set_password">设置支付密码</p>      
      <p class="box-txt" v-else>设置新支付密码</p>
      <!-- 组件 -->
      <div class="sure_pay_pass">
        <label for="password1">
          <ul class="pass_word1">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <input type="password" v-model="first_word" id="password1" @input="first_check_pass">
          </ul>
        </label>
      </div>
    </div>
    <div class="box">
      <p class="box-txt" v-if="this.set_password">确认支付密码</p>
      <p class="box-txt" v-else>确认新支付密码</p>
      <!-- 组件 -->
     <div class="sure_pay_pass">
      <label for="password2">
        <ul class="pass_word2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <input type="password" v-model="second_word" id="password2" @input="second_check_pass">
        </ul>
      </label>
    </div>
    </div>
    <div class="box-button" @click="completed">完成</div>
  </div>
</template>

<script>
import goodsPsd from '../components/goodsPsd'
import request from "../common/request";
import {Toast} from 'mint-ui';
export default {
  name: 'beij',
  data(){
    return {
      set_password: false,
      first_word: '',
      second_word: '',
    }
  },
  components:{
    goodsPsd
  },
  props: {
    is_update: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  created() {
    this.set_password = this.$route.query.set_password ? true : false
  },
  methods: {
    first_check_pass() {
      var pass_number = 6
      var li_array = document.getElementsByClassName('pass_word1')[0].children
      for (var i = 0; i < pass_number; i++) {
        if (this.first_word[i]) {
          li_array[i].innerHTML = "●"
        } else {
          li_array[i].innerHTML = ""
        }
      }
    },
    second_check_pass() {
      var pass_number = 6
      var li_array = document.getElementsByClassName('pass_word2')[0].children
      for (var i = 0; i < pass_number; i++) {
        if (this.second_word[i]) {
          li_array[i].innerHTML = "●"
        } else {
          li_array[i].innerHTML = ""
        }
      }
    },
    completed() {
      var This = this
      if (this.first_word != this.second_word) {
        Toast({message: '两次密码不一致'})
        return
      }
      if (this.first_word.length != 6 || this.second_word.length != 6) {
        Toast({message: '密码输入有误'})
        return
      }
      let params = {
        member_id: this.$store.state.index.data.data.member_info.member_id,
        paypwd: this.first_word,
        confirm_paypwd: this.second_word,
        set_password: this.set_password
      }
      request.AJAX(this.$AjaxUrl.editPayPwd, params, "editPayPwd", This).then(() => {
        if (this.$store.state.editPayPwd.data.data.code != 200) {
          Toast({message: this.$store.state.editPayPwd.data.data.message})
          this.first_word = ''
          this.second_word = ''
        }
        if (this.$store.state.editPayPwd.data.data.code == 200) {
          Toast({message: this.$store.state.editPayPwd.data.data.message})
          this.$router.push('/')
        }
      })
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 100vh;
  font-size: 12px;
}
.sure_pay_pass {
  width: 330px;
  height: 50px;
  margin: 0 auto;
}
.sure_pay_pass li {
  float: left;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #fff;
  margin-left: 6px;
  text-align: center;
  font-size: 14px
}
.sure_pay_pass li:first-child {
  margin-left: 0px;
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
  padding-top:50px;
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

.box-one {
  display: flex;
  width: 330px;
  height: 50px;
  justify-content: space-between;
  margin: 0 auto;
}
.box-one ul li {
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  /* color: #c5c5c5; */
  font-size: 20px;
  display: inline-block;
  text-align: center;
  line-height: 50px;
  background: #fff;
  margin-left: 2px;
  /* background-color:blanchedalmond */
}
input {
  border: none;
  opacity: 0;
}
li::-webkit-input-placeholder {
  color: #c5c5c5;
}

li::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
li:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c5c5c5;
}
li:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c5c5c5;
}
</style>
