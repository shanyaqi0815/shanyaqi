<template>
    <div class="listBankCard">
        <div :class="{select_bank: true}" :key="index" v-for="(item, index) in listtBanks" @click="clickBack(index)">
            <div class="back-left">
                <img :src="item.bankimg" alt="">
                <div>
                    <span>{{ item.bankname }}</span>
                    <span>尾号{{ item.card }}{{item.type = 1 ?'储蓄卡':'信用卡'}}</span>
                </div>            
            </div>                    
            <img src="../../assets/road1.png" :class="{'select-img': true,isSelect:index==selectIndex}" />
        </div>

        <div class="add_bank_card" @click="addCards">
            <span>+</span>
            <span>添加银行卡</span>
        </div>
    </div>
</template>

<script>
import sureimg from '@/assets/refunds4.png'
import bank_log from '@/assets/shoplog.png'
import request from "../../common/request"
export default {
    name: 'listBankCard',
    data() {
        return {
            listtBanks: [],
            array_index: 0,
            selectBankss:'',
            backs : ''
        }
    },
    created(){
        this.clickBack(0);
    },
    methods:{
        clickBack(index){
            this.selectIndex = index;
            var This = this;
            let params = {
                member_id : this.$store.state.index.data.data.member_info.member_id
            }
            request.AJAX(this.$AjaxUrl.listBankCard, params, "listBankCard", This).then(() => {
                this.listtBanks = this.$store.state.listBankCard.data.data.cardList;
                let result = this.listtBanks.filter(item=>{
                    if(item.type == "信用卡"){
                        return true
                    }
                })
                this.banks = this.listtBanks[index];
                if(this.banks != undefined){
                    this.$emit('selectCard',this.banks)
                }
                
            })
        },
        addCards(){
            this.$router.push("/addBankCard")
        },
    }    

}
</script>

<style lang="less" scoped>
.listBankCard {
    width: 100%;
    // height: 100vh;
    background: #f5f5f5;
    overflow: hidden;
}
.add_bank_card {
    margin-top: 10px;
    width: 100%;
    height: 44px;
    background: rgba(255,255,255,1);
    opacity: 1;
    span:nth-child(1) {
        color: rgba(238,117,60,1);
        opacity: 1;
        font-size: 33px;
        line-height: 45px;
        margin-left: 135px
    }
    span:nth-child(2) {
        width: 140px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 25px;
        color: rgba(238,117,60,1);
        opacity: 1;    
        float: right;
        margin: 10px 75px 0px 0px;
    }
}
.select_bank {
    width: 343px;
    height: 75px;
    background: rgba(255,255,255,1);
    opacity: 1;
    margin: auto;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    img:nth-child(1) {
        width: 45px;
        height: 45px;
        margin: 15px 0px 0px 16px;
        display: inline-block;

        }   
        span {
            margin:15px 0 0 15px;;
            display: block;
            font-size:14px;
            font-family:Source Han Sans CN;
            color:rgba(51,51,51,1);
            opacity:1;
        }
        span:nth-child(3) {
            display: block;
            color: grey;
        }
}
.back-left{
    display: flex;
}
.list_bank {
    width: 757px/2px; 
}
.bankCards {
    width: 757px/2px;
}
.sureImg {
    width: 25px;
    height: 25px;
    margin: 30px 16px 0px 0px;
    border-color:transparent;
}
.select-img{
    display: none;
    padding: 20px;
    height: 16px;
    width: 16px;
}
.isSelect{
    display: block;
}
</style>
