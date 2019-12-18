<template>
    <div class="shop_coupons">
        <div class="coupons_detail" :key="shopCoupon.id" v-for="shopCoupon in shopCoupons">
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
                <span>￥</span><span>{{shopCoupon.redinfo_money | checkedMoney}}</span>
                <span>满{{shopCoupon.redinfo_full | checkedMoney}}可用</span>
            </div>
            <div class="use_time">
                <span>使用期限</span>
                <span>{{shopCoupon.redinfo_start}}-{{shopCoupon.redinfo_end}}</span>
            </div>
            <ul class="circle_two">
                <li></li>
                <li></li>
            </ul>
            <p class="get_coupons"  @click="getRed(shopCoupon)">领取</p>
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
</template>

<script>
import request from "../common/request"
import { Toast } from 'mint-ui';
export default {
    name: 'shop_coupons',
    props: ['shopCoupons'],
    created() {
        },
    methods: {
        getRed(shopCoupon) {
            // 领取红包
            var red_id = shopCoupon.id
            // this转换
            let This = this
            // 接口参数
            let params = {
                member_id: this.$store.state.index.data.data.member_info.member_id,
                red_id : red_id
            }
            let name = 'sendRed'
            // name 是当前接口名称存在store中的key
            request.AJAX(this.$AjaxUrl.sendRed,params,name,This).then(()=>{
                Toast({message: this.$store.state.sendRed.data.data.message,
                       duration: 3000,
                       className: 'getCoupons'})
            })
            
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

<style lang="less" scoped>
.getCoupons {
    z-index: 3000 !important;
}
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
    }
    span:nth-child(3) {
        font-size: 12px;
        float: left;
        margin-top: 49px;
        margin-left: -64px;
    }
}
.use_time {
    width: 130px;
    height: 60px/2px;
    font-size: 12px;
    float: left;
    margin-left: 4px;
    margin-top: 25px;
    span {
        color: #fff;
        display: block;
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
.has_red_text {
    color: grey;
}
</style>
