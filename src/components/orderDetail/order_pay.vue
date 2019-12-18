<template>
    <div class="order_pay">
        <img class="img_flag" :src="success_log" alt="">
        <div class="pay_title">支付成功</div>
        <div class="pay_message">实付￥{{this.route_param.pay_money}}元</div>
        <div class="btn">
            <button @click="look_order">查看订单</button>
            <button @click="back_index">返回首页</button>
        </div>
    </div>
</template>

<script>
import success_log from '@/assets/withdrawsucess.png'
export default {
    name: 'order_pay',
    data() {
        return {
            success_log: success_log,
            route_param: {}, // 接受路由参数
        }
    },
    methods: {
        look_order() {
            this.$router.push({ name: 'management', params: { paicheNo: '1'}})
        },
        back_index() {
            this.$router.push("/")
        }
    },
    mounted() {
        this.route_param = this.$route.query
    }
}
</script>


<style scoped lang="less">
.img_flag {
    position: relative;
    margin: 50px 165px 0px 165px;
    width: 45px;
    height: 45px;
}
.pay_title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
    font-family: Source Han Sans CN;
    color: rgba(51,51,51,1);
}
.pay_message {
    color: #8D8D8D;
    font-size: 14px;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
}
.btn {
    margin-top: 70px;
    width: 100%;
    height: 50px;
    font-size: 14px;
    button {
        width:115px;
        height:40px;
        opacity:1;
        border-radius:20px;
        display: inline-block;
        border: 0px;
    }
    button:first-child {
        background: #EE753C;
        color: #fff;
        margin-left: 15%;
    }
    button:nth-child(2) {
        background: #fff;
        border: 1px solid;
        border-color: #C5C5C5;
        margin-left: 8%;
    }
}
</style>
