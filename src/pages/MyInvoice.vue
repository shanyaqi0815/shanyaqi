<template>
  <div class="MyInvioce">
      <p class="count">共 <span class="light"> 8</span> 张</p>
      <div class="invoices" @click="goInvioceDetail">
          <div class="header">
            <p><img src="../assets/invioce.png"  alt="" ></p>
            <p class="name">UCG国际旗舰店</p>
          </div>
          <div class="infor">
              <p><span class="opt">购方名称</span><span class="opt2">个人</span></p>
              <p><span class="opt">发票金额</span><span class="opt2">2980.9</span></p>
              <p><span class="opt">开票时间</span><span class="opt2">2019-08-22</span></p>

          </div>
      </div>
  </div>
</template>

<script>

  export default {
    name:'MyInvioce',
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
        goInvioceDetail() {
				this.$router.push({name:"InvoiceDetail"})
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
    .MyInvioce{
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
        font-size: 12px;
        .count {
            padding-top: 35px;
            padding-left: 8px;
            background:rgba(245,245,245,1);
            opacity:1;
            .light {
                color: rgb(238, 117, 60);
            }
        }
        
        .invoices {
        height: 160px;
        width:90%;
        margin: 15px auto;
        padding: 10px 8px;
        background-color: #fff;
        .header {
            width: 100%;
            height: 45%;
            p {
                display: inline-block;
                    img {
            width:40px;
            height:40px;
            background:rgba(255,255,255,1);
            border-radius:50%;
            display: inline-block;
            opacity:1;
            margin-top: 10px;
            }
            }
        
            .name {
                display: inline-block;
                width:auto;
                height:26px;
                font-size:18px;
                font-family:Source Han Sans CN;
                font-weight:400;
                line-height:10px;
                color:rgba(28,28,28,1);
                opacity:1;
                text-align: center;
                margin-top: 4px;
            }
        }
        .infor {
            width: 100%;
            height: 45%;
            line-height: 25px;
            span {
                width:50%;
                height:14px;
                display: inline-block;
                font-size:14px;
            }
            .opt {
               
                font-family:Source Han Sans CN;
                font-weight:400;
                line-height:10px;
                color:rgba(153,153,153,1);
                opacity:1;
            }
            .opt2 {
                text-align: right;
            }
        }
        
       }
    }
    
</style>