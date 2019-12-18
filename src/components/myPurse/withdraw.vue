<template>
    <div class="withdraw">
        <div class="list_bank">
        </div>
        <p>提现金额</p>
        <div>
            <span>￥ <input type="number" placeholder="100" v-model="withdrawMoney"></span>
        </div>
        <button @click="checkedWithdraw">提现</button>
        <vPay :isShow ='isShow'></vPay>
    </div>
</template>

<script>
import bank_log from '@/assets/shoplog.png'
import arrow_right from '@/assets/arrow_right.png'
import vPay from './vPay'
export default {
    data() {
        return {
            isShow: false,
            withdrawMoney:'',
        }
    },
    methods: {
        checkedWithdraw() {
            this.isShow = !this.isShow
        }
    },
    components: {
        vPay
    }
}
</script>

<style lang="less" scoped>
.withdraw {
    width: 100%;
    height: 100vh;
    background: #F5F5F5;
    overflow: hidden;
    p {
        height: 12px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        line-height: 20.5px;
        color: rgba(51,51,51,1);
        opacity: 1;
        margin: 16px 0px 0px 16px;
    }
    div:nth-child(3) {
        width:686px/2px;
        height:75px;
        background:rgba(255,255,255,1);
        opacity:1;
        margin: 15px 0px 0px 16px;
        span {
            padding-left: 10px;
        }
        span,input {
            line-height: 75px;
            color: #333333;
            font-size: 36px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            opacity: 1;
        }
        input {
            width: 270px;
            border: none;
        }
        input:focus {
            outline: none;
        }
    }
}
.list_bank {
    margin-top: 16px;
}
button {
    width: 343px;
    height: 40px;
    background: rgba(238,117,60,1);
    opacity: 1;
    border-radius: 22px;
    border: none;
    margin: 100px 0px 0px 16px;
    color: #fff;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
}
.input_passwod {
    width: 376px;
    height: 560px;
    div:nth-child(1) {
        width: 100%;
        height: 44px;
        font-size: 16px;
        font-weight: 400;
        line-height: 44px;
        border-bottom: 1px solid #80808040;
        span:first-child {
            float: left;
            margin-left: 16px;
        }
        span:nth-child(2) {
            float: right;
            margin-right: 135px;
        }
    }
}
input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
}
</style>
