<template>
    <div class="recharge">
        <listBankCard @selectCard = "selectCards"></listBankCard>
        <div class="recharge_head">
            <p>充值金额</p>
            <div>
                <span>￥ <input type="number" placeholder="100" v-model="rushMoney"></span>
            </div>
        </div>
        <button @click="checkedRecharge">充值</button>
        <vPay :vpays = "vpays" ref="password" @pay_sccuess="pay_sccuess"></vPay>
    </div>
</template>

<script>
import listBankCard  from './listBankCard.vue'
import vPay from './vPay'
import request from "../../common/request"
export default {
    data(){
        return{
            rushMoney:'',
            selectBank:'',//选择的银行卡信息
            vpays:{
                //银行卡信息
                pay_sn :'',//支付单号
                card:'',//银行卡后四位
                bankcode :'',//银行代码 
                order_type : 'pd_pay'           
            }
        }
    },
    components:{
       listBankCard,
       vPay
    },
    watch:{
        vpays:{
            handler:function(val,oldVal){
            },
            deep:true
        }
    },
    methods:{
         selectCards(val){
            this.vpays.bankcode = val.bankcode
            this.vpays.card = val.card
        },
        checkedRecharge(){ // 验证money，生成支付订单
            if(this.rushMoney == ''){
                this.rushMoney = 100
            }
            var This = this;
            var params ={
                member_id: this.$store.state.index.data.data.member_info.member_id,
                amount : this.rushMoney
            }
            request.AJAX(this.$AjaxUrl.chongzhi, params, "chongzhi", This).then(() => {
                var res = This.$store.state.chongzhi.data.data; 
                this.vpays.pay_sn =  res.pay_sn
            })
            this.$refs.password.vpay_status()
             
        },
        pay_sccuess() { // 支付成功页面跳转
            this.$router.push('/rechargeSuccess')
        }
    }
}
</script>

<style lang="less" scoped>
.recharge {
    width: 100%;
    height: 100vh;
    background: #F5F5F5;
}
.recharge_head {
    width: 100%;
    height: 258px/2px;
    overflow: hidden;
    p:first-child {
        height:12px;
        font-size:12px;
        font-family:Source Han Sans CN;
        font-weight:400;
        line-height:20.5px;
        color:rgba(51,51,51,1);
        opacity:1;
        margin: 32px 0px 0px 16px;
    }
    div:nth-child(2) {
        width:686px/2px;
        height:75px;
        background:rgba(255,255,255,1);
        opacity:1;
        margin: 12px 0px 0px 16px;
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
