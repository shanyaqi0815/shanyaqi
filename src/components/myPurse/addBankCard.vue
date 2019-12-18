// 添加银行卡详情页部分
<template>
    <div class="add_bank_card">
        <ul>
            <li>
                <span>持卡人</span>
                <span><input type="text" :placeholder="addBankList.user_name" v-model="cardName" ></span>
            </li>
            <li>
                <span>证件号</span>
                <span><input type="text" oninput="if(value.length>17)value=value.slice(0,18)" :placeholder="addBankList.document_code" v-model="IDnumber"></span>
            </li>         
            <li>
                <span>请输入银行卡号</span>
                <span>
                    <input type="text" v-model="bankCard" :placeholder="addBankList.bank_card"  oninput="if(value.length>18)value=value.slice(0,19)" />                    
                </span>
            </li> 
            <li v-if="cardType == '02' || cardType == 'CC'">
                   <input type="text" :placeholder="addBankList.bank_date" v-model="bankDate"/>  
            </li>
            <li v-if="cardType == '02' || cardType == 'CC'">
                   <input type="text" :placeholder="addBankList.bank_safetyCode" v-model="bankSafetyCode" />                
            </li>        
            <li>
                <span>银行预留手机号</span>
                <span><input type="number" :placeholder="addBankList.bank_phone" v-model.number="bankPhone" oninput="if(value.length>11)value=value.slice(0,11)"></span>
            </li>   
            <li class="getCode">
                <span><input type="number" value="" placeholder="请输入验证码" v-model="verificationCode"></span>
                <span @click="getMobile()">获取验证码</span>
            </li>
        </ul>
        <div class="sure_notic">              
            <input type="checkbox" id="inputDuo"  @click="box" :class="['input-duo', {'input-duo1': xuanz}]"/> 
            <div>
                登录注册代表同意用户信息、隐私政策等海云舟协议：
                <p>
                    <router-link
                    to="HaiyunzhouRules"
                    tag="span"
                    >海云舟协议、</router-link>
                    <router-link
                        to="PlatformProtocol"
                        tag="span"
                    >海云舟各种 协议、</router-link>
                    <router-link
                        to="PrivacyPolicyIn"
                        tag="span"
                    >海云舟其他协议</router-link>
                </p>
                
            </div>
                
                
        </div>

        <button @click="submitBtn()">提交</button>
    </div>
</template>

<script>
import request from "../../common/request"
import { Toast } from "mint-ui";
export default {
    
    name: 'add_bank_card',
    data() {
        return {
            xuanz:true,
            cardName:'',
            IDnumber:'',
            bankCard:'',//银行卡号
            bankPhone:'',//电话号码
            verificationCode:'',//验证码
            cardType:'',//卡类型
            bankAbbreviation:'',//银行简称
            bankDate:'',
            bankSafetyCode:'',//安全码
            thpinfo:'',
            addBankList: {
                bank_card:'请输入银行卡号',
                user_name: '输入你的姓名',
                document_code: '输入你的证件号',
                bank_phone: '请输入手机号',
                bank_date:'有效期(月份/年份，如：06/18)',
                bank_safetyCode:'请输入银行卡背后三位安全码'
            },
        }
    },
    created(){
    },
    mounted(){
        // this.bankCard();        
    },
    watch:{
        bankCard:{
            handler:function(val,oldVal){
                if (this.bankCard != '' && val.length>18) {
                    this.bankCards()
                }
            },           
            deep:true
        }
    },
    methods:{
        bankCards(){
            this.$ajax.get('https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?',{
                params: {
                    cardNo : this.bankCard,
                    cardBinCheck: true,
                    _input_charset : "utf-8"
                }
            }               
            ).then((res)=>{
                this.cardType = res.data.cardType
                this.bankAbbreviation = res.data.bank 
            }).catch(()=>{
            })
        },
        getMobile(){//获取短信验证码 
            if(this.cardName!='' && this.IDnumber !='' && this.bankCard !=''){
                var This = this;
            if(this.cardType == "CC"){//信用卡
                this.cardType = '02'
            }else{
                this.cardType = '00'//储蓄卡
            }
            let params = {
                   member_id : this.$store.state.index.data.data.member_info.member_id,
                   card_num : this.bankCard,//卡号
                   card_type :this.cardType,//00=CC,02=DC
                   identity_num : this.IDnumber,//身份证号
                   mobile: this.bankPhone,//电话号码
                   name : this.cardName,//姓名
                   banktype : this.bankAbbreviation,  //判断银行卡是储蓄还是信用卡的返回值 
                   step: 'apply',                   
                   cvv2 : this.bankSafetyCode,//安全码
                   validdate : this.bankDate,//信用卡的到期时间     
                };
            request.AJAX(this.$AjaxUrl.agreeApplyConfirm, params, "agreeApplyConfirm", This).then(() => {
                let resp = this.$store.state.agreeApplyConfirm.data.data.res;
                this.thpinfo = resp.thpinfo;
            })                
            }
            
        },
        submitBtn(){//提交添加银行卡信息
            var yuan = document.querySelector("#inputDuo");
            if(yuan.checked == false){
                Toast("请勾选协议");
            }else{
                var This = this;
                let params = {
                    member_id : this.$store.state.index.data.data.member_info.member_id,
                    card_num : this.bankCard,//卡号
                    card_type :this.cardType,//00=CC,02=DC
                    identity_num : this.IDnumber,//身份证号
                    mobile: this.bankPhone,//电话号码
                    name : this.cardName,//姓名
                    cvv2 : this.bankSafetyCode,//安全码
                    validdate : this.bankDate,//信用卡的到期时间
                    banktype : this.bankAbbreviation,  //判断银行卡是储蓄还是信用卡的返回值 
                    step: 'confirm',                   
                    smscode:  this.verificationCode,
                    thpinfo:this.thpinfo
                };
                if(params.smscode!='' && this.thpinfo!=''){
                   request.AJAX(this.$AjaxUrl.agreeApplyConfirm, params, "agreeApplyConfirm", This).then(() => {
                        let res = this.$store.state.agreeApplyConfirm.data.data;
                        if(res.code == 200){
                            this.$router.push('/listBankCard')
                        }

                    })
                }
                
            }
        },
        box(){
            this.xuanz = !this.xuanz;
        }
    }
}
</script>

<style lang="less" scoped>
.add_bank_card {
    background: #F5F5F5;
    width: 100%;
    height: 100vh;
    ul {
        width: 100%;
        background: #fff;
    }
    ul li {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #F5F5F5;
        height:44px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        opacity:1;
        line-height: 44px;
        span:nth-child(1) {
            // float: left;
            margin-left: 16px;
        }
        span:nth-child(2) {
            // float: right;
            margin-right: 16px;
            input {
                text-align: right;
                color: grey;
                font-size: 14px;
            }
        }
        input{
            font-size: 14px;
        }
    }
}
li.getCode span:nth-child(2){
    font-size: 12px;
    color: #EE753C;
    border: 1px solid #EE753C;
    border-radius: 20px;
    padding: 0px 8px 0px 8px;
    height: 30px;
    line-height: 30px;
    margin-top: 4px;
}
.inputBankCode {
    display: block;
    height: 20px;
    padding: 0px 25px 0px 0px;
    line-height: 20px;
    margin-top: 12px;
    border-right: 1px solid #8D8D8D;
}
input {
    border: none;
}
.sure_notic {
    margin-top: 34px;
    display: flex;
    div{
       padding-left:40px;
       font-size: 12px;
    }
    span {
        color: #EE753C;
        font-size: 12px;
    }
}
button {
    width: 343px;
    height: 40px;
    background: rgba(238,117,60,1);
    opacity: 1;
    border-radius: 22px;
    border: none;
    margin: 102px 0px 0px 16px;
    color: #fff;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;    
	outline:none;
}
li>input{
    width:100%;
    margin:0 16px;
    text-align: right;
    font-size: 12px;
}
.input-duo[type='checkbox'] {
	cursor: pointer;
	position: relative;
	width: 16px;
	height: 16px;
	font-size: 14px;
	border-radius: 16px;
}

.input-duo[type='checkbox']::after {
	position: absolute;
	top: -2px;
	left: -2px;
	background-color: #c5c5c5;
	color: #fff;
	width: 15px;
	height: 15px;
	display: inline-block;
	visibility: visible;
	padding: 2px;
	text-align: center;
	line-height: 16px;
	content: '';
	border-radius: 16px;
	border: 1px solid #c5c5c5;
}
.input-duo {
	position: absolute;
	left: 20px;
}
.input-duo1[type='checkbox']::after {
	border: 1px solid #c5c5c5;
    color: #c5c5c5;
    background: #fff;
}

.input-duo[type='checkbox']:checked::after {
	content: '\2713';
	font-size: 14px;
    border-radius: 16px;
	background-color: #ee753c;
	color: #fff;
}
</style>
