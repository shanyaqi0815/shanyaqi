// 订单详情页头部
<template>
    <div class="order_header">
        <div class="header_body">
            <div class="header-top">
                <img src="@/assets/backarrow.png" alt="" @click = "back()">
                <span v-if="orderHeaderMessage.orderStatus == '退款'">{{ orderHeaderMessage.orderStatus }}详情</span>
                <span v-else>订单详情</span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <span>{{ orderHeaderMessage.orderStatus }}</span>
                <span v-if="orderHeaderMessage.orderStatus == '待付款'">{{ orderHeaderMessage.status_des }}</span>                
                <span v-if="orderHeaderMessage.orderStatus == '待完结'">预计服务剩余{{ orderHeaderMessage.surplus_day}}天完结</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order_header',
    data(){
        return{

        }
    },
    props: ['orderHeaderMessage'],
    mounted(){
    } ,
    methods:{
        back(){
            window.history.back(-1)
        }
    },
}
</script>

<style lang="less" scoped>
.order_header {
    width: 100%;
}
.header_body {
    width: 100%;
    height: 331px/2px;
    margin: 0 auto;
    background: url('../../assets/order_header.png');
    div:nth-child(1) {
        width: 100%;
        height: 18px;
        margin-top: 10px;
        float: left;
        img {
            width: 18px;
            height: 16px;
            opacity: 1;
            float: left;
        }
        span {
            width: 72px;
            height: 18px;
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255,255,255,1);
            opacity: 1;
            float: left;
            margin-left: 117px;
        }
        ul {
            width: 18px;
            height: 3px;
            opacity: 1;
            float: right;
            margin-top: 8px;
            li {
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #fff;
                float: right;
                margin-right: 2px;
            }
        }
    }
    div:nth-child(2) {
        // width: 100%;
        margin: 43px 0px 0px 21px;
        height: 50px;
        float: left;
        span:nth-child(1) {
            display: block;
            // width: 100%;
            height: 18px;
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(255,255,255,1);
            opacity: 1;
            float: left;
        } 
        span:nth-child(2) {
            display: block;
            width: 100%;
            height: 16px;
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255,255,255,1);
            opacity: 1;
            float: left;
            margin-top: 12px;
        }
    }
}
.header-top{
    box-sizing: border-box;
    padding: 0 10px;
}
</style>
