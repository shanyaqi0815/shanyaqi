<template>
    <div class="sure_order_buy">
        <div class="order_shop" :key="index" v-for="(list, index) in store_cart_list">
            <div class="shop_title">
                <img :src="dianpu" alt="">
                <span>{{ list.store_name }}</span>
                <span class="right_arrow"></span>
            </div>
            <div :key="index" v-for="(good, index) in list.goods_list">
                <div class="shop_des">
                    <img :src="good.goods_image" alt="">
                    <span>{{ good.goods_name }}</span>
                    <span>初级</span>
                    <span>￥ {{ good.goods_price}}</span>
                    <span>x {{ good.goods_num }}</span>
                </div>
                <!-- <div class="goods_number">
                    <span>购买数量</span>
                    <div class="zhengjia">
                        <div @click="subtract(store_cart_list, good)">-</div>
                        <div>{{ good.goods_num }}</div>
                        <div @click="add(store_cart_list, good)">+</div>
                    </div>
                </div> -->
            </div>
            <div class="select_service">
                <ul>
                    <li><span>服务说明</span><span class="service_contain_notice">该商品不持支7天无理由退货</span></li>
                    <li><span>发票</span><span class="right_arrow right_left"></span><span class="service_contain">不开发票</span></li>
                    <li @click="get_coupons(list.store_coupon_list)"><span>店铺优惠券</span><span class="right_arrow right_left"></span><span class="service_contain service_contain_notice" v-if="list.store_coupon_money">省{{ list.store_coupon_money | fix_coupon}}元优惠券</span></li>
                    <li><span>留言</span><input type="text" value="" @blur="get_leave_message(list.goods_list[0].vid, $event)" placeholder="建议留言前先与商家沟通确认"></li>
                </ul>
            </div>
            <div class="last_style">
                <span>￥{{ list.store_total_price }}</span>
                <span>小计:</span>
                <span>共{{ list.store_total_num }}件</span>
            </div>
        </div>

        <div class="select_service">
            <ul>
                <li><span>选择支付方式</span><span class="right_arrow right_left"></span><span class="service_contain">在线支付</span></li>
            </ul>
        </div>
        <div class="select_service">
            <ul>
                <li @click="get_coupons()"><span>平台优惠券</span><span class="right_arrow right_left"></span><span class="service_contain" v-if="plat_coupon_money">省{{plat_coupon_money | fix_coupon}}元优惠券</span></li>
            </ul>
        </div>
        <div class="select_service">
            <ul>
                <li><span>商品金额</span><span class="service_contain">￥ {{goods_total_price}}</span></li>
                <li><span>店铺优惠</span><span class="service_contain notice_color" v-if="all_store_couponMeny">- ￥{{all_store_couponMeny}}</span></li>
                <li><span>平台优惠</span><span class="service_contain notice_color" v-if="plat_coupon_money">- ￥{{plat_coupon_money}}</span></li>
                <li><span>实际付款</span><span class="service_contain notice_color">￥{{real_price}}</span></li>
            </ul>
        </div>
        
        <!-- <div class="last_li" @click="jifen()">
            <span>积分</span><span class="jifen">{{points_max_use}}积分可用，可抵扣{{points_max_use*0.01 | chckedMoney}}元</span>
            <img :src="checked" v-if="isJifen == true">
            <img :src="nohecked" v-else>
        </div> -->
        <div class="no_real_name" @click="real_name()">
            <img :src="checked" v-if="is_real_name == true">
            <img :src="nohecked" v-else>
            <span>匿名购买</span>
        </div>
        <div class="last_sure" @click="submitOrder">
            <span>合计：</span>
            <span class="notice_color">￥{{real_price}}</span>
            <span>提交订单</span>
        </div>
        <!-- 优惠券领取 -->
        <mt-popup v-model="is_coupon" position="bottom">
            <coupon :coupon_lists="coupon_lists" @get_select_coupon="get_select_coupon"></coupon>
        </mt-popup>
        <!-- 确认金额弹出框 --> 
        <mt-popup v-model="isSureMoney" position="bottom" popup-transition="popup-fade">
            <div class="sure_money">
                <div class="sure_head"><p @click="submitOrder(real_price)"></p><span>确认付款</span></div>
                <div class="sure_money">
                    <span>￥</span><span>{{real_price}}</span>
                </div>
                <div class="select_list" @click="check_type(member_id)">
                    <span>付款方式</span>
                    <p></p>
                    <span>{{ default_buy_type }}</span>
                </div>
                <button class="sure_button" @click="now_buy">立即支付</button>
            </div>
        </mt-popup>
        <!-- 选择付款方式 -->
        <mt-popup v-model="istype_buy_list" position="bottom" popup-transition="popup-fade">
            <div class="sure_money">
                <div class="sure_head"><p @click="check_type()"></p><span>选择付款方式</span></div>
                <ul class="type_buy_list">
                    <li :key="index" v-for="(list, index) in lists" v-show="list.status == true" @click="select_type_list(index, list.name)">
                        <img :src="list.logo" alt="">
                        <span>{{ list.name }}</span><span v-show="list.type == '储蓄卡'">({{list.card}})</span>
                        <img v-if="index == selectIndex" :src="checked" alt="">
                        <img v-else :src="nohecked" alt="">
                        <!-- <img :src="" alt=""> -->
                    </li>
                </ul>
                
                <router-link to="addBankCard" tag="span">
                    <div class="add_bank_cart">
                        <span>添加银行卡支付</span>
                        <p></p>
                    </div>
                </router-link>
            </div>
        </mt-popup>
        <!-- 是否显示支付密码状态 -->
        <vPay :vpays = "vpays_infomation" ref="password" @pay_sccuess="pay_sccuess"></vPay>
        <!-- 实名认证弹出框 -->
        <mt-popup v-model="isVerified" position="center" popup-transition="popup-fade">
            <div class="sure-verified">
                <div>{{verifiedMsg}}</div>
                <div class="sure-button">
                    <button @click="cancelVerified">取消</button>
                    <button @click="verified">实名认证</button>
                </div>
                
            </div>
            
        </mt-popup>
    </div>
</template>

<script>
import { MessageBox , Popup,Toast} from 'mint-ui';
import dianpu from '@/assets/dianpu.png'
import goodsImg from '@/assets/shopping.png'
import checked from '@/assets/refunds4.png'
import nohecked from '@/assets/scoped/refunds5.png'
import request from "../common/request"
import log from '@/assets/ptimg5.png'
import vPay from '@/components/myPurse/vPay'
import coupon from '@/components/orderDetail/coupon'
export default {
    data() {
        return {
            dianpu: dianpu,
            goodsImg: goodsImg,
            checked: checked, // 选择
            nohecked: nohecked, // 未选择
            store_cart_list: {}, // 店铺商品信息
            verd: '', // 店铺红包
            goods_total_price: 0, // 所有商品金额总数
            real_price: 0, // 实际金额 商品原价总额 - 优惠金额
            isJifen: true, // 是否使用积分抵扣
            is_real_name: true, // 是否匿名购买
            points_max_use: '', // 当前用户的积分
            store_total_num: 0, // 店铺商品总数量
            store_total_price: 0, // 店铺商品总价钱
            isSureMoney: false, // 确认金额弹出框
            isVerified:false,//实名认证弹出框
            verifiedMsg:'',//实名认证提示信息
            istype_buy_list:false, //付款方式 
            member_id: '', // 用户id
            lists: {}, // 支付方式
            list_card: {}, // 银行卡支付
            default_buy_type: '余额', // 默认付款方式余额
            log: log, // 临时log
            selectIndex: null, // 付款方式数组下标
            pay_sn: '', // 订单编号
            pay_name: 'online', // 支付方式
            ifcart: '', // 订单由来，购物车1 还是 商品详情0
            is_pay: false,
            buy_list: [], // 请求头参数 cartId | 商品个数
            leave_message: [], // 店铺留言
            order_message: [], // 多家店铺留言容器
            vpays_infomation: [], //支付时的订单信息
            is_coupon: false, // 店铺优惠券
            coupon_lists: {}, //店铺，平台 容器
            plat_coupon: 0, // 平台优惠券
            plat_coupon_money: '', // 平台优惠金额
            store_coupon: [], // 平台优惠券
            all_store_couponMeny: '', // 店铺优惠的总和
            vid_contant: '',
            store_vid: [],
        }
    },
    components: {
        vPay,  // 支付
        coupon // 优惠券
    },
    methods: {
        subtract(store_list, good){        //点击减少商品数量
            if(good.goods_num>1){
                good.goods_num--;
                
            }else{
                good.goods_num=1;
            }
            this.total_prices(store_list, good)
        },
        add(store_list, good){              //点击增加商品数量
            good.goods_num++
            this.total_prices(store_list, good)
            // 页面初始化所有商品总价格 原价
        },
        total_prices(store_list, good) {          
            this.goods_total_price = ''
            for (var i in store_list) {
                // 清空原来数据 start
                store_list[i].store_total_num = '' 
                store_list[i].store_total_price = ''
                // 清空原来数据 end
                for(var j in store_list[i].goods_list) {
                    store_list[i].store_total_num =  Number(store_list[i].store_total_num) + Number(store_list[i].goods_list[j].goods_num)
                    store_list[i].store_total_price =  Number(store_list[i].store_total_price) + (Number(store_list[i].goods_list[j].goods_num)*Number(store_list[i].goods_list[j].goods_price))                           
                    store_list[i].store_total_price = this.$options.filters['chckedMoney'](store_list[i].store_total_price)                    
                }
                this.goods_total_price = Number(this.goods_total_price) + Number(store_list[i].store_total_price)
                this.goods_total_price = this.$options.filters['chckedMoney'](this.goods_total_price)
                var store_verd = store_list[i].store_coupon_list.redinfo_money == undefined ? 0 : store_list[i].store_coupon_list.redinfo_money
                this.real_price = Number(this.goods_total_price) - Number(store_verd) // 红包功能没有完善  真实价格 -= 优惠红包
                this.real_price = this.$options.filters['chckedMoney'](this.real_price)
            }
            // 更改buy_list 对应的cart_id | 商品数量
            for (var i = 0; i < this.buy_list.length; i++) {
                var get_local = this.buy_list[i].indexOf('|') // 获取特殊字符的下标
                var get_cart_id = this.buy_list[i].substr(0,get_local) // 获取数组cart_id
                if ( good.cart_id == get_cart_id ) {
                    this.buy_list[i] = get_cart_id + '|' + good.goods_num
                }
            }
        },
        getInformations () {
            var This = this
            // 用户id
            this.member_id = this.$store.state.index.data.data.member_info.member_id
            // 确认订单由来 1 购物车 0 商品详情
            this.ifcart = this.$route.params.ifcart
            this.buy_list = this.$route.params.buy_list
            //存入参数
            let params = {
                member_id : this.member_id,
                ifcart: this.ifcart,
                is_supplier: 0, // 是否批发，后端固定0
                buy_list: this.buy_list, // 购物车id|商品id 商品个数
            };

            request.AJAX(this.$AjaxUrl.confirm,params,"confirm",This).then(()=>{
                this.store_cart_list = this.$store.state.confirm.data.data.goods_info //店铺商品信息
                this.coupon
                this.points_max_use = this.$store.state.confirm.data.data.member_points
                for (var i in this.store_cart_list) {
                    // 页面初始化所有商品总价格 原价
                    var goods_total_price =Number(this.goods_total_price) + Number(this.store_cart_list[i].store_total_price)
                    this.goods_total_price = this.$options.filters['chckedMoney'](goods_total_price)
                    if (this.store_cart_list[i].store_total_price >= this.store_cart_list[i].store_coupon_list.redinfo_full) {
                        this.verd = this.store_cart_list[i].store_coupon_list.redinfo_money
                        this.real_price = Number(this.goods_total_price) - Number(this.verd) // 商品原价总额 - 优惠金额(目前定义为0)
                        this.real_price = this.$options.filters['chckedMoney'](this.real_price) // 价格样式过滤
                    } else {
                        this.real_price = this.goods_total_price
                    }
                    
                }
            })
        },
        jifen() { // 是否使用积分购买
            this.isJifen = !this.isJifen
        },
        real_name() { // 是否匿名购买
            this.is_real_name = !this.is_real_name
        },
        submitOrder() { // 提交订单 弹出框
            // 生成订单接口
            var This = this
            let params = {
                member_id:this.member_id,
                buy_list: this.buy_list,
                payment_code: 'online',
                ifcart: this.ifcart,
                order_message: this.order_message,
                coupon_choose: {
                    coupon:this.plat_coupon,
                    vcoupon:this.store_coupon
                }
            }
            request.AJAX(this.$AjaxUrl.submitorder, params, "submitorder", This).then(()=>{
                if (this.$store.state.submitorder.data.data.code != 200) {
                    this.isVerified  = !this.isVerified
                    this.verifiedMsg = this.$store.state.submitorder.data.data.message
                }else{
                    this.pay_sn = this.$store.state.submitorder.data.data.pay_sn
                    //确认付款金额
                    this.isSureMoney = !this.isSureMoney  
                }
                                   
            })
        },
        cancelVerified(){
            this.isVerified  = !this.isVerified 
             
        },
        verified(){
            this.$router.push('/Verified')
        },
        check_type(member_id) { // 选择支付方式
            var This = this
            this.isSureMoney = !this.isSureMoney
            this.istype_buy_list = !this.istype_buy_list
            if (member_id != undefined) { // 请求接口
                let params = {
                    member_id: this.member_id
                }
                // 获取支付
                request.AJAX(this.$AjaxUrl.methodList, params, 'methodList', This).then(()=>{
                    this.lists = this.$store.state.methodList.data.data.list
                })
            }
        }, 
        select_type_list(list_index, default_buy_type) { // 付款方式列表选择
            this.selectIndex = list_index
            this.default_buy_type = default_buy_type
            this.vpays_infomation = {
                card: this.lists[list_index].card,
                bankcode: this.lists[list_index].code,
                member_id: this.member_id,
                pay_sn: this.pay_sn,
                order_type: 'buy_pay'
            }
        },
        now_buy() {
            var This = this
            if (this.default_buy_type == '余额') {
                Toast({message: '不支持余额支付,请选择银行卡',                        
                       duration: 3000,
                       className: 'getCoupons'
                    })
                return
            }
            if (this.default_buy_type == '微信支付') {
                var ua = navigator.userAgent.toLowerCase();
                if (ua.indexOf('micromessenger') < 0) {
                    Toast({message: '微信支付请选择，微信浏览器',
                        duration: 3000,
                        className: 'getCoupons'
                    })
                    // var url = 'http://106.54.212.105:8080/v1/payment/unionOrder'
                    // var params = {
                    //     pay_sn: this.pay_sn
                    // }
                    // request.AJAX(url, params, "zhengyifanjiekou", This).then(()=>{
                    //     console.log(this.$store.state, '微信报错')
                    // })
                    return
                }
                if (ua.indexOf('micromessenger') >= 0) {
                    // var url = 'http://106.54.212.105:8080/v1/payment/unionOrder'
                    // var params = {
                    //     pay_sn: this.pay_sn
                    // }
                    // request.AJAX(url, params, "zhengyifanjiekou", This).then(()=>{http://106.54.212.105:8080
                    //     console.log(this.$store.state, '微信报错')
                    // })http://h5.horizou.cn:8080
                    window.location.href="http://h5.horizou.cn:8080/v1/payment/unionOrder?pay_sn="+this.pay_sn
                }
            }
            this.isSureMoney = false
            this.is_pay = !this.is_pay
            // 调用子组件，输入密码显示
            this.$refs.password.vpay_status()
        },
        get_leave_message(vid, eve) { // 获取店铺留言 vid 店铺id
            // 当内容为空时
            if (!eve.target.value) return
            this.order_message[vid] = eve.target.value
        },
        get_coupons(coupon_lists) { // 获取优惠券列表
            this.is_coupon = !this.is_coupon
            // 平台优惠券
            if (coupon_lists == undefined) {
                this.coupon_lists = this.$store.state.confirm.data.data.coupon_list
                return
            }
            this.coupon_lists = coupon_lists
        },
        get_select_coupon(data) { // 获取下单时所选取优惠券
            this.is_coupon = !this.is_coupon
            // 平台优惠
            if (data.plat_coupon  !=undefined) {
                this.plat_coupon = data.plat_coupon[0].red_user_id // 平台优惠券id
                this.plat_coupon_money =  data.plat_coupon[0].redinfo_money
                this.real_price = Number(this.goods_total_price) - Number(this.plat_coupon_money)
                this.real_price = this.$options.filters['chckedMoney'](this.real_price)
            }

            // 店铺优惠
            if (data.store_coupon  !=undefined){
                for (var st = 0; st < data.store_coupon.length; st++) {
                    this.store_cart_list[data.store_coupon[st].red_vid].store_coupon_money = data.store_coupon[st].redinfo_money
                    this.vid_contant = data.store_coupon[st].red_vid + '-' + data.store_coupon[st].red_user_id + '-' + data.store_coupon[st].redinfo_money
                }
            }

            // 平台店铺优惠同时
            if (this.plat_coupon_money  && this.all_store_couponMeny !=0) {
                var store_plat_coupon = Number(this.plat_coupon_money) + Number(this.all_store_couponMeny)  
                this.real_price = Number(this.goods_total_price) - Number(store_plat_coupon)
                this.real_price = this.$options.filters['chckedMoney'](this.real_price)
            }
            
    
        },
        pay_sccuess() { // 支付成功页面跳转
            this.$router.push({path: '/orderpay', query: {pay_money: this.real_price}})
        }
    },
    watch:{
        'vid_contant'(newVal, oldVal) {
            var new_arr = newVal.split('-')
            if (oldVal != '') {
                var old_arr = oldVal.split('-')   
                for(var i in this.store_vid) {
                    if (new_arr[0] == i) {
                        this.all_store_couponMeny = Number(this.all_store_couponMeny) - Number(this.store_vid[i])
                    }
                }
            }
            this.store_coupon[new_arr[0]] = new_arr[1]
            this.store_vid[new_arr[0]] = new_arr[2]
            this.all_store_couponMeny = Number(this.all_store_couponMeny) + Number(this.store_vid[new_arr[0]])
            this.real_price = Number(this.goods_total_price) - (Number(this.all_store_couponMeny)+Number(this.plat_coupon_money))
            this.real_price = this.$options.filters['chckedMoney'](this.real_price)
        }
        //对象内部的属性监听，也叫深度监听
    },
    created() {
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
        }
        this.getInformations()
    },
    filters: {
        chckedMoney(money) {
            return money.toFixed(2);
        },
        fix_coupon(coupon_money) { // 优惠金额带小数点，需去除
            if (coupon_money) {
                var  dot_index = coupon_money.indexOf('.')
                return coupon_money.substr(0, dot_index)
            }
        }
    },
}
</script>

<style lang="less" scoped>
.sure_order_buy {
    width: 100%;
    height: auto;
    background: #f5f5f5;
}
.order_shop {
    width: 100%;
    background: #fff;
    opacity: 1;
    margin-bottom: 10px;
    .shop_title {
        height: 44px;
        border-bottom: 1px solid #EDEDED;
        img:nth-child(1) {
            width: 16px;
            height: 14.5px;
            float: left;
            margin-left: 16px;
            margin-top: 15px;
        }
        span:nth-child(2) {
            font-size: 12px;
            font-family: Source Han Sans CN;
            line-height: 44px;
            float: left;
            margin-left: 10px;
        }
        span:nth-child(3) {
            margin-left: 2%;            
        }
    }
    .goods_number {
        width: 93%;
        height: 50px;
        margin: auto;
        font-size: 14px;
        span {
            line-height: 50px;
        }
    }
    .zhengjia {
        width: 80px;height: 22px;float: right;line-height: 22px;
        border:1px solid rgba(153,153,153,1);text-align: center;;
        float: right;
        margin-top: 10px;
        div{
            float: left; 
        }
        div:nth-child(1){
            width: 32%;height: 100%;border-right: 1px solid rgba(153,153,153,1);
        }
        div:nth-child(2){
            width: 32%;height: 100%;border-right: 1px solid rgba(153,153,153,1);
            font-weight: 600;font-size: 12px;
            color: #8D8D8D;
        }
        div:nth-child(3){
            width: 32%;height: 100%;
                    }
    }
}
.right_arrow {
            display: inline-block;
            width: 6px;
            height: 6px;
            border: 1px solid;
            border-color: #8D8D8d #8D8D8d transparent transparent;
            float: left;
            transform: rotate(45deg);
            margin-top: 4.8%;
    }
.right_left {
    float: right;
    margin-top: 6%;
    margin-left: 3px;
}
.shop_des {
    height: 75px;
    margin-top: 10px;
    img:nth-child(1) {
        width: 110px;
        height: 75px;
        margin-left: 16px;
        float: left;
    }
    span:nth-child(2) {
        width: 146.5px;
        height: 32.5px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 22px;
        color: rgba(51,51,51,1);
        opacity: 1;
        display: block;
        float: left;
        margin-left: 6px;
    }
    span:nth-child(3) {
        color: rgba(141,141,141,1);
        font-size: 12px;
        float: left;
        display: block;
        margin-top: 45px;
        margin-left: -146px;
    }
    span:nth-child(4) {
        float: right;
        display: block;
        font-size: 12px;
        color: #616161;
        margin-right: 16px;
    }
    span:nth-child(5) {
        font-size: 12px;
        float: right;
        margin-top: 23px;
        margin-right: -44px;
        color: #999999;
    }
}
.select_service {
    margin-top: 10px;
    width: 100%;
    background: #fff;
    ul {
        width: 343px;
        margin: auto;
        li {
            height: 44px;
            width: 100%;
            font-size: 14px;
            line-height: 50px;
            span:nth-child(1) {
                float: left;
            }
            .service_contain {
                float: right;
            }
            .service_contain_notice {
                color: #C5C5C5;
                margin-left: 6px;
            }
            input {
                margin-left: 20px;
                border: none;
                width: 200px;
                font-size: 12px;
            }
        }
    }
}
.last_style {
        height: 44px;
        line-height: 44px;
        width: 343px;
        margin: auto;
            span {
                font-size: 14px;
                float: right;
                margin-left: 4px;
                font-family:Source Han Sans CN;
            }
            span:nth-child(1) {
                color: red;
            }
            span:nth-child(3) {
                color: #C5C5C5;
            }
        }
.notice_color {
    color: red;
}
.last_li {
    margin-top: 10px;
    width: 100%;
    height: 44px;
    background: #fff;
    span:nth-child(1),.jifen {
        font-size: 14px;
        margin-left: 16px;
        float: left;
        line-height: 44px;
    }
    .jifen {
        color: #C5C5C5;
        display: inline-block;
        width: 75%;
        height: 44;
        overflow: hidden;
    }
    img:nth-child(3) {
        float: right;
        margin-right: 16px;
        /* height: 16px; */
        height: 16px;
        margin-top: 14px;
        width: 16px;
    }

}
.last_sure {
    width: 100%;
    height: 60px;
    background: rgba(255,255,255,1);
    opacity: 1;
    margin-top: 10px;
    line-height: 60px;
    font-family: Source Han Sans CN;
    font-size: 14px;
    span:nth-child(1) {
        float: left;
        margin-left: 16px;
    }
    span:nth-child(2) {
        float: left;
    }
    span:nth-child(3) {
        float: right;
        display: block;
        width: 115px;
        height: 40px;
        background: linear-gradient(270deg,rgba(255,150,100,1) 0%,rgba(238,117,60,1) 100%);
        opacity: 1;
        text-align: center;
        border-radius: 40px;
        line-height: 40px;
        margin-right: 16px;
        color: #ffff;
        margin-top: 6px;
    }
}
.no_real_name {
    height: 60px;
    background: #f5f5f5;
    img {
        width: 16px;
        height: 16px;
        margin-left: 16px;
        float: left;
        margin-top: 22px;
    }
    span:nth-child(2) {
        font-size: 14px;
        font-family: Source Han Sans CN;
        color: #c5c5c5;
        opacity: 1;
        float: left;
        margin-top: 21px;
        margin-left: 10px;
    }
}
// 确认订单金额
.sure_money {
    height: 500px;
    width: 379px;
    span {
        font-size: 16px;   
    }
    .sure_head {
        width: 100%;
        height: 43.5px;
        margin: auto;
        border: 1px solid #EDEDED;
        p {
            width: 9.5px;
            height: 9.5px;
            border: 2px solid;
            border-color: #8D8D8D transparent transparent #8D8D8D;
            transform: rotate(-39deg);
            display: inline-block;
            margin-left: 20px;
            line-height: 43.5px;
        }
        span{
            margin-left: 128px;
        }
    }
    .sure_money {
        width: 100%;
        height: 40px;
        text-align: center;
        margin-top: 50px;
        span:font-size(2) {
            font-size: 20px;
        }
        span:nth-child(2) {
            font-size: 40px;
            color:#333333;
        }
    }
    .select_list {
        width: 100%;
        height: 30px;
        margin-top: 65px;
        border-bottom: 0.5px solid;
        border-color: #EDEDED;
        line-height: 15px;
        span:nth-child(1) {
            margin-left: 20px;
            font-size: 14px;
            color: #8D8D8D;
            float: left;
        }
        p:nth-child(2) {
            width: 9.5px;
            height: 9.5px;
            border: 1px solid;
            border-color: #8D8D8D #8D8D8D transparent transparent;
            transform: rotate(45deg);
            float: right;
            margin-right: 20px;
            line-height: 20px;
        }
        span:nth-child(3) {
            float: right;
            margin-right: 4px;
        }
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
    .type_buy_list {
        width: 100%;
        li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid;
            border-color: #EDEDED;
            font-size: 16px;
            font-family:Source Han Sans CN;
            display: block;
            img {
                width: 25px;
                height: 25px;
                margin-left: 20px;
                float: left;
                margin-top: 7px;
            }
            span {
                display: inline-block;
                float: left;
                margin-left: 6px;
                align-items: center;
            }
            img:last-child {
                float: right;
                margin-right: 20px;    
                width: 16px;
                height: 16px;
                margin-top: 16px;
            }
        }
    }
}
.add_bank_cart {
        width: 100%;
        height: 40px;
        font-size: 16px;
        font-family:Source Han Sans CN;
        line-height: 40px;
        border-bottom: 1px solid;
        border-color: #EDEDED;
        span {
            display: inline-block;
            float: left;
            margin-left: 10px;
        }
        p {
            display: inline-block;
            border: 1px solid;
            border-color: #8D8D8D #8D8D8D transparent transparent;
            transform: rotate(45deg);
            float: right;
            margin-left: 20px;
            width: 9px;
            height: 9px;
            margin-right: 20px;
            margin-top: 17.5px;
        }
    }

.getCoupons {
    z-index: 3000 !important; 
    top: 50%;
}
.sure-verified{
    width: 300px;
    height: 120px;    
    border-radius: 20px;
    font-size: 16px;
    padding-top:10px;
    box-sizing: border-box;
    text-align: center;
    div:nth-child(1){        
        color: #999;
        padding: 10px;
        height: 50px;
    }
    
}
.sure-button{
    color: #999;
    border-top: 1px solid #999;
    button{
        width:45%;        
        height: 39px;
        color: #999;
        border: 1px solid transparent;
        background: #fff;
    }  
    button:nth-child(2){
        color:#26a2ff;
        border-left: 1px solid #999;
        
    }
}
</style>
