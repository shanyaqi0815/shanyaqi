<template>
  <div class="beij">
    <div class="heard">
      <div class="heard-box">
        <p class="txt">
          当前
          <span>{{ points }}</span>
        </p>
        <img src="../assets/scoped/tp05.png" alt @click="goRule" />
      </div>
      <router-link to="reporting">
        <p class="txt1">签到领积分</p>
      </router-link>
    </div>
    <div class="logo">
      <img src="../assets/scoped/str4.png" alt />
    </div>
    <div class="box-one">
      <div class="layout-one">
        <router-link class="one" to="IntegralDetails">积分明细</router-link>
        <!-- <span class="single" @click="lodew('init')"></span>
          <div class="one-txt">
            <p class="one-jf" @click="lodew('init')">全部积分</p>
            <div class="one-wen" v-show="dianj">
              <p class="one-wenz1" @click="lodew(0)">全部积分</p>
              <p class="one-wenz2" @click="lodew(1)" >获取积分</p>
              <p class="one-wenz3" @click="lodew(2)" >使用积分</p>
            </div>
        </div>-->
        <div class="options">
          <div class="default" @click="showOptions">
            <i class="tri"></i>
            {{ option }}
          </div>
          <ul v-if="show" class="one-wen">
            <li class="one-wenz1 opt" @click="lodew(0)">全部积分</li>
            <li class="one-wenz2 opt" @click="lodew(1)">获取积分</li>
            <li class="one-wenz3 opt" @click="lodew(2)">使用积分</li>
          </ul>
        </div>
      </div>
    </div>
    <GetIntegral :points_list="points_list" v-if="integralLists"></GetIntegral>
  </div>
</template>

<script>
import GetIntegral from "../components/Integral/GetIntegral";
import request from "../common/request";
export default {
  components: {
    GetIntegral
  },
  data() {
    return {
      // dianj: false,
      // isLiked:true,
      // isLiked1:false,
      // isLiked2:false,
      points_type: 0,
      points: "",
      points_list: "",
      show: false,
      option: "全部积分",
      integralLists: true
    };
  },
  created() {
    this.MyIntegral_list(); // 获取全部用户积分
  },
  methods: {
    MyIntegral_list() {
      // 获取我的积分数据
      var This = this;
      var member_id = this.$store.state.index.data.data.member_info.member_id;
      // 接口参数
      let params = {
        member_id: member_id,
        points_type: this.points_type // 默认查看全部
      };
      request
        .AJAX(this.$AjaxUrl.memberPoints, params, "memberPoints", This)
        .then(() => {
          this.points = this.$store.state.memberPoints.data.data.points; // 当前积分
          this.points_list = this.$store.state.memberPoints.data.data.points_list; // 积分列表
        });
    },
    lodew(index) {
      this.show = !this.show; // 是否显示
      this.points_type = index
      var opts = document.getElementsByClassName("opt"); // 获取所有的p标签
      for (var i = 0; i < opts.length; i++) {
        
        if (i == index) {
          this.option = opts[i].innerHTML;
          this.integralLists = false;
          // if (i == 0) {
            this.integralLists = true;
            this.MyIntegral_list(); // 调用接口
          // }
        } else {
          opts[i].style = "color:#000;";
        }
      }
    },
    showOptions() {
      this.show = !this.show;
    },
    goRule(){
        this.$router.push('/IntegralRule');
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
}
.beij {
  background-color: #f5f5f5;
  height: auto;
  font-size: 14px;
}
.heard {
  width: 375px;
  height: 166px;
  background-image: url("../assets/scoped/tp07.png");
  background-size: 375px 166px;
  margin-bottom: 10px;
}
.heard-box {
  display: flex;
}
.heard-box img {
  width: 15px;
  height: 16px;
  margin-top: 55px;
  margin-left: 7px;
}
.liked {
  color: #ee753c;
}
.txt {
  margin-left: 122px;
  color: #fff;
  margin-bottom: 16px;
  padding-top: 32px;
}
.txt span {
  font-size: 45px;
  color: #fff;
  margin-left: 6px;
}
.txt1 {
  width: 150px;
  height: 40px;
  border-radius: 40px;
  background-color: #fff;
  text-align: center;
  line-height: 40px;
  color: #ea4940;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
}
.logo img {
  width: 375px;
  height: 120px;
  margin-bottom: 32px;
}
.box-one {
  width: 335px;
  margin: 0 auto;
  margin-bottom: 16px;
}
.layout-one {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.tri {
  display: inline-block;
  height: 1px;
  width: 1px;
  border: 5px solid;
  margin-right: 7px;
  border-color: #8d8d8d transparent transparent transparent;
}
.one {
  font-size: 16px;
}
.one-txt {
  font-size: 12px;
  color: #8d8d8d;
  position: relative;
}
.box-two {
  width: 343px;
  margin: 0 auto;
  height: 68px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
}
.layout-two {
  width: 311px;
  margin: 0 auto;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}
.two-txt {
  font-weight: bold;
  margin-bottom: 5px;
}
.two-txt1 span {
  font-size: 12px;
  color: #8d8d8d;
  margin-right: 3px;
}
.two-wz {
  color: #ee753c;
  font-weight: bold;
}

.one-jf {
  color: #8d8d8d;
}
.one-wen {
  position: absolute;
  padding-top: 16px;
  padding-left: 26px;
  top: 54%;
  left: 66%;
  width: 74px;
  height: 87px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #b8b5b5;
}
.one-wenz1,
.one-wenz2 {
  margin-bottom: 15px;
}
/* .one-wenz1:hover{
    color:#EE753C !important;
}
.one-wenz2:hover{
    color:#EE753C !important;
}
.one-wenz3:hover{
    color:#EE753C !important;
} */
.on {
  color: green;
}
</style>
