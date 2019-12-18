<template>
  <div class="modifyPwd">
    <div class="box">
      <p class="box-txt">输入手机号</p>
      <div class="box-one">
          <select ref="sel" @click="dianj">
            <option value="86">+86</option>
            <option value="87">+87</option>
            <option value="88">+88</option>
            <option value="89">+89</option>
          </select>
          <img :class="['box-img', {'box-imgs': isLiked}]" src="../assets/scoped/sert4.png" />
        <div>
          <input type="text" class="inp"  maxlength="11" v-model="mobile" />
        </div>
      </div>
    </div>
    <div class="box">
      <p class="box-txt yz-txt">输入短信验证码</p>
      <div class="yz">
        <div class="yz_inp">
          <input type="text"  maxlength="11" v-model="verCode" class="inp" />
        </div>
        <div class="yz_btn" v-if="condition">
          <p class="four-txt" @click="sendCode" v-if="show">获取验证码</p>
          <p class="four-txt gray" v-if="!show">{{ count }}</p>
        </div>
      </div>
    </div>
    <div class="box">
      <p class="box-txt">输入原始密码</p>
      <div class="box-one">
        <div>
          <input type="password" class="inp" v-model="oldPwd" />
        </div>
      </div>
    </div>
    <div class="box">
      <p class="box-txt">输入新的密码</p>
      <div class="box-one">
        <div>
          <input type="password" class="inp" v-model="newPwd" />
        </div>
      </div>
    </div>
    <div class="box">
      <p class="box-txt">确定新密码</p>
      <div class="box-one">
        <div>
          <input type="password" class="inp"  v-model="rePwd" />
        </div>
      </div>
    </div>
    <div class="box-button" @click="btnSend" >完成</div>
  </div>
</template>

<script>
 import request from "../common/request";
 import { Toast, Indicator } from "mint-ui";
 export default {
   name: "modifyPwd",
   props: [""],
   data() {
     return {
       member_id: '',
       isLiked: false,
       verCode: "",
       mobile: "",
       count: 0,
       show: true,
       condition: true,
       oldPwd: '',
       newPwd: '',
       rePwd: ''
   
     };
   },
   created() {},
   components: {},

   computed: {},

   beforeMount() {},

   mounted() {},

   methods: {
     dianj() {
       this.isLiked = !this.isLiked;
     },
     sendCode() {
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
                 this.show = true;
                 clearInterval(this.timer);
                 this.timer = null;
               }
             }, 1000);
           }
         } else {
        
         }
       } else {
      
       }
     },
     getPhoneCode () {
        let params = {
          mobile: this.mobile,
          type: 3
        }
        let This = this
        request.AJAX(this.$AjaxUrl.getSmsMessage, params, "getSmsMessage", This).then(() => {
           console.log(This.$store.state.getSmsMessage)
        })

     },
     btnSend () {
       if ( this.mobile != undefined && this.verCode != undefined && this.oldPwd != undefined && this.newPwd != undefined && this.rePwd != undefined) {
         this.member_id = this.$store.state.index.data.data.member_info.member_id
         let params = {
           member_id: this.member_id,
           mobile: this.mobile,
           snscode: this.verCode,
           password: this.oldPwd,
           new_password: this.newPwd,
           new_confirm_password: this.rePwd
         }
         let This = this
         request.AJAX(this.$AjaxUrl.updatePassword, params, "updatePassword", This).then(() => {
           this.$router.push('/account');
         })
       }
    

 },
    
   },

   watch: {}
 };
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.modifyPwd {
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
  padding-left: 5px;

}
.box-one img {
  width: 6px;
  height: 11px;
  margin-right: 16px;
  margin-left: 5px;
}
.box-txt {
  font-size: 12px;
  margin: 25px 0 10px 20px;
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
input {
  width: 200px;
  height: 14px;
  border: none;
  outline: none;
  font-size: 14px;
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
select {
  border: 0;
  font-size: 16px;

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
.gray {
  background-color: #C5C5C5;
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
</style>