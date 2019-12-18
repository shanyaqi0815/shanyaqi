// 订单底部操作
<template>
    <div class="order_message">
        <ul>
            <li :key="footdata.index" v-for="footdata in orderOprates">
                <span v-if="footdata.doing == '取消订单'" @click="cancelOrder"> {{ footdata.doing }}</span>
                <span v-else>{{ footdata.doing }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'order_message',
    props: ['orderOprates'],
    methods: {
        cancelOrder() {
            this.$emit('cancelOrder')
        }
    },
}
</script>

<style lang="less" scoped>
.order_message{
    width: 100%;
    background: #fff;
}
.order_message ul {
    width: 686px/2px;
    margin: 0 auto;
    height: 70px;
    li {
        float: right;
        border: 1px solid grey;
        margin-right: 6px;
        width: 75px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        border-radius: 13.5px;
        font-size:12px;
        font-family:Source Han Sans CN;
        font-weight:400;
        margin-top: 22px;
        span {
            color:rgba(141,141,141,1);
        }
    }
    li:first-child {
        border: 1px solid #EE753C;
        span {
            color: #EE753C;
        }
    }
}
</style>
