<template>
    <div class="goods_detail_foot">
        <div class="foot_body">
            <ul>
                <li  @click="fn1">
                    <img :src="shoplog" alt="">
                    <span>店铺</span>
                </li>
                <li>
                    <img :src="message" alt="">
                    <span>客服</span>
                </li>
                <li @click="fn">
                    <img v-show="noCollect" :src="collect" alt="" >
                    <img v-show="isCollect1" :src="hascollect" alt="">
                    <span>收藏</span>
                </li>
            </ul>
            <div class="goods_buy">
                <span @click="addShop(1)">立即购买</span>
                <span @click="addShop(2)">加入购物车</span>  
            </div>
        </div>
    </div>
</template>

<script>
import { Popup,MessageBox ,Toast  } from 'mint-ui';
import request from "../common/request"
import shoplog from '@/assets/shoplog.png'
import message from '@/assets/center.png'
import collect from '@/assets/evaluate/xing.png'
import hascollect from '@/assets/evaluate/xing1.png'
export default {
    name: 'goods_detail_foot',
    props: ['isCollect'],
    data() {
        return {
           shoplog: shoplog,
           message: message,
           collect: collect,
           hascollect: hascollect,
           noCollect: false,
           gid: '',
           shopid: ''
        }
    },
    created() {
        console.log(this.isCollect)
        if (this.isCollect == false) {
            this.noCollect = true
            this.isCollect1 = false
        }else if(this.isCollect == true){
            this.noCollect = false;
            this.isCollect1 = true
        }
    },
    methods: {
        addShop(a) {
            this.$emit('nowbuy', a)
        },
        fn1(){
            this.shopid = this.$store.state.detail.data.data.goods_info.vid
            // this.$router.push("/storeDetail")
            this.$router.push({name: 'storeDetail', params: { vid: this.shopid}});

        },
        fn(){
             this.gid = this.$route.query.gid
            if(this.$store.state.index == undefined){
                MessageBox.confirm("您好，您还未登录账号，请登录账号","提示").then(action =>{
                    if(action == "confirm"){
                        this.$router.push("/Password_register")
                    }
                }).catch(err => {
                    if(err =='cancel'){
                        this.$router.push("/")
                    }
                })
            }else {
                let This=this
                //存入参数
                let params = {
                    member_id:this.$store.state.index.data.data.member_info.member_id,
                    gid : this.gid
                };
                
                // name 是当前接口名称存在store中的key
                request.AJAX(this.$AjaxUrl.followgoods,params,"followgoods",This).then(()=>{
                            if(this.$store.state.followgoods.data.data.done == true ){
                                this.noCollect = false;
                                this.isCollect1 = true
                                Toast(this.$store.state.followgoods.data.data.msg)
                            }else{
                                this.noCollect = false;
                                this.isCollect1 = true
                                Toast("您已经收藏过了")
                            }
                            
                })

            }    
            
        }
    }
}
</script>

<style lang="less" scoped>
.goods_detail_foot {
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #8080802e;
}
.foot_body {
    width: 343px;
    height: 100%;
    margin: 0 auto;
    ul li {
        float: left;
        font-size:10px;
        font-family:Source Han Sans CN;
        font-weight:400;
        margin-top: 7.5px;
        margin-right: 22px;
        span {
            display: block;
            padding-top: 4px;
            color: #8D8D8D;
        }
        img {
            width: 18px;
            height: 16px;
        }
    }
    .goods_buy {
        span {
            display: block;
            float: right;
            width: 90px;
            height: 40px;
            border-radius:20px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            margin-top: 5px;   
            border: 1px solid; 
        }
        span:nth-child(1) {
            background: #EE753C;
            color: #fff;
        }
        span:nth-child(2) {
            background: #fff;
            color: #EE753C;
            margin-right: 6px;
            border-color: #EE753C;
        }
    }
    // li:nth-child(5) {
    //     width:100px;
    //     height:40px;
    //     background:rgba(255,255,255,1);
    //     border:1px solid rgba(238,117,60,1);
    //     opacity:1;
    //     border-radius:21px;
    //     text-align: center;
    //     line-height: 32px;
    //     float: right;
    //      margin: -42px 6px 0px 0px;
    //     span {
    //         font-size:14px;
    //         font-family:Source Han Sans CN;
    //         font-weight:500;
    //         color:rgba(238,117,60,1);
    //         opacity:1;
    //     }
    // }
    // li:nth-child(4) {
    //     background: #EE753C;
    //     width:103px;
    //     height:40px;
    //     opacity:1;
    //     border-radius:21px;
    //     float: right;
    //     margin-top: 8px;
    //     text-align: center;
    //     line-height: 34px;
    //     margin: 6px 0px;
    //     span {
    //         color: #ffff;
    //     }
    // }

}
</style>
