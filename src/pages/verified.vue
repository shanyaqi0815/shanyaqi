<template>
    <div class="verified">
        <div class="verified_img">
            <p>上传身份证正反面</p>
            <div>
                <div class="img_uploda">
                    <img :src="positive" alt="">
                </div>
                <span class="img_txt">拍摄正面</span>
            </div>
            <div>
                <div class="img_uploda">
                    <img :src="opposite" alt="">
                </div>
                <span class="img_txt">拍摄反面</span>
            </div>
            <span class="uploda_notice">拍摄时确保身份证边框完整，字体清晰，亮度均匀</span>
        </div>
        <div class="qingchu"></div>
        <div class="verified_message">
            <ul>
                <li> 
                    <span>姓名</span>
                    <input type="text" placeholder="请输入你的姓名" v-model="name">
                <li> 
                    <span>证件类型</span>
                    <input type="text" placeholder="身份证" >
                </li>
                <li> 
                    <span>证件号码</span>
                    <input type="number" placeholder="请输入你的证件号码" v-model="card" oninput="if(value.length>17)value=value.slice(0,18)">
                </li>
                <!-- <li> 
                    <span>银行卡</span>
                    <input type="text" placeholder="请输入你的银行卡号" v-model="bankCard">
                </li>
                <li> 
                    <span>银行预留手机号</span>
                    <input type="text" placeholder="请输入银行预留手机号" v-model="bankPhone">
                </li>
                <li> 
                    <span>验证码</span>
                    <input type="text" placeholder="请输入验证码" v-model="verification">
                    <span @click="verificationCode()">获取验证码</span>
                </li> -->
            </ul>
        </div>
        <button @click="submit()">确认</button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import positive from '@/assets/verified/positive.png'
import opposite from  '@/assets/verified/opposite.png'
import down_arrow from '@/assets/down_arrow.png'
import request from "../common/request"
import { error } from 'util'
export default {
    data() {
        return {
            positive: positive,
            opposite: opposite,
            name:'',
            card:'',
            bankCard:'',
            bankPhone:'',
            verification:''
        }
    },
    methods: {
        verificationCode() {
        },
        submit(){
           
            if(this.name != '' && this.card !=''){
                // retrun new Promise(function(){})
                this.$ajax.post('http://h5.horizou.cn:8088/api/v1/personalInfo',
                {  
                    member_id : this.$store.state.index.data.data.member_info.member_id,
                    idcard : this.card,
                    realname:this.name
                }             
                ).then((res)=>{
                    if(res.status == 205){
                        this.$router.push({path:'/ModifyPaymentsSure',query:{set_password :true}})
                    } 
                }).catch((err)=>{
                    Toast({
                        message: err.response.data.message,
                        position: 'center',
                        duration: 5000
                    }) 
                })
                }else{
                    Toast({
                        message: '请输入正确的身份证信息',
                        position: 'center',
                        duration: 5000
                    })
                }
                   
        }
    }
}
</script>

<style lang="less" scoped>
.verified {
    background: #F5F5F5;
    height: 100vh;
}
.verified_img {
    width:100%;
    height:220.5px;
    background: #fff;
    // background:rgba(255,255,255,1);
    p {
        height:14px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        line-height:24px;
        color:rgba(51,51,51,1);
        padding: 16px 0px 0px 16px;
    }
    div:nth-child(2) {
        float: left;
        width:166px;
        height:140.5px;
        background:#FFF5F1;
        margin: 20px 0px 0px 16px;
    }
    div:nth-child(3) {
        float: right;
        width:166px;
        height:140.5px;
        background:#FFF5F1;
        margin: 20px 16px 0px 0px;
    }
    .img_txt {
            height: 30px;
            display: block;
            background: rgba(238,117,60,1);
            opacity: 1;
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            font-family:PingFang-SC-Medium;
            color:rgba(255,255,255,1);
    }
}
.img_uploda {
    width:112px;
    height:74.5px;
    border:1px solid rgba(238,117,60,1);
    border-radius:5px;
    margin: 16px auto;
    img {
        width:91.5px;
        height:52px;
        background:rgba(255,255,255,1);
        border-radius:2px;
        margin: 12px 0px 0px 9.5px;
    }
}
.uploda_notice {
    height:14px;
    font-size:14px;
    font-family:Source Han Sans CN;
    font-weight:400;
    line-height:30px;
    color:#C5C5C5;
    display: block;
    margin-left: 22px;
}
.verified_message {
    margin-top: 15px;
    ul li{
        background: #fff;
        height: 44px;
        font-size: 14px;
        font-family:Source Han Sans CN;
        display: flex;
        justify-content: space-between;
        padding: 0 20px ;
        align-items: center;
        span{
            display: inline-block;
        }
        input {
            border: none;
            // direction: rtl;
            text-align: right;
        }
        span:last-child{            
            color: rgba(238,117,60,1);
        }
    }   
}
button {
    width: 343px;
    height: 40px;
    background: rgba(238,117,60,1);
    opacity: 1;
    border-radius: 22px;
    border: 0px;
    margin: 30.5px 0px 0px 16px;
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color: #fff;
}
</style>
