<template>
  <div class="reporting">
    <div class="img_combine">
      <img class="imgs" src="@/assets/reporting/combine.png" alt="图片正在加载中" />
      <div>用户：{{ userintegral }}的积分</div>
      <div>
        {{ integral }}
        <img src="@/assets/reporting/data.png" alt="图片正在加载中" @click="goRule" />
      </div>
    </div>
    <div class="weekly">
      <div>你已经累计签到{{ reportday }}天</div>
      <div >
        <span @click="sign(index)"  v-for="(weekday,index) in weekdays" :key="index">
          <img :src="weekday.img" alt />
          <p >{{ weekday.day }}</p>
        </span>
      </div>
    </div>
    <div class="get_gold_img">
      <img src="@/assets/reporting/gold.png" alt />
    </div>
    <div class="title">
      <div>
        <img src="@/assets/reporting/titlederction.png" alt />
      </div>
      <div>{{ title }}</div>
      <div>
        <img src="@/assets/reporting/titlederction.png" alt />
      </div>
    </div>
    <div class="center">
      <!-- <advancement ref="M_list" :list="list" :key="arr.id" v-for="arr in list" :member_id="member_id">
        <slot slot="wenzi">{{arr.goods_name}}</slot>
        <slot slot="imgs">
          <img :src="arr.goods_image" />
        </slot>
        <slot slot="dengji">{{arr.goods_label}}</slot>
        <slot slot="shipin">视频</slot>
        <slot slot="price_pic">{{arr.goods_price}}</slot>
        <slot slot="price_xue">{{arr.goods_salenum}}</slot>
        <slot slot="pingjia">{{arr.evaluation_count}}</slot>
        <slot slot="wenben">{{arr.store_name}}</slot>
      </advancement>-->
      <div class="career_advancement" v-for="good in lists" :key="good.gid">
        <div @click="goGoodDetail(good.gid)">
          <div class="good_pic">
            <img :src="good.goods_image" />
          </div>
          <div class="wenzi">
            <p class="good_title">{{ good.goods_name}}</p>
          </div>
          <div class="price">
            <span name="price_pic">￥{{good.goods_price}}</span>
            <span name="price_xue">{{good.goods_salenum}}人已学</span>
          </div>
          <div class="biaoqian">
            <span>新品</span>
            <span>满减</span>
            <span>平台</span>
          </div>
          <div class="pingjia">
            <span class="pingjia">{{good.evaluation_count}}人评价</span>
          </div>
        </div>

        <div class="dianpu" ref="zixun" @click="goShop(good.vid)">
          <span ref="zixun_text" class="wenben">
            <slot name="wenben">UCG管理咨询咨询</slot>
          </span>
          <span ref="zixun_dianji" class="dianpu">
            进店
            <img ref="imgs1" src="../assets/jiantou.png" />
          </span>
          <div class="qingchu"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../common/request";
import https from "../https";
import { Navbar, TabItem, Indicator } from "mint-ui";
import today from "@/assets/reporting/today.png";
import nextday from "@/assets/reporting/nextday.png";
import advancement from "@/components/advancement_list";
import img1 from "../assets/shipin.png";
import img2 from "../assets/shizhan.png";
export default {
  name: "reporting",
  created() {
    this.fn();
    this.shu();
  },
  data() {
    return {
      userintegral: "钱学森",
      reportday: 0,
      integral: 0,
      title: "精品推荐",
      day: new Date(),
      weekdays: [
        { img: nextday, day: "周一", id:1 },
        { img: nextday, day: "周二", id:2 },
        { img: nextday, day: "周三", id:3 },
        { img: nextday, day: "周四", id:4 },
        { img: nextday, day: "周五", id:5 },
        { img: nextday, day: "周六", id:6 },
        { img: nextday, day: "周日", id:7 }
      ],
      lists: [],
      member_id: "",
      curDay: "",
      logintime: "",
      signLists: [],
      todaySign: '',
    };
  },
  methods: {
    fn() {
      this.member_id = this.$store.state.index.data.data.member_info.member_id;
      this.userintegral = this.$store.state.index.data.data.member_info.member_name;
      let This = this;
      var params = {
        member_id: this.member_id
      };
      this.curDay = this.day.getUTCDay()-1;
      request
        .AJAX(this.$AjaxUrl.SignInRecord, params, "SignInRecord", This)
        .then(() => {
          This.reportday = this.$store.state.SignInRecord.data.data.data.total
          This.integral = this.$store.state.SignInRecord.data.data.data.points;
          This.signLists = this.$store.state.SignInRecord.data.data.data.list;
          for (let i = 0; i < this.signLists.length; i++ ) {
            if (this.signLists[i]) {
              this.weekdays[i].img = today
            }
          }
        });
     
      
    },
    shu() {
      let This = this;
      let params = {};
      request
        .AJAX(this.$AjaxUrl.recommand, params, "recommand", This)
        .then(() => {
          if (this.$store.state.recommand.data.data.error_code == 200) {
            this.lists = this.$store.state.recommand.data.data.sld_hotsale_goods;
          }
        });
    },
    goRule() {
      this.$router.push("/IntegralRule");
    },
    goShop(par) {
      this.$router.push({ path: "storeDetail", query: { vid: par } });
    },
    goGoodDetail(par) {
      let params = {
        member_id: this.member_id,
        gid: par
      };
      this.$router.push({ path: "/goodsdetail", query: { gid: par } });
    },
    sign(par) {
      let idx = par
      let This = this;
      let params = {
        member_id: this.member_id
      };
      if ( idx == this.curDay) {
        this.weekdays[idx].img = today
        request.AJAX(this.$AjaxUrl.integralSignIn, params, "integralSignIn", This).then(() => {
          if (this.$store.state.integralSignIn.data.data.code == 200 ) {
            request.AJAX(this.$AjaxUrl.SignInRecord, params, "SignInRecord", This)
            .then(() => {
              this.integral = this.$store.state.SignInRecord.data.data.data.points;
            })
          }
        }); 
      }
     
    }
  },

  components: {
    advancement
  }
};
</script>

<style lang="less" scoped>
.reporting {
  position: relative;
  height: auto;
  background-color: #f5f5f5;
}
.img_combine {
  position: relative;
  width: 100%;
  height: 440px/2px;
  overflow: hidden;
  color: #ffffff;
  font-size: 6px;
  .imgs {
    position: absolute;
    height: 440px/2px;
    left: -2.13rem;
  }
  div:nth-child(2) {
    position: absolute;
    left: 5px;
    top: 10px;
    color: #fff;
    font-weight: 500;
  }
  div:nth-child(3) {
    position: absolute;
    top: 60px;
    left: 50%;
    color: #fff;
    transform: translateX(-50%);
    width: auto;
    height: 90px/2px;
    font-size: 45px;
    img {
      width: 15px;
      position: none !important;
      height: 15.5px;
      margin-left: 6px;
    }
  }
  div:nth-child(4) {
    position: absolute;
    left: 180px;
    top: 100px;
    width: 15px;
    height: 15.5px;
  }
  div:nth-child(4) img {
    position: absolute;
    left: 27px;
    width: 15px;
    height: 15.5px;
  }
}
.weekly {
  position: absolute;
  position: relative;
  top: -60px;
  left: 17px;
  width: 686px/2px;
  height: 312px/2px;
  border-radius: 10px;
  background: white;

  div:nth-child(1) {
    position: absolute;
    width: 260px/2px;
    height: 32px/2px;
    top: 64px/2px;
    left: 222px/2px;
    font-size: 13px;
    font-weight: bold;
  }
  div:nth-child(2) {
    position: absolute;
    top: 128px/2px;
    width: 686px/2px;
    height: 126px/2px;
    span {
      display: block;
      float: left;
      width: 42px;
      height: 42px;
      margin-left: 6px;
      border-radius: 12%;
    }
    span img {
      width: 42px;
      height: 42px;
    }
    span p {
      position: absolute;
      top: 45px;
      font-size: 2px;
      margin-left: 9px;
      color: #8d8d8d;
    }
    // span p:hover {
    //   color: #ee753c;
    // }
  }
}
.get_gold_img {
  position: absolute;
  top: 636px/2px;
  img {
    width: 750px/2px;
    height: 240px/2px;
  }
}
.title {
  position: absolute;
  position: relative;
  margin-top: 60px;
  div:nth-child(1) {
    position: absolute;
    left: 239px/2px;
    padding-top: 6px;
  }
  div:nth-child(2) {
    position: absolute;
    left: 155px;
    width: 128px;
    height: 30px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 54px;
    color: rgba(51, 51, 51, 1);
  }
  div:nth-child(3) {
    position: absolute;
    right: 239px/2px;
    padding-top: -2.84rem;
  }
  img {
    width: 20px;
    height: 1px;
  }
}
.center {
  position: absolute;
  width: 686/2px;
  min-height: 100vh;
  margin: 0 auto;
  top: 505px;
  left: 0.453333rem;
}

.career_advancement {
  border-radius: 10px;
  margin-bottom: 10px;
  width: 44%;
  height: auto;
  display: inline-block;
  font-size: 12px;
  padding-bottom: 10px;
  background-color: #fff;
  img {
    width: 100%;
  }
  .wenzi {
    padding-left: 6px;
    font-size: 16px;
    .wen_zi {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 7px;
    }
    .dengji {
      font-size: 12px;
      color: rgba(141, 141, 141, 1);
      margin: 7px 10px 0 0;
    }
    .shipin {
      width: 30px;
      height: 32/2px;
      background: rgba(241, 167, 133, 1);
      opacity: 1;
      font-size: 10px;
      color: #fff;
      border-radius: 5px;
      padding: 2px 5px;
      -webkit-transform: scale(0.84);
    }
  }
  .price {
    margin-top: 12px;
    padding-left: 6px;
    span:nth-child(1) {
      color: rgba(234, 73, 64, 1);
      font-size: 14px;
      margin-right: 12px;
    }
    span:nth-child(2) {
      color: rgba(141, 141, 141, 1);
      font-size: 10px;
      -webkit-transform: scale(0.84);
    }
  }
  .biaoqian {
    width: 95%;
    margin-top: 15px;
    padding-left: 6px;
    .shipin {
      width: 30px;
      height: 32/2px;
      background: rgba(241, 167, 133, 1);
      opacity: 1;
      font-size: 10px;
      color: #fff;
      border-radius: 5px;
      padding: 2px 5px;
      -webkit-transform: scale(0.84);
    }
    span {
      padding: 1px 5px;
      border: 1px solid rgba(238, 117, 60, 1);
      border-radius: 5px;
      color: rgba(238, 117, 60, 1);
      font-size: 10px;
      width: 30px;
      height: 32/2px;
      -webkit-transform: scale(0.84);
    }
  }
  .pingjia {
    color: rgba(141, 141, 141, 1);
    font-size: 10px;
    margin-top: 6px;
    padding-left: 6px;
  }
  .dianpu {
    width: 95%;
    margin-top: 6px;
    padding-left: 6px;
    .wenben {
      width: 65%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(141, 141, 141, 1);
      font-size: 12px;
      float: left;
      vertical-align: top;
    }
    .dianpu {
      width: 27%;
      text-align: center;
      margin-top: 0;
      float: right;
      position: relative;
      height: auto;
      height: 12px;
      img {
        position: absolute;
        top: 3px;
        right: 0;
        width: 6px;
      }
      .qingchu {
        clear: both;
      }
    }
  }
}
.career_advancement:nth-child(odd) {
  margin-right: 20px;
}
.career_advancement:nth-child(even) {
  margin-right: 15px;
}
.good_title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}
.update {
  width: 160px;
  height: 18px;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 14px;
  color: #8d8d8d;
  text-align: center;
  img {
  }
}
.good_pic {
  img {
    width: 165px;
    height: 170px;
  }
}
.dianpu {
  width: 95%;
  margin-top: 6px;
  padding-left: 6px;
  margin-bottom: 10px;
  .wenben {
    width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(141, 141, 141, 1);
    font-size: 12px;
    float: left;
    vertical-align: top;
  }
  .dianpu {
    width: 27%;
    text-align: center;
    margin-top: 0;
    float: right;
    position: relative;
    height: auto;
    height: 12px;
    img {
      position: absolute;
      top: 3px;
      right: 0;
      width: 6px;
    }
    .qingchu {
      clear: both;
    }
  }
}

.cor {
  color: rgba(234, 73, 64, 1) !important; 
}
</style>

