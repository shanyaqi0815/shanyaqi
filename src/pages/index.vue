//首页
<template>
  <div class="One_index">
    <div class="container">
        <div class="One_box">
      <header>
        <search :index="true" :xiaoxi="xiaoxi" :xiaoxishow="xiaoxishow" :isShow="true" @searshow="searshow"></search>
      </header>
      <div class="banner">
        <div class="banner_img">
          <mt-swipe :auto="4000">
            <mt-swipe-item :key="c" v-for="(c,index) in imgs">
              <img :src="c" @click="fn(index)" />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="cnet" >
        <img src="../assets/tishi.png" v-if="(this.roll_titles.length)" />
        <marquee v-if="(this.roll_titles.length)">
          <span :key="b" v-for="b in roll_titles" @click="marquee(b)">{{b}}</span>
        </marquee>
        <div class="cnet_box">
          <div class="box_one" :key="box.id" v-for=" box in cnet_box" @click="classify(box.id)">
            <div class="box_img">
              <img class="box_img_1" :src="box.img" />
            </div>
            <div class="box_text">{{box.name}}</div>
          </div>
          <div class="qingchu"></div>
        </div>
      </div>
      <div class="qingchu"></div>
      <!--清除浮动-->
      <div class="course">
        <span class="course_hed" @click="ches" >热门课程</span>
        <div class="course_cnt">
          <img src="../assets/11.png" />
          <p @click="dianji">换一换</p>
        </div>
        <div class="course_btn">
          <!-- <div v-if="hot_img.length"> -->
          <img :src="ia.goods_image" alt v-for="ia in hot_img" :key="ia.id" @click="tiaoz(ia)" />
          <!-- </div> -->
          <!-- <div class="qingchu" v-else>无数据</div> -->
        </div>
      </div>
      <div class="cultivate">
        <span class="cultivate_hed">学习达人</span>
        <div
          class="cultivate_cnt"
          :key="cultivate.id"
          v-for="cultivate in cultivate_cnt"
          @click="goodsdetail(cultivate)"
        >
          <img class="cultivate_img" :src="cultivate.goods_image" alt />
          <div class="cultivate_text">
            <p>{{cultivate.goods_name}}</p>
            <div class="xuquanzhen">
              <span v-for="a in cultivate.goods_label" :key="a">{{a}}</span>
            </div>
            <div class="cultivate_text_wen">
              <span>{{cultivate.xian_price}}</span>
              <strike>{{cultivate.goods_price}}</strike>
              <p v-if="cultivate.xian_lable">{{cultivate.xian_lable}}</p>
            </div>
          </div>
        </div>
        <div class="btn" @click="more">查看更多</div>

      </div>
    </div>
    <foot>
      <span slot="one">
        <img src="../assets/foot/zu67.png" />
        <p style="color:#EE753C">首页</p>
      </span>
    </foot>
    </div>
<!--   <div class="userGuide " v-if="isShowGuide">
      <div class="guide1 g_box"><img src="../assets/guidesearch.png" alt=""><span>输入商品名称/课程名称<br/>可直接查找课程哦</span></div>
      <div class="guide2 g_box"><img src="../assets/signin.png" alt=""><span>签到可领积分<br/>免费兑换好礼哦</span></div>
      <div class="guide3 g_box"><img src="../assets/novice.png" alt=""><span>别急，先来<br/>领一波新手福利吧</span></div>
      <div class="guide4 g_box"><img src="../assets/daren.png" alt=""><span>学习达人可以在这里<br/>体验喜欢的课程哦</span></div>
      <button class="guide_btn" @click="showGuide">知道了</button>
    </div> -->
  </div>
</template>

<script>
import { MessageBox, Indicator, Toast } from "mint-ui";
import request from "../common/request";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import search from "../components/search";
import foot from "../components/foot";
export default {
  name: "One_index",
  components: {
    foot,
    search
  },
  created() {
    this.more()
    this.dianji(),
    this.unread(),
    this.createds(), 
    this.box(), 
    this.guideTest()

  },
  data() {
    return {
      imgs: [],
      hot_img: [],
      roll_titles: [
      ],
      cnet_box: [
        { name: "新手专区", img: img10, id: 10 },
        { name: "职业提升", img: img1, id: 1 },
        { name: "电脑与IT", img: img2, id: 2 },
        { name: "设计创意", img: img3, id: 3 },
        { name: "语言艺术", img: img4, id: 4 },
        { name: "技能学习", img: img5, id: 5 },
        { name: "资格考试", img: img6, id: 6 },
        { name: "企业管理", img: img7, id: 7 },
        { name: "生产物流", img: img8, id: 8 },
        { name: "生活兴趣", img: img9, id: 9 }
      ],
      cultivate_cnt: [],
      cont: 0,
      xiaoxi: "",
      xiaoxishow: false,
      index: 0,
      isShowGuide: true,
      isShowMore: true,
    };
  },
  methods: {
    tiaoz(ia) {
      this.$router.push({ path: "/goodsdetail", query: { gid: ia.gid } });
      console.log(ia);
    },
    hottest(i) {
      this.$router.push({ path: "/careerAdvancement", query: { gid: i.gid } });
    },
    goodsdetail(a) {
      // 商品详情
      // this.$router.push({path:"/goodsdetail",query:{gid:a.gid}})
      this.$router.push({ path: "/goodsdetail", query: { gid: a.gid } });
    },
    // 换一换
    dianji() {
      // 点击换一换page每次加一
        let This = this;
        let params = {
          page: this.index++
        };
        this.hot_img = [];
        request.AJAX(this.$AjaxUrl.huanyihuan, params, "huanyihuan", This)
          .then(() => {
            
            for (var i in This.$store.state.huanyihuan.data.data.list) {
              This.hot_img.push(This.$store.state.huanyihuan.data.data.list[i]);
              if (i >=This.$store.state.huanyihuan.data.data.list.length - 1) {
                    break;
              }
            }
            // 判断当没有数据时重置index = 0
            // if (This.hot_img.length <= 1) {
            //   This.index = 0;
            //    This.dianji()
            // }
          });
    },
    createds() {
      //页面初始化
      Indicator.open("加载中....");
      let This = this;
      let params = {};
      request.AJAX(this.$AjaxUrl.homePage, params, "homePage", This)
        .then(() => {
          this.imgs = this.$store.state.homePage.data.data.banner;
          this.roll_titles = this.$store.state.homePage.data.data.annoucelist;
          console.log(this.roll_titles.length)
          //  for(var i in this.$store.state.homePage.data.data.data.hot_lession){
          //    this.hot_img.push(this.$store.state.homePage.data.data.data.hot_lession[i])
          //     if(i >= 2){
          //        break;
          //     }
          //  }
          var nub = 3;
        });
    },
    classify(a) {
      if(a == 10){
          this.$router.push("/NewbornZone");
          return
      }
      this.$router.push("/classify");
      
    },
    unread() {
      //页面初始化未读消息
      Indicator.open("加载中....");
      let This = this;
      let params = {
        member_id: this.$store.state.index ? this.$store.state.index.data.data.member_info.member_id : ""
      };
      request
        .AJAX(this.$AjaxUrl.messageCount, params, "messageCount", This)
        .then(() => {
          this.xiaoxi = this.$store.state.messageCount.data.data.count;
          if (this.xiaoxi >= 1) {
            this.xiaoxishow = true;
          }
        });
    },
    marquee(index) {
      //广告栏点击弹出详细广告
      Indicator.open("加载中....");
      let This = this;
      let params = {
        article_id: index.acid || ""
      }; //存入参数
      request
        .AJAX(this.$AjaxUrl.articleDetail, params, "articleDetail", This)
        .then(() => {
          MessageBox({
            title: this.$store.state.articleDetail.data.data.title,
            message: this.$store.state.articleDetail.data.data.html,
            showCancelButton: true
          });
        });
    },
    more() {
      // 培训专场点击查看更多 
      Indicator.open("加载中....");
      this.cont++;
      let This = this;
      let params = {
        page: this.cont || ""
      };
      request.AJAX(This.$AjaxUrl.course_index, params, "course_index", This)
        .then(() => {
          if (true) {
            var arr1 = This.$store.state.course_index.data.data.list;
            for (var i = 0; i < arr1.length; i++) {
              This.cultivate_cnt.push(arr1[i]);
            }
            if (arr1.length == 0) {
              // this.isShowMore = false
              Toast({
                message: '暂无更多商品',
                position: 'bottom',
                duration: 1000
              });
            }
          }
        });

    },
    box() {
      Indicator.close();
    },
    showGuide() {
      this.isShowGuide = false
      this.$store.state.isShowGuide = this.isShowGuide  
    },
    guideTest() {
      if ( this.$store.state.isShowGuide != undefined ) {
        this.isShowGuide = false
      }
    },
    searshow () {
      this.$router.push("/searchgoods");

    },
    ches(){
      console.log(this.$store.state.registerWithMobileMsgCode+"111111111",
      this.$store.state.index+"2222222")
    },
    fn(a){
     
        if(a == 0){
           this.$router.push("/NewbornZone");
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.One_index {
  position: relative;
  width: 750/2px;
}
.banner /deep/ .mint-swipe-items-wrap {
  border-radius: 10px;
}
.One_box {
  width: 686/2px;
  margin: 0 auto;
}
header /deep/ .heder_text {
  width: 480/2px !important;
  height: 64/2px !important;
  margin-right: 16px !important;
}
header /deep/ .heder {
  margin-left: 0px !important;
}
header /deep/ .data {
}
header {
  width: 686/2px;
  height: 60px;
  position: relative;
  .imgs {
    position: absolute;
    top: 9px;
    left: 6px;
    width: 14px;
    height: 14px;
    img {
      width: 14px;
    }
  }
  .heder_text {
    width: 500/2px;
    border-radius: 20px;
    padding-left: 20px;
    background: rgba(241, 241, 241, 1);
    height: 58/2px;
    float: left;
    margin-top: 16px;
    border: 0;
  }
}
.banner {
  width: 686/2px;
  height: 290/2px;
  margin: 10px auto;
  .banner_img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.cnet {
  width: 686/2px;
  height: auto;
  margin: 0 auto;
  font-size: 14px;
  line-height: 47px;
  img {
    width: 42/2px;
    height: 34/2px;
    float: left;
    padding-top: 20/2px;
  }
  marquee {
    display: inline-block;
    margin: 0;
    width: 620/2px;
    height: 36px;
    padding: 0;
    text-align: left;
    padding-left: 10px;
    line-height: 36px;
    span {
      margin: 0 20px;
    }
  }
  .cnet_box {
    width: 686/2px;
    margin: 0 auto;
    .box_one {
      width: 100/2px;
      height: 142/2px;
      float: left;
      margin: 0 23/2px;
      .box_img {
        width: 80/2px;
        height: 80/2px;
        padding: 5px;
        .box_img_1 {
          width: 80/2px;
          height: 80/2px;
          padding: 0;
        }
      }
      .box_text {
        width: 100%;
        height: 32/2px;
        line-height: 32/2px;
        font-size: 24/2px;
        color: rgba(97, 97, 97, 1);
      }
    }
    .box_one:nth-child(1),
    .box_one:nth-child(6) {
      margin-left: 0;
    }
    .box_one:nth-child(5),
    .box_one:nth-child(10) {
      margin-right: 0;
    }
  }
}
.qingchu {
  clear: both;
}
.course {
  width: 686/2px;
  height: auto;
  margin: 0 auto;
  .course_hed {
    width: 128/2px;
    font-size: 32/2px;
    font-weight: bold;
    line-height: 54px;
    color: rgba(51, 51, 51, 1);
  }
  .course_cnt {
    display: inline-block;
    float: right;
    width: 130/2px;
    img {
      float: left;
      width: 35/2px;
      margin-top: 30/2px;
    }
    p {
      float: right;
      font-size: 28/2px;
      font-weight: 400;
      line-height: 48px;
      color: rgba(51, 51, 51, 1);
    }
  }
  .course_btn {
    display: flex;
    width: 343px;height: 110px;
    overflow: hidden;
    img {
      width: 110px;
      height: 110px;
      background: rgba(241, 109, 109, 1);
      opacity: 1;
      border-radius: 20/2px;
      margin-right: 6px;
    }
    img:nth-child(1) {
      float: left;
    }
    img:nth-child(2) {
      float: left;
    }
    img:nth-child(3) {
      float: right;
      margin-right: 0;
    }
  }
}
.box {
  display: flex;
  justify-content: space-between;
}
.box-left {
  margin-left: -345px;
}
.cultivate {
  width: 686/2px;
  height: auto;
  margin: 0 auto 130/2px;
  .cultivate_hed {
    width: 128/2px;
    font-size: 32/2px;
    font-weight: bold;
    line-height: 54px;
    color: rgba(51, 51, 51, 1);
  }
  .cultivate_cnt {
    width: 686/2px;
    height: 150/2px;
    margin: 0 auto;
    margin-bottom: 8px;
    .cultivate_img {
      width: 220/2px;
      height: 150/2px;
      display: inline-block;
      float: left;
    }
    .cultivate_text {
      width: 428/2px;
      height: 121/2px;
      float: left;
      margin: 0.18666rem 0.2rem;
      p:nth-child(1) {
        width: 426/2px;
        height: 0.5rem;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: rgba(51, 51, 51, 1);
        overflow: hidden;/*超出部分隐藏*/
        text-overflow:ellipsis;/* 超出部分显示省略号 */
        white-space: nowrap;/*规定段落中的文本不进行换行 */
      }
      .xuquanzhen{
        width: 426/2px;
        height: 0.5rem;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 24px;
        color: rgba(141, 141, 141, 1);
        opacity: 1;
        span{
          height: 0.5rem;
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 24px;
          color: rgba(141, 141, 141, 1);
          opacity: 1;
          margin: 0 5px;
        }
        span:nth-child(1){
          margin-left: 0;
        }
      }
      .cultivate_text_wen {
        width: 426/2px;
        height: 0.58rem;
        span {
          width: 1.6rem;
          height: 0.64rem;
          font-size: 28/2px;
          float: left;
          font-weight: 400;
          line-height: 0.64rem;
          color: rgba(234, 73, 64, 1);
          opacity: 1;
        }
        strike {
          width: 100/2px;
          height: 0.64rem;
          color: darkgray;
          font-size: 10px;
          line-height: 0.64rem;
          float: left;
          // background-color: #fff;
        }
        p {
          widows: 1.5rem;
          height: 0.34rem;
          font-size: 10px;
          float: left;
          font-weight: 400;
          line-height: 0.34rem;
          text-align: center;
          opacity: 1;
          display: inline-block;
          border: 1px solid red;
          border-radius: 0.5rem;
          padding: 1px;
          margin-top: 4px;
          color: red;
        }
      }
    }
  }
  .btn {
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
  }
}

// 新手引导遮罩层样式
.userGuide {
  width: 100%;
  height: 120%;
  position: absolute;
  background-color: rgba(0,0,0,.6);
  top: -20px;
  overflow-y: none;
  .g_box {
    position: relative;
    width: 245px;
    height: 45px;
    background-color: rgba(255,255,255,0);
    span {
      color: #fff;
      font-size: 12px;
      padding-top: -45px;
      display: inline-block;
      position: absolute;
    }
    img {
      display: inline-block;
      width: 65px;
    }
  }
  .guide1 {
    top: 40px;
    left: 15px;
    background-color: rgba(255,255,255,0);
    span {
    
      left: 61px;
      top: 11px;
    }
  }
  .guide2 {
    top: -15px;
    right: -275px;
    span {
      left: 11px;
      top: 70px;
      margin-right: 155px;
    }
  }
  .guide3 {
    left: 18px;
    top: 200px;
    img {
      width: 85px;
    }
    span {
     left: 70px;
     top: 29px;
    }
  }
  .guide4 {
    top: 470px;
    left: 43px;
     img {
      width: 85px;
    }
    span {
    left: 60px;
    top: 29px;
    }
  }
  .guide_btn {
    font-size: 14px;
    text-align: center;
    color: #EE753C;
    width: 85px;
    height: 35px;
    border-radius: 20px;
    border: 1px solid #EE753C;
    background-color: rgba(255,255,255,0);
    position: absolute;
    left: 40%;
    top: 70%;
  }
}
</style>
