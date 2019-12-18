// 订单详情页头部
<template>
    <div class="order_header">
        <div class="header_body">
            <div>
                <img src="@/assets/backarrow.png" alt="" @click="clickcallback()">
                <span>退款详情</span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <span>{{ orderHeaderMessage.order_status }}</span>
                <span>{{ orderHeaderMessage.status_des }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'order_header',
   props: ['orderHeaderMessage']
}
</script>

<style lang="less" scoped>
.order_header {
    width:750px/2px;
    height:331px/2px;
    background: #f5f5f5 url('../../assets/order_header.png') no-repeat fixed top;
    opacity:1;
}
.header_body {
    width: 686px/2px;
    height: 331px/2px;
    margin: 0 auto;
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
        width: 100%;
        margin: 43px 0px 0px 21px;
        height: 50px;
        float: left;
        span:nth-child(1) {
            display: block;
            width: 100%;
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
</style>
