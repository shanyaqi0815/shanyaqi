// 头部商品搜索
<template>
  <div class="heder">
    <div class="searchHeader">
      <span class="imgs">
        <img src="../assets/magnifier.png" />
      </span>
      <input
        type="text"
        class="heder_text"
        v-model="keyword"
        placeholder="搜索商品"
        @click="searshow"
        @input="searchValue"
        value
      />
      <ul v-show="xianshi">
        <li :key="a.gid" v-for="a in font" @click="fn(a.gid)">{{a.goods_name}}</li>
      </ul>
      <div v-show="isShow">
        <span class="cancel" v-if="this.indexs" @click="fn2()">批量管理</span>
        <span class="cancel" v-if="!this.index  && !this.indexs" @click="fn1()">取消</span>
        <span class="data" v-if="this.index && !this.indexs" @click="sign_in">
          <img src="../assets/qiandao.png" />
        </span>
        <span class="xiaoxi" v-if="this.index && !this.indexs" @click="information">
          <span v-if="xiaoxishow">{{xiaoxi}}</span>
          <img src="../assets/xinxi.png" />
        </span>
      </div>
    </div>

    <div class="goodsList" v-if="isShowGoods">
      <div class="searchGoods_cnt" v-for="list in searchGoods" :key="list.gid">
        <img class="searchGoods_img" :src="list.goods_image" alt  @click="goodDetail(list.gid)" />
        <div class="searchGoods_text">
          <div @click="goodDetail(list.gid)">
              <p class="searchGoods_name">{{ list.goods_name}}</p>
            <p>
              <span class="searchGoods_price">￥{{ list.goods_price }}</span>
              <span class="searchGoods_study">{{ list.goods_salenum }} 人已学</span>
            </p>
            <p class="searchGoods_evaluate">{{ list.evaluation_count }} 评价</p>
          </div>
        
            <p class="searchGoods_shop" @click="goShop(list.vid)">
              <span class="shop_name">{{ list.store_name}}</span>
              <span class="come">进店<img src="../assets/scoped/sert4.png" alt="" class="icon"></span>
            </p>
         
        </div>
      </div>
      <div class="clear"></div>
    </div>

    <div class="promptInfor" v-if="isPromptInfor">
      <p>没有搜索结果</p>
      <p>找不到相关商品</p>
    </div>
  </div>
</template>

<script>
import request from "../common/request";
export default {
  data() {
    return {
      keyword: "",
      xianshi: false,
      font: "",
      isShowGoods: false,
      searchGoods: [],
      shopId: "",
      gid: '',
      isPromptInfor: false
    };
  },
  watch: {
    keyword: function(Newdata, Olddata) {
      //存入参数
      let This = this;
      let params = {
        keyword: Newdata
      };
      // var name = "goodslist_search"
      // name 是当前接口名称存在store中的key
      // request.AJAX(this.$AjaxUrl.goodsSort,params,name,This).then(()=>{
      //     if(This.$store.state.goodsSort != undefined && This.$store.state.goodsSort.data.data.goods_list.length > 0 ){
      //         this.xianshi = true
      //         this.font = this.$store.state.goodsSort.data.data.goods_list
      //     }else{
      //         this.xianshi = false
      //     }

      // })
    }
  },
  methods: {
    searshow(para) {
      this.$emit("searshow");
    },
    information() {
      this.$router.push("/informations");
    },
    sign_in() {
      //点击进入到签到页面
      this.$router.push("/reporting");
    },
    fn(a) {
      this.$router.push({ path: "/goodsdetail", query: { gid: a } });
    },
    fn1() {
      this.keyword = "";
      this.searchGoods = []
    },
    fn2() {
      this.keyword = "";
    },
    searchValue(e) {
      this.keyword = e.target.value;
      let This = this;
      let params = {
        keyword: this.keyword,
        vid: this.vid
      };
      request
        .AJAX(this.$AjaxUrl.goodsSort, params, "goodsSort", This)
        .then(() => {
          this.searchGoods = this.$store.state.goodsSort.data.data.data.goods_info;
          this.isShowGoods = true;
          this.isPromptInfor = false
          if (this.searchGoods.length == 0) {
            this.isShowGoods = false
            this.isPromptInfor = true
          }
        });
    },
    goShop(par) {
      this.shopId = par;
      this.$router.push({ path: "storeDetail", query: { vid: this.shopId } });
    },
    goodDetail(par) {
      this.gid = par;
      this.$router.push({ path: "/goodsdetail", query: { gid: this.gid } });
    }
  },
  props: ["index", "xiaoxi", "xiaoxishow", "isShow", "indexs", "vid"],
  created() {
    if (this.isShow == undefined) {
      this.isShow = true
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  width: 300px;
  max-height: 200px;
  overflow-y: scroll;
  background-color: #f1f1f1;
  position: absolute;
  top: 34px;
  z-index: 1;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
    color: #000;
    display: block !important;
    border-bottom: 3px solid #f5f5ff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.heder {
  width: 686/2px;
  height: 30px;
  margin-left: 20px;
  position: relative;
  top: 17px;
  position: relative;

  .imgs {
    position: absolute;
    left: 6px;
    width: 14px;
    height: 14px;
    img {
      position: absolute;
      top: 8px;
      left: 5px;
      width: 14px;
    }
  }
  .heder_text {
    width: 500/2px;
    border-radius: 20px;
    padding-left: 28px;
    background: rgba(241, 241, 241, 1);
    height: 58/2px;
    float: left;
    font-size:14px;
    border: 0;
  }
  .cancel {
    margin: 5px 0 0 5px;
    font-size: 10px;
    vertical-align: top;
    display: inline-block;
  }
  .data {
    width: 42/2px;
    height: 42/2px;
    margin-right: 6px !important;
    line-height: 0.8rem;
    margin-top: 3px;
    display: inline-block;
    img {
      width: 42/2px;
      height: 42/2px;
      vertical-align: top;
    }
  }
  .xiaoxi {
    width: 42/2px;
    height: 42/2px;
    position: relative;
    margin-top: 3px;
    display: inline-block;
    vertical-align: top;
    span {
      position: absolute;
      top: -3px;
      left: 13px;
      font-size: 10px;
      border-radius: 30px;
      background-color: red;
      text-align: center;
      transform: scale(0.8);
      width: 15px;
      height: 15px;
      padding: 3/2px;
      color: #fff;
    }
    img {
      width: 42/2px;
      height: 42/2px;
      vertical-align: top;
    }
  }
}
.searchHeader {
  height: 45px;
  width: 100%;
}
.goodsList {
  width: 100%;
  height: 340px;
  padding-top: 15px;
  .searchGoods_cnt {
    margin: 0 auto;
    height: 130px;
    width: 100%;
    margin-bottom: 8px;
    padding: 10px 5px;
    .searchGoods_img {
      width: 35%;
      height: 120px;
      float: left;
    }
    .searchGoods_text {
      display: inline-block;
      width: 60%;
      height: 75%;
      margin-left: 15px;
      .searchGoods_name {
        height: 26px;
        color: #333333;
        font-size: 14px;
        line-height: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333;
        opacity: 1;
        height: 60%;
      }
      .searchGoods_price {
        display: inline-block;
        height: 14px;
        margin-right: 10px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 24px;
        color: rgba(234, 73, 64, 1);
        opacity: 1;
      }
      .searchGoods_study {
        display: inline-block;
        height: 10px;
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 16px;
        color: rgba(141, 141, 141, 1);
        opacity: 1;
        margin-left: 35px;
      }
      .searchGoods_evaluate {
        height: 20px;
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 24px;
        color: rgba(141, 141, 141, 1);
        opacity: 1;
      }
      .searchGoods_shop {
        width: 100%;
        height: 18%;
        .shop_name {
          height: 10px;
          display: inline-block;
          font-size: 10px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 16px;
          color: rgba(141, 141, 141, 1);
          opacity: 1;
        }
        .come {
          height: 10px;
          display: inline-block;
          font-size: 10px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 16px;
          color: rgba(97, 97, 97, 1);
          opacity: 1;
        }
      }
    }
  }
}

.clear {
  clear: both;
}
.promptInfor {
  margin:20px auto;
  text-align: center;
  font-size: 16px;
}
input::-webkit-input-placeholder {
   font-size:14px;
 }
 .icon {
   width: 6px;
   margin-left: 4px;
 }
</style>
