<template>
  <div class="NewbornZone">
    <div class="herder">
      <img src="../assets/scoped/NewbornZone01.png" alt />
      <div class="herder-wenz">
        
        <p class ><a href="#class">免费听课</a></p>
        <p class><a href="#returnCorn">听课返现</a></p>
        <p class><a href="#integral">积分福利</a></p>
        <p class="end"><a href="#follow">关注有礼</a></p>
      </div>
    </div>
    <div class="bonner">
      <div class="bonner-one">
        <div class="one-tp">
          <img src="../assets/scoped/NewbornZone03.png" alt />
          <p class="one-wz" id="class">免费听课</p>
          <img src="../assets/scoped/NewbornZone03.png" alt />
        </div>
        <div>
          <p class="one"></p>
          <p class="one-txt">价值399付费课程免费领</p>
          <p class="one-wenz"></p>
        </div>
      </div>
      <div class="bonner-two">
              <Carousel3d :controlsWidth="120" :controlsHeight="180" :space="120" :autoplay="true"
               :display = "5" :width="360" :startIndex = "0" :clickable="true" :animationSpeed="500"
               >
                <slide v-for="(slide, i) in slides" :index="i" :key="i">
                  <div class="box-xia box-xia1">
                    <img src="@/assets/scoped/NewbornZone06.png" alt />
                    <p class="box-txt">摄影课堂</p>
                    <div class="box-proce box-proce1">
                      <div class="proce-yuan proce-yuan1">
                        <del>￥399</del> </div>
                      <div class="proce-hong proce-hong1">返￥65</div>
                    </div>
                    <p class="box-fan  box-bonner">立即抢购</p>
                  </div>
                </slide>
              </Carousel3d>
      </div>
      <div></div>
      <div class="bonner-one">
        <div class="one-tp">
          <img src="../assets/scoped/NewbornZone03.png" alt />
          <p class="one-wz" id="returnCorn">听课返现</p>
          <img src="../assets/scoped/NewbornZone03.png" alt />
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="../assets/scoped/NewbornZone04.png" alt />
    </div>
    <div class="nav">
      <select_course :items="items" :gc_id="gc_id" :is_newUser="is_newUser" @getGcId="get_gcId"></select_course>
    </div>       
     
    <div class="box">
      <div class="box-tp">
       
          <swiper :options="swiperOption">
            <swiper-slide>
                <div class="box-xia" :key="detail.index" v-for="detail in goods_class_detail">
                  <img src="../assets/scoped/NewbornZone06.png" alt />
                  <p class="box-txt">{{ detail.goods_name }}</p>
                  <div class="box-proce">
                    <div class="proce-yuan">￥{{ detail.goods_price }}</div>
                    <div class="proce-hong">返￥{{ detail.goods_promotion_price }}</div>
                  </div>
                  <p class="box-fan">{{ detail.goods_salenum }}人已买</p>
                </div>
            </swiper-slide>
            
          </swiper>
        
      </div>
      <div class="bonner-one box-nottom">
        <div class="one-tp">
          <img src="../assets/scoped/NewbornZone03.png" alt />
          <p class="one-wz" id="integral">积分福利</p>
          <img src="../assets/scoped/NewbornZone03.png" alt />
        </div>
      </div>
      <div class="box-lian">
        <a href class="box-a">如何获取福利</a>
      </div>
      <div class="share">
        <p class="share-xiam"></p>
        <p class="share-txt">立即分享</p>
      </div>
      <div class="box-tp">
        <div class="box-xia">
          <img src="../assets/scoped/NewbornZone06.png" alt />
          <p class="box-txt">摄影课堂</p>
          <div class="box-proce">
            <div class="proce-yuan">￥399</div>
            <div class="proce-hong">返￥65</div>
          </div>
          <p class="box-fan">1398人已买</p>
        </div>
        <div class="box-xia">
          <img src="../assets/scoped/NewbornZone06.png" alt />
          <p class="box-txt">摄影课堂</p>
          <div class="box-proce">
            <div class="proce-yuan">￥399</div>
            <div class="proce-hong">返￥65</div>
          </div>
          <p class="box-fan">1398人已买</p>
        </div>
        <div class="box-xia">
          <img src="../assets/scoped/NewbornZone06.png" alt />
          <p class="box-txt">摄影课堂</p>
          <div class="box-proce">
            <div class="proce-yuan">￥399</div>
            <div class="proce-hong">返￥65</div>
          </div>
          <p class="box-fan">1398人已买</p>
        </div>
      </div>
      <div class="bonner-one bottom-li">
        <div class="one-tp">
          <img src="../assets/scoped/NewbornZone03.png" alt />
          <p class="one-wz" id="follow">关注有礼</p>
          <img src="../assets/scoped/NewbornZone03.png" alt />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-box">
        <div class="bottom-tp">
            <img src="../assets/scoped/NewbornZone06.png" alt class="bottom-img" />
            <p class="bottom-wenz">关注海云舟公众号</p>
            <p class="bottom-wenz1">截图微信 识别关注</p>
        </div>
        <div class="bottom-txt">
          <div class="bottom-wz">
            <img src="../assets/scoped/NewbornZone07.png" alt />
            <p>获取跟多复习资料</p>
          </div>
          <div class="bottom-wz">
            <img src="../assets/scoped/NewbornZone07.png" alt />
            <p>获取跟多复习资料</p>
          </div>
          <div class="bottom-wz">
            <img src="../assets/scoped/NewbornZone07.png" alt />
            <p>获取跟多复习资料</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../common/request"
import { Carousel3d, Slide } from 'vue-carousel-3d';
import select_course from '@/components/classify/selectCourse'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Vue from 'vue'
import LyTab from 'ly-tab'
Vue.use(LyTab)
export default {
  name: "NewbornZone",
  components: {
    Carousel3d,
    Slide,
    select_course,
    swiper,
    swiperSlide
  },                                                                                                             
  data(){
    return{
      slides:10,
      items: [],
      goods_class_detail: [
        {gid: 1232, vid:40, goods_image: '../assets/scoped/NewbornZone06.png', goods_name: 'test_shang23天', goods_price: 300.00, goods_promotion_price: '0.00', goods_salenum: 1},
        {gid: 1232, vid:40, goods_image: '../assets/scoped/NewbornZone06.png', goods_name: 'test_shang23天', goods_price: 300.00, goods_promotion_price: '0.00', goods_salenum: 1},
        // {gid: 1232, vid:40, goods_image: '../assets/scoped/NewbornZone06.png', goods_name: 'test_shang23天', goods_price: 300.00, goods_promotion_price: '0.00', goods_salenum: 1},
        // {gid: 1232, vid:40, goods_image: '../assets/scoped/NewbornZone06.png', goods_name: 'test_shang23天', goods_price: 300.00, goods_promotion_price: '0.00', goods_salenum: 1},
        // {gid: 1232, vid:40, goods_image: '../assets/scoped/NewbornZone06.png', goods_name: 'test_shang23天', goods_price: 300.00, goods_promotion_price: '0.00', goods_salenum: 1},
      ],
      gc_id: 1,
      is_newUser: true,
      swiperOption: {
        notNextTick: false,
        direction: 'horizontal',
        grabcursor: true,
      }
    }
  },
  methods: {
    get_goods_class() {
      var This = this
      let params = {}
      // name 是当前接口名称存在store中的key
      request.AJAX(this.$AjaxUrl.newborn_zone,params,'newborn_zone',This).then(()=>{
        this.items = this.$store.state.newborn_zone.data.data.data.goods_class        
        this.gc_id = this.items[0].gc_id
        console.log(this.gc_id, 'items选项')
        // 调用二级菜单接口
        this.get_gcId(this.gc_id)
      })
    },
    get_gcId(event) {
      var This = this
      this.gc_id = event
      if (event.gc_id !=undefined) {
        this.gc_id = event.gc_id
      }
      let params = {
        goods_class: this.gc_id
      }
      request.AJAX(this.$AjaxUrl.newborn_search,params,'newborn_search',This).then(()=>{
        this.goods_class_detail = this.$store.state.newborn_search.data.data.data.goods_info
      })
    }
  },
  beforeCreate() {
  },
  created() {
    
  },
  mounted() {
    this.get_goods_class()
    //  new Swiper ('.swiper-container', {
    //     loop: true,        // 如果需要分页器        
    //     pagination: '.swiper-pagination',        // 如果需要前进后退按钮        
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',        // 如果需要滚动条        
    //     scrollbar: '.swiper-scrollbar',
    //   })
  }  
};
</script>

<style scoped>
 .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .swiper-wrapper {
    height: 200px;
  }
  .swiper-slide {
    text-align: center;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
a {
  text-decoration: none;
  color: #333;
}
.herder img {
  width: 375px;
  height: 165px;
  display: block;
}
.herder-wenz {
  width: 100%;
  height: 32px;
  padding-top: 12px;
  display: flex;
  font-size: 16px;
  background-color: #f7513c;
}
.herder-wenz p {
  width: 190px;
  height: 19px;
  text-align: center;
  border-right: 1px solid #fff;
  color: #fff;
}
.herder-wenz p a {
  color: #fff;
}
.herder-wenz .end {
  border-right: none;
}
.bonner {
  width: 375px;
  height: 378px;
  background: url("../assets/scoped/NewbornZone02.png") no-repeat center center;
  font-size: 14px;
  background-size: 375px 378px;
}
.bonner-one {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-top: 17px;
}
.one-tp {
  width: 181px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.one-tp img {
  width: 22px;
  height: 23px;
  margin-top: -12px;
  display: block;
}
.one-wz {
  width: 125px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  margin: 0 auto;
  margin-bottom: 14px;
  background: url("../assets/scoped/NewbornZone05.png") no-repeat center center;
  background-size: 125px 30px;
}
.one {
  width: 15px;
  height: 1px;
  background-color: #fff;
  margin-right: 6px;
}
.bonner-one div {
  display: flex;
  align-items: center;
}
.one-wenz {
  width: 15px;
  height: 1px;
  background-color: #fff;
  margin-left: 6px;
}
.bonner-two {
  width: 375px;
  height: 180px;
}
.bonner-two /deep/ .carousel-3d-container{
  height: 180px!important;width:  100%!important;
}
.bonner-two /deep/ .carousel-3d-slider{
  height: 180px!important;width:  120px!important;
}
.bonner-two /deep/ .carousel-3d-slide{
  height: 100%!important;width:  100%!important;
   border-radius: 15px;
  visibility: hidden;
}

.bonner-two {
  width:  100%;
  margin: 0 auto;
}
.bonner-two p {
  width: 71px !important;
  margin: 0 auto;
}
.one-txt {
  color: #fff;
}
.logo img {
  width: 375px;
  height: 350/2px;
  display: block;
}
.nav {
  width: 100%;
  height: 44px;
  font-size: 14px;
  overflow: hidden;
}
/* .nav-wenz {
  width: 510px;
  display: flex;
  align-items: center;
} */
/* .nav-wenz p {
  margin-right: 21px;
} */
.box {
  width: 375px;
  height: auto;
  background-color: #f7513c;
}
.box-tp {
  display: flex;
  padding-top: 15px;
  margin-bottom: 17px;
}
.box-xia {
  width: 119px;
  height: 180px;
  font-size: 12px;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 2px;
}
.box-xia1{
  overflow: hidden;
  border-radius: 10px;
}
.box-xia img {
  width: 119px;
  height: 100px;
  display: block;
  margin-bottom: 8px;
}
.box-xia1 img{
  margin-bottom: 4px;
}
.box-txt {
  width: 119px;
  text-align: center;
  overflow: hidden;
  height: 20px;
}
.box-proce {
  display: flex;
  padding-left: 10px;
  margin-top: 5px;
}
.box-proce1{
  margin-top: 2px;
  margin-bottom:5px;
}
.proce-yuan1 del{
  color:#c5c5c5;
}
.proce-yuan {
  color: #ea4940;
  margin-top: 2px;
}
.proce-hong {
  width: 49px;
  height: 18px;
  margin-left: 5px;
  color: #fff;
  border-radius: 5px;
  background-color: #ea4940;
  text-align: center;
  line-height: 18px;
}
.box-fan {
  width: 119px;
  text-align: center;
  margin-top: 10px;
}
.box-nottom {
  margin-top: 18px;
}
.box-lian {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-right: 15px;
}
.one-tp .one-wz {
  font-size: 15px;
}
.box-a {
  color: #fff;
  display: block;
  padding-bottom: 3px;
  border-bottom: 1px solid #fff;
  margin-bottom: 6px;
}
.share {
  width: 363px;
  height: 238px;
  margin: 0 auto;
  background-color: #fff;
  background: url("../assets/scoped/NewbornZone09.png") no-repeat center center;
  background-size: 363px 238px;
  position: relative;
  margin-bottom: 15px;
}
.share-txt {
  width: 200px;
  height: 33px;
  background-image: linear-gradient(#f57868, #ea4a41);
  border-radius: 33px;
  color: #fff;
  text-align: center;
  line-height: 33px;
  position: absolute;
  bottom: 19px;
  left: 90px;
  font-size: 16px;
}
.share-xiam {
  width: 1px;
  height: 151px;
  background-color: #f7513c;
  position: absolute;
  left: 180px;
  top: 19px;
}
.bottom {
  width: 375px;
  height: 260px;
  background: url("../assets/scoped/NewbornZone08.png") no-repeat center center;
  background-size: 375px 260px;
}
.bottom-box {
  display: flex;
  padding-top:10px;
}
.bottom-img {
  display: block;
  width: 120px;
  height: 120px;
  margin-left: 21px;
  margin-right:25px;
  margin-bottom:12px;
}
.bottom-li{
    margin-bottom:0;
}
.bottom-wz{
    display:flex;
    align-items: center;
    font-size:14px;
    margin-top:12px;
}
.bottom-wz img{
    width:10px;
    height:10px;
    margin-right:9px;
}
.bottom-tp{
    font-size:12px;
}
.bottom-wenz{
    width:97px;
    margin:0 auto;
    color:#fff;
    margin-bottom:6px;
}
.bottom-wenz1{
    width:100px;
    margin:0 auto;
    color:#fff;
    font-size:10px;
    -webkit-transform:scale(0.8)
}
.box-bonner{
  height:20px;
  border-radius: 20px;
  width:84px;
  background-color:#ea4940;
}
.proce-hong1{
  background-color:#fff;
  color:#ea4940;
}
.proce-yuan1{
  margin-top:-2px;;
}
</style>
