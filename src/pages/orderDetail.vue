<template>
    <div class="order_detail">
        <!-- 订单详情页头部 -->
        <orderHader :orderHeaderMessage="orderHeaderMessage" ></orderHader>
        <!-- 订单相关店铺信息 -->
        <orderShop :orderShopMsg="orderShopMsg"></orderShop>
        <!-- 订单信息 -->
        <orderMessage :orderMsg="orderMsg"></orderMessage>
        <!-- 联系客服 -->
        <serviceFoot></serviceFoot>
        <!-- 订单信息底部 -->
    </div>
</template>

<script>
import orderHader from '../components/orderDetail/orderHeader'
import orderShop from '../components/orderDetail/orderShop'
import orderMessage from '../components/orderDetail/orderMessage'
import serviceFoot from '@/components/orderDetail/serviceFoot'
import orderFoot from '../components/orderDetail/orderFoot'
import { Popup } from 'mint-ui'
import img1 from "../assets/road.png"
import img2 from "../assets/road1.png"
import request from "../common/request"
export default {
    name: 'order_detail',
    components: {   
        orderHader,orderShop,orderMessage,serviceFoot,orderFoot
    },
    data() {
        return {
            orderList: this.$route.params.orderList,
            restTime:'',//surplus_pay_time剩余时间戳
            isCancel: false,
            img1: img1,
            img2: img2,
            isChecked: false,
            orderHeaderMessage: {
               orderStatus: '',
               status_des : '',
               surplus_day:'',
            },
            orderShopMsg:{
                store_name:'',
                goods_image:'',
                goods_name:'',//商品名称
                goods_price:'',//商品价格
                goods_num:'',//数量
                pd_points:'',//积分抵扣
                red_money:'',//优惠券抵扣
                goods_pay_price:'',//成交价
                order_state :'',
                order_id :'',
                order_amount:'',//实际付款价格
                vred_money:'',//店铺优惠券
            },
            orderMsg:{
                order_sn:'',//订单号
                payment_code:'', //交易方式
                payment_time:'',//付款时间
                start_time:'',//开始时间  
                finnshed_time:'',//完成时间
                pay_sn:'',//交易号
                add_time:'',//创建时间
            },
            cancelreasones: [
                {id: 1, reasonname: '我不想买了'},
                {id: 2, reasonname: '信息选错，重新拍'},
                {id: 3, reasonname: '时间与自己不符'},
                {id: 4, reasonname: '服务已开始'},
                {id: 5, reasonname: '其他原因'},
            ],
            box:[
                {
                   message:[
                       {text:"一大堆废话就是为了显示我很牛的样子哈哈",dengji:"高级",pic:"￥1234",del:"￥998",},
                    ],
                    store:{name:"我是天猫商城里面的店铺"}
                }
            ],
            orderOprates : [
                {doing: '评论'},
                {doing: '删除订单'},
                {doing: '申请开票'},
                {doing: '查看物流'},
            ]
        }
    },
    watch:{
    },
    created(){
        this.init();
    },
    methods: {
        init(){
            var This = this;
            let params ={
                order_id: this.orderList.order_id
            }
            
            request.AJAX(this.$AjaxUrl.orderDetail, params, "orderDetail", This).then(() => {
                var res = This.$store.state.orderDetail.data.data; 
                if(res.code == 200){
                    if(res.list.order_state == '0'){
                        this.orderHeaderMessage.orderStatus = '取消'
                    }if(res.list.order_state == '10'){
                        this.orderHeaderMessage.orderStatus = '待付款'
                    }if(res.list.order_state == '20'){
                        this.orderHeaderMessage.orderStatus = '待展开'
                    }if(res.list.order_state == '30'){
                        this.orderHeaderMessage.orderStatus = '待完结'
                    }if(res.list.order_state == '40'){
                        this.orderHeaderMessage.orderStatus = '待评价'
                    }

                    var currentTimestamp = (new Date()).getTime();
                    var upTimestamp = res.list.surplus_pay_time;
                    var countDown =  Number( upTimestamp*1000 -currentTimestamp)
                    var day = parseInt(countDown / (60*60*24*1000))                    
                    var hour = parseInt(countDown / (60*60*1000) % 24)
                    var minu = parseInt(countDown / (60*1000) % 60)
                    var sec = parseInt(countDown / 1000 % 60)

                    this.orderHeaderMessage.status_des = "订单超过24小时自动取消，还剩余"+ hour + "小时" + minu +"分"
                    this.orderHeaderMessage.surplus_day =  res.list.surplus_day

                    this.orderShopMsg.store_name = res.list.store_name
                    this.orderShopMsg.goods_image = res.list.goods_image
                    this.orderShopMsg.goods_name = res.list.goods_name
                    this.orderShopMsg.goods_price = res.list.goods_price
                    this.orderShopMsg.goods_num = res.list.goods_num
                    this.orderShopMsg.pd_points = res.list.pd_points                    
                    this.orderShopMsg.red_money = res.list.red_money                    
                    this.orderShopMsg.order_id = res.list.order_id 
                    this.orderShopMsg.order_amount = res.list.order_amount
                    this.orderShopMsg.vred_money = res.list.vred_money    
                               
                    if(res.list.order_state == "20"){
                        this.orderShopMsg.order_state = "退款"
                    }
                    // if(res.list.order_state == "30"){
                    //     this.orderShopMsg.order_state = "申请售后"
                    // }
                    if(res.list.order_state == "0" || res.list.order_state == "10" || res.list.order_state == "40"){
                        this.orderShopMsg.order_state = ""
                    }

                    this.orderMsg.goods_pay_price = res.list.goods_pay_price
                    this.orderMsg.order_sn = res.list.order_sn
                    this.orderMsg.payment_code = res.list.payment_code
                    this.orderMsg.payment_time = res.list.payment_time
                    this.orderMsg.start_time = res.list.start_time
                    this.orderMsg.finnshed_time = res.list.finnshed_time
                    this.orderMsg.add_time = res.list.add_time 
                    this.orderMsg.pay_sn = res.list.pay_sn
                    
                }
            }) 
        },
        
        cancelOrder() {
            this.isCancel = !this.isCancel
        },
        ischeked(e){
            this.cancelreasones.forEach(element => {
                if (element.id == e) {
                    this.isChecked = !this.isChecked
                }
            });     
      },
    }
}
</script>

<style lang="less" scoped>
.order_detail {
    background: #f5f5f5;
    width: 100%;
    height: auto;
}
.foot {
    margin-top: 18.5px;
}
.order_detail /deep/ .mint-popup-bottom {
    border-radius: 10px 10px 0 0;
}
.order_cancel {
    width: 376px;
    height: 500px;
    border-radius: 10px 10px 0px 0px;
    div:nth-child(1) {
        width: 100%;
        height: 51.5px;
        span:nth-child(1) {
            width:134px/2px;
            height:32px/2px;
            font-size:32px/2px;
            font-family:Source Han Sans CN;
            font-weight:500;
            line-height:35px/2px;
            color:rgba(65,65,65,1);
            opacity:1;
            float: left;
            margin: 18px 0px 0px 150px;
        }
        img:nth-child(2) {
            width:21px;
            height:21px;
            background:rgba(153,153,153,1);
            opacity:1;
            float: right;
            margin: 18px 16px 0px 0px; 
        }
    }
    .cancel_comment {
        width: 91%;
        height: 30px;
        line-height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 35px;
        color: rgba(141,141,141,1);
        margin: 0 auto;
    }
    ul {
        width: 93%;
        margin: 30px auto;
        li {
            width: 100%;
            height: 14px;
            margin: 15px 0px;
            span {
                height: 14px;
                font-size: 14px;
                font-family:Source Han Sans CN;
                font-weight: 400;
                line-height: 12.5px;
                color:rgba(51,51,51,1);
                opacity: 1;
                float: left;
            }
            img {
                width:16px;
                height:16px;
                opacity:1;
                float: right;
            }
        }
    }
}
</style>
