// 是否联系客服
<template>
    <div class="order_foot">
        <ul>
            <li><img src="@/assets/message.png" alt=""><span>联系卖家</span></li>
            <li><img src="@/assets/telphon.png" alt=""><span>拨打电话</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'order_foot',
}
</script>

<style lang="less" scoped>
.order_foot ul{
    width: 100%;
    background: #fff;
    height: 50px;
    li {
        width: 49%;
        height: 50px;
        float: left;
        text-align: center;
        line-height: 44px;
        border-top: 1px solid #EEEEEE;
        img{
        width: 16px;
        height: 16px;
        }
        span {
            height: 14px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(97,97,97,1);
            opacity: 1;
            margin-left: 9px;
        }
    }
    li:nth-child(1) {
        border-right: 1px solid #EEEEEE;
    }
}
</style>
