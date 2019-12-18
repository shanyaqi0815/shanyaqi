<template>
  <div class="store_detail">
    <div class="store_head">
      <div class="bg"></div>
      <div class="main">
        <div class="shoppic">
          <img :src="store_logo" alt />
        </div>
        <div class="head_content">
          <div class="title">{{ this.store_name }}</div>
          <div class="shop_score">
            <span>
              店铺评分
              <img class="img1" :src="xing1" />
              <img class="img1" :src="xing1" />
              <img class="img1" :src="xing1" />
              <img class="img1" :src="xing1" />
              <img class="img1" :src="xing" />
            </span>
            <span>{{ this.store_collect}}万人收藏</span>
          </div>
        </div>
        <span class="collect">收藏</span>
      </div>
    </div>
    <div class="qingchu"></div>

    <div class="store_nav">
      <!-- <search :isShow="false"></search> -->
      <div class="header">
        <span class="imgs">
          <img src="../assets/magnifier.png" />
        </span>
        <input type="text" class="header_text setFs" placeholder="搜索商品" @click="goodsSearch" />
      </div>
      <div class="nav_list">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <span>首页</span>
          </mt-tab-item>
          <mt-tab-item id="2">
            <span>全部</span>
          </mt-tab-item>
          <mt-tab-item id="3">
            <span>上新</span>
          </mt-tab-item>
        </mt-navbar>
      </div>
    </div>
    <!-- 筛选右边栏 -->
    <mt-popup v-model="shuaxuna_show" position="right">
      <div class="shuaxuan">
        <div class="shuaxuan_scroll">
          <div class="shuaxuan_list">
            <p>类别</p>
            <ul>
              <li
                :class="{selected: isSelectOpt1 == list }"
                :key="index"
                v-for="(list,index) in goods_class"
                @click="selectGoods(list)"
              >{{ list.gc_name }}</li>
            </ul>
          </div>
          <div class="shuaxuan_list">
            <p>分类</p>
            <ul>
              <li
                :class="{selected: isSelectOpt2 == list }"
                :key="index"
                v-for="(list,index) in course_type"
                @click="selectCourse(list)"
              >{{ list.name }}</li>
            </ul>
          </div>
          <div class="shuaxuan_list">
            <p>方式</p>
            <ul>
              <li
                :class="{selected: isSelectOpt3 == lesson_type.content }"
                @click="selectType(lesson_type.content)"
              >{{ lesson_type.content}}</li>
              <li
                :class="{selected: isSelectOpt3 == lesson_type.live }"
                @click="selectType(lesson_type.live)"
              >{{ lesson_type.live}}</li>
              <li
                :class="{selected: isSelectOpt3 == lesson_type.online }"
                @click="selectType(lesson_type.online)"
              >{{ lesson_type.online}}</li>
              <li
                :class="{selected: isSelectOpt3 == lesson_type.upderline }"
                @click="selectType(lesson_type.upderline)"
              >{{ lesson_type.upderline}}</li>
            </ul>
          </div>
          <div class="shuaxuan_list">
            <p>价格区间</p>
            <ul>
              <!-- <li class="price"> -->
              <input  class="setFs" type="text" placeholder="最低价"  value="" ref="priceD" @blur="inputRefP1" />
              <!-- </li> -->
              <span class="line"></span>
              <!-- <li class="price"> -->
              <input  class="setFs" type="text" placeholder="最高价"   value="" ref="priceU" @blur="inputRefP2"/>
              <!-- </li> -->
            </ul>
          </div>

          <div class="foot_button">
            <button class="reset_data" type="reset" @click="reset">重置</button>
            <button class="sure_oprate" @click="getScreenGoods">确定</button>
          </div>
        </div>
      </div>
    </mt-popup>
    <div class="nav_detail" ref="nav_detail">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="showIndex">
           <div class="recom">
            <h2 class="recom2">精品推荐</h2>
            <div class="career_advancement" v-for="recomGood in goodsRecomLists" :key="recomGood.gid" @click="goodDetail(recomGood)">
              <div>
                <img :src="recomGood.goods_image" />
              </div>
              <div class="wenzi">
                <p class="good_title">{{ recomGood.goods_name}}</p>
              </div>
              <div class="price">
                <span name="price_pic">￥{{ recomGood.goods_price | toInteger }}</span>
                <span name="price_xue">{{ recomGood.goods_salenum}}人已学</span>
              </div>
              <div class="biaoqian">
                <span>新品</span>
                <span>满减</span>
                <span>平台</span>
                <span class="shipin" v-if="meg">视频</span>
              </div>

              <div class="pingjia">
                <span class="pingjia">{{ recomGood.evaluation_count }}人评价</span>
              </div>
            </div>
          <!-- <div class="pagination" @click="checkMore(0)">查看更多</div> -->
          </div>
          <div class="recom">
            <h2 class="recom2">商品上新</h2>
            <div class="career_advancement" v-for="recomGood in indexGoods" :key="recomGood.gid" @click="goodDetail(recomGood)">
              <div>
                <img :src="recomGood.goods_image" />
              </div>
              <div class="wenzi">
                <p class="good_title">{{ recomGood.goods_name}}</p>
              </div>
              <div class="price">
                <span name="price_pic">￥{{ recomGood.goods_price | toInteger }}</span>
                <span name="price_xue">{{ recomGood.goods_salenum}}人已学</span>
              </div>
              <div class="biaoqian">
                <span>新品</span>
                <span>满减</span>
                <span>平台</span>
                <span class="shipin" v-if="meg">视频</span>
              </div>

              <div class="pingjia">
                <span class="pingjia">{{ recomGood.evaluation_count }}人评价</span>
              </div>
            </div>
          </div>
          </div>
         
     
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="select_search">
            <ul>
              <li class="li" @click="seeAllGoods(1)">
                <span :class="{is_select: isSelect1}">综合</span>
              </li>
              <li class="li" @click="seeAllGoods(2)">
                <span :class="{is_select: isSelect2}">销量</span>
              </li>
              <li class="li" @click="seeAllGoods(3)">
                <span :class="{is_select: isSelect3}">价格</span>
                <span :class="{border_select: oneSelect}"></span>
                <span :class="{border_select: twoSelect}"></span>
              </li>
              <li class="li" @click="shuaxuan(6)">
                <span :class="{is_select: isSelect4}">筛选</span>
              </li>
              <img @click="fnTest" src="@/assets/xuan.png" v-show="showTest" alt />
              <img @click="fnTest1" src="@/assets/xuan1.png" v-show="hideTest" alt />
            </ul>
          </div>
          <div class="showIndex">
            <div v-show="con" :id="con">
              <p></p>
              <div class="career_advancement" v-for="allGood in goodsAllLists" :key="allGood.gid" @click="goodDetail(allGood)" >
                <div> 
                  <img :src="allGood.goods_image" />
                </div>
                <div class="wenzi">
                  <p class="good_title">{{ allGood.goods_name}}</p>
                </div>
                <div class="price">
                  <span name="price_pic">￥{{ allGood.goods_price | toInteger }}</span>
                  <span name="price_xue">{{ allGood.goods_salenum}}人已学</span>
                </div>
                <div class="biaoqian">
                  <span>新品</span>
                  <span>满减</span>
                  <span>平台</span>
                  <span class="shipin" v-if="meg">视频</span>
                </div>

                <div class="pingjia">
                  <span class="pingjia">{{ allGood.evaluation_count }}人评价</span>
                </div>
              </div>
              <div class="pagination" v-if="isShowMore" @click="checkMore(con)">查看更多</div>
              <p class="none" v-if="!isShowMore">没有更多内容了</p>

            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
         
          <div class="showIndex">
            <div>
                <p class="update">
                  <span class="line_icon"></span> 店铺上新
                  <span class="line_icon"></span>
                </p>
               <div class="career_advancement" v-for="newGood in goodsUpdateLists" :key="newGood.gid" @click="goodDetail(newGood)">
              <div class="good_pic">
                <img :src="newGood.goods_image" />
              </div>
              <div class="wenzi">
                <p class="good_title">{{ newGood.goods_name}}</p>
              </div>
              <div class="price">
                <span name="price_pic">￥{{ newGood.goods_price | toInteger }}</span>
                <span name="price_xue">{{ newGood.goods_salenum}}人已学</span>
              </div>
              <div class="biaoqian">
                <span>新品</span>
                <span>满减</span>
                <span>平台</span>
                <span class="shipin" v-if="meg">视频</span>
              </div>

              <div class="pingjia">
                <span class="pingjia">{{ newGood.evaluation_count }}人评价</span>
              </div>
            </div>
            <div class="pagination" v-if="isShowMore" @click="checkMore(3)">查看更多</div>
            <p class="none" v-if="!isShowMore">没有更多内容了</p>
            </div>
           
            </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem, Indicator } from "mint-ui";
import request from "../common/request";
import xing from "@/assets/evaluate/xing.png";
import xing1 from "@/assets/evaluate/xing1.png";
import search from "../components/search"; // 引入搜索插件
import img1 from "../assets/shipin.png";
import select_search from "../components/classify/select_search"; //点击页面全部的时候，显示所以导航选择
export default {
  name: "store_detail",
  data() {
    return {
      selected: "1",
      // isShow: false,
      isNav: false,
      xing: xing,
      xing1: xing1,
      vid: "",
      meg: false,
      megs: true,
      store_name: "",
      store_logo: "",
      goodsUpdateLists: [],
      goodsRecomLists: [],
      goodsAllLists: [],
      indexGoods:[],
      store_collect: "",
      shuaxuna_show: false,

      recommPage: 0,
      allPage:0,
      updatePage: 0,
      salesPage: 1,
      priceUpPage: 1,
      priceDownPage: 1,
      screenDownPage: 1,


      limit: 6,

      showTest: true,
      hideTest: false,
      oneSelect: false,
      twoSelect: false,
      isSelect1: true,
      isSelect2: false,
      isSelect3: false,
      isSelect4: false,

      // 全部商品里面的选项
      con: 1,
      salesVolume: 2,
      goods_class: [],
      course_type: [],
      lesson_type: [],
      salesGoods: [],

      isSelectOpt1: "",
      isSelectOpt2: "",
      isSelectOpt3: "",

      goodClass: '',
      courseType: '',
      priceRange1: '',
      priceRange2: '',
      screenParams: '',

      isShowMore: true
    };
  },
  created() {
    this.renderShopDetail();
    this.closeIndicator();
    this.checkMore(0);
    this.checkMore(1);
    this.checkMore(3);
  },
  methods: {
    shuaxuan(par) {
      // 刷选右侧是否显示
      this.shuaxuna_show = true;
      this.isSelect1 = false;
      this.isSelect3 = false;
      this.isSelect2 = false;
      this.isSelect4 = true;
      this.twoSelect = false;
      this.oneSelect = false;
      this.con = par;
      var This = this;
      // 点击筛选按钮 调用筛选接口
      let params = {
          vid: this.vid,

      };
      request
        .AJAX(this.$AjaxUrl.Goodssearch, params, "Goodssearch", This)
        .then(() => {
          this.goods_class = this.$store.state.Goodssearch.data.data.data.goods_class;
          this.course_type = this.$store.state.Goodssearch.data.data.data.course_type;
          this.lesson_type = this.$store.state.Goodssearch.data.data.data.lesson_type;
        });
    },
    goodDetail(newGood) {
      this.$router.push({ path: "/goodsdetail", query: { gid: newGood.gid } });
    },
    renderShopDetail() {
      let This = this;
      this.vid = This.$route.query.vid;
      let params = {
        vid: this.vid,
        limit: 6,
        page: 1
      };
      request
        .AJAX(this.$AjaxUrl.shopInfo, params, "shopInfo", This)
        .then(() => {
          this.store_name =
            This.$store.state.shopInfo.data.data.store_info.store_name;
          this.store_logo =
            This.$store.state.shopInfo.data.data.store_info.store_label;
          this.store_collect =
            This.$store.state.shopInfo.data.data.store_info.store_collect;
        });
    },
    checkMore(par) {
      // Indicator.open("加载中....");
      // console.log(par)
      // this.isShowMore = false
      let This = this;
      // 显示店铺首页商品（默认）
      if (par == 0) {
        let params = {
          vid: this.vid,
          limit: 4
        };
       request
          .AJAX(this.$AjaxUrl.shopInfo, params, "shopInfo", This)
          .then(() => {
            if (true) {
              this.goodsRecomLists = This.$store.state.shopInfo.data.data.recommended_goods_list;
              this.indexGoods = This.$store.state.shopInfo.data.data.new_goods_list;
            }
          });
      }
      // 显示上新商品
      if (par == 3) {
        this.updatePage++;
        this.isShowMore = true
        let params = {
          limit: 6,
          page: this.updatePage || "",
          vid: this.vid
        };
        request
          .AJAX(this.$AjaxUrl.shopInfo, params, "shopInfo", This)
          .then(() => {
            if (true) {
              let updateGoodslist = This.$store.state.shopInfo.data.data.new_goods_list;
              for (var i = 0; i < updateGoodslist.length; i++) {
                This.goodsUpdateLists.push(updateGoodslist[i]);
              }
              if (updateGoodslist.length == 0) {
                this.isShowMore = false
              }
            }
          });
      }
      // 显示全部商品
      if (par == 1) {
        this.allPage++;
        this.isShowMore = true
        let params = {
          page: this.allPage || "",
          vid: this.vid,
          num: 6
        };
        request
          .AJAX(this.$AjaxUrl.goodsSort, params, "goodsSort", This)
          .then(() => {
            if (true) {
              var all_goodsList = this.$store.state.goodsSort.data.data.data.goods_info;
              for (var i = 0; i < all_goodsList.length; i++) {
                This.goodsAllLists.push(all_goodsList[i]);
              }
              if (all_goodsList.length == 0) {
                this.isShowMore = false
              }
            }
          });
      }
      // 显示按销量排序的商
      if (par == 2) {
        this.salesPage++;
        this.isShowMore = true
        let params = {
          page: this.salesPage || "",
          vid: this.vid,
          num: 6,
          key: 3,
          sort: 0
        };
        request
          .AJAX(this.$AjaxUrl.goodsSort, params, "goodsSort", This)
          .then(() => {
            if (true) {
              var all_goodsList = this.$store.state.goodsSort.data.data.data.goods_info;
              for (var i = 0; i < all_goodsList.length; i++) {
                This.goodsAllLists.push(all_goodsList[i]);
              }
              if (all_goodsList.length == 0) {
                this.isShowMore = false
              }
            }
          });
      }
      // 显示按价格升序排列的商品
      if (par == 5) {
        this.priceUpPage++;
        this.isShowMore = true

        let params = {
          page: this.priceUpPage || "",
          vid: this.vid,
          num: 6,
          key: 2,
          sort: 1
        };
        request
          .AJAX(this.$AjaxUrl.goodsSort, params, "goodsSort", This)
          .then(() => {
            if (true) {
              // 条件判断
              var all_goodsList = this.$store.state.goodsSort.data.data.data.goods_info;
              for (var i = 0; i < all_goodsList.length; i++) {
                This.goodsAllLists.push(all_goodsList[i]);
              }
              if (all_goodsList.length == 0) {
                this.isShowMore = false
              }
            }
          });
      }
      // 显示按价格降序排列的商品
      if (par == 4) {
        this.priceDownPage++;
        this.isShowMore = true
        let params = {
          page: this.priceDownPage || "",
          vid: this.vid,
          num: 6,
          key: 2,
          sort: 0
        };
        request
          .AJAX(this.$AjaxUrl.goodsSort, params, "goodsSort", This)
          .then(() => {
            if (true) {
              var all_goodsList = this.$store.state.goodsSort.data.data.data.goods_info;
              for (var i = 0; i < all_goodsList.length; i++) {
                This.goodsAllLists.push(all_goodsList[i]);
              }
              if (all_goodsList.length == 0) {
                this.isShowMore = false
              }
            }
          });
      }

      // 根据筛选返回的商品
       if (par == 6) {
        this.screenDownPage++;
        this.isShowMore = true
        let params = this.screenParams
        params.page = this.screenDownPage
        request
          .AJAX(this.$AjaxUrl.goodsSort, params, "goodsSort", This)
          .then(() => {
            if (true) {
              var all_goodsList = this.$store.state.goodsSort.data.data.data.goods_info;
              for (var i = 0; i < all_goodsList.length; i++) {
                This.goodsAllLists.push(all_goodsList[i]);
              }
              if (all_goodsList.length == 0) {
                this.isShowMore = false
              }
            }
          });
      }
    },
    closeIndicator() {
      Indicator.close();
    },
    fnTest() {
      this.showTest = !this.showTest;
      this.hideTest = !this.hideTest;
    },
    fnTest1() {
      this.showTest = !this.showTest;
      this.hideTest = !this.hideTest;
    },
    seeAllGoods(index) {
      this.con = index;
      let This = this;
      if (this.con === 1) {
        this.isSelect1 = true;
        this.isSelect3 = false;
        this.isSelect2 = false;
        this.isSelect4 = false;
        this.twoSelect = false;
        this.oneSelect = false;
        this.goodsAllLists = [];
        this.allPage = 0;
        this.checkMore(1);
      }
      if (this.con === 2) {
        this.isSelect1 = false;
        this.isSelect3 = false;
        this.isSelect2 = true;
        this.isSelect4 = false;
        this.twoSelect = false;
        this.oneSelect = false;
        this.goodsAllLists = [];
        this.salesPage = 0;
        this.checkMore(2);

      }
      if (index === 3) {
        this.isSelect3 = true;
        this.isSelect1 = false;
        this.isSelect2 = false;
        this.isSelect4 = false; 
        this.oneSelect = !this.oneSelect;
        // 降序
        if (this.oneSelect == false) {
          this.twoSelect = true;
          this.con = 4;
          this.goodsAllLists = [];
          this.priceDownPage = 0;
          this.checkMore(4);
        }
        //升序
        if (this.oneSelect == true) {
          this.twoSelect = false;
          this.con = 5;
          this.goodsAllLists = [];
          this.priceUpPage = 0;
          this.checkMore(5);
        }
      } else {
        this.twoSelect = false;
        this.oneSelect = false;
      }
    },
    goodsSearch() {
      // this.$router.push("/searchgoods");
      // console.log(this.vid)
      this.$router.push({ path: "searchgoods", query: { vid: this.vid  } });

    },
    selectGoods(par) {
      this.isSelectOpt1 = par;
      this.goodClass = par.gc_id
    },
    selectCourse(par) {
      this.isSelectOpt2 = par;
      this.courseType = par.id
    },
    selectType(par) {
      this.isSelectOpt3 = par;
    },
    reset() {
      this.isSelectOpt1 = "";
      this.isSelectOpt2 = "";
      this.isSelectOpt3 = "";
      this.$refs.priceD.value = "";
      this.$refs.priceU.value = "";
    },
    getScreenGoods () {
     this.shuaxuna_show = false
     this.goodsAllLists = [];
     this.isShowMore = true
     let This = this;
     let prices = [this.priceRange1, this.priceRange2].join('|')
     let params = {
        vid: this.vid,
        goods_class: this.goodClass,
        course_type: this.courseType,
        goods_price_limit: prices,
        page:1
      };
      this.screenParams = params
       request
        .AJAX(this.$AjaxUrl.goodsSort, params, "goodsSort", This)
        .then(() => {
          // this.goodsAllLists = this.$store.state.goodsSort.data.data.data.goods_info
          var all_goodsList = this.$store.state.goodsSort.data.data.data.goods_info;
          for (var i = 0; i < all_goodsList.length; i++) {
            This.goodsAllLists.push(all_goodsList[i]);
          }
          if (all_goodsList.length == 0) {
              this.isShowMore = false
            }
        });
    },
    inputRefP1 () {
     this.priceRange1 = this.$refs.priceD.value
    },
     inputRefP2 () {
     this.priceRange2 = this.$refs.priceU.value
    }
  },
  filters: {
    toInteger: function(value) {
      value = parseFloat(value);
      return value;
    }
  },
  components: {
    search,
    select_search
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.selected {
  background-color: #ee753c !important;
  color: #fff !important;
}
.store_detail {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
}
.store_head {
  .bg {
    height: 45px;
    background: url(../assets/shopbg.png) 50% no-repeat;
    background-size: 50%;
    margin-bottom: 15px;
    font-size: 12px;
    padding: 20px 15px;
    -webkit-filter: blur(6px);
    -moz-filter: blur(6px);
    -o-filter: blur(6px);
    -ms-filter: blur(6px);
    filter: blur(6px);
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .main {
    position: absolute;
    left: 20px;
    top: 10px;
    width: auto;
    .shoppic {
      float: left;
      margin-right: 10px;
      img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
    }
    .head_content {
      height: 100%;
      float: left;
      .img1 {
        width: 10px;
      }
      .title {
        color: #fff;
        font-size: 16px;
        width: auto;
      }
      .shop_score {
        display: inline-block;
        width: auto;
        span {
          color: #fff;
          font-size: 10px;
        }
      }
    }
    .collect {
      display: block;
      width: 76px;
      height: 32px;
      font-size: 14px;
      background-color: #e93340;
      border-radius: 16px;
      color: #fff;
      text-align: center;
      line-height: 32px;
      position: absolute;
      right: -80px;
      top: 5px;
    }
  }
}
.store_nav {
  width: 100%;
  height: 50px;
  margin-top: 15px;
  background-color: #fff;
  .nav_list {
    height: 35px;
    width: 350px;
    .mint-navbar /deep/ .mint-tab-item.is-selected {
      color: #ee753c;
      font-size: 14px;
      border-bottom: 1px solid #ee753c;
    }
  }
}
.nav_detail {
  float: left;
  margin-top: 3px !important;
  width: 100%;
  background: #f5f5f5;
  padding: 0;
  .recom2 {
    font-size: 14px;
    margin: 10px;
    text-align: left;
  }
}
.mint-tab-container {
  padding: 0 10px;
  width: 94%;
}
.mint-tab-container-wrap {
  padding: 0 !important;
}
.mint-tab-container-item {
  width: 100% !important;
}
.select_nav {
  width: 100%;
  float: left;
  margin-top: 3px;
}

.career_advancement {
  border-radius: 10px;
  margin-bottom: 10px;
  width: 48%;
  height: auto;
  display: inline-block;
  font-size: 12px;
  // padding-bottom: 10px;
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
  // margin-right: 12px;
}
.career_advancement:nth-child(even) {
  margin-right: 12px;
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
// 右侧筛选
.shuaxuan {
  width: 306px;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
}
.shuaxuan_scroll {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.shuaxuan_list {
  margin-left: 12px;
  font-family: Source Han Sans CN;
  overflow: hidden;
  padding-bottom: 10px;
  margin-top: 16px;
  p {
    font-size: 10px;
    color: #8d8d8d;
  }
  ul {
    width: 314px;
    li {
      font-size: 0.32rem;
      border-radius: 0.426667rem;
      background: #ff00002e;
      height: 0.853333rem;
      line-height: 0.853333rem;
      float: left;
      margin-top: 0.426667rem;
      margin-right: 7px;
      background: #f5f5f5;
      color: #616161;
      width: 90px;
      text-align: center;
    }
    input {
      display: block;
      float: left;
      width: 110.5px;
      border-radius: 16px;
      height: 32px;
      text-align: center;
      background: #f5f5f5;
      margin-top: 17px;
      border: none;
      outline: none;
    }
    .price {
      width: 110.5px;
    }
    .line {
      float: left;
      display: inline-block;
      height: 30px;
      width: 27px;
      border: 2px solid;
      border-color: transparent transparent #c5c5c5 transparent;
      margin: 0px 6px 0px 6px;
    }
  }
}
.pagination {
  width: 200/2px;
  height: 48/2px;
  border: 1px solid rgba(238, 117, 60, 1);
  opacity: 1;
  border-radius: 40px;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  line-height: 24px;
  color: rgba(238, 117, 60, 1);
  margin-bottom: 20px;
  margin-left: 33%;
}
.select_search {
  width: 100%;
  background: #fff;
  height: 44px;
  border-bottom: 1px solid #f5f5f5;
  ul {
    width: 686px/2px;
    margin: 0 auto;
    li {
      width: 56px;
      height: 44px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 40px;
      text-align: center;
      opacity: 1;
      margin-right: 20px;
      float: left;
      span {
        font-size: 14px;
        color: rgba(97, 97, 97, 1);
        float: left;
      }
    }

    .is_select {
      color: #ee753c;
    }
    .border_select {
      border-color: #ee753c transparent transparent #ee753c !important;
      font-size: 14px;
    }
    li:nth-child(3) {
      span:nth-child(2) {
        float: left;
        display: block;
        width: 3px;
        height: 3px;
        border: 1px solid;
        border-color: grey transparent transparent grey;
        transform: rotate(45deg);
        margin-top: 18px;
        margin-left: 6px;
      }
      span:nth-child(3) {
        float: left;
        display: block;
        width: 3px;
        height: 3px;
        border: 1px solid;
        border-color: grey transparent transparent grey;
        transform: rotate(-140deg);
        margin-top: 20px;
        margin-left: -5px;
      }
    }
    img {
      float: right;
      width: 20px;
      height: 20px;
      margin: 14px 16px 0px 0px;
    }
  }
}

.header {
  margin-left: 0 !important;
  top: 10px !important;
  width: 35% !important;
  float: left;
  left: 15px;
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
  .header_text {
    width: 80px !important;
    height: 34px;
    width: 500/2px;
    border-radius: 20px;
    padding-left: 28px;
    background: rgba(241, 241, 241, 1);
    height: 58/2px;
    float: left;
    border: 0;
  }
}

.foot_button {
    width: 300px;
    height: 32px;
    margin-top: 26px;
    margin-bottom: 32px;
    margin-left: 38px;
    button {
        width: 110.5px;
        height: 32px;
        border: 1px solid rgba(238,117,60,1);
        opacity: 1;
        border-radius: 32px;
        align-items: center;
        line-height: 32px;
        padding-top: -2px;
        float: left;
        margin-right: 16px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
    }
    .reset_data {
        background: #fff;
        color: #EE753C;
    }
    .sure_oprate {
        background: #EE753C;
        color: #fff;
    }
}
.showIndex {
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding: 0 ;
  text-align: left;
}
.setFs {
  font-size: 12px;
}
.none {
  text-align: center;
  color: #8d8d8d;
  font-size: 14px;
  margin-top: 25px;
}
</style>