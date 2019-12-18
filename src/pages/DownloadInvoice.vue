<template>
  <div class="downloadInvoice">
    <p>电子发票PDF原件，将以邮件方式发送指定邮箱</p>
    <div class="mailbox">
      <div class="pl">
        <span class="title">邮箱地址</span><input v-model="email" type="text" placeholder="请填写您的接收邮箱" @input="changeBtn">
      </div>
    </div>
    <div class="btn" v-if="isSend">
      <button>发送</button>
    </div>
     <div class="light" v-if="!isSend">
      <button @click="sendMail">发送</button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name:'downloadInvoice',
    props:[''],
    data () {
      return {
        isSend: true,
        email: ''
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      changeBtn() {
        this.isSend = false
      },
      sendMail() {
        let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (regEmail.test(this.email)) {
          this.isSend = false
        }
        else {
          Toast('请输入正确的邮箱格式')
        }
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
  .downloadInvoice {
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    line-height:35px;
    font-weight:400;
    font-family:Source Han Sans CN;
    opacity:1;
    p {
      font-size:12px;
      padding-left: 10px;
      color:rgba(197,197,197,1);
      
    }
    .mailbox {
      width: 100%;
      height: 45px;
      background-color: #fff;
      .pl {
        margin-left: 10px;
      }
      .title {
        margin-right: 20px;
        font-size:14px;
        color:rgba(51,51,51,1);
      }
      input { 
        height:19px;
        width:200px;
        font-size:14px;
        border: none;
        outline: none;
        -webkit-appearance: none;
      }
    }
    .btn {
      margin: 0 auto;
      width: 243px;
      button {
      margin: 20px auto;
      border: 1px solid transparent;  //自定义边框
      outline: none;
      width: 243px;
      height:40px;
      background:rgba(197,197,197,1);
      opacity:1;
      border-radius:22px;
      font-size: 18px;
      color:rgba(255,255,255,1);
      opacity:0.5;
      }
      
    }
    .light {
       margin: 0 auto;
      width: 243px;
      button {
      margin: 20px auto;
      border: 1px solid transparent;  //自定义边框
      outline: none;
      width: 243px;
      height:40px;
      opacity:1;
      border-radius:22px;
      font-size: 18px;
      color:rgba(255,255,255,1);
      background-color: rgb(238, 117, 60);

      }
    }
    
    
  }
 input::-webkit-input-placeholder {
   font-size:14px;
 }

</style>