<template>
    <div class="withdraw_success">
        <img :src="success_log" alt="">
        <p>充值成功</p>
        <p>预计24小时内到账</p>
    </div>
</template>

<script>
import success_log from '@/assets/withdrawsucess.png'
export default {
    name: 'withdraw_success',
    data() {
        return {
            success_log: success_log
        }
    }
}
</script>

<style lang="less" scoped>
.withdraw_success {
    width: 100%;
    height: auto;
    background: #ffffff;
    img:first-child {
        margin: 50px 0px 0px 165px;
        width: 45px;
        height: 45px;
    }
    p:nth-child(2) {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        text-align: center;
        color: rgba(51,51,51,1);
        opacity: 1;
        margin-top:20px;
    }
    p:nth-child(3) {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(141,141,141,1);
        opacity: 1;   
        text-align: center;
        margin-top:10px;
    }
}
</style>
