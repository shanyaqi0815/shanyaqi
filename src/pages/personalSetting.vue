<template>
  <div class="personalSetting">
    <div class="details-header">

        <div class="header-logo">
          <div class="header-img">
             <img :src="member_avatar"  v-if="this.condition">
					   <img src="../assets/default.png" alt="" v-if="!(this.condition)">
             <div v-if="this.condition"  class="logo-name">
                <h2>海云舟</h2>
                <p class="logo-name c2"> 用户名： {{ this.member_name }}</p>
              </div>
              <!-- <div class="logo-name" v-if="!(this.condition)">
					    	<p> <span @click="login"> 登录</span>/ <span @click="register">注册</span></p>
              </div> -->
          </div>

          <div v-if="this.condition">
						<i class="" @click="set"  > <img src="../assets/scoped/sert4.png" alt class="logo-tp" /></i>
					</div>
					<div v-if="!(this.condition)">
						<i class="" @click="set1" > <img src="../assets/scoped/sert4.png" alt class="logo-tp" /></i>
					</div>
        </div>
        <div class="header-we" @click="site(1)">
          <p>收货地址管理</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>   
    </div>

    <div class="details-wenz" @click="site(2)">
      <div class="details-one">
        <p>账户与安全</p>
        <img src="../assets/scoped/sert4.png" alt />
      </div>
    </div>
    <div class="details-two">
      <div class="two">
        <div class="two-txt" @click="site(3)">
          <p>地区设置</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
        <div class="two-txt" @click="site(4)">
          <p>音效与通知</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
        <div class="two-txt" @click="site(5)">
          <p>隐私</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
        <div class="two-txt" @click="site(6)">
          <p>通用</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
      </div>
    </div>
    <div class="details-three">
      <div class="three">
        <div class="three-txt"  @click="site(7)">
          <p>问题反馈</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
        <div class="three-txt"  @click="site(8)">
          <p>关于海云舟</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
      </div>
    </div>
    <div class="datails-four" @click="logout">退出登录</div>
    <mt-popup v-model="isLogout" position="bottom"  class="logoutMsg">
      <p class="logout">确定退出登录?</p>
      <button type="default"  @click="cancel" class="btn" style="color: #EE753C;">取消</button>
      <button type="default"  @click="definite" class="btn bgc">确定</button>
    </mt-popup>
  </div>
</template>

<script>
import { Popup, Button } from 'mint-ui';
import request from "../common/request";
import img6 from "../assets/default.png"

import { MessageBox } from 'mint-ui';
export default {
  name:'personalSetting',
  data(){
    return{
      isLogout: false,
      isHasLog: '',
      condition: false,
      member_id:'',
      member_name: '',
			member_avatar: ''

    }
  },
  created () {
    this.check();
    if(this.$store.state.index != undefined){
        this.member_name = this.$store.state.index.data.data.member_info.member_name
    }
    if (!this.member_avatar) {
			this.member_avatar = '../assets/default.png'
		}
	},
  methods:{
    site(a){
      if ( a == 1) {
        this.$router.push('/ManagementAddress')
      }
      else if ( a == 2) {
        this.$router.push('/account')
      }
      else if ( a == 3) {
        this.$router.push('/RegionalSetup')
      }
      else if ( a == 4){
        this.$router.push('/SoundEffects')
      }
      else if ( a == 5) {
        this.$router.push('/privacy')
      }
      else if ( a == 6) {
        this.$router.push('/cache')
      }
      else if ( a == 7) {
        this.$router.push('/Feedbacks')
      }
      else  {
        this.$router.push('/AboutUs')
      }
    },
    set () {
			this.$router.push('/editData')
    },
    set1 () {
      	if (this.$store.state.index == undefined) {
				MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示").then(action => {
				if (action == "confirm") {
					this.$router.push("/Password_register")
				}
				}).catch(err => {
					if (err == 'cancel') {
						this.$router.push("/personalSetting")
					}
				})		
			}
    },
    logout () {
      this.isLogout = true
    },
    cancel () {
      this.isLogout = false
    },
    definite () {
        this.$router.push('/personal');
        delete  this.$store.state.index
    },
    check () {
      if ( this.$store.state.index != undefined ) {
        this.member_name = this.$store.state.index.data.data.member_info.member_name
        this.member_id = this.$store.state.index.data.data.member_info.member_id
        this.condition = true
      }
      let params = {
        member_id: this.$store.state.index.data.data.member_info.member_id
      }
      let This = this
      request.AJAX(this.$AjaxUrl.memInfo, params, "memInfo", This).then(() => {
        this.member_avatar = this.$store.state.memInfo.data.data.member_info.member_avatar
        
				if (this.member_avatar == '') {
					this.member_avatar = img6
				}
      })
       
    },
    login () {	
			this.$router.push("/Password_register")
				
		},
		register () {
			this.$router.replace('/Mobile_register')
		}
  }
};
</script>

<style scoped>
.beij {
  background-color: #f5f5f5;
  height: 667px;
}
.details-header {
  width: 375px;
  height: 126px;
  background-color: #fff;
  padding: 0  16px;
  font-size: 12px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.header {
  /* width: 343px; */
  padding:0 16px;
  margin: 0 auto;
}
.header-logo {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.header-he {
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}

.logo-name {
  font-size: 16px;
  display: inline-block;
}
.logo-wx {
  font-size: 16px;
  color: #8d8d8d;
}
.logo-tp {
  width: 9px;
  height: 16px;
  margin-top: 34px;
}
.header-we {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.header-we img {
  width: 6px;
  height: 11px;
  margin-top: 2px;
}
.details-wenz {
  width: 375px;
  height: 44px;
  background-color: #fff;
  margin-bottom: 10px;
}
.details-one {
  width: 343px;
  margin: 0 auto;
  padding-top: 13px;
  font-size: 14px;
  display: flex;
  /* 元素在主轴（页面）上左右两端或者上下两端开始排列 */
  justify-content: space-between;
}
.details-one img {
  width: 6px;
  height: 11px;
}
.details-two {
  width: 375px;
  height: 175px;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 13px;
}
.two {
  width: 343px;
  margin: 0 auto;
}
.two-txt {
  display: flex;
  padding-top: 13px;
  margin-bottom: 12px;
  justify-content: space-between;
}
.two-txt img {
  width: 6px;
  height: 11px;
}
.details-three {
  width: 375px;
  height: 89px;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 15px;
}
.three {
  width: 343px;
  margin: 0 auto;
}
.three-txt {
  display: flex;
  padding-top: 13px;
  margin-bottom: 12px;
  justify-content: space-between;
}
.three-txt img {
  width: 6px;
  height: 11px;
}
.datails-four {
  width: 375px;
  height: 44px;
  background-color: #fff;
  font-size: 14px;
  text-align:center;
  line-height: 44px;
}
.logoutMsg {
  width: 100%;
  height: 200px;
  padding-top: 35px;
  background-color: #fff;
  text-align: center;
}
.btn {
  margin-top: 20px;
  width: 45%;
  margin-right: 10px;
  height: 45px;
  border: 1px solid #EE753C;
  border-radius: 20px 20px;
  color: #EE753C;
  background-color: #fff;
}
.bgc {
  background-color: #EE753C;
  color: #fff;
}
.personalSetting {
  background-color: #f5f5f5;
  padding-bottom: 10px;
}
.c2 {
  color:gray;  
  font-size: 14px;
}
.logout {
  font-size: 16px;
}
.header-img{
  font-size: 16px;
  margin-top:10px;
  
}
.header-img img{
  display: inline-block;
  width: 49px;
  height: 49px;
  margin-right: 15px;
}
</style>
