<template>
  <div class="managements" >
      <div class="xian" :key="index" v-for="(list,index) in lists" >
        <div class="shopping_store">
            <img src="../assets/dianpu.png" alt="">
            <span>{{list.store_name}}</span>
            <img src="../assets/jiantou.png" alt="" style="margin-right: -50px;">
            <slot name="dengdai"><span>退款</span></slot>
        </div>
        <div class="shopping_message" >
            <img  :src="list.goods_image" alt="">
            <!-- <span>{{ list.goods_image }}</span> -->
            <div class="message">
                <div class="message_xinxi">
                    <div class="text">{{list.goods_name}}</div>
                    <span class="dengji">{{ list.goods_spec}}</span>
                    <p class="jianq"> 退款：￥ {{ list.price_num }}</p>
                </div>
                <div class="gongneng">
                    <span>￥{{ list.goods_price }}</span>
                    <br>
                    <span>x {{ list.goods_num }}</span> 
                </div>
                
            </div>
        </div>
        <div class="message_xiangqing">
            <div class="top">
               <div class="top-box"  v-if="list.refund_state == 3 ? true : false">
                   <span class="top-txt">待商家处理</span><span>商家将在</span><span class="top-txt-we">{{countDownList}}</span><span>内处理</span> 
               </div>
               <div class="top-box"  v-if="list.refund_state != 3 ? true : false">
                  <span class="top-txt1" >退款成功</span> <span>退款成功</span> <span>￥{{ list.goods_price }}</span>
               </div>
            </div>
            <!-- <div class="top">
                共 <span> {{ list.goods_num }} </span>件商品&nbsp;&nbsp;合计：<span>￥ {{ list.price_num }}</span>
            </div> -->
            <div class="bot" v-if="show1">
                <slot name="payment"><p @click="payment(list)" v-if="list.refund_state == 3 ? true : false">查看详情</p></slot>
                <slot name="cancel"><p @click="rom(list)"  v-if="list.refund_state != 3 ? true : false">查看详情</p></slot>
                <!-- <slot name="cancel"><p @click="rom()"  v-if="list.refund_state != 3 ? true : false">售后维权</p></slot> -->
                <div class="qingchu"></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import img1 from "../assets/road.png"
import img2 from "../assets/road1.png"
export default { 
  name: 'managements',
  data () {
    return {
      img:img1,
      imgs:img1,
      mgs:1,
      quantity:"",
      show1:this.xiaoyu,
      show2:this.xiaoyu1,
      show3:this.xiaoyu2,
      show4:this.xiaoyu3,
      chux:false,
      zhuangtai:false,
      xians:true
    }
  },
    props:{
        lists:{
            type: Array,
            require: true
        },
        // zhuangtai:{
        //     type: Boolean,
        //     require: true
        // },
        xiaoyu:{
            type: Boolean,
            require:false,
            default:false
        },
        xiaoyu1:{
            type: Boolean,
            require:false,
            default:false
        },
        countDownList:{
            type: String,
        }
    },
    methods:{
        subtract(){
            debugger
            if(this.mgs>0){
                this.mgs--
            }else{
                this.mgs = 0;
            }
            
        },
        payment(a){  
            this.$router.push({name: 'refundDetail', params: {refundDetail:a}})
            // this.$router.push({name: 'sureOrderBuy', params: {buy_list:[a.gid+'|'+this.quantity], ifcart: 0}})
        },
        rom(a){
            this.$router.push({name: 'refundSuccess', params: {refundSuccessList:a}})
        },
        add(){
            this.mgs++
        },
        box(a){
            this.$router.push({name: 'orderDetail', params: {orderList:a}})
        },
      
    },
   

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.qingchu{
  clear: both;
}
.management{
    .xian{margin-bottom: 10px;padding-bottom:10px;margin-bottom: 10px;}
    width: 100%;height: auto;background-color: #f5f5f5;
    .shopping_store{
        height: 44px;font-size: 12px;position: relative;background-color:#fff;
        img:nth-child(1){
            width: 16px;height: 16px;margin: 12px 10px 0px 16px;
        }
        img:nth-child(2){
             width: 16px;height: 16px;margin:0px 10px 0 0 ; 
        }
        
        span{
            vertical-align: top;
            display: inline-block;line-height: 44px;color:rgba(51,51,51,1);
            margin-right: 7px;
        }
        img:nth-child(3){
            width: 5px;height: 8px;margin-right: 7px;position: absolute;
            top: 17px;right: 224px;
        }
        span:nth-child(4){
            font-size: 12px;color:rgba(238,117,60,1);float: right;margin-right: 16px;
        }
        
    }
    .shopping_message{
        height: 92px;font-size: 12px;position: relative;background-color:#fff;display:flex;
        img:nth-child(1){
            width: 225/2px;height: 153/2px;display: inline-block;
            vertical-align: top;margin: 8px 8px 0 16px;
        }
        .message{
            width: 218px;margin-top: 8px;display: inline-block;
            .message_xinxi{
                float: left;height: 76px;
                .text{
                font-size:24/2px; width: 239/2px;height: 34px;
                font-weight:400;margin-bottom: 5px;line-height: 18px;
                color:rgba(51,51,51,1);
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
                .dengji{
                    font-size:24/2px;
                    font-weight:400;
                    color:rgba(141,141,141,1);
                }
            }
            
            .gongneng{
               width: 80px;float: right;;height: 76px;line-height: 24px;text-align: right;
                span:nth-child(1){
                    font-size:24/2px;
                    font-weight:700;
                    color:rgba(141,141,141,1);
                }
                span:nth-child(3){
                    font-size:24/2px;
                    font-weight:400;
                    color:rgba(141,141,141,1);
                }
            }

        }
    }
    .message_xiangqing{
         background-color: #fff;
         .top{
            background-color:#F5F5F5;;font-size: 12px;text-align: center;margin: 0 16px;
            border-radius: 10px;height:343px;height:34px;margin-bottom:20px;line-height:34px;
            span{
                color:#333333;font-size: 16px;
            }
        }
        .bot{
            height: 50%;margin: 0 16px;padding-bottom: 10px;
            p{
                float: right;width: 150/2px;height: 54/2px;
                font-size: 12px;text-align: center;
                line-height: 54/2px;
            }
            p:nth-child(2){
                border:1px solid rgba(141,141,141,1);border-radius: 27px;
                color:rgba(141,141,141,1);
            }
            p:nth-child(1){
                border:1px solid rgba(238,117,60,1);border-radius: 27px;
                color:rgba(238,117,60,1);margin-left: 10px;
            }
        }
    }
}
.top-txt{
    color:#EA4940!important;
}
.top-txt-we{
    color:#EA4940!important;
}
.top-txt1{
    font-weight: bold;
    margin-right:20px;
}
</style>
