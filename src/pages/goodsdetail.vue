// 商品详情页
<template>
    <div class="goodsdetail">

        <!-- 轮播图 -->
        <div class="banner">
                <!-- 图片导航栏 -->
                <div class="head_nav">
                    <ul>
                        <li @click="fanhui"><img :src="img_1" alt=""></li>
                        <li @click="shopping_cart(100)"><img :src="img_2" alt=""></li>
                        <!-- <li @click="fenxiang"><img :src="img_3" alt=""></li> -->
                        <li><img :src="img_3" alt=""></li>
                    </ul>
                </div>
            <mt-swipe :auto="3500">
                    <mt-swipe-item :key="a" v-for="a in banners"><img :src="a"></mt-swipe-item>
            </mt-swipe>
        </div>

        <!-- 价格详情 -->
        <div class="goods_price">
            <div>
                <div>
                    <span class="zhe" v-if="particulars.xianshi_status">折后价</span>
                    <span class="pri" v-if="particulars.xianshi_status">￥{{particulars.xianshi_price}}</span>
                    <span class="yuanjia" v-if="!particulars.xianshi_status">￥{{particulars.goods_price}}</span>
                    <del  v-if="particulars.xianshi_status">{{particulars.goods_price}}</del>
                </div>
                <div class="showAll">
                    <span>{{particulars.goods_name}}</span>
                    <span>
                        <ul>
                            <li>销量 {{particulars.goods_salenum}}</li>
                            <li>最多送积分 {{particulars.points}}</li>
                            <li>服务时长: {{particulars.specvalue}}小时</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
        <!-- 优惠券领取 -->
        <div class="coupon" @click="lingjuan()">
            <div>
                <div>
                    <span>优惠</span>
                </div>
                <div v-if="particulars.redflag">
                    <span>店铺优惠券 <p class="beijing">满{{particulars.red.redinfo_full}}减{{particulars.red.redinfo_money}}</p></span>
                    <span>积分 <p>购买可得{{particulars.points}}积分</p></span>
                </div>
                <span class="lingjuan"><span class="ling">领券</span><img class="imgs" src="@/assets/arrow_right.png" alt=""></span>
            </div>
        </div>
        
            <!-- 领取优惠券 -->
            <mt-popup v-model="coupon" position="bottom">
                <div class="order_cancel">
                <div class="title">
                    <span class="title_text">优惠</span>
                    <img class="imgs" :src="cancel" @click="close" alt="">
                </div>
                <div class="title_box">
                    <div class="juan">领劵</div>
                    <!-- <shopCoupons ></shopCoupons> -->
                    <div class="shopCouponList" v-for=" list in shopCouponsLists" :key="list.id">
                        <div class="shopCoupon" ref="couponCss">
                            <ul class="point1">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                             <ul  class="point2">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div class="cou_left">
                                <p><span class="icon_price">￥</span><span class="cou_price">{{ list.redinfo_money | checkedMoney }}</span></p>
                                <p class="use_condition">满{{list.redinfo_full | checkedMoney}}可用</p>
                            </div>
                            <div class="cou_right">
                                <div class="cou_usedate">
                                     <p class="use_date">使用期限</p>
                                <p>{{list.redinfo_start}} - {{list.redinfo_end}}</p>
                                </div>
                               
                                <div class="getCoupon"  @click="getShopCoupons(list.red_id)">领取</div>
                                <!-- <div class="getCoupon2"  @click="getShopCoupons(list.red_id)" v-if="!isGetCoupons">已领取</div> -->

                                <i class="css_point1"></i>
                                <i class="css_point2"></i>
                            </div>
                        </div>
                        <div class="clear"></div>

                    </div>
                </div>
               
                <button class="sure_button"  @click="close">确认</button>
            </div>
            </mt-popup>
        <!-- 服务选项 -->
        <div class="service_list">
            <ul>
                <li :key="service_list.index" v-for="service_list in service_lists" @click="nowbuy(service_list)">
                    <span>{{ service_list.ser_name }}</span>
                    <span>{{ service_list.ser_contain }}<img class="imgs" :src="service_list.arrow_right" alt=""></span>
                </li>
            </ul>
        </div>
        <div class="clear"></div>
        <!-- 评论start -->
        <div class="comment" v-if="particulars.comments_count == 0 ? false:true">
            <div>
                <ul>
                    <li>全部</li>
                    <li>最新</li>
                    <li>有图({{evaluate.images}})</li>
                    <!-- <li>视频(10)</li> -->
                </ul>
                <div class="user_infor">
                    <img :src="evaluate.cct_user_avatar" alt="">
                    <span>{{evaluate.geval_frommembername}}</span>
                    <span>{{evaluate.geval_addtime}}</span>               
                </div>
                <div class="xing">
                    <img :src="img.img" :key="img.index" alt="" v-for="img in imgs">
                </div>
                <div class="comment_des">
                    {{evaluate.geval_content}}
                </div>
            </div>
        </div>
        <!-- 评论end -->
        <!-- 店铺 -->
        <div class="goods_store" @click="goShop(shopId)"  >
            <div class="store">
                <div>
                    <img :src="imgs_11" alt="">   
                </div>
                <div>
                    <div class="kuai">
                        <span>{{particulars.store_name}}</span>
                        <div class="pingfen">
                            综合评分
                            <span>
                                <img :key="store_des.index" v-for="store_des in store_deses" :src="store_des.img" alt=""> 
                                <div class="qingchu"></div>
                            </span>    
                        </div>

                    </div>
                    <span class="dian">
                        进店
                        <img src="../assets/arrow_right.png" alt="">
                    </span>
                </div>
            </div>
        </div>
        <!-- <goodsDetailFoot @nowbuy="nowbuy($event)" :isCollect="this.hascollect"></goodsDetailFoot> -->

        <!-- 商品信息详情Foot -->
        <div class="goods_detail_foot" :isCollect="this.hascollect">
            <div class="foot_body">
                <ul>
                    <li  @click="goShop(shopId)" >
                        <img src="../assets/shoplog.png" alt="">
                        <span>店铺</span>
                    </li>
                    <li @click="goShop1">
                        <img src="../assets/center.png" alt="">
                        <span>客服</span>
                    </li>
                    <li  @click="collect">
                        <img v-show="noCollect"  src="../assets/evaluate/xing.png"  alt="" >
                        <img v-show="isCollect1"  src="../assets/evaluate/xing1.png" alt="">
                        <span>收藏</span>
                    </li>
                </ul>
                <div class="goods_buy">
                    <span @click="nowbuy(1)">立即购买</span>
                    <span  @click="nowbuy(1,1)">加入购物车</span>  
                </div>
            </div>
        </div>
        <!-- 商品信息详情Foot -->
        <mt-popup v-model="isNowBuy" position="bottom">
            <!-- 立即购买 -->
            <div class="order_cancel" v-if="select">
                <div class="now_buy_body">
                    <div>
                        <img :src="particulars.goods_image">
                        <ul>
                            <li>￥{{goods_detail_price}}</li>
                            <!-- <li>还差5人开课</li> -->
                            <li>请选择类型</li>
                        </ul>
                        <img :src="cancel" @click="nowbuy" alt="">
                    </div>
                    <div class="buy_type">
                        <p>选择付款方式</p>
                        <ul class="type_checked">
                            <li  :key="a.id" v-for="a in fukuan" :class="{color:a.message}" @click="click_box(a.id)"><span>{{a.fukuan}}</span></li>
                        </ul>
                    </div>
                    <div class="service_type">
                        <p>选择服务类型</p>
                        <ul class="type_checked">
                            <li><span>线上课程</span></li>
                        </ul>
                    </div>
                    <div class="buy_count">
                        <span>购买数量</span>
                        <ul>
                            <li @click="subtract()"><span>-</span></li>
                            <li><span>{{ quantity }}</span></li>
                            <li @click="add()"><span>+</span></li>
                        </ul>
                    </div>
                </div>
                <!-- 加入购物车按钮 -->
                <button class="sure_button" v-show="shopButton" @click="shopping_cart(0)">确定</button>
                <!-- 立即购买按钮 -->
                <button class="sure_button" v-show="buyButton" @click="immediately()">确定</button>
            </div>
            <!-- 立即购买 -->

            <!-- 服务类型 -->
            <div class="order_cancel" v-if="select1">
                <div class="now_buy_body">
                    <div>
                        <img :src="particulars.goods_image">
                        <ul>
                            <li>{{goods_detail_price}}</li>
                            <!-- <li>还差5人开课</li> -->
                            <li>请选择类型</li>
                        </ul>
                        <img :src="cancel" @click="nowbuy" alt="">
                    </div>
                    <div class="buy_type">
                        <p>选择付款方式</p>
                        <ul class="type_checked">
                            <li  :key="a.id" v-for="a in fukuan" :class="{color:a.message}" @click="click_box(a.id)"><span>{{a.fukuan}}</span></li>
                        </ul>
                    </div>
                    <div class="service_type">
                        <p>选择服务类型</p>
                        <ul class="type_checked">
                            <li><span>线上课程</span></li>
                        </ul>
                    </div>
                    <div class="buy_count">
                        <span>购买数量</span>
                        <ul>
                            <li @click="subtract()"><span>-</span></li>
                            <li><span>{{ quantity }}</span></li>
                            <li @click="add()"><span>+</span></li>
                        </ul>
                    </div>
                </div>
                <div class="box">
                    <button class="sure_button1" @click="shopping_cart">加入购物车</button>
                    <button class="sure_button2" @click="immediately">立即购买</button>
                </div>
                
            </div>
            <!-- 服务类型 -->

            <!-- 服务参数 -->
            <div class="order_cancel" v-if="select2">
                    <div class="now_buy_body box_1">
                        <img class="img_guan" :src="cancel" @click="nowbuy" alt="">
                        <div>服务参数</div>
                        <ul>
                            <li>
                                <span>讲师</span>
                                <span>{{particulars.teacher}}</span>
                            </li>                             
                            <li>
                                <span>开始时间</span>
                                <span>{{particulars.con_start}}</span>
                            </li>                            
                            <li>
                                <span>结束时间</span>
                                <span>{{particulars.con_end}}</span>
                            </li> 
                            
                            <li>
                                <span>地 址</span>
                                <span>{{particulars.area_detail}}</span>
                            </li>
                        </ul>
                    </div>
                <button class="sure_button" @click="shopping_cart(1)">确认</button>
            </div>
            <!-- 服务参数 -->


        </mt-popup>
        <div class="html_1" v-html="goods_body"></div>
    </div>
</template>

<script>
import { Popup,MessageBox ,Toast  } from 'mint-ui';
import arrow_right from '@/assets/arrow_right.png';
import img from '../assets/evaluate/xing.png';
import img1 from '../assets/evaluate/xing1.png';
import store from '../components/store';
import hart from '../assets/evaluate/hart.png';

// import goodsDetailFoot from '../components/goodsDetailFoot'
import cancel from '@/assets/refund2.png'
// 头部图片导航栏
import img01 from '../assets/shopnav/arrow_right.png'
import img03 from '../assets/shopnav/sharelog.png'
import img02 from '../assets/shopnav/shop.png'
import request from "../common/request"
import { error } from 'util';
// import wx from 'weixin-js-sdk'
export default {
    name: 'goodsdetail',
    created(){
        // console.log(this.img_1)
        // console.log(this.img_2)
        // console.log(this.img_3)
        this.goodsDetail();
        // console.log(evaluate)
        // this.service_lists[5].ser_contain = evaluate.comments.count
        if (this.isCollect == false) {
            this.noCollect = true
            this.isCollect1 = false
        }else if(this.isCollect == true){
            this.noCollect = false;
            this.isCollect1 = true
        }
    },
    data() {
        return {
            popupVisible:false,
            uld: {},
            param: {},
            gid: '',
            select:true,
            select1:false,
            select2:false,
            member_id: '',
            isNowBuy: false,
            cancel: cancel,
            buyCount: '1',
            img_1: img01,
            img_2: img02,
            img_3: img03,
            banners:[],
            quantity:1,
            goods_body:"",
            store_deses: [],
            imgs_11:"",
            vid:'',
            shopButton: false,
            buyButton: false,
            hascollect: false, // 登录用户是否收藏
            service_lists: [
                {ser_name: '保障', ser_contain: '定金仅限于线下大金额课程购买使用且不退', arrow_right: arrow_right},
                {ser_name: '选择', ser_contain: '选择服务类型' ,arrow_right: arrow_right},
                {ser_name: '参数', ser_contain: '服务参数', arrow_right: arrow_right},
                {ser_name: '选择', ser_contain: '培训地址', arrow_right: arrow_right},
                {ser_name: '评论', ser_contain: '(0)', arrow_right: arrow_right}
            ],
            imgs: [
                {img: img},
                {img: img},
                {img: img},
                {img: img},
                {img: img},
            ],
            fukuan:[
                {id:0,fukuan:"全额",message:true},
                {id:1,fukuan:"定金",message:false},
                {id:2,fukuan:"尾款",message:false},
            ],
            particulars:"",
            evaluate:"",
            comment_des: '很好！效果不错的，老师亲和力也很高。希望对我有所帮助hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
            shopId: '',
            noCollect: true,
            isCollect1:false,
            coupon: false,
            shopCouponsLists: [],
            isGetCoupons: true,
            goods_detail_price: ''
        }
    },
    components: {
        store
    }, 
    methods: {
        lingjuan(){
        //  this.$router.push("/goodscoupon")
         if(this.$store.state.index == undefined){
                MessageBox.confirm("您好，您还未登录账号，请登录账号","提示").then(action =>{
                    if(action == "confirm"){
                        this.$router.push("/Password_register")
                    }
                }).catch(err => {
                    if(err =='cancel'){
                        this.$router.push("/")
                    }
                })
            }else{
                this.coupon = !this.coupon
                this.renderShopCoupons();
            }
         

        },
         collect(){
            this.gid = this.$route.query.gid
            if(this.$store.state.index == undefined){
                MessageBox.confirm("您好，您还未登录账号，请登录账号","提示").then(action =>{
                    if(action == "confirm"){
                        this.$router.push("/Password_register")
                    }
                }).catch(err => {
                    if(err =='cancel'){
                        this.$router.push("/")
                    }
                })
            }else {
                let This=this
                //存入参数
                let params = {
                    member_id:this.$store.state.index.data.data.member_info.member_id,
                    gid : this.gid
                };
                
                // name 是当前接口名称存在store中的key
                request.AJAX(this.$AjaxUrl.followgoods,params,"followgoods",This).then(()=>{
                            if(this.$store.state.followgoods.data.data.done == true ){
                                this.noCollect = false;
                                this.isCollect1 = true
                                Toast(this.$store.state.followgoods.data.data.msg)
                            }else{
                                this.noCollect = false;
                                this.isCollect1 = true
                                Toast("您已经收藏过了")
                            }
                            
                })

            }    
            
        },
        fanhui(){
            this.$router.go(-1)
        },
        click_box(a){
            for(var i = 0 ; i < this.fukuan.length ; i++){
                this.fukuan[i].message = false;
            };
             this.fukuan[a].message = true;
        },
        fn(a){
            this.popupVisible = ! this.popupVisible
        },
        goodsDetail() {
            let This=this
            this.gid = This.$route.query.gid
            this.member_id = this.$store.state.index != undefined ? this.$store.state.index.data.data.member_info.member_id : ''
            //存入参数
            let params = {
                gid : this.gid,
                member_id:this.member_id 
            };
            var name = "detail"
            // name 是当前接口名称存在store中的key
            request.AJAX(this.$AjaxUrl.detail,params,name,This).then(()=>{
                this.particulars = this.$store.state.detail.data.data.goods_info
                this.goods_detail_price = this.particulars.goods_price
                this.banners = this.$store.state.detail.data.data.goods_info.banners
                this.classifyList = this.$store.state.detail.data.data.list;
                this.goods_body = this.$store.state.detail.data.data.goods_info.goods_body
                this.evaluate =  this.$store.state.detail.data.data.goods_info.comments
                this.shopId = this.$store.state.detail.data.data.goods_info.vid
                if(this.$store.state.detail.data.data.goods_info.comments != undefined){
                    this.service_lists[4].ser_contain ="("+this.$store.state.detail.data.data.goods_info.comments.count+")" 
                    for(var i = 0; i<  this.$store.state.detail.data.data.goods_info.comments.geval_scores ; i++){ // 评分星星
                        this.imgs[i].img = img1
                    } 
                }
                for(var i = 0 ; i < this.$store.state.detail.data.data.goods_info.storeinfo.store_info.praise_rate ;i++){
                    this.store_deses.push({img: hart})
                }
                this.imgs_11 = this.$store.state.detail.data.data.goods_info.storeinfo.store_info.store_label
                this.vid = this.$store.state.detail.data.data.goods_info.vid
            })
            // 判断登录的用户是否收藏
            if (this.$store.state.index != undefined) { // 当用户登录的时候
                // this.hascollect = this.$store.state.detail.data.data.goods_info.favflag
            }            
         

        },
        nowbuy(a,b) {
            var This = this;
            if(a.ser_name == "保障" ){
                return
            }else if(a.ser_name == "评论"){
                if(this.$store.state.detail.data.data.goods_info.comments_count == 0){
                        Toast("暂时没有评论。。。")
                }else{
                    this.$router.push({ name: 'AllEvaluation', params: { gid: This.$route.query.gid}})
                }
                return
            }else if(a.ser_contain == "培训地址"){
                return
            }
            this.isNowBuy = !this.isNowBuy
            if (a == 2) {
                //加入购物车按钮
                this.shopButton = true
                // 立即购买按钮
                this.buyButton = false
            }    
            if(a == 1){
                this.select = true
                this.select1 = false
                this.select2 = false
                if(b == 1){
                    this.shopButton = true
                }else{
                    this.buyButton = true
                }
                // // 立即购买
                // this.buyButton = true
                // // 加入购物车
                // this.shopButton = false
            }else if(a.ser_contain == "选择服务类型"){
                this.select1 = true
                this.select = false
                this.select2 = false
            }else if(a.ser_contain == "服务参数"){
                this.select2 = true
                this.select = false
                this.select1 = false
            }
            else {
                this.select = true
                this.select1 = false
                this.select2 = false
                // // 立即购买
                // this.buyButton = true
                // // 加入购物车
                // this.shopButton = false
            }
            
        },
        subtract(){        //点击减少商品数量
            if(this.quantity>0){
                this.quantity--;
                this.goods_detail_price = Number(this.goods_detail_price) - Number(this.particulars.goods_price)
                this.goods_detail_price = this.$options.filters['left_twopoint'](this.goods_detail_price)
            }else{
                this.quantity = 0;
            }
        },
        add(){              //点击增加商品数量
            this.quantity++
            this.goods_detail_price = Number(this.goods_detail_price) + Number(this.particulars.goods_price)
            this.goods_detail_price = this.$options.filters['left_twopoint'](this.goods_detail_price)
        },
        fenxiang(){         //对接微信的jdk
            let This=this
            this.gid = This.$route.query.gid
            //存入参数
            var wqurl= encodeURIComponent(window.location.href.split('#')[0]);
	            wqurl= encodeURIComponent(wqurl);
            let params = {
                gid : this.gid,
            };
            var name = "weixin"
            // name 是当前接口名称存在store中的key
            
            request.AJAX("http://www.horizou.cn/cmobile/index.php?app=jssdk&mod=getshareconfig&url="+wqurl,params,name,This)
            .then(()=>{
                let ning = This.$store.state.weixin.data.data.config
                wx.config({
                    
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
                    appId: ning.appId, // 必填，企业微信的corpID
                    timestamp: ning.timestamp, // 必填，生成签名的时间戳
                    nonceStr: ning.nonceStr, // 必填，生成签名的随机串 必填，生成签名的随机串
                    signature: ning.signature, // 必填，签名
                    jsApiList: [ 'updateTimelineShareData',
                                    'updateAppMessageShareData',
                                    'onMenuShareAppMessage',
                                    'onMenuShareTimeline'
                                ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                })

                wx.checkJsApi({
                    jsApiList: [ 'updateTimelineShareData',
                                    'updateAppMessageShareData',
                                    'onMenuShareAppMessage',
                                    'onMenuShareTimeline'
                                ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                    success: function(res) {
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                        // alert(JSON.stringify(res));
                    },
                    error:function(res){
                        // alert(res);
                    }
                }),
                wx.ready(function(){
                    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                    console.log("您已经进入到微信回调中")
                    wx.onMenuShareAppMessage({
                            title: '121212', // 分享标题
                            desc: '付水电费第三方第三方递四方速递非得', // 分享描述
                            link: 'http://192.168.2.252:7779/#/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: encodeURI('../../build/logo.png'), // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                                console.log("用户确认分享后执行的回调函数")
                            },
                            cancel: function () {
                                console.log("用户取消分享后执行的回调函数")
                                // 用户取消分享后执行的回调函数
                            }
                    })
                    var shareData = {
                        title: '分享标题', // 分享标题
                        desc: '分享描述', // 分享描述
                        link: 'http://www.baidu.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://www.baidu.com/static/addHtml/images/iterationTheme/common/logo_new.png', // 分享图标
                        success: function (res) {
                        // 设置成功
                        },
                        error:function(res){

                        }
                    }

                    //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
                    wx.updateAppMessageShareData(shareData);
                    //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
                    wx.updateTimelineShareData(shareData);
                    console.log("您已经进入到微信回调中2")
                    wx.onMenuShareTimeline({
                            title: '121212', // 分享标题
                            desc: '付水电费第三方第三方递四方速递非得', // 分享描述
                            link: 'http://192.168.2.252:7779/#/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: encodeURI('../../build/logo.png'), // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                                console.log("用户确认分享后执行的回调函数")
                            },
                            cancel: function () {
                                console.log("用户取消分享后执行的回调函数")
                                // 用户取消分享后执行的回调函数
                            }
                    });
                     console.log("您已经进入到微信回调中3")
                });
                console.log(wx)     
            }) 
            
            wx.error(function(res){
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    alert(res.errMsg);
            })
        },
        shopping_cart(a){   //加入购物车
            if(a == 1){
                this.isNowBuy = !this.isNowBuy
                this.select = false;
                return
            }
            if(this.$store.state.index == undefined){
                MessageBox.confirm("您好，您还未登录账号，请登录账号","提示").then(action =>{
                    if(action == "confirm"){
                        this.$router.push("/Password_register")
                    }
                }).catch(err => {
                    if(err =='cancel'){
                        this.$router.push("/")
                    }
                })
            }else if(a == 100){
                this.$router.push("/shopping")
            }else{
                let This=this
                this.gid = This.$route.query.gid
                this.member_id = this.$store.state.index.data.data.member_info.member_id
                //存入参数
                let params = {
                    gid : this.gid,
                    quantity:this.quantity,
                    member_id : this.member_id
                };
                // name 是当前接口名称存在store中的key
                request.AJAX(this.$AjaxUrl.add,params,"add",This).then(()=>{
                    
                })
                this.isNowBuy = !this.isNowBuy
                this.select = false
                Toast('加入购物车成功');
            }
      
        },
        immediately(){   //立即购买
            if(this.$store.state.index == undefined){
                MessageBox.confirm("您好，您还未登录账号，请登录账号","提示").then(action =>{
                    if(action == "confirm"){
                        this.$router.push("/Password_register")
                    }
                }).catch(err => {
                    if(err =='cancel'){
                        this.$router.push("/")
                    }
                })
            }else{
                let This=this
                this.gid = This.$route.query.gid  // 商品gid
                // goods_sum // 商品数量
                // this.$router.push({name: 'sureOrderBuy', params: {gid: this.gid, goods_sum: this.quantity, ifcart: 0}});
                this.$router.push({name: 'sureOrderBuy', params: {buy_list:[this.gid+'|'+this.quantity], ifcart: 0}});
            }
        },
        goShop (par) {
          this.$router.push({name: 'storeDetail', query: { vid: this.shopId}});
        },
        goShop1(){
            var a =  "https://horizou.udesk.cn/im_client/"	
			window.location.href=a
        },
        close () {
            this.coupon = false
        },
        renderShopCoupons () {
                this.member_id = this.$store.state.index.data.data.member_info.member_id
                let This=this
                let params = {
                    vid: this.shopId,
                    member_id:this.member_id 
                };
                request.AJAX(this.$AjaxUrl.redListByVid,params,"redListByVid",This).then(()=>{
                    this.shopCouponsLists = this.$store.state.redListByVid.data.data.list
                })
        },
        getShopCoupons (par) {
                this.isGetCoupons = false
                // this.$refs.couponCss[0].style.background = '#8d8d8d'
                this.member_id = this.$store.state.index.data.data.member_info.member_id
                let This=this
                let params = {
                    red_id: par,
                    member_id:this.member_id 
                };
                request.AJAX(this.$AjaxUrl.sendRed,params,"sendRed",This).then(()=>{
                    let msg = this.$store.state.sendRed.data.data.message
                    Toast( {
                        message: msg,
                        duration: 3000,
                        className: 'getCoupons'
                    } );               
                })
             
        }
    
    },
     filters: {
        checkedMoney(money) {
            if (money != undefined)
             return money.substring(0, money.lastIndexOf('.'))
        },
        left_twopoint(money) {
            return money.toFixed(2);
        },
    }
}

var a = 100;
</script>

<style lang="less" scoped>
.getCoupons {
    z-index: 9999 !important;
    top: 85%;
    color: green;
}
.mint-toast {
    z-index: 9999;
}
.ling{
    margin-right: 10px;
    display: inline-block;
    color: rgba(197,197,197,1);

}
.store {
    width: 686px/2px;
    height: 98px/2px;
    margin: auto; 
    padding-top: 6px;
}
.store div:nth-child(1) {
    float: left;
    img {
        width:98px/2px;
        height: 98px/2px;
    }
}
.kuai{
     height: 98px/2px; 
}
.store div:nth-child(2) {
    width: 285px;
    height: 98px/2px; 
    float: right;
    span:nth-child(1) {
        height:98px/4px;;
        font-size:28px/2px;
        font-family:Source Han Sans CN;
        font-weight:500;
        line-height:98px/4px;;
        color:rgba(65,65,65,1);
        opacity:1;
        width: 200px;overflow: hidden;
        display: block;
    }
    .pingfen {
        display:inline-block;
        font-size: 12px; width: 200px;
        color: #8D8D8D;height: auto;
        span {
            display:inline-block;width: auto;height: auto;;
            img {
                width: 12px;
                height: 11px;
                float: right;
                margin-right: 3px;
                display:inline-block;
            }
        }
    }

}
.dian {
    font-size:24px/2px;
    font-family:Source Han Sans CN;
    font-weight:400;
    line-height:35px;
    color:rgba(141,141,141,1);
    opacity:1;
    float: right;
    img {
        float: right;
        width: 6px;
        height: 11px;
        margin-top: 13px;
        margin-left: 10px;
    }
}
.box_1{
    div{
        width: 1005;height: 100%;text-align: center;font-size: 16px;
        padding-top: 18px;font-weight: 600;
    }
    ul{
        li{
            width: 100%;font-size:14px;text-align: left;
            border-bottom: 1px solid rgba(237,237,237,1);
            span:first-child {
                width: 70px;display: inline-block;
            }
            span:last-child{
                width: 200px; display: inline-block;vertical-align: top;color:rgba(141,141,141,1);
            }
            span{
                 margin:16px 0;
            }
        }
    }
}
.beijing{
    background: url("../assets/scoped/tp.png") no-repeat;
    background-size: 100%;
    width: 80px!important;
    height: 27px!important;
    display: inline-block;
    margin-left: 10px;
    color:rgba(238,117,60,1);
    font-size:12px;
    line-height: 27px;
    text-align: center;
}
.html_1{
    width: 100%;
}
.html_1 /deep/ img{
    width: 100%; display: block;
}
.sure_button1{
    width: 50%!important;
    height: 40px;
    background: #EE753C;
    opacity: 1;
    border-radius: 22px;
    border: 0px;
    float: left;
    color: #fff;
    font-size: 16px;
}
.sure_button{
    width: 686px/2!important;
    height: 40px;
    background: #EE753C;
    opacity: 1;
    border-radius: 22px;
    border: 0px;
    float: left;
    color: #fff;
    font-size: 16px;
    position: absolute;
    bottom: 20px;
    left: 0.48rem;
}
.sure_button2{
    width: 50%!important;
    height: 40px;
    background:rgba(234,73,64,1);
    opacity: 1;
    //border-radius: 22px;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    border: 0px;
    float: left;
    color: #fff;
    font-size: 16px;
}
.order_cancel {
    position: relative;
    width: 376px;
    height: 500px;
    border-radius: 10px 10px 0px 0px;
    .title{
        width: 100%;position: relative;;
        .title_text{
           display: flex;
           justify-content:center;
           font-size: 16px;
           padding-top: 16px;
        }
        .imgs{
            position: absolute;
            top: 16px;
            right: 16px;
            width: 0.56rem;
            height: 0.56rem;
            opacity: 1;

        }
    }
    .title_box{
        margin: 33px 16px 0;max-height: 350px;
        overflow-y: scroll;
        .juan{
            color:rgba(141,141,141,1);
            font-size: 14px;
            margin-bottom: 28px;
        }
    }
}
.box {
    width: 343px;
    height: 40px;
    background: #EE753C;
    opacity: 1;
    border-radius: 22px;
    border: 0px;
    position: absolute;
    bottom:25px;
    left: 18px;
    color: #fff;
    font-size: 16px;
}
.goodsdetail {
    width: 100%;
    min-height: 100vh;
    background:rgba(245,245,245,1);
    opacity:1;
    overflow: hidden;
    position: relative;
}
.head_nav {
    position: absolute;
    width: 343px;
    height: 44px;
    opacity: 1;
    z-index: 1;
    margin-left: 16px;
    ul li {
        width: 32px;
        height: 31px;
        border-radius: 50%;
        background: #000;
        opacity: 0.2;
        float: left;
        text-align: center;
        margin-top: 10px;
        line-height: 31px;
    }
    ul li:nth-child(1) {
        img {
            width: 11px;
            height: 18px;
            opacity: 1;
        }
    }
    ul li:nth-child(2) {
        margin-left: 234px;
        img {
            width: 20px;
            height: 18px;
        }
    }
    ul li:nth-child(3) {
        margin-left: 10px;
        img {
            width: 20px;
            height: 18px;
        }
    }
}
.goodsdetail /deep/ .banner {
    position: relative;
    width:750px/2px;
    height:420px/2px;
    img {
    width:750px/2px;
    height:420px/2px;
    }
}
.banner /deep/ .mint-swipe-indicators {
    position: absolute;
    bottom: 31px/2px;
    left: 80%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    overflow: hidden;
}
.banner /deep/ .mint-swipe-indicators .mint-swipe-indicator {
    background: rgb(255, 255, 255, 1);
    opacity: 1;
}
.banner /deep/ .mint-swipe div:nth-child(2) .is-active {
    background:rgba(238,117,60,1);
    opacity: 1;
}
.showAll:hover {
    width: auto;
}
.goods_price {
    position: relative;
    height: 212px/2px;
    width: 100%;
    background: #ffff;
    margin-bottom: 25px;
    div:nth-child(1) {
        width: 686px/2px;
        height: 208px/2px;
        margin: 2px 9px;
        left: 0px;
        top: 10px;
        span {
                display: block;
            }
        div:nth-child(1) {
            position: absolute;
            width: 70%;
            height: 48px/2px;
            right: 0px;
            .zhe{
                width:116px/2px;
                height:42px/2px;
                line-height: 21px;
                opacity:1;
                color: #ffffff;
                border-radius:27px/2px;
                font-size: 12px;
                text-align: center;
                margin-top: 4px;
                background: red;
            }
            .pri {
                position: absolute;
                width: 124px;
                height: 48px/2px;
                height: 24px;
                left: 63px;
                top: 0px;
                font-size:48px/2px;
                font-family:Source Han Sans CN;
                font-weight:500;
                line-height:48px/2px;
                text-align: left;
                color:rgba(234,73,64,1);
                opacity:1;
            }
            .yuanjia{
                text-align: left; color:rgba(234,73,64,1);  font-size:48px/2px;
            }
            del:nth-child(3) {
                position: absolute;
                width: 67px;
                height: 28px/2px;
                right: 0px;
                color:rgba(197,197,197,1);
                bottom: 0px;
                font-size: 14px;
                text-align: left;
            }
        }
        div:nth-child(2) {
        position: absolute;
        height: 60px;
        top: 48px;
        bottom: 0px;
        width: 90%;
            span:nth-child(1){
                position: absolute;
                font-size:32px/2px;
                bottom: 35px;
                height: 20px;
                line-height: 20px;
                font-family:Source Han Sans CN;
                font-weight:500;
                height: 25px;
                text-align: left;
                margin-left: 7px;
                opacity:1;
                width: auto;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            span:nth-child(2) {
                ul {
                    position: absolute;
                    width: 100%;
                    height: 20px;
                    bottom: 10px;
                    li {
                        float: left;
                        text-overflow:ellipsis;
                        height: 20px;
                        line-height: 14px;
                        font-size:12px;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        line-height:20px;
                        color:rgba(197,197,197,1);
                        opacity:1;
                        text-align: center;
                        width: 40%;
                        border-right: 0.5px solid rgba(197,197,197,1);
                    }
                    li:first-child {
                        text-align: center;
                        width: 18%;
                    }
                    li:last-child {
                        border-right: none;
                        width: 40%;
                    }
                }
            }
        }
    }
}
.img_guan{
        width: 21px;
        height: 21px;
        opacity: 1;
        float: right;
        margin-top: 10px;
}
.imgs {
    width: 6px;
    height: 11px;
    position: absolute;
    top:5px;
    right: 0px;display: inline-block;
}
.coupon {
    position: relative;
    height: auto;
    background: #fff;
    width: 100%;
    margin-top: 10px;
    padding: 12px 0;
    div:nth-child(1) {
        width: 686px/2px;
        height: auto;
        margin: auto;

        div:nth-child(1) {
            display: inline-block;
            height: 30px;width: auto;
            vertical-align: top;
            span {
                display: inline-block;
            }
            span:nth-child(1) {
                vertical-align: top;
                height: 30px;
                width: auto;
                font-size:28px/2px;
                font-family:Source Han Sans CN;
                font-weight:400;
                line-height:30px;
                color:rgba(197,197,197,1);
                opacity:1;
            }

        }
        div:nth-child(2) {
            display: inline-block;
            width: 200px;
            height: auto;
            font-size: 12px;
            line-height: 30px;
            vertical-align: top;
            span:nth-child(1) {
                height: 20px;
                line-height: 20px;
                width: 170px;
                color: #EE753C;
                height: 30px;
                text-align: top;
                display: inline-block;
            }
            span:nth-child(2) {
                width: 170px;
                height: 30px;
                line-height: 30px;
                right: 0px;
                color: #EE753C;
                display: inline-block;
                p{
                    display: inline-block;
                }
            }
        }
    }
}
.lingjuan{
    display: inline-block;float: right;
    position: relative;
    width: 80px;
    height: 20px;
    line-height: 22px;
    color: rgba(197,197,197,1);
    font-size: 12px;text-align: right;
}
.service_list {
    position: relative;
    width: 100%;
    margin-top: 10px;
    ul {
        li {
            background: #FFFFFF;
            float: left;
            height: 44px;
            width: 100%;
            border-bottom:1px solid rgba(226, 222, 222, 0.2); 
        }
        li:first-child {
            margin-bottom: 10px;
        }
        li:last-child {
            margin-top: 10px;
            margin-bottom: 0px;
        }
        li span:nth-child(1) {
            position: absolute;
            margin-left: 16px;
            width:57px/2px;
            height:44px;
            font-size:28px/2px;
            font-family:Source Han Sans CN;
            font-weight:400;
            line-height:44px;
            color: #C5C5C5;
            opacity:1;
        }
        li span:nth-child(2) {
            position: absolute;
            width: 302px;
            height: 44px;
            font-size: 15px;
            padding-left: 54px;
            line-height: 44px;
            text-align: left;
            img {
                top:14px;
            }
            span:nth-child(1) {
                width:206px/2px;
                height:28px/2px;
                font-size:28px/2px;
                font-family:Source Han Sans CN;
                font-weight:400;
                line-height:35px/2px;
                color:rgba(65,65,65,1);
                // letter-spacing:60px;
                opacity:1;
            }
        } 
    }
}
.clear {
    clear: both;
}
.comment {
    position: relative;
    width: 100%;
    height: 305px/2px;
    margin-top: 0px;    
    float: none;
    background: #fff;
    div:first-child {
        width: 343px;
        height: 152.5px;
        margin: 0 auto;
        ul {
            width: 100%;
            height: 106px/2px;
            li {
                float: left;
                margin-left: 4px;
                width: auto;
                height: 20px;
                border-radius: 13.5px;
                background:#ffc0cb66;
                font-size: 12px;
                font-family:Source Han Sans CN;
                font-weight:400;
                line-height:21px;
                color:rgba(51,51,51,1);
                padding: 0 15px;
                margin-top: 12.5px;
                opacity:1;
            }
        }
    }
    .user_infor {
        width: 200px;
        height: 50px;
        float: left;
       img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            margin-top: 0px;
        }
       span:nth-child(2) {
            height:22px; width: 135px;
            font-size:28px/2px;
            font-family:Source Han Sans CN;
            font-weight:400;
            line-height:17px;
            color:rgba(65,65,65,1);
            opacity:1;display: inline-block;
            float: right;
       }
       span:nth-child(3) {
            height: 25px;;width: 135px;
            float: left;display: inline-block;
            font-size:12px;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(197,197,197,1);
            opacity:1;
            margin-left: 51px;

       }
    }
    .xing {
        float: right;
        width: auto;
        height: 15px;
        margin-top: -4px;
        img {
            width: 16px;
            height: 15px;
            margin-right: 4px;
        }
    }
    .comment_des {
        width:100%;
        height:auto;
        padding-top: 10px;
        font-size:28px/2px;
        font-family:Source Han Sans CN;
        font-weight:400;
        line-height:40px/2px;
        color:rgba(51,51,51,1);
        opacity:1;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
}
.goods_store {
    position: relative;
    width: 100%;
    height: 81px;
    margin: 10px 0px;
    background: #fff;
    margin-top: 10px;
    padding-top: 17px;
    margin-bottom: 50px;
}
.goodsdetail /deep/ .mint-popup-bottom {
    border-radius: 10px 10px 0 0;
}
.order_cancel {
    width: 376px;
    height: 500px;
    border-radius: 10px 10px 0px 0px;
}
.now_buy_body {
    width: 90%;
    margin: 0 auto;
    div:nth-child(1) {
        width: 100%;
        height: 142px;
        img:first-child {
            width: 110px;
            height: 110px;
            opacity: 1;
            border-radius: 10px;
            float: left;
            margin-top: 16px;
        }
        ul {
            height: 75px;
            float: left;
            margin-left: 10px;
            margin-top: 56px;
            li {                
                display: block;
                font-family:Source Han Sans CN;
                height:12px;
                font-size:12px;
                font-weight:400;
                opacity:1;
                margin-bottom: 10px;
            }
            li:nth-child(1) {
                height:18px;
                font-size:13px;
                color:rgba(234,73,64,1);
            }
            li:nth-child(2) {
                color:rgba(141,141,141,1);
            }
            li:nth-child(3) {
                color:rgba(51,51,51,1);
            }
        }
        img:nth-child(3) {
            width: 21px;
            height: 21px;
            opacity: 1;
            float: right;
            margin-top: 10px;
        }
    }
    .buy_type {
        width: 100%;
        margin-top: 10px;
        P {
            height: 14px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(51,51,51,1);
            opacity: 1;
        }
        .type_checked,ul {
            width: 100%;
            margin-top: 15px;
            li {
                width:75px;
                height:32px;
                background: #F5F5F5;
                opacity:1;
                border-radius:16px;
                float: left;
                margin-right: 10px;
                text-align: center;
                line-height:24px;
                span {
                    height:14px;
                    font-size:14px;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                   
                    color:rgba(51,51,51,1);
                }
            }
            .color{
                background:rgba(255,255,255,1);
                border:1px solid rgba(238,117,60,1);
                span{
                    color: #EE753C;
                }
            }
        }
    }
    .service_type {
        width: 100%;
        height: 20px;
        margin-top: 70px;
        p {
            height: 14px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            opacity: 1;
        }
        ul {
                width: 100%;
                margin-top: 15px;
            li{
                width: 90px;
                height: 32px;
                border: 1px solid rgba(238,117,60,1);
                border-radius: 16px;
                line-height: 25px;
                text-align: center;
                span {
                    height: 14px;
                    font-size: 14px;
                    color: rgba(238,117,60,1);
                }
            }
        }
    }
}
.buy_count {
    width: 100%;
    height: 30px;
    margin-top: 80px;
    span:first-child {
            height: 14px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 14px;
            opacity: 1;
    }
    ul {
        float: right;
        li {
            width:33px;
            height:30px;
            background:rgba(245,245,245,1);
            opacity:1;
            text-align: center;
            margin-right: -6px;
            font-size: 14px;
            line-height: 30px;
            span {
                color:rgba(197,197,197,1);
            }
        }
        li:nth-child(2){
        width:38px;
        height:30px;
            span {
                color: #333333;
            }
        }
    }

    
}

.goods_detail_foot {
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #8080802e;
}
.foot_body {
    width: 343px;
    height: 100%;
    margin: 0 auto;
    ul li {
        float: left;
        font-size:10px;
        font-family:Source Han Sans CN;
        font-weight:400;
        margin-top: 7.5px;
        margin-right: 22px;
        span {
            display: block;
            padding-top: 4px;
            color: #8D8D8D;
        }
        img {
            width: 18px;
            height: 16px;
        }
    }
    .goods_buy {
        span {
            display: block;
            float: right;
            width: 90px;
            height: 40px;
            border-radius:20px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            margin-top: 5px;   
            border: 1px solid; 
        }
        span:nth-child(1) {
            background: #EE753C;
            color: #fff;
        }
        span:nth-child(2) {
            background: #fff;
            color: #EE753C;
            margin-right: 6px;
            border-color: #EE753C;
        }
    }
}

.shopCoupon {
    width: 90%;
    height: 95px;
    background-color: #EE753C;
    font-size: 12px;
    // margin: 10px 15px;
    margin: 0 auto;
    position: relative;
    ul {
        position: absolute;
        li {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: block;
        background-color: #fff;
        margin-left: -4px;
        }
    }
    .point2 {
         right: -4px;
    }
    .cou_left {
        width: 25%;
        float: left;
        height: 70px;
        margin: 15px 10px;
        text-align: center;
        .icon_price {
            font-size: 18px;
            color:rgba(255,255,255,1);

        }
        .cou_price {
            font-size: 40px;
            color:rgba(255,255,255,1);
        }
        .use_condition {
            font-size:12px;
            color:rgba(255,255,255,1);
            opacity:1;
        }
    }
    .cou_right {
        width: 60%;
        height: 70px;
        float: right;
        margin: 15px 10px;
        position: relative;
        .cou_usedate {
            margin-left: -5px;
        }

        .use_date {
        padding-top: 20px;

        }
        p {
        font-size:12px;
        color:rgba(255,255,255,1);
        opacity:1;
        }
        .getCoupon {
            width: 55px;
            height: 25px;
            line-height: 25px;
            background:rgba(255,255,255,1);
            opacity:1;
            border-radius: 15px;
            text-align: center;
            color: #EE753C;
            position: absolute;
            top:20%;
            right: 0px;
        }
        .getCoupon2 {
            color: #8d8d8d;
            width: 55px;
            height: 25px;
            line-height: 25px;
            background:rgba(255,255,255,1);
            opacity:1;
            border-radius: 15px;
            text-align: center;
            position: absolute;
            top: 20%;
            right: 0px;
        }
        .css_point1,.css_point2 {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            display: block;
            background-color: #fff;
            position: absolute;
        }
        .css_point1 {
            top: -25px;
            left: 85px;
        }
        .css_point2 {
            bottom: -20px;
            left: 85px;
        }
        
    }
   
}
/deep/ .mint-toast {
    z-index: 9999 !important;
    top: 80% !important;
    color: green;
    position: fixed;
    max-width: 80%;
    border-radius: 0.133333rem;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    z-index: 111000;
    -webkit-transition: opacity .3s linear;
    transition: opacity .3s linear;
    }
</style>
