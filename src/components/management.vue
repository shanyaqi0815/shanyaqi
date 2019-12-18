<template>
  <div class="management" >
      <div class="xian" :key="index" v-for="(list,index) in lists" >
        <div class="shopping_store">
            <img src="../assets/dianpu.png" alt="">
            <span>{{list.store_name}}</span>
            <img src="../assets/jiantou.png" alt=""/>
            <span v-if="list.order_state == 0 ? true : false">已取消</span>
            <span v-if="list.order_state == 10 ? true : false">等待付款</span>
            <span v-if="list.order_state == 20 ? true : false">待展开</span>
            <span v-if="list.order_state == 30 ? true : false">待完结</span>
            <span v-if="list.order_state == 40 ? true : false">待评价</span>
        </div>
        <div class="shopping_message" @click="box(list)">
            <img  :src="list.goods_image" alt="">
            <div class="message">
                <div class="message_xinxi">
                    <div class="text">{{list.goods_name}}</div>
                    <span class="dengji">{{ list.goods_spec}}</span>
                </div>
                <div class="gongneng">
                    <span>{{ list.goods_price }}</span>
                    <br>
                    <span>x {{ list.goods_num }}</span> 
                </div>
                
            </div>
        </div>
        <div class="message_xiangqing">
            <div class="top">
                共 <span> {{ list.goods_num }} </span>件商品&nbsp;&nbsp;合计：<span>￥ {{ list.price_num }}</span>
            </div>
             <!-- <div class="bot"  v-if="list.order_state == 0 ? true : false"> -->
                <!-- <slot name="payment"><p @click="payment(list,0)">立即付款</p></slot> -->
                <!-- <slot name="cancel" v-if="zhuangtai"><p @click="rom(list,index)">已取消</p></slot>
                <div class="qingchu"></div>
            </div> -->
            <div class="bot"  v-if="list.order_state == 10 ? true : false">
                <slot name="payment"><p @click="payment(list,0)">立即付款</p></slot>
                <slot name="cancel" v-if="zhuangtai"><p @click="rom(list,index)">取消订单</p></slot>
                <div class="qingchu"></div>
            </div>
            <div class="bot" v-if="list.order_state == 20 ? true : false">
                <slot name="payment"><p @click="payment(list,1)">立即开始</p></slot>
                <slot name="cancel" v-if="false"><p >延长日期1</p></slot>
                <div class="qingchu"></div>
            </div>
            <div class="bot" v-if="list.order_state == 30 ? true : false">
                <slot name="payment"><p @click="payment(list,2)">确认完成</p></slot>
                <slot name="cancel" v-if="false"><p >延长日期2</p></slot>
                <div class="qingchu"></div>
            </div>
            <div class="bot" v-if="list.order_state == 40 ? true : false">
                <slot name="payment"><p @click="pingjia(list)">评价</p></slot>
                <slot name="cancel" v-if="false"><p >延长日期3</p></slot>
                <div class="qingchu"></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import img1 from "../assets/road.png"
import img2 from "../assets/road1.png"
import request from "../common/request"
import { debug } from 'util'
export default {
  name: 'management',
  data () {
    return {
      img:img1,
      imgs:img1,
      mgs:1,
      quantity:""  
    }
  },
    props:{
        lists:{
            type: Array,
            require: true
        },
        zhuangtai:{
            type: Boolean,
            require: true
        },
    },
    methods:{
        subtract(){
            if(this.mgs>0){
                this.mgs--
            }else{
                this.mgs = 0;
            }
            
        },
        payment(a,b){
            if(b == 0){   // 0代表是待付款
                this.$router.push({name: 'sureOrderBuy', params: {buy_list:[a.gid+'|'+a.goods_num], ifcart: 0}})
            }else if(b == 1){   // 1 代表示待服务
                let This = this
                let params = {
                    member_id: this.$store.state.index.data.data.member_info.member_id  ,
                    state:'confirm',
                    order_id:a.order_id,

                };
                request.AJAX(this.$AjaxUrl.order_handle, params, "order_handle", This).then(() => {
                    
                })
            }else if(b == 2){  // 代表示待完结

                let This = this
                let params = {
                    member_id: this.$store.state.index.data.data.member_info.member_id  ,
                    state:'confirm',
                    order_id:a.order_id,

                };
                request.AJAX(this.$AjaxUrl.order_handle, params, "order_handle", This).then(() => {
                    
                })
            }
        },
        rom(a,b){
            let This = this
			let params = {
				member_id: this.$store.state.index.data.data.member_info.member_id  ,
                state:'cancel',
                order_id:a.order_id,

			};
			request.AJAX(this.$AjaxUrl.order_handle, params, "order_handle", This).then(() => {
                 var res= This.$store.state.order_handle.data.data.code
                if ( res == "200"){
                     delete This.lists[b] 
                     This.$parent.$parent.$parent.getOrderLists("10");
                }
            })
        },
        add(){
            this.mgs++
        },
        box(a){
            if(a.order_state == '0'){
                this.$router.push({ path: "/goodsdetail", query: { gid: a.gid } });
            }else{
                this.$router.push({name : 'orderDetail', params : {orderList:a}})
            }
            
        },
        pingjia(b){
            this.$router.push({name : 'evaluate', params : {evaluateList:b}})
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
        // display: flex;
        height: 44px;
        font-size: 14px;
        // position: relative;
        background-color:#fff;
        img:nth-child(1){
            width: 14px;
            height: 14px;
            display: inline-block;
            margin: 0 10px 0 15px;
        }
        img:nth-child(2){
            width: 16px;height: 16px;margin:0px 10px 0 0 ; 
        }
        
        span{
            vertical-align: center;
            display: inline-block;
            line-height: 44px;
            color:rgba(51,51,51,1);
            margin-right: 7px;
        }
        img:nth-child(3){
            width:8px;
            height: 10px;
            vertical-align: center;
            display: inline-block;
            color:rgba(51,51,51,1);
            margin-right: 7px;
        }
        span:nth-child(4){
            font-size: 12px;color:rgba(238,117,60,1);float: right;margin-right: 16px;
        }
        
    }
    .shopping_message{
        display: flex;
        height: 92px;
        font-size: 12px;
        background-color:#fff;;
        img:nth-child(1){
            width: 30%;
            height: 153/2px;
            display: inline-block;
            vertical-align: top;margin: 8px 8px 0 16px;
        }
        .message{
            // width: 218px;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            padding-right: 20px;
            width: 70%;
            .message_xinxi{
                float: left;
                // height: 76px;
                .text{
                font-size:24/2px;
                //  height: 34px;
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
            //    width: 80px;
            //    float: right;
               height: 76px;line-height: 24px;text-align: right;
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
            color:rgba(141,141,141,1);;font-size: 12px;text-align: right;margin: 0 16px;
            span{
                color:#EA4940;font-size: 16px;
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
</style>
