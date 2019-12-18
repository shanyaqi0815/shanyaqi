<template>
  <div class="management">
    <div class="box">
      <div class="tab">
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <manages :lists="list" :zhuangtai="true" :xiaoyu="true" :countDownList = countDownList></manages>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <manages :lists="list" :zhuangtai="true" :xiaoyu="true"></manages>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <manages :lists="list" :zhuangtai="true" :xiaoyu1="true">
              <span slot="dengdai">等待开始</span>
            </manages>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <manages :lists="list" :zhuangtai="true" :xiaoyu2="true">
              <span slot="dengdai">进行中</span>
            </manages>
          </mt-tab-container-item>
          <mt-tab-container-item id="5">
            <manages :lists="list" :zhuangtai="false" :xiaoyu3="true">
              <span slot="dengdai">交易完成</span>
            </manages>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
	<!-- <div>{{countDownList}}</div> -->
  </div>
</template>

<script>
import manages from "../components/managements";
import { Navbar, TabItem } from "mint-ui";
import request from "../common/request";
export default {
  name: "management",
  data() {
    return {
      selected: "1",
      memberId: "",
      list: [],
      tian: "",
      shi: "",
      fen: "",
      countDownList: "00天00时00分",
	  actEndTime: "",
	  ass:""
    };
  },
  components: {
    manages
  },
  created() {
    this.getOrderLists();
    if (this.$route.params.paicheNo) {
      this.selected = String(this.$route.params.paicheNo);
    }
    this.chus();
    this.countDown();
  },
  methods: {
    chus() {
      if (this.$store.state.index == undefined) {
        MessageBox.confirm("您好，您还未登录账号，请登录账号", "提示")
          .then(action => {
            if (action == "confirm") {
              this.$router.push("/Password_register");
            }
          })
          .catch(err => {
            if (err == "cancel") {
              this.$router.push("/personal");
            }
          });
      }
    },
    fanhui() {
      this.$router.go(-1);
    },
    getOrderLists(s) {
      let This = this;
      let params = {
        member_id: this.$store.state.index.data.data.member_info.member_id,
        if_refund: 1
      };
      request.AJAX(this.$AjaxUrl.orderLists, params, "orderLists", This).then(() => {
          this.list = This.$store.state.orderLists.data.data.list;
          if( this.list.length >0){
            for (
            var i = 0;
            i < This.$store.state.orderLists.data.data.list.length;
            i++
          ) {
            if (this.list[i].surplus_time != undefined) {
              this.ass = this.list[i].surplus_time * 1000
              this.tian =
                new Date(this.list[i].surplus_time * 1000).getDate() -
                new Date().getDate() -
                1;
              if (this.tian <= 0) {
                this.shi =
                  new Date(this.list[i].surplus_time * 1000).getHours() -
                  new Date().getDate();
              } else {
                this.shi =
                  12 - new Date().getHours() >= 0
                    ? 24 - new Date().getHours()
                    : 24 - new Date().getHours() + 12;
              }

              if (this.tian <= 0 && this.shi <= 0) {
                this.fen =
                  new Date(this.list[i].surplus_time * 1000).getMinutes() -
                  new Date().getMinutes();
              } else {
                this.fen = 60 - new Date().getMinutes();
              }

            }
          
			
          }
          }
        });
    },
    pingjia(a) {
      this.$router.push("/evaluate");
    },
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    countDown(it) {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
		let newTime = new Date().getTime(); 
		// 对结束时间进行处理渲染到页面
        let endTime = this.ass;
        let obj = null; // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
          clearInterval(interval);
        }
        this.countDownList =
          obj.day + "天" + obj.hou + "时" + obj.min + "分" ;
      }, 100);
    }
  },
  
};
</script>

<style scoped lang="less">
.management {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  .box {
    width: 100%;
    background-color: #fff;
    line-height: 44px;
    header {
      width: 718/2px;
      height: 44px;
      margin: 0 auto;
      position: relative;
      border-bottom: 1px solid #f5f5f5;
      img {
        width: 36/2px;
        display: inline-block;
        height: 32/2px;
        float: left;
        margin-top: 12px;
      }
      h2 {
        width: 100px;
        font-size: 36/2px;
        margin: 0 auto;
        font-weight: 400;
        text-align: center;
        color: rgba(12, 12, 12, 1);
      }
      img:nth-child(3) {
        width: 36/2px;
        position: absolute;
        height: 36/2px;
        right: 16px;
        top: 0px;
      }
    }
    .tab /deep/ .mint-tab-item {
      margin-bottom: 0;
      font-size: 14px;
      color: #000;
    }
    .tab /deep/.is-selected {
      border-bottom: 1px solid rgba(238, 117, 60, 1);
      color: rgba(238, 117, 60, 1);
    }
  }
}
</style>
