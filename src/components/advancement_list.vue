<template>
  <div ref="box" class="career_advancement">
    <div v-for="arr in list" :key="arr.id">
      <div @click="goGoodDetail(arr.gid)">
        <div ref="imgs">
          <slot name="imgs" ref="imgs">
            <img src="../assets/shipin.png" />
          </slot>
        </div>
        <div class="wenzi">
          <div class="wen_zi" ref="wenzi">
            <slot name="wenzi">测试培训之系统是如何研发出来的巴拉巴拉巴拉</slot>
          </div>
          <span class="dengji" v-if="megs">
            <slot name="dengji">初级</slot>
          </span>
          <span class="shipin" v-if="megs">
            <slot name="shipin">视频</slot>
          </span>
        </div>
        <div class="biaoqian">
          <span>新品</span>
          <span>满减</span>
          <span>平台</span>
          <span class="shipin" v-if="meg">视频</span>
        </div>
        <div class="price">
          <span>
            <slot name="price_pic">￥1232</slot>
          </span>
          <span>
            <slot name="price_xue">￥1231</slot>人已学
          </span>
        </div>

        <div class="pingjia">
          <slot name="pingjia">2321</slot>评价
        </div>
      </div>

      <div class="dianpu" ref="zixun" @click="goShop(arr.vid)">
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
</template>

<script>
import img1 from "../assets/shipin.png";
export default {
  name: "career_advancement",
  data() {
    return {
      meg: false,
      megs: true
    };
  },
  created() {},
  props: ["list", "member_id"],
  methods: {
    remodel() {
      this.$refs.box.style =
        "width:100%;margin-righr:10px;padding: 10px 0 10px 0px ;border-bottom:1px solid #f5f5f5;border-radius:0;";
      this.$refs.imgs.style = "width:125px;float: left;margin-right: 15px";
      //this.$refs.wenzi.style="overflow:visible;white-space:normal;word-wrap:break-word;font-size:16px";
      this.$refs.wenzi.style = "font-size:16px;";
      this.$refs.zixun_text.style =
        "float:none;width: 38%;display: inline-block;";
      this.$refs.zixun_dianji.style = "float:none;";
      this.$refs.imgs1.style = "top:1px;right:-11px;";
      this.meg = true;
      this.megs = false;
    },
    remodel_one() {
      this.$refs.box.style = "width:48%";
      this.$refs.imgs.style = "width:100%;";
      this.$refs.zixun_text.style =
        "float:none;width: 65%;display: inline-block;";
      this.meg = false;
      this.megs = true;
    },
    goShop(par) {
      this.$router.push({ name: "storeDetail", params: { vid: par } });
    },
    goGoodDetail(par) {
      let params = {
        member_id: this.member_id,
        gid: par
      };
    //   this.$router.push({ name: "goodsdetail", params: params });
      this.$router.push({ path: "/goodsdetail", query: { gid: par } });

    }

  }
};
</script>

<style scoped lang="less">
.career_advancement {
  border-radius: 10px;
  margin-bottom: 10px;
  width: 45%;
  height: 140px;
  display: inline-block;
  font-size: 12px;
  padding-bottom: 10px;
  background-color: #fff;
  margin-bottom: 15px;
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
}
.career_advancement:nth-child(odd) {
  margin-right: 0%;
}
.career_advancement:nth-child(even) {
  margin-left: 0;
}
</style>
