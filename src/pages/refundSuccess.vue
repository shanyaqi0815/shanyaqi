// 退款详情
<template>
  <div class="refund_success">
    <!-- 订单详情页头部 -->
    <RefundSuccessfuls :orderHeaderMessage="orderHeaderMessage"></RefundSuccessfuls>
    <!-- 退款详系统返回提示信息 -->
    <div class="notice_message">
      <div class="list">
        <p>退款金额</p>
        <p class="jiantou jiantou1">￥{{successList.refund_amount}}</p>
      </div>
      <div class="list">
        <p>退回余额</p>
        <p class="jiantou jiantou2">￥{{successList.refund_amount}}</p>
      </div>
      <!-- <div class="list">
        <p>退回红包</p>
        <p class="jiantou jiantou3">￥{{successList.refund_amount}}</p>
      </div> -->
    </div>
    <!-- <div class="list-box" @click="dianji">
      <div class="list-layout">
        <p>售后维权</p>
        <img class="list-jiantou" src="../assets/scoped/sert4.png" alt />
      </div>
    </div> -->
    
  <p class="refund_title">退货信息</p>
   <div class="body_des">
     <div class="shop_name">
      <img src="@/assets/dianpu.png" alt="">
      <span>{{ successList.store_name }}</span>
      <img src="@/assets/arrow_right.png" alt="">
    </div>
      <div class="whole-div">
        <img :src="successList.goods_image"  alt=""> 
        <div>
          <span class="div-span">{{successList.goods_name}} </span> 
        </div>        
      <div> <p>￥{{successList.goods_price}}</p> <span class="whole-div-span">x{{successList.goods_num}}</span></div>
      </div>
   </div>

    <div class="refund-bottom">
      <div>
        <span>
          退款金额: {{ successList.refund_amount }}
        </span>
      </div>
      <div>
        <span>
          退款原因: {{ successList.buyer_message }}
        </span>
      </div>
      <div>
        <span>
          申请时间: {{ successList.admin_time }}
        </span>
      </div>
      <div>
        <span>
          退款编号: {{ successList.refund_sn }}
        </span>
      </div>

    </div>

    <serviceFoot></serviceFoot>
  </div>
</template>

<script>
import RefundSuccessfuls from "../components/orderDetail/RefundSuccessfuls"
import serviceFoot from "@/components/orderDetail/serviceFoot"
export default {
  name: "refund_success",
  data() {
    return {
      successList:this.$route.params.refundSuccessList,
      orderHeaderMessage: {
        order_status: '退款成功',
        status_des : ''
    },
    }
  },
  components: {
    RefundSuccessfuls,serviceFoot
  },
  created(){
  },
  methods: {    
  }
};
</script>

<style lang="less" scoped>
.refund_success {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
}
.notice_message {
  width: 100%;
  //   height: 183px;
  background: #fff;
  opacity: 1;
  margin-top: -30px;
  margin-bottom:20px;
  p:nth-child(1) {
    width: 100%;
    height: 44px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 44px;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
    text-align: 16px;
    padding-left: 16px;
  }
  span:nth-child(2) {
    width: 336px;
    height: 60px;
    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(141, 141, 141, 1);
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
      color: #ee753c;
      border: 1px solid #ee753c;
    }
    li {
      width: 75px;
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 27px;
      text-align: center;
      color: rgba(141, 141, 141, 1);
      opacity: 1;
      float: right;
      margin-right: 10px;
      border: 0.5px solid #8d8d8d;
    }
  }
}
.refund_title {
  width: 100%;
  height: 55px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  background: #fff;
  color: rgba(51, 51, 51, 1);
  margin-top: 10px;
  padding: 16px 0px 0px 16px;
}
.list {
  // width:343px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededed;
  font-size: 14px;
}
.jiantou {
  margin-right: 16px;
}
.jiantou1 {
  font-size: 18px;
  color: #ea4940;
}
.list-box {
  width: 375px;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 14px;
}
.list-layout {
  width: 343px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}
.list-jiantou {
  width: 6px;
  height: 11px;
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
.div-span{
  color:black !important;
}
</style>
