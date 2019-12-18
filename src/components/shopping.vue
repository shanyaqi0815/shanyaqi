<template>
  <div class="shopping" >
    <div class="xian" :key="a.index" v-for="a in this.message">
        <div class="shopping_store">
            <img :src="a.dianpu.button2" alt="" @click="fn(a)" v-if="true">
            <img src="../assets/dianpu.png" alt="">
            <span>{{a.dianpu.store_name}}</span>
            <img src="../assets/jiantou.png" alt="">
            <span v-if="a.has_red" @click="juan(a)">领劵</span>
        </div>
        <div class="shopping_message" :key="b.index" v-for="b in a.shangping">
            <img :src="b.button2" alt="" @click="fn1($event,b,a)">
            <img :src="b.goods_image" alt="">
            <div class="message">
                <div class="text">{{b.goods_name}}</div>
                <span class="dengji">初级</span>
                <div class="gongneng">
                    <span>{{b.goods_price}}</span>
                    <!-- <del>{{b.del}}</del>   删除价格展示不需要，先隐藏掉 -->
                    <div class="zhengjia">
                        <div @click="subtract(b)">-</div>
                        <div>{{b.goods_num}}</div>
                        <div @click="add(b)">+</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div  class="settle">
        <img :src="img3" alt="" @click="check_all" ref="quanxuan">
        <span>全选</span>
        <span v-show="this.$store.state.count" >合计：<span class="pig">￥{{pig}}</span></span>
        <div v-show="this.$store.state.count" @click="close">结算({{num}})</div>
        <div v-show="!this.$store.state.count" @click="del">删除</div>
        <div v-show="!this.$store.state.count" @click="addPush">移入收藏夹</div>  
    </div>
        <mt-popup v-model="isNowBuy" position="bottom">
            <div class="order_cancel">
                <div class="title">
                    <span class="title_text">优惠</span>
                    <img class="imgs" :src="cancel" @click="nowbuy" alt="">
                </div>
                <div class="title_box">
                    <div class="juan">领劵</div>
                    <shopCoupons :shopCoupons="shopCoupons"></shopCoupons>
                </div>
               
                <button class="sure_button">确认</button>
            </div>
        </mt-popup>
  </div>
</template>

<script>
import img1 from "../assets/road.png"
import img2 from "../assets/road1.png"
import request from "../common/request"
import { MessageBox , Popup,Toast} from 'mint-ui';
import { setTimeout } from 'timers'
import { write } from 'fs'
import cancel from '@/assets/refund2.png'
import { debug, debuglog } from 'util'
import shopCoupons from "../components/shopCoupons"
export default {
  name: 'shopping',
  components:{
      shopCoupons
  },
  created(){
    this.$store.state.count = true;
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
    }
  },
  watch:{
    data_up:{
            handler(){
                this.total_prices()
            },
            immediate: true,
            deep: true
        }
    },
  data(){
    return {
            cartId_list: [], //添加时去重
            buy_list: [], //数组商品id 商品个数 确认订单
            cancel:cancel,
            mgs:1,
            img3:'http://www.horizou.cn/data/upload/mall/store/1/this_circle_20190930145309.png',
            img:'http://www.horizou.cn/data/upload/mall/store/1/this_20190930145714.png',
            lodeData:this.message,
            detaimg:false,
            state:true,
            isNowBuy:false,
            state_tow:false,
            pig:0,
            num:0,
            data_up:this.message,
            shopCoupons: [
                {coupons_money: 10, use_condition: '满69可用', timestart: '2019.10.10', timend: '2019.11.01'},
                {coupons_money: 10, use_condition: '满699可用', timestart: '2019.10.10', timend: '2019.11.01'}
            ]
        }
    },
    props:[
        "message",
    ], 
    methods:{
        nowbuy(){
            this.isNowBuy = false
        },
        juan(a){
            this.isNowBuy = !this.isNowBuy
            // 获取当前店铺id
            var store_id = a.shangping[0].vid
            var This = this //this转换
            // 接口请求参数
            let params = {
                member_id:this.$store.state.index.data.data.member_info.member_id,
                vid: store_id
            }
            let name = 'redListByVid'
            // name 是当前接口名称存在store中的key
            request.AJAX(this.$AjaxUrl.redListByVid,params,name,This).then(()=>{
                this.shopCoupons = this.$store.state.redListByVid.data.data.list;
                for (var i in this.shopCoupons) {
                    if (this.shopCoupons[i].red_hasget == 1) {
                        this.shopCoupons[i].hide = true;
                    } else if(this.shopCoupons[i].red_hasget == 0) {
                        this.shopCoupons[i].hide = false;
                    }
                }
            
            })
        },
        fn(a){            //选中店铺（下面的所有商品选中）
                if(a.dianpu.button2 == this.img3){
                    a.dianpu.button2 =  this.img
                    for(var y in a.shangping){
                        a.shangping[y].button2 = this.img
                    }
                    // 获取商品id 商品数量,并且赋值给变量cart_id
                    this.add_buy_list(a)
                }else{
                    a.dianpu.button2=this.img3
                     for(var y in a.shangping){
                        a.shangping[y].button2 = this.img3
                    }
                    // 取消向数组添加 商品id 商品个数 删除
                    this.del_buy_list(a)
                } 
                 this.data_up = 12321   
                 this.$forceUpdate()  
                 var sb = 0
                 for(var a in this.message){
                     if(this.message[a].dianpu.button2 == this.img){
                         sb++
                     }
                 }
                 if(sb == (Object.keys(this.message).length)){
                   this.check_all()
                 }

        },
        fn1(e,b,a){         //选中商品（如果商品全部选中，就选中店铺
            var This = this
            if(b.button2 == this.img3){
                b.button2 =  this.img
                // 获取商品id 商品数量,并且赋值给变量cart_id
                this.add_buy_list(b)
            }else{
                b.button2 = this.img3
                
                // 取消向数组添加 商品id 商品个数 删除
                this.del_buy_list(b)
            }
            var num = 0;
            var box11 = Object.keys(a.shangping).length
            for(var i in a.shangping){
                if(a.shangping[i].button2 == this.img){
                    num ++;
                }
            }
            if(box11 == num){
                 a.dianpu.button2 = this.img;
            }else{
                 a.dianpu.button2 = this.img3;
            }
             this.$forceUpdate()
                 var sb = 0
                 var zz = 0
                 for(var a in this.message){
                     for( var v in this.message[a].shangping){
                         zz++
                        if(this.message[a].shangping[v].button2 == this.img){
                            sb++
                        }
                     }
                     
                 }
                
                 if(sb == zz){
                  this.$refs.quanxuan.src = this.img
                 }else{
                  this.$refs.quanxuan.src = this.img3
                 }
        },
        add_buy_list(a) { // 向数组添加商品id 商品个数  跳转到确认订单参数
            var This = this
            // 单个商品选中的时候
            if (a.cart_id != undefined) {
                if (this.cartId_list.indexOf(a.cart_id) < 0) {
                    this.cartId_list.push(a.cart_id)
                    var arr = a.cart_id + '|' + a.goods_num
                    this.buy_list.push(arr)
                }
                return
            }

            // 当店铺全选的时候
            console.log(a.shangping, '店铺全选时')
            for (var i in a.shangping) {
                var cart_id = a.shangping[i].cart_id
                var goods_num = a.shangping[i].goods_num
                 if (this.cartId_list.indexOf(cart_id) < 0) {
                    this.cartId_list.push(cart_id)
                    arr = cart_id+'|'+ goods_num
                    this.buy_list.push(arr)
                 }
            }
        },
        del_buy_list(a) { // 取消店铺,单个商品id 个数push到数组
            var This = this
            //单个商品删除的时候
            if (a.cart_id != undefined) {
                for (var i = 0; i < this.buy_list.length; i++) {
                    var get_local = this.buy_list[i].indexOf('|') // 获取特殊字符的下标
                    var get_cart_id = this.buy_list[i].substr(0,get_local) // 获取数组cart_id
                    if (a.cart_id == get_cart_id) {
                        this.buy_list.splice(i, 1) // 删除当前数组元素
                    }
                }
                for (var k = 0; k < this.cartId_list.length; k++) {
                    if (a.cart_id == this.cartId_list[k]) {
                        this.cartId_list.splice(k, 1)
                    }
                }
                return
            }

            // 以店铺为单位删除
            for (var i in a.shangping) {
                for (var j = 0; j < this.buy_list.length; j++) {
                    var get_local = this.buy_list[j].indexOf('|') // 获取特殊字符的下标
                    var get_cart_id = this.buy_list[j].substr(0,get_local) // 获取数组cart_id
                    if (a.shangping[i].cart_id == get_cart_id) {
                        this.buy_list.splice(j, 1) // 删除当前数组元素
                    }
                }
                for (var k = 0; k < this.cartId_list.length; k++) {
                    if (a.shangping[i].cart_id == this.cartId_list[k]) {
                        this.cartId_list.splice(k, 1)
                    }
                }
            }
        },
        update_buy_list() {

        },
        close(){
            if (this.buy_list.length == 0) {
                Toast('请选择商品')
                return
            }
            this.$router.push({name: 'sureOrderBuy', params: {buy_list:this.buy_list, ifcart: 1}});

        },
        check_all(){             //全选按钮，如果点击全部选中
                if(this.$refs.quanxuan.src == this.img3){
                    this.$refs.quanxuan.src = this.img
                    for(var y in this.message){
                        this.message[y].dianpu.button2 = this.img
                        this.add_buy_list(this.message[y])
                        for(var i in this.message[y].shangping){
                            this.message[y].shangping[i].button2 = this.img
                        }
                    }
                }else{
                    this.$refs.quanxuan.src = this.img3
                    for(var y in this.message){
                        this.message[y].dianpu.button2 = this.img3
                        this.del_buy_list(this.message[y])
                        for(var i in this.message[y].shangping){
                            this.message[y].shangping[i].button2 = this.img3
                        }
                    }
                }
        },
        total_prices(){        //计算所有商品的总价
            var total_prices1 = 0;
            var goods_unm = 0 ;
            for(var y in this.message){
                for(var i in this.message[y].shangping){
                    total_prices1 += this.message[y].shangping[i].goods_price * this.message[y].shangping[i].goods_num
                    goods_unm += this.message[y].shangping[i].goods_num
                }
            }
            this.pig = total_prices1;
            this.num =  goods_unm;
        },
        subtract(index){        //点击减少商品数量
            if(index.goods_num>1){
                index.goods_num--;
                for (var i = 0; i < this.buy_list.length; i++) {
                    var get_local = this.buy_list[i].indexOf('|') // 获取特殊字符的下标
                    var get_cart_id = this.buy_list[i].substr(0,get_local) // 获取数组cart_id
                    if (index.cart_id == get_cart_id) {
                        this.buy_list[i] = index.cart_id+'|'+index.goods_num
                    }
                }

            }else{
                index.goods_num = 1;
            }
            this.total_prices()
        },
        add(index){              //点击增加商品数量
            index.goods_num++
            for (var i = 0; i < this.buy_list.length; i++) {
                var get_local = this.buy_list[i].indexOf('|') // 获取特殊字符的下标
                var get_cart_id = this.buy_list[i].substr(0,get_local) // 获取数组cart_id
                if (index.cart_id == get_cart_id) {
                    this.buy_list[i] = index.cart_id+'|'+index.goods_num
                }
            }
            this.total_prices()
        },
        del(){                   //删除数据列表
            // if(this.$refs.quanxuan.src = this.img){
            //     this.message = '' //全部删除，功能有bug暂时注释掉
            // }
            console.log(this.message)
            var arr = []; 
            for(var i in this.message){
                    if(this.message[i].dianpu.button2 == this.img){
                        for(var y in this.message[i].shangping){
                                arr.push(this.message[i].shangping[y].cart_id)
                                console.log(arr,1212121212,12)
                        }
                        console.log(arr,1212121212,13)
                        delete this.message[i]
                        this.$forceUpdate()
                        console.log(arr,1212121212,14)
                    }
                    else if(this.message[i].shangping[y].button2 == this.img){
                        for(var y in this.message[i].shangping){   
                                arr.push(this.message[i].shangping[y].cart_id)
                                delete this.message[i].shangping[y]
                                this.$forceUpdate()
                            
                        }
                    }
            }
                var b = arr.join("|")
                let params = {
                member_id:this.$store.state.index.data.data.member_info.member_id ,
                cart_id:b,        
                }
                let This=this 
                request.AJAX(this.$AjaxUrl.del,params,"del",This).then(()=>{
                })
        },
        addPush(){               //把选中的数据添加到收藏夹保存
            var arr = []; 
            for(var i in this.message){
                for(var y in this.message[i].shangping){
                    if(this.message[i].shangping[y].button2 == this.img){
                         arr.push(this.message[i].shangping[y].cart_id) 
                    }
                }
            }
            let params = {
                member_id:this.$store.state.index.data.data.member_info.member_id ,
                cart_id:arr,      
            }
            let This=this 
            request.AJAX(this.$AjaxUrl.followgoods,params,"followgoods",This).then(()=>{
                Toast(this.$store.state.followgoods.data.data.message)
            })
        }
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.shopping{
    .xian{margin-bottom: 10px;}
    width: 100%;height: auto;background-color: #f5f5f5;
    .shopping_store{
        height: 44px;font-size: 12px;position: relative;background-color:#fff;
        img:nth-child(1){
            width: 16px;height: 16px;margin: 12px 10px 0px 16px;;
        }
        img:nth-child(2){
             width: 16px;height: 16px;margin:0px 10px 0 0 ;
        }
        span{
            font-weight: bold;vertical-align: top;
            display: inline-block;line-height: 44px;color:rgba(51,51,51,1);
            font-weight: bold;margin-right: 7px;
        }
        img:nth-child(4){
            width: 5px;height: 8px;margin-right: 7px;vertical-align: text-top;
        }
        span:nth-child(5){
           float: right;vertical-align: text-top;margin-right:16px;
        }
        
    }
    .shopping_message{
        height: 93px;font-size: 12px;position: relative;background-color:#fff;
        img:nth-child(1){
            width: 16px;height: 16px;margin: 38px 10px 0px 16px;vertical-align: top;
        }
        img:nth-child(2){
            width: 225/2px;height: 153/2px;display: inline-block;
            vertical-align: top;margin: 8px 8px 0 0;
        }
        .message{
            width: 382/2px;height: 76px;margin-top: 8px;display: inline-block;
            .text{
                font-size:24/2px;
                font-weight:400;margin-bottom: 5px;
                color:rgba(51,51,51,1);
                height: 28px;;word-wrap: break-word;
            }
            .dengji{
                font-size:24/2px;
                font-weight:400;
                color:rgba(141,141,141,1);
            }
            .gongneng{
                margin-top: 4px;
                span:nth-child(1){
                    font-size:28/2px;
                    font-weight:700;    display: inline-block;
                    color:rgba(234,73,64,1);margin-top: 6px;
                }
                span:nth-child(2){
                    font-size:20/2px;
                    font-weight:400;
                    color:rgba(197,197,197,1);
                }
                .zhengjia{
                    width: 80px;height: 22px;float: right;line-height: 22px;
                    border:1px solid rgba(153,153,153,1);text-align: center;;
                    div{
                       float: left; 
                    }
                    div:nth-child(1){
                        width: 32%;height: 100%;border-right: 1px solid rgba(153,153,153,1);
                    }
                    div:nth-child(2){
                        width: 32%;height: 100%;border-right: 1px solid rgba(153,153,153,1);
                        font-weight: 900;
                    }
                    div:nth-child(3){
                        width: 32%;height: 100%;
                    }
                }
            }
        }
    }
        .settle{
        height: 45px;background-color: #fff;margin-bottom: 80px;position: fixed;bottom: -31px;z-index:1;width: 100%;;
        img{
             width: 16px;height: 16px;margin: 16px 10px 0px 16px;display: inline-block;;
        }
        span:nth-child(2){
            font-size: 14px;line-height: 45px;display: inline-block;vertical-align: top;
        }
        span:nth-child(3){
             font-size: 14px;line-height: 45px;width:125px;
             display: inline-block;vertical-align: top;margin:0 15px 0 45px;
             .pig{
                 color:#EA4940;font-weight: 700
             }
        }
        div{
            width:150/2px;
            height:30px;font-size: 12px;display: inline-block;float: right;
            background:rgba(238,117,60,1);border:1px solid #fff;
            opacity:1;text-align: center;line-height: 30px;
            border-radius:30px;color: #fff;vertical-align: top;margin: 8px 16px 0 0;
        }
        div:nth-child(5),div:nth-child(6){
             background:#fff;border:1px solid rgba(238,117,60,1);color:rgba(238,117,60,1);
        }
    }
    
}
.order_cancel {
    position: relative;
    width: 376px;
    height: 500px;
    border-radius: 10px 10px 0px 0px;
    .title{
        width: 100%;position: relative;;
        .title_text{
           display: flex;
           justify-content:center;
           font-size: 16px;
           padding-top: 16px;
        }
        .imgs{
            position: absolute;
            top: 16px;
            right: 16px;
            width: 0.56rem;
            height: 0.56rem;
            opacity: 1;

        }
    }
    .title_box{
        margin: 33px 16px 0;max-height: 350px;
        overflow-y: scroll;
        .juan{
            color:rgba(141,141,141,1);
            font-size: 14px;
            margin-bottom: 28px;
        }
    }
}
.sure_button {
    width: 343px;
    height: 40px;
    background: #EE753C;
    opacity: 1;
    border-radius: 22px;
    border: 0px;
    position: absolute;
    bottom:25px;
    left: 18px;
    color: #fff;
    font-size: 16px;
}
</style>
