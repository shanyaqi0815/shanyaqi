// 账号密码登录页面
<template>
	<div class="Password_register">
		<div class="logo">
			<img src="../assets/logo1000.png">
		</div>
		<div class="register_text">
			<div class="register_text_top">
				<div>
					<img src="../assets/urey.png" />
					<input
						type="text"
						placeholder="请输入账号"
						maxlength="11"
						v-model="name"
					/>
				</div>
			</div>
			<div class="register_text_btn">
				<div>
					<img src="../assets/zu108.png" />
					<input
						type="password"
						placeholder="请输入密码"
						maxlength="18"
						v-model="password"
					/>
					<!-- <span @click="show()">忘记密码</span> -->
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
					@click="duanxin"
				>短信验证码登录</div>
				<div
					class="denglu_btn"
					@click="zhuce"
				>注册</div>
			</div>
			</div>
	</div>
</template>

<script>
// import HaiyunzhouRules from "../components/rule/HaiyunzhouRules"
import https from "../https";
import request from "../common/request";
import { Toast } from "mint-ui";
import "mint-ui/lib/style.css";
import { Indicator } from "mint-ui";
export default {
  name: "Password_register",
   components: {
		// HaiyunzhouRules
	},
  data() {
    return {
      height: 0,
      name: "",
      password: "",
      xuanz: false,
	  Code: "",
	  assf:"",
      popupVisible1:false,
    };
  },
  created() {
    Indicator.close();
  },
  methods: { 
    // show() {
    //   // 一期不上
    //   // this.$router.replace("/find_password");
    // },
    btn() {
      var yuan = document.querySelector("#test");
      if (this.name == "") {
        Toast("请输入账号");
      } else if (this.password == "") {
        Toast("请输入密码");
      } else if (this.name != "" && this.password != "") {
        Indicator.open("加载中....");
        let params = {
          login_type: 1,
          member_name: this.name,
          member_password: this.password
        };
        console.log(params);
        let This = this; //保存当前页面的this
        request.AJAX(this.$AjaxUrl.index, params, "index", This).then(() => {
          if (this.$store.state.index.data.data.code == 200) {
            this.$router.replace("/");
          } else {
            Indicator.close();
            Toast(this.$store.state.index.data.data.message);
          }
        }); // homePage 是当前接口名称存在store中的key；
      }
    },
    duanxin() {
      this.$router.replace("/register");
    },
    zhuce() {
      this.$router.replace("/Mobile_register");
    },
  }
};
</script>
<style scoped lang="less">
.Password_register {
	width: 100%;
	height: 100vh;
	background:rgba(255,255,255,1);
	background-size: cover;
	overflow: hidden;
	position: relative;
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
				img {
					width: 12px;
					height: 15px;
				}
				input {
					width: 6.67rem;
					outline: none;
					color: rgba(197, 197, 197, 1);
					border: 0;
					height: 30px;
					margin-top: 20px;
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
				img {
					width: 15px;
					height: 10px;
				}
				input {
					width: 4.7rem;
					outline: none;
					color: rgba(197, 197, 197, 1);
					border: 0;
					height: 30px;
					margin-top: 20px;
				}
				span {
					height: 30px;
					margin-top: 20px;
					font-size: 14px;
					color: rgba(238, 117, 60, 1);
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
.box1 {
  display: flex;
}
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
.rules{
  width:375px;
  height:500px;
  overflow:auto;
}
</style>

