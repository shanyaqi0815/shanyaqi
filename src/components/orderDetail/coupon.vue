<template>
  <div class="order_cancel">
        <div class="title">
            <span class="title_text">优惠</span>
            <!-- <img class="imgs" :src="cancel" alt=""> -->
        </div>
        <div class="title_box">
            <div class="juan">领劵</div>
            <!-- 优惠券样式 -->
            <div class="shop_coupons">
                <div :class="{coupons_detail: true}" :key="list.index" v-for="list in coupon_lists">
                    <ul class="laber_style flot_left">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div class="coupons_money">
                        <span>￥</span><span>{{ list.redinfo_money | checkedMoney}}</span>
                        <span>满{{ list.redinfo_full | checkedMoney}}可用</span>
                    </div>
                    <div class="use_time">
                        <span>使用期限</span>
                        <span>{{ list.redinfo_start }}-{{ list.redinfo_end}}</span>
                    </div>
                    <ul class="circle_two">
                        <li></li>
                        <li></li>
                    </ul>
                    <p class="get_coupons" @click="select_coupon(list, list.red_vid)">使用</p>
                    <!-- <p :class="{get_coupons: true, has_red_text: shopCoupon.hide}">已领取</p> -->
                    <ul class="laber_style flot_right">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>  
            <!-- 优惠券样式 -->
        </div>
    </div>
</template>

<script>
import cancel from '@/assets/refund2.png'
export default {
    name: 'order_cancel',
    props:['coupon_lists'],
    data() {
        return {
            cancel: cancel
        }
    },
    methods: {
        select_coupon(list, vid) { // 获取点击的优惠券 vid 0平台 否店铺
            if (vid == 0) {  // 平台
                var plat_coupon = new Array()
                plat_coupon.push(list)
            }

            if (vid != 0) {
                var store_coupon = new Array()
                store_coupon.push(list)
            }
            
            this.$emit('get_select_coupon',{plat_coupon: plat_coupon, store_coupon: store_coupon})
        }
    },
    filters: {
        checkedMoney(money) {
            if (money != undefined)
             return money.substring(0, money.lastIndexOf('.'))
        }
    }
}
</script>

<style scoped lang="less">
.order_cancel {
    position: relative;
    width: 376px;
    height: 500px;
    border-radius: 10px 10px 0px 0px;
}
 .title_box{
    margin: 33px 16px 0;max-height: 350px;
    overflow-y: scroll;
 }
.juan{
    color:rgba(141,141,141,1);
    font-size: 14px;
    margin-bottom: 28px;
}
.title{
    width: 100%;position: relative;;
}
.imgs{
    position: absolute;
    top: 16px;
    right: 16px;
    width: 0.56rem;
    height: 0.56rem;
    opacity: 1;

}
.title_text{
    display: flex;
    justify-content:center;
    font-size: 16px;
    padding-top: 16px;
}
/* 优惠券部分样式 */
.coupons_detail {
    width:686px/2px;
    height:72.5px;
    background:linear-gradient(90deg,rgba(238,117,60,1) 0%,rgba(255,146,94,1) 100%,rgba(255,140,31,1) 100%);
    opacity:1;
    margin: auto;
    margin-top: 10px;
}
.laber_style{
    width: 4px;
    height: 72.5px;
    margin-top: -2px;
    li {
        width: 4px;
        height: 4px;
        margin-bottom: 6px;
        background: #fff;
        float: left;
        border-radius: 50%;
    }
}
.flot_left {
    float: left;
    margin-left: -1px;
}
.flot_right {
    float: right;
    margin-right: -1px;
}
.coupons_money {
    float: left;
    margin-left: 20px;
    width: 93px;
    span {
        font-size: 12px;
        font-family: Source Han Sans CN;
        color: #fff;
    }
    span:nth-child(1) {
        float: left;
        margin-top: 25px;
        font-size: 17.5px;
    }
    span:nth-child(2) {
        font-size: 39.5px;
        float: left;
        margin-top: 1px;
        margin-left: 3px;
        display: inline-block;
        width: 45%;
    }
    span:nth-child(3) {
        font-size: 12px;
        float: left;
        margin-top: 49px;
        margin-left: -64px;
        display: block;
    }
}
.use_time {
    width: 130px;
    height: 60px/2px;
    float: left;
    margin-left: 4px;
    margin-top: 25px;
    span { 
        color: #fff;
        display: block;
        font-size: 12px;
    }
    span:nth-child(2) {
        line-height: 20px;
    }    
}
.circle_two {
    width: 8px;
    height: 72.5px;
    float: left;
    margin-left: 10px;
    li {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
    }
    li:nth-child(1) {
        float: left;
        margin-top: -4px;
    }
    li:nth-child(2) {
        float: left;
        margin-top: 62px;
    }
}
.get_coupons {
    width:56px;
    height:23.5px;
    background:#fff;
    opacity:1;
    border-radius:15px;
    float: left;
    color: #EE753C;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    margin-left: 10px;
    margin-top: 25px;
}
.has_red {
    background: grey;
}
.has_red_text {
    color: grey;
}
</style>
