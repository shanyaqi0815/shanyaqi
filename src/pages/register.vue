// 登录页面
<template>
	<div
		ref="register"
		class="register"
	>			
		<div class="logo">
			<img src="../assets/logo1000.png">
		</div>
		<div class="register_text">
			<div class="register_text_top">
				<div class="box1">
					<div
						class="box"
						@click="dianj"
					>
						<select ref="sel">
							<option value="86">+86</option>
							<option value="87">+87</option>
							<option value="88">+88</option>
							<option value="89">+89</option>
						</select>
						<img
							:class="['box-img', {'box-imgs': isLiked}]"
							src="../assets/scoped/sert4.png"
							alt
						/>
					</div>
					<input
						type="text"
						placeholder="请输入手机号码"
						maxlength="11"
						v-model="mobile"
					/>
				</div>
			</div>
			<Block></Block>
			<div class="register_text_btn">
				<div>
					<input
						type="text"
						placeholder="请输入手机验证码"
						maxlength="4"
						v-model="message"
					/>
					<span
						@click="show()"
						:class="['',{'span-box':mor}]"
					>{{miao}}</span>
					<p :class="['cheng', {'cheng-box': mor}]"></p>
				</div>
			</div>
			<button
				type="button"
				class="btn"
				@click="btn"
			>登录</button>
			<div class="zhuce">
				<div
					class="denglu"
					@click="zhanghao"
				>账号密码登录</div>
				<div
					class="denglu_btn"
					@click="zhuce"
				>注册</div>
			</div>
			<div class="box-da">
			</div>
		</div>
	</div>
</template>

<script>
import HaiyunzhouRules from "../components/rule/HaiyunzhouRules"
import { Toast, Indicator } from "mint-ui";
import request from "../common/request";
import Block from "../components/Block";
import { type } from "os";
export default {
  name: "register",
   components: {
		HaiyunzhouRules
	},
  data() {
    return {
      height: 0,
      mobile: "",
      miao: "获取验证码",
      message: "",
      isLiked: false,
      mor: false,
      miao1: "重新获取",
	  xuanz: false,
	   assf:"",
      popupVisible1:false,
    };
  },
  components: {
    Block
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
    show() {
      if (this.mobile.length != 11 || this.mobile == "") {
        Toast("请输入11位的电话号码！");
      } else {
        var dingshi = 60;
        let Time = this.$store.state.huadong.data.data.expired_time; // 后台返回的时间
        let this_Time = new Date().getTime() / 1000; //获取本地时间毫秒
        if (this_Time > Time) {
          this.$router.replace("/register");
          Toast("对不起您已经超过60秒了,请重新滑动验证");
        } else {
          let This = this;
          let params = {
            type: 2,
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
                var romTime = setInterval(function() {
                  dingshi--;
                  if (dingshi <= 0) {
                    This.miao = "获取验证码";
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
      }
    },
    box() {
      this.xuanz = !this.xuanz;
    },
    zhanghao() {
      this.$router.replace("/Password_register");
    },
    zhuce() {
      this.$router.replace("/Mobile_register");
    },
    ajax() {
      // this.axios.get(url,{a: 1, b: 2})
      // .then(res => {
      //     // 成功回调
      // }, res => {
      //     // 错误回调
      // })
    },
    btn() {
      var yuan = document.querySelector("#test");
	   if (this.mobile.length != 11) {
        Toast("请输入11位的电话号码！");
      } else if (this.mobile.substr(0, 1) != 1) {
        Toast("请输入正确的电话号码！");
      } else {
        let This = this;
        let params = {
          login_type: 2,
          mobile: this.mobile,
          //   短信验证码
          snscode: this.message
        };
        console.log(params);
        request.AJAX(this.$AjaxUrl.index, params, "index", This).then(() => {
          if (this.$store.state.index.data.data.code == 200) {
            this.$router.replace("/");
          } else {
            Toast(this.$store.state.index.data.data.message);
          }
        });
      }
      // if(false){
      //     let params = {
      //         mobile:this.mobile,
      //         message:this.message
      //     }
      //     let This=this   //保存当前页面的this
      //     var name = "index"
      //     request.AJAX(this.$AjaxUrl.index,params,name,This) // homePage 是当前接口名称存在store中的key；
      //     console.log(this.$store.state)
      //     this.$router.replace('/index')
      // }
    },
    dianj() {
      this.isLiked = !this.isLiked;
    }
  }
};
</script>
<style scoped lang="less">
body /deep/ .mint-toast-text {
  color: #fff !important;
}
.color /deep/ .mint-toast-text {
  color: red !important;
}
.register {
	width: 100%;
	height: 100vh;
background:rgba(255,255,255,1);
	background-size: cover;
	overflow: hidden;position: relative;
	.logo{
		width: 156px;height: 55px;
		background-color: aqua;
		position: absolute;
		top:94px;background:rgba(255,255,255,1);
		left: 110px;
		img{
			width: 100%
		}
	}
	.register_text {
		width: 686/2px;
		height: 100px;
		margin: 0 auto;
		margin-top: 5.65rem;
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
					font-size: 14px;
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
					font-size: 14px;
					color: rgba(238, 117, 60, 1);
					text-align: right;
					display: inline-block;
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
		.zhuce {
			width: 80%;
			height: 30px;
			line-height: 30px;
			margin: 10px auto 0;
			font-size: 14px;
			.denglu {
				float: left;
			}
			.denglu_btn {
				float: right;
			}
		}
		footer {
			width: 80%;
			height: auto;
			margin: 210px auto 0;
			font-size: 12px;
			color: rgba(197, 197, 197, 1);
			span {
				color: rgba(238, 117, 60, 1);
			}
		}
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
