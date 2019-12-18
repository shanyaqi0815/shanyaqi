// 退款详情
<template>
    <div class="refund_detail">
        <!-- 订单详情页头部 -->
        <orderHeader :orderHeaderMessage="orderHeaderMessage"></orderHeader>
        <!-- 退款详系统返回提示信息 -->
        <div class="notice_message">
            <p>您已成功发起退款申请，请耐心等待商家处理</p>
            <span>
                商家同意或者超时未处理，系统将自动退款给你 如果商家拒绝，您可以修改退款申请后再次发起，商家会重新处理
            </span>
            <ul>
                <li @click="changeApplication(refundDetails)">修改申请</li>
                <li>撤销申请</li>
                <li>客服介入</li>
            </ul>
        </div>
        <!-- 退货信息标题 -->
        <p class="refund_title">退货信息</p>
        <div class="body_des">
            <div class="shop_name">
            <img src="@/assets/dianpu.png" alt="">
            <span>{{ refundDetails.store_name }}</span>
            <img src="@/assets/arrow_right.png" alt="">
            </div>
            <div class="whole-div">
                <img :src="refundDetails.goods_image"  alt=""> 
                <div>
                <span >{{refundDetails.goods_name}} </span> 
                <span>{{refundDetails.goods_num}}</span>
                </div>        
            <div>￥{{refundDetails.goods_price}}</div>
            </div>
        </div>

        <div class="refund-bottom">
            <div>
                <span>
                退款金额: {{ refundDetails.refund_amount }}
                </span>
            </div>
            <div>
                <span>
                退款原因: {{ refundDetails.buyer_message }}
                </span>
            </div>
            <div>
                <span>
                申请时间: {{ refundDetails.admin_time }}
                </span>
            </div>
            <div>
                <span>
                退款编号: {{ refundDetails.refund_sn }}
                </span>
            </div>

        </div>
        
        <service_foot></service_foot>
    </div>    
</template>

<script>
import orderHeader from '../components/orderDetail/orderHeader'
import order_shop from '../components/orderDetail/orderShop'
import service_foot from '@/components/orderDetail/serviceFoot'
import { METHODS } from 'http'
export default {
    name: 'refund_detail',
    data() {
        return {
            refundDetails:this.$route.params.refundDetail,
            isRefund: false,
            orderHeaderMessage: {
                orderStatus: '退款',
                status_des : ''
            }
        }
    },
    components: {
        orderHeader,
        order_shop,
        service_foot
    },
    created(){     
         function getTime(nS) {
            var date=new Date(parseInt(nS)* 1000);
            var year=date.getFullYear();
            var mon = date.getMonth()+1;
            var day = date.getDate();
            var hours = date.getHours();
            var minu = date.getMinutes();
            var sec = date.getSeconds();

            return '还剩'+ day +'天'+ hours +'时'+ minu +'分'
        }  
        this.orderHeaderMessage.status_des = getTime(this.refundDetails.surplus_time)
    },
    methods:{
        changeApplication(index){
            this.$router.push({name:"refunds",params:{refunds:index}})
        },

    }
}
</script>

<style lang="less" scoped>
.refund_detail {
    width: 100%;
    height: 100vh;
    background: #f5f5f5;
}
.notice_message {
    height: 183px;
    background: rgba(255,255,255,1);
    opacity: 1;
    margin-top: -30px;
    p:nth-child(1) {
        height: 44px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 44px;
        color: rgba(51,51,51,1);
        opacity: 1;
        text-align: 16px;
        padding-left: 16px;
        border-bottom: 1px solid #EDEDED;
    }
    span:nth-child(2) {
        width: 336px;
        height: 60px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(141,141,141,1);
        opacity: 1;
        text-align: left;
        margin: 13px 0px 0px 16px;
        text-align: left;
        display: block;
        line-height: 20px;
    }
    ul {
        width: 100%;
        height: 27px;
        margin-top: 13px;
        li:first-child {
            margin-right: 20px;
            color: #EE753C;
            border: 1px solid #EE753C;
        }
        li {
            width:75px;
            font-size:12px;
            font-family:Source Han Sans CN;
            font-weight:400;
            line-height:27px;
            text-align: center;
            color:rgba(141,141,141,1);
            opacity:1;
            float: right;
            margin-right: 10px;
            border: 0.5px solid #8D8D8D;
        }
    }
}
.refund_title {
    height: 55px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    background: #fff;
    color: rgba(51,51,51,1);
    margin-top: 10px;
    padding: 16px 0px 0px 16px;
}
.body_des {
    width: 100%;
    height: 138px;
    background: rgba(255,255,255,1);
    opacity: 1;
    margin-top: -28.5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    div {
        width: 686px/2px;
        margin: 0px auto;
    }
}
.shop_name {
    img {
      width:16px;
      height:14px;
      opacity:1;
      float: left;
      margin: 10px 0px 0px 0px;
    }
    span {
        height: 12px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 12px;
        color: rgba(51,51,51,1);
        opacity: 1;
        float: left;
        margin: 10px 0px 0px 6px;
    }
    img:nth-child(3) {
        width: 4.5px;
        height: 8px;
        opacity: 1;
        float: left;
        margin: 13px 0px 0px 10px;
    }
}
.whole-div{
  display: flex;
  padding: 10px;
  img{
    height: 20%;
    width: 30%;
  }
  div{
    margin-left:10px;
    font-size: 12px;
  }
  div:last-child{    
    text-align: right;
  }
  span{
    display: block;
    font-size: 14px;
  }
  span:last-child{
    color:#c5c5c5;
    margin-top:5px;
  }
}
.refund-bottom{
  background: #fff;
  font-size: 14px;
  div{
    padding: 10px 0;
    // height: ;
  }
  span{
    display: inline;
    padding:0 15px;
  }
}
</style>
