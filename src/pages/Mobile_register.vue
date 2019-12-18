// 注册页面
<template>
  <div ref="register" class="Mobile_register">
    <h3>手机号注册</h3>
    <div class="register_text">
      <div class="register_text_top">
        <div class="box1">
          <div class="box" @click="dianj">
            <select ref="sel">
              <option value="86">+86</option>
              <option value="87">+87</option>
              <option value="88">+88</option>
              <option value="89">+89</option>
            </select>
            <img :class="['box-img', {'box-imgs': isLiked}]" src="../assets/scoped/sert4.png" alt />
          </div>
          <input type="text" placeholder="请输入手机号码" maxlength="11" v-model="mobile" />
        </div>
      </div>
      <Block></Block>
      <div class="register_text_btn">
        <div>
          <input type="text" placeholder="请输入验证码" maxlength="4" v-model="snscode" />
          <span @click="show()" :class="['',{'span-box': mor}]">{{miao}}</span>
          <p :class="['cheng', {'cheng-box': mor}]"></p>
        </div>
      </div>
      <div class="register_text_footr">
        <div>
          <input type="password" placeholder="设置登录密码" maxlength="18" v-model="password" />
        </div>
      </div>
      <div class="yaoqingma">
        <div>
          <input type="text" placeholder="填写邀请码(选填)" maxlength="5" v-model="Invitation" />
        </div>
      </div>
      <button type="button" class="btn" @click="btn">同意协议并注册</button>
      <div class="box-da">
        <input
          id="test"
          :class="['input-duo', {'input-duo1': xuanz}]"
          type="checkbox"
          name="item"
          @click="box"
        />
        <label></label>
        <div class="bottom">
          我已阅读并同意以下协议：
          <span @click="fuwu(1)">《平台服务协议》、</span>
          <span  @click="mianzhe(0)" >《免责声明》、</span>
          <span @click="yins(2)">《隐私权政策》</span>
        </div>
      </div>
    </div>
      <mt-popup v-model="popupVisible1" position="bottom">
     <div class="rules">
        <HaiyunzhouRules :mianzhe="assf"></HaiyunzhouRules>
     </div>
      </mt-popup>
  </div>
</template>

<script>
import HaiyunzhouRules from "../components/rule/HaiyunzhouRules"
import { Toast, MessageBox } from "mint-ui";
import Block from "../components/Block";
import https from "../https";
import request from "../common/request";
export default {
  name: "Mobile_register",
  data() {
    return {
      height: 0,
      mobile: "",
      snscode: "",
      password: "",
      Invitation: "",
      sele: "86",
      isLiked: false,
      xuanz: false,
      miao: "获取验证码",
      mor: false,
	    miao1: "重新获取",
      yaoqing:"",
      assf:"",
      popupVisible1:false,

      //    Time:this.$store.state.huadong.data.data.expired_time ,// 后台返回的时间
      //    this_Time:(new Date().getTime()/1000)+50               //获取本地时间毫秒
    };
  },
  components: {
    Block,
    HaiyunzhouRules
  },
  created() {
    // this.init()
    this.yaoqin();
  },
  methods: {
     mianzhe(a){
      this.assf = a
       this.popupVisible1 = !this.popupVisible1
    }, 
    fuwu(b){
      this.assf = b
      this.popupVisible1 = !this.popupVisible1
    },
    yins(c){
      this.assf = c
      this.popupVisible1 = !this.popupVisible1
    },
    yaoqin() {
        let name,
          value,
          str = location.href,
          num = str.indexOf("?"); //取得整个地址栏
        str = str.substr(num + 1); //取得所有参数 stringvar.substr(start [, length ]
        let arr = str.split("&"); //各个参数放到数组里
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
          num = arr[i].indexOf("=");
          if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
          }
		}
		var add = arr[0].indexOf("=")+1
    var ass =arr[0].slice(add)
    if(this.Invitation ==""){
      this.yaoqing = ass
    }else{
      this.yaoqing = this.Invitation
    }
		console.log(ass,this.yaoqing)
      
    },
    show() {
      if (this.mobile.length != 11 || this.mobile == "") {
        Toast("请输入11位的电话号码！");
      }
      var dingshi = 60;
      let Time = this.$store.state.huadong.data.data.expired_time; // 后台返回的时间
      let this_Time = new Date().getTime() / 1000; //获取本地时间毫秒
      if (this_Time > Time) {
        // Toast("对不起您已经超过60秒了,请重新滑动验证")
        MessageBox({
          title: "提示",
          message: "对不起您已经超过60秒了,请重新滑动验证",
          showCancelButton: true
        });
        MessageBox.confirm("").then(action => {
          this.$router.replace("/Mobile_register");
        });
      } else {
        let This = this;
        let params = {
          type: 1,
          inviter_code:this.Invitation,
          mobile: this.mobile,
          Cache: this.$store.state.huadong.data.data.Cache_name,
          basestr: this.$store.state.huadong.data.data.basestr,
          str: this.$store.state.huadong.data.data.str
        };
        if (this.mobile.length != 11) {
          Toast("请输入11位的电话号码！");
        } else if (this.mobile.substr(0, 1) != 1) {
          Toast("请输入正确的电话号码！");
        } else {
          request
            .AJAX(this.$AjaxUrl.getSmsMessage, params, "getSmsMessage", This)
            .then(() => {
              console.log(this.$store.state.getSmsMessage.data.data.message);
             
              if (
                this.$store.state.getSmsMessage.data.data.error_code == 10001
              ) {
                MessageBox({
                  title: "提示",
                  message:
                    this.$store.state.getSmsMessage.data.data.message +
                    "点击确认调到登陆",
                  showCancelButton: true
                });
                MessageBox.confirm(
                  this.$store.state.getSmsMessage.data.data.message +
                    "点击确认调到登陆"
                ).then(action => {
                  This.$router.replace("/Password_register");
                });
              }
               if(this.$store.state.getSmsMessage.data.data.error_code == 10008){
                Toast(this.$store.state.getSmsMessage.data.data.message)
              }
              var romTime = setInterval(function() {
                dingshi--;
                if (dingshi <= 0) {
                  This.miao = This.miao1;
                  clearInterval(romTime);
                  This.mor = false;
                } else {
                  This.miao = This.miao1 + "(" + dingshi + "秒" + ")";
                  This.mor = true;
                }
              }, 1000);
            });
        }
      }
    },
    dianj() {
      this.isLiked = !this.isLiked;
    },
    box() {
      this.xuanz = !this.xuanz;
    },
    btn() {
      // 获取多选框的选中状态
      
      var yuan = document.querySelector("#test");
      console.log(yuan.checked);
      let This = this;
      let params = {
        ass: this.$refs.sel.value,
        mobile: this.mobile,
        snscode: this.snscode,
        password: this.password,
        inviter_code:this.Invitation
      };
      //    console.log(params)
      if (this.mobile == "") {
        Toast("请输入电话号码！");
      } else if (this.mobile.length != 11) {
        Toast("请输入11位的电话号码！");
      } else if (this.mobile.substr(0, 1) != 1) {
        Toast("请输入正确的电话号码！");
      } else if (yuan.checked == false) {
        Toast("请勾选协议");
        // let This = this
        // return https.fetchGet('http://192.168.2.252:7777/V1/user/registerWithMobile',params)
        // .then((data) => {
        //     This.reportday = data.data.checkin_counts.total_day
        //     console.log(data)
        //     this.integral = data.data.total_points
        //     for(let i = 0; i < This.weekdays.length ; i++){
        //         if(i > this.day.getUTCDay()-1){
        //             break
        //         }
        //         this.weekdays[i].img = today
        //     }

        // })
        // .catch(err=>{
        //         console.log(err)
        // })
      } else {
        request
          .AJAX(
            this.$AjaxUrl.registerWithMobile,
            params,
            "registerWithMobile",
            This
          )
          .then(() => {
            // console.log(This.$store.state.registerWithMobile.data.data.error_code);
            if (This.$store.state.registerWithMobile.data.data.error_code == 200) {
              Toast(This.$store.state.registerWithMobile.data.data.message)
              This.$router.replace("/Password_register");
            }else{
              Toast(This.$store.state.registerWithMobile.data.data.message);
              this.$router.go(0)
            }
          });
      }
    }
  }
};
</script>
<style scoped lang="less">
.Mobile_register {
  width: 100%;
  height: 100vh;
  // background: url("../assets/zhuce2.png") no-repeat center center;
  background-size: cover;
  overflow: hidden;
  h3{
    margin:10% 0;
    text-align: center;
  }
  .register_text {
    width: 686/2px;
    height: 100px;
    margin: 0 auto;
    // margin-top:120px;
    .register_text_top {
      width: 80%;
      height: 50%;
      border-bottom: 1px solid rgba(197, 197, 197, 1);
      margin: 0 auto;
      div {
        height: 100%;
        select,
        input {
          border: 0;
          height: 30px;
          margin-top: 20px;
          font-size: 16px;
        }
        input {
          width: 5.4rem;
          outline: none;
          color: rgba(197, 197, 197, 1);
        }
      }
    }
    .register_text_btn {
      width: 80%;
      height: 50%;
      border-bottom: 1px solid rgba(197, 197, 197, 1);
      margin: 0 auto;
      div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          width: 4.5rem;
          outline: none;
          color: rgba(197, 197, 197, 1);
          border: 0;
          height: 30px;
          margin-top: 15px;
          font-size: 14px;
        }
        span {
          height: 30px;
          margin-top: 20px;
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          color: rgba(238, 117, 60, 1);
        }
      }
    }
    .register_text_footr {
      width: 80%;
      height: 50%;
      border-bottom: 1px solid rgba(197, 197, 197, 1);
      margin: 0 auto;
      div {
        height: 100%;
        input {
          width: 5rem;
          outline: none;
          color: rgba(197, 197, 197, 1);
          border: 0;
          height: 30px;
          margin-top: 20px;
          font-size: 14px;
        }
      }
    }
    .yaoqingma {
      width: 80%;
      height: 50%;
      border-bottom: 1px solid rgba(197, 197, 197, 1);
      margin: 0 auto;
      div {
        height: 100%;
        display: flex;
        input {
          width: 5rem;
          outline: none;
          color: rgba(197, 197, 197, 1);
          border: 0;
          height: 30px;
          margin-top: 15px;
          font-size: 14px;
        }
      }
    }
    .btn {
      width: 80%;
      height: 30px;
      border-radius: 30px;
      margin: 20px auto 0;
      border: 1px solid rgba(238, 117, 60, 1);
      display: block;
      background-color: rgba(238, 117, 60, 1);
      color: #fff;
    }
    // .bottom{
    //     width: 80%;height: auto;margin: 180px auto 0 ;font-size:12px;color:rgb(37, 36, 36);
    //     span{
    //         color:rgba(238,117,60,1);
    //     }
    // }
  }
}
select {
  background-color: #fff;
}
input::-webkit-input-placeholder {
  color: #c5c5c5;
}
.box1 {
  display: flex;
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
// input::-moz-placeholder {
//   /* Mozilla Firefox 19+ */
//   color: #c5c5c5;
// }
// input:-moz-placeholder {
//   /* Mozilla Firefox 4 to 18 */
//   color: #c5c5c5;
// }
// input:-ms-input-placeholder {
//   /* Internet Explorer 10-11 */
//   color: #c5c5c5;
// }
// input{
//     color:black;
// }
.box-da {
  display: flex;
  margin-top: 50px;
}
.bottom {
  width: 312px;
  margin: 0 auto;
  line-height: 20px;
  font-size: 12px;
  margin-left: 30px;
}
.bottom span {
  color: #ee753c;
}
// 修改多选框样式
.input-duo[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 16px;
  height: 16px;
  font-size: 14px;
  border-radius: 16px;
}

.input-duo[type="checkbox"]::after {
  position: absolute;
  top: -2px;
  left: -2px;
  background-color: #fff;
  color: #fff;
  width: 15px;
  height: 15px;
  display: inline-block;
  visibility: visible;
  padding: 2px;
  text-align: center;
  line-height: 16px;
  content: " ";
  border-radius: 16px;
  border: 1px solid #c5c5c5;
}
.input-duo {
  position: absolute;
  left: 20px;
}
.input-duo1[type="checkbox"]::after {
  background-color: #ee753c;
  color: #fff;
  border: 1px solid #ee753c;
}

.input-duo[type="checkbox"]:checked::after {
  content: "✓";
  font-size: 14px;
  font-weight: bold;
  border-radius: 16px;
}
.bottom span {
  color: #ee753c;
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
.span-box {
  color: #c5c5c5 !important;
}
.rules{
  width:375px;
  height:500px;
  overflow:auto;
}
</style>