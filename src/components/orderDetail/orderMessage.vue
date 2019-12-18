// 订单详细信息
<template>
    <div class="order_message">
        <div class="message_title">
            <span></span>
            <span>{{ order_title }}</span>
        </div>
        <ul>
            <li>
                <span>支付方式 : {{ orderMsg.payment_code }}</span>
            </li>
            <li>
                <span>订单编号 : {{ orderMsg.order_sn }}</span>
            </li>
            <li>
                <span>支付交易号 ：{{ orderMsg.pay_sn }}</span>
            </li>
            <li>
                <span>创建时间 ：{{ orderMsg.add_time }}</span>
            </li>
            <li>
                <span>付款时间 ：{{ orderMsg.payment_time }}</span>
            </li>
            <li>
                <span>开始时间 ：{{ orderMsg.start_time }}</span>
            </li>
            <li>
                <span>成交时间 ：{{ orderMsg.finnshed_time }}</span>
            </li>
            <li v-show="isShow">
                <span>投诉商家</span>
                <span><img src="@/assets/arrow_right.png" alt=""></span>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'order_message',
    data() {
        return {
            isShow: true,
            order_title : '订单信息',
        }
    },
    props:['orderMsg'],
    created(){
    }
}
</script>

<style lang="less" scoped>
.order_message {
    width: 100%;
    background: #fff;
    margin-top: 11.5px;
}
.message_title {
    // width: 686px/2px;
    height: 43px;
    margin: 0 auto;
    span:nth-child(1) {
        float: left;
        margin-top: 13.5px;
        width: 2px;
        height: 14px;
        background: #EE753C;
        opacity: 1;
    }
    span:nth-child(2) {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(97,97,97,1);
        opacity: 1;
        float: left;
        margin: 11px 0px 0px 4px;
    }
}
.order_message ul {
    width: 343px;
    margin: 0 auto;
    li {
        height:30px;
        font-size:12px;
        font-family:Source Han Sans CN;
        font-weight:400;
        line-height:15px;
        opacity:1;
        display: block;
    }
    li span {
        color:#8D8D8D;
    }
    li span:nth-child(1) {
        float: left;
    }
    li span:nth-child(2) {
        float: right;
        color: #EE753C;
        img {
            width:6px;
            height:11px;
            opacity:1;
            margin-top: 14px;
        }
    }
}
</style>
