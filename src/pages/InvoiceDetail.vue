<template>
  <div class="invoiceDetail">
    <div class="invoice">
        <div class="seal">
          <img  src="../assets/invoiceType.png"   alt="">
        </div>
        <div class="content">
          <p><span class="info1">销方名称</span><span class="info">UCC国际旗舰店</span></p>
          <p><span class="info1">购方名称</span><span class="info">个人</span></p>
          <p><span class="info1">发票金额</span><span class="info">2980.09</span></p>
          <p><span class="info1">发票日期</span><span class="info">2019-08-22</span></p>
          <p><span class="info1">发票代码</span><span class="info">189765426878</span></p>
          <p><span class="info1">发票号码</span><span class="info">879675433</span></p>
          <div class="xian1"></div>
          <div class="content-bottom content-bottom1">
            <span class="info1">查看发票</span><img src="../assets/scoped/sert4.png" alt="">
          </div>
          <div class="xian"></div>
          <div @click="byMailbox" class="content-bottom">
               <span class="info1">发送到邮箱</span><img src="../assets/scoped/sert4.png" alt="">
          </div>
        </div>
    </div>    
  </div>
</template>

<script>

  export default {
    name:'invoiceDetail',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      byMailbox() {
				this.$router.push({name:"DownloadInvoice"})
      }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .invoiceDetail {
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    padding-top: 30px;
    .invoice {
      width: 80%;
      margin: 0 auto;
      height: 420px;
      background-color: #ffffff;
      padding: 10px 15px;
      .seal {
        margin: 0 auto;
        text-align: center;
        img {
          width: 50%;
        }
      }
      .content {
        font-size: 14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        opacity:1;

        p {
          height: 35px;
          color:rgba(28,28,28,1);
          span {
            width: 50%;
            display: inline-block;
          }
          .info1 {
            font-weight: bold;
          }
          .info {
            color:rgba(153,153,153,1);
            text-align: right;
          }
        }
      }
         
    
    }
  }
.content-bottom{
      font-size: 14px;
      font-family:Source Han Sans CN;
      // font-weight:400;
      opacity:1;
      display:flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      margin-bottom:30px;
  }
.content-bottom img{
  width:6px;
  height:11px;
}
.content-bottom1{
  margin-top:30px;
}
.xian1{
  width:328px;
  height:1px;
  background-color:#f5f5f5;
  position:absolute;
  top:330px;
  left:24px;
}
.xian{
  width:328px;
  height:1px;
  background-color:#f5f5f5;
  position:absolute;
  top:385px;
  left:24px;
}
</style>