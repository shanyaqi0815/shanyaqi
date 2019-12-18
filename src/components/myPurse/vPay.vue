<template>
    <div class="pay_password">
        <pay ref="pays"
            :title="title"
            v-model="is_vpay"  
            :digit ="6"  
            @input-end="inputEnds"       
            @close="closes"
            @forget="forget_password"
            >
        </pay>
        <div v-show="isMessage" class="verification_code">
            <div class="code_body">
                <div class="code_header">填写短信验证码</div>
                <span>
                    为确保账户资金安全，请输入收到的验证码
                </span>
                <div class="input_code">
                    <input type="text" v-model="message_code">
                    <div class="resend_message" id ="get_time" @click="get_time()" v-if="times>0">{{times}}s后获取验证码</div>
                    <div class="resend_message" @click="regain()" v-else >重新获取</div>
                </div>
                <div class="oprate_button">
                    <div @click = "cancels()">取消</div>
                    <div @click= "sure()">确认</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pay from '@/common/pay_password/pay'
import request from "../../common/request"
import { Toast } from "mint-ui";
export default {
    name: 'pay_password',
    data() {
        return {
            title:'请输入支付密码',
            is_vpay: false,
            isMessage: false,
            message_code: '',
            thpinfo: '',
            times: 0,
                  
        }
    },
    // vpays 订单号
    // isshow 显示状态码
    props:['vpays'],
    methods: {
        inputEnds(val){
            var This = this;
            let params = {
                member_id: this.$store.state.index.data.data.member_info.member_id,
                paypwd : val
            }
            request.AJAX(this.$AjaxUrl.checkPayPwd, params, "checkPayPwd", This).then(() => {//校验充值密码
                let res = This.$store.state.checkPayPwd.data.data;  
                if (res.code == 200) {
                    let This = this;
                    let params = {
                        member_id: this.$store.state.index.data.data.member_info.member_id,
                        pay_sn : this.vpays.pay_sn,//支付单号
                        card : this.vpays.card,//银行卡后四位
                        bankcode : this.vpays.bankcode,//银行代码
                        order_type: this.vpays.order_type,//pd_pay=充值；buy_pay=购买
                    }
                    request.AJAX(this.$AjaxUrl.orderPay, params, "orderPay", This).then(() => {//发送验证码  
                        if(This.$store.state.orderPay.data.data.code==200){
                        this.isMessage = true;
                        this.get_time();
                        var resp = This.$store.state.orderPay.data.data.res;
                        this.thpinfo = resp.thpinfo;
                        } else{
                            Toast({
                                message: This.$store.state.orderPay.data.data.message,
                                position: 'center',
                                duration: 5000
                            })
                            // 调用子组件，清空密码
                            this.$refs.pays.onKeyboard('清空字符串')
                        }
                    })
                
                }else{ 
                    Toast({
                        message: This.$store.state.checkPayPwd.data.data.message,
                        position: 'center',
                        duration: 5000
                    })
                    // 调用子组件，清空密码
                    this.$refs.pays.onKeyboard('清空字符串')
                }
            }).catch(err => {
            })

        },
        closes(){
            this.is_vpay = false
            // 调用子组件，清空密码
            this.$refs.pays.onKeyboard('清空字符串')
        },
        forget_password(){            
            this.$router.push('/ModifyPaymentsWays')
        },
        get_time() {
            const TIME_COUNT = 120;
            this.times = TIME_COUNT;
            this.timer = setInterval(() => {
            if (this.times > 0 && this.times <= TIME_COUNT) {
                this.times--;
            } else {
                clearInterval(this.timer);
            }
            }, 1000);
        },
        regain(){
            this.get_time()
            var This = this;
            let params = {
                member_id: this.$store.state.index.data.data.member_info.member_id,
                pay_sn : this.vpays.pay_sn,
                card: this.vpays.card,
                bankcode:this.vpays.bankcode,
                thpinfo : this.thpinfo,
            }
            request.AJAX(this.$AjaxUrl.orderPaySms, params, "orderPaySms", This).then(() => { //重新获取验证码 
                var response = This.$store.state.orderPaySms.data.data;   
            })

        },
        cancels(){
            this.is_vpay = false
            this.isMessage = false
            // 清空
            this.times = 0
            this.message_code = ''
            
            // 调用子组件，清空密码
            this.$refs.pays.onKeyboard('清空字符串')
        },
        sure(){
            // 是否获取验证码
            if (this.times <= 0) {
                Toast({message: '请获取验证码'})
                return
            }

            // 验证码为空验证
            if (this.message_code == '') {
                Toast({message: '验证码不可以为空'})
                return
            }

            var This = this;
            let params = {
                member_id: this.$store.state.index.data.data.member_info.member_id,
                pay_sn : this.vpays.pay_sn,
                card: this.vpays.card,
                bankcode:this.vpays.bankcode,
                smscode: this.message_code,
                thpinfo : this.thpinfo,
                order_type: this.vpays.order_type
            }
            request.AJAX(this.$AjaxUrl.orderPayConfirm, params, "orderPayConfirm", This).then(() => { //获取验证码 
                var response = This.$store.state.orderPayConfirm.data.data;            
                console.log(response, 'orderPayConfirm')
                if(response.code == 200){
                    // 密码支付成功,父组件页面跳转
                    this.$emit('pay_sccuess')
                }
                if (response.code != 200) {
                    Toast({message: response.message})
                    this.is_vpay = false
                    this.isMessage = false
                    // 清空
                    this.times = 0
                    this.message_code = ''
                    
                    // 调用子组件，清空密码
                    this.$refs.pays.onKeyboard('清空字符串')
                }
            })
            
        },
        vpay_status() {
            this.is_vpay = !this.is_vpay
        }
    },
    components: {
        pay
    }
}
</script>

<style lang="less" scoped>
.verification_code{
    position: fixed;
    top: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    .code_body {
        position: fixed;
        width: 270px;
        height: 180px;
        background: #fff;
        top: 131px;
        left: 14%;
        border-radius: 10px;
        .code_header {
                display: block;
                width: 100%;
                height: 20px;
                font-size: 18px;
                padding-top: 15px;
                text-align: center;
                line-height: 20px;
        }
        span:nth-child(2) {
            display: inline-block;
            width: 90%;
            height: 30px;
            margin-left: 6%;
            font-size: 12px;
        }
        .input_code {
            width: 90%;
            margin-left: 6%;
            input {
                display: inline-block;
                width: 50%;
                height: 30px;
                border-color: #9e9e9e57;
                border-radius: 5px;
            }
            .resend_message {
                display: inline-block;
                font-size: 13px;
            }
        }
    }
    .oprate_button {
        position: relative;
        width: 100%;
        height: 42px;
        // background: #ff000024;
        margin-top: 6%;
        div {
            width: 50%;
            height: 86%;
            border: 1px solid #3333;
            border-bottom: 0px;
            font-size: 16px;
            text-align: center;
            line-height: 42px;
            display: inline-block;
        }
        div:first-child {
            border-left: 0px;
            float: left;
        }
        div:nth-child(2) {
            border-right: 0px;
            float: right;
            margin-top: -37.5px;
            color: rgb(49, 78, 240);
        }
    }
}
</style>
