<template>
<div class="coupon_price">
        <span>{{ list.redinfo_money | checkedMoney }}</span>
        <span>￥</span>
        <span>满{{ list.redinfo_full | checkedMoney }}可用</span>
        <ul>
            <li></li>
            <li></li>
            <li></li>
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
</template>

<script>
export default {
    name: 'coupon_price',
    props: ['list'],
	filters: {
        checkedMoney(money) {
            if (money != undefined)
             return money.substring(0, money.lastIndexOf('.'))
        }
    }
}
</script>

<style lang="less" scoped>
.coupon_price {
    width: 120px;
    height: 105px;
    color: #fff;
    span {
        color: #fff;
        font-family: Source Han Sans CN;
    }
    span:nth-child(2) {
        float: right;
        margin-right: 1px;
        margin-top: 36px;
        width: 12.5px;
        height: 12.5px;
        font-size: 12.5px;
        font-weight: 400;
        line-height: 19px;
        opacity: 1;
    }
    span:nth-child(1) {
        float: right;
        color: #fff;
        margin-right: 29px;
        height: 34.5px;
        font-size: 34.5px;
        font-weight: 500;
        line-height: 31px;
        margin-top: 22px;
        text-align: left;
    }
    span:nth-child(3) {
        float: right;
        margin: 22px;
        margin-top: 10px;
        margin-right: 33px;
        height: 12px;
        font-size: 12px;
        font-weight: 400;
        line-height: 12.5px;
        opacity: 1;
        text-align: left;
    }
    ul {
        // float: left;
        position: fixed;
        width: 10px;
        height: 105px;
        overflow: hidden;
        li {
            margin-left: -2px;
            width: 8px;
            height: 8.2px;
            border-radius: 50%;
            background: #F5F5F5;
            float: left;
            margin-bottom: 3px;
        }
    }
}
</style>
