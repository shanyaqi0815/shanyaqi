<template>
    <div class="listBalance">        
        <div class="balance-top">
            <div>
                <span>账户余额(元)</span>
                <span @click="box">查看明细</span>
            </div>
            <p class="balance-center">
                {{available_predeposit}}
            </p>
        </div>
         

        <div class="balance-bottom" @click="recharge()">
            <span>
                <img src="../../assets/chongzhi.png"/>
                充值
            </span>
            <img src="../../assets/scoped/sert4.png" class="click-img" />
        </div>
        <div class="balance-bottom" @click="withdraw()">
            <span>
                <img src="../../assets/tixian.png"/>
                提现
            </span>            
            <img src="../../assets/scoped/sert4.png" class="click-img" />
        </div>
    
    </div>
</template>

<script>
import request from "../../common/request"
export default {
    data() {
        return {
            available_predeposit:'',
        }
    },
    components:{
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            var This =this;
            let params = {
                member_id : this.$store.state.index.data.data.member_info.member_id
            }
            request.AJAX(this.$AjaxUrl.balance, params, "balance", This).then(() => {
                let res = this.$store.state.balance.data.data;
                this.available_predeposit = Math.floor(res.available_predeposit * 100) / 100
        })
        },
        recharge(){
            this.$router.push('/recharge')
        },
        withdraw(){
            this.$router.push('/withdraw')
        },
        box(){
            this.$router.push("/ChangeDetails")
        }
    },
    

}
</script>

<style lang="less" scoped>
.balance-top{  
    height: 20vh;
    background: #EE753C;
    padding: 20px;
    div{
        display: flex;
        justify-content: space-between;
    }
    span{        
        font-size:14px;  
        color:#fff;
    }
    p{
        margin-top:20px;
        font-size:26px;
        font-weight: bold;  
        color:#fff;
    }
}
.balance-bottom{
    padding:10px 20px;
    font-size: 14px;
    img:nth-child(2){
        float: right;
        height: 12px;
        width:6px;
    }
    span{
        display: inline-block;
    }
    span>img{
        height: 14px;
        width: 12px;
        margin-right: 5px;
    }
    
}
</style>
