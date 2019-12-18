// 订单详情页店铺信息
<template>
    <div class="order_shop">
        <div class="body_des">
            <div class="shop_name">
                <img :src="orderdianpu.dianpu" alt="">
                <span>{{ orderShopMsg.store_name }}</span>
                <img src="@/assets/arrow_right.png" alt="">
            </div>
            <div>
                <img :src="orderShopMsg.goods_image" alt="">
                <span>{{ orderShopMsg.goods_name }}</span>
                <span></span>
                <span>￥{{ orderShopMsg.goods_price }}</span>
                <span>x{{orderShopMsg.goods_num}}</span>
                <span v-if= "orderShopMsg.order_state" @click="clickOrder(orderShopMsg)"> {{orderShopMsg.order_state}} </span>
                <!-- 售后 -->
            </div>
        </div>
        <!-- 退款详情页时隐藏 -->
        <ul>
            <li v-if="orderShopMsg.red_money">
                <span >{{ orderShopMsg.red_money }}元优惠券</span>
                <span>-￥{{ orderShopMsg.red_money }}</span>
            </li>
            <li v-if="orderShopMsg.pd_points">
                <span >积分抵扣</span>
                <span>-￥{{ orderShopMsg.pd_points }}</span>
            </li>            
            <li v-if="orderShopMsg.vred_money">
                <span >{{ orderShopMsg.vred_money }}元店铺优惠券</span>
                <span>-￥{{ orderShopMsg.vred_money }}</span>
            </li>
            <li >
                <span >实际付款</span>
                <span>￥{{ orderShopMsg.order_amount }}</span>
            </li>
        </ul>
        <div class="qingchu"></div>
    </div>
</template>

<script>
import dianpu from '@/assets/dianpu.png'
import goodsImg from '@/assets/shopping.png';
export default {
    name: 'order_shop',
    props: ['orderShopMsg'],
    data() {
        return {
            orderdianpu : {dianpu: dianpu, goodsImg: goodsImg}
        }
    },
    methods: {
        clickOrder(index){
            if(index.order_state =="退款"){
                this.$router.push({name:"refunds",params:{refunds:index}})
            }
            // if(index.order_state =="申请售后"){
            //     this.$router.push("/protection")
            // }
            
        }
    },
    mounted() {
    },
}
</script>

<style lang="less" scoped>
.order_shop{
    width: 100%;
}
.body_des {
    box-sizing: border-box;
    padding: 0 10px;
    width: 100%;
    height: 138px;
    background: rgba(255,255,255,1);
    opacity: 1;
    margin-top: -28.5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    div {
        margin: 0px auto;
    }
}
.shop_name {
    img {
        width:16px;
        height:14px;
        opacity:1;
        float: left;
        margin: 10px 0px 0px 0px;
    }
    span {
        height: 12px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 12px;
        color: rgba(51,51,51,1);
        opacity: 1;
        float: left;
        margin: 10px 0px 0px 6px;
    }
    img:nth-child(3) {
        width: 4.5px;
        height: 8px;
        opacity: 1;
        float: left;
        margin: 13px 0px 0px 10px;
    }
}
.body_des div:nth-child(2) {
    width: 100%;
    height: 75px;
    float: left;
    margin-top: 20px;
    img {
        width: 110px;
        height: 75px;
        opacity: 1;
        float: left;
        // margin-left: 0px;
    }
    span:nth-child(2) {
        width: 147.5px;
        height: 32.5px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 18px;
        color: rgba(51,51,51,1);
        opacity: 1;
        float: left;
        margin: 0px 0px 0px 10px;
    }
    span:nth-child(3) {
        height: 12px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 12px;
        color: rgba(141,141,141,1);
        opacity: 1;
        float: left;
        margin: 39px 0px 0px -148px;
    }
    span:nth-child(4) {
        height: 12px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(97,97,97,1);
        opacity: 1;
        float: right;
    }
    span:nth-child(5) {
        height: 12px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 40px;
        color: rgba(153,153,153,1);
        opacity: 1;
        float: right;
        margin: 10px -45px 0px 0px;
    }
    span:nth-child(6) {
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        opacity: 1;
        float: right;
        height: 27px;
        line-height: 27px;
        border: 1px solid rgba(141,141,141,1);
        opacity: 1;
        border-radius: 13.5px;
        text-align: center;
        float: right;
        margin: 36px 0px 0px 0px;
        color:rgba(141,141,141,1);
        padding: 0px 10px;
    }
}
.order_shop ul {
    width: 100%;
    position: relative;
    background: #fff;
    // top: -6px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    li {
        // width: 686px/2px;
        height: 16px;
        margin: 0px auto;
        margin: 0 16px;
        line-height: 2px;
        display: flex;
        justify-content: space-between;
        span:nth-child(1) {
            height: 12px;
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(97,97,97,1);
            opacity: 1;
        }
        span:nth-child(2) {
            height: 12px;
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(97,97,97,1);
            opacity: 1;
        }
    }
    li:last-child span:nth-child(2){
        color: #EA4940;
    }
}
.refund_detail {
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
    height: 120px;
    margin-top: -1px;
    li {
        width: 100%;
        height: 20px;
        padding-left: 16px;
        float: left;
        // line-height: 20px;
        margin-bottom: 5px;
    }
    li span {
        font-size: 12px;
        color: grey;
    }

}
</style>
