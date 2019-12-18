<template>
  <div class="beij">
    <div class="refunds">
      <header>
        <div class="service-top">
          <img :src="initData.goods_image" alt />
          <div class="top-txt">
            <p class="txt-one">{{initData.goods_name}}</p>
            <!-- <p class="txt-two">初级</p> -->
            <p class="txt-three">
              ￥ {{initData.order_amount}}
              <!-- <s>￥2200</s> -->
            </p>
          </div>
        </div>
      </header>
    </div>
    <div class="refunds-txt">
      <div class="txt">
        <p>退款原因</p>
        <div class="txt-we" @click="clickSwitch">
          <p>{{reason}}</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
      </div>

      <div class="mask" v-show="ok">
        <div class="mask-top">
          <p>退款原因</p>
          <img src="../assets/scoped/refund2.png" alt @click="switchs" />
        </div>
        <p class="mask-txt">请选择申请退款原因</p>
        <div
          class="mask-txt-one"
          v-for="(item,index) in refundReason"
          :key="index"
          @click="clickBack(index,item)"
        >
          <p>{{item.reason_info}}</p>
          <img
            src="../assets/scoped/refunds4.png"
            :class="{'select-img': true,isSelect:index==selectIndex}"
          />
          <div class="mask-yuan"></div>
        </div>

        <div class="refunds-bottom">
          <button class="bottom-c" @click="close()">提交</button>
        </div>
      </div>

      <div class="refund-content">
        <ul>
          <li>
            <span>退款金额</span>
            <input type="text" :placeholder="'￥'+initData.goods_price" />
          </li>
          <li>
            <span>退款说明</span>
            <input type="text" :placeholder="'选填'"  v-model="refundContent"/>
          </li>
        </ul>
      </div>
      
      
      <div class="txt-four">
        <selectImg @selectImgs = "getImg"></selectImg>
        <!-- <p>上传凭证</p>
        <div class="imgs_cont">
          <div :key="index" v-for="(a,index) in fuck">
            <img :src="a" alt />
            <span @click="imgs_hide('box')">X</span>
          </div>
        </div>
        <img src="../assets/scoped/refund1.png" alt />
        <input id="box" type="file" accept="image/*" class="shangchuan" @change="l('box')" /> -->
      </div>
    </div>
    <div class="refunds-bottom">
      <button @click="submit()">提交</button>
    </div>
  </div>
</template>

<script>

import request from "../common/request"
import selectImg from "./selectImg"
import { Toast } from 'mint-ui'

export default {
  name:"beij",
  data() {
    return {
      initData: this.$route.params.refunds,
      ok: false,
      reason: "",
      refundReason: [],
      selectIndex: 0,
      fuck: [],
      refundContent:'',
      selectImgs:'',
    };
  },
  created(){
  },
  components:{
    selectImg
  },
  methods: {
    getImg(val){
      this.selectImgs = val
    },
    clickSwitch() {
      this.ok = true;
      var This = this;
      let params ={        
      }      
      request.AJAX(this.$AjaxUrl.refundReasonList, params, "refundReasonList", This).then(() => {
        var res = This.$store.state.refundReasonList.data.data.data.data; 
        this.refundReason = res
    })

    },
    switchs() {
      this.ok = false;
    },
    clickBack(index,item) {
      this.selectIndex = index;
      this.reason = item.reason_info
    },
    close() {
      this.ok = !this.ok;
    },
    submit() {
      var This = this;
      let params ={  
        member_id : this.$store.state.index.data.data.member_info.member_id,
        state :'refund',
        order_id: this.initData.order_id,
        content: '',
        refund_state:'add',
        reason_info: this.refundContent,
        reason_id: this.selectIndex,
        pic_info:this.selectImgs,//退款图片
        buyer_message:'',
        refund_id:'',
      } 
      if(this.reason_info != ''){
        request.AJAX(this.$AjaxUrl.orderHandle, params, "orderHandle", This).then(() => {
          var res = This.$store.state.orderHandle.data.data 
          if(res.code == 200){
            this.$router.push("/refundDetail")
          }
          if(res.code == 211){
            Toast({
              message: res.message,
              position: 'center',
              duration: 3000
            })
          }
        })
      }else{
        Toast({
          message: '请输入退款内容',
          position: 'center',
          duration: 3000
        })

      }   
      
    },
    // 上传图片
     l(a) {
      var b, aar, file;
      if (a == "box") {
        b = document.getElementById("box");
        aar = this.fuck;
        fn_1();
        this.fuck = aar;
      }
      function fn_1() {
        file = b.files[0];
        if (window.FileReader) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          //监听文件读取结束后事件
          var f;
          reader.onloadend = function(e) {
            f = e.target.result;
            aar.unshift(f);
            //e.target.result就是最后的路径地址
          };
        }
      }
      console.log(this.fuck_one, "1111111111");
    },
    imgs_hide(a) {
      if (a == "box") {
        this.fuck = [];
      }
    }
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.imgs_cont {
  width: auto;
  height: auto;
  padding: 0 16px;
  div {
    position: relative;
    width: 111px;
    height: 111px;
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      width: 0.533333rem;
      height: 0.533333rem;
      display: inline-block;
      border-radius: 0.266667rem;
      background: #000;
      line-height: 20px;
      color: #fff;
      text-align: center;
      position: absolute;
      top: -7px;
      right: -7px;
    }
  }
}
.shangchuan {
  width: 66px;
  height: 66px;
  position: absolute;
  left: 12px;
  /* top:2px; */
  opacity: 0;
}
.redunds {
  width: 375px;
  height: 109px;
  color: #fff;
  margin-bottom: 10px;
}
.service-top {
  display: flex;
  margin-bottom: 10px;
  padding: 15px 25px 15px 16px;
  background-color: #fff;
}
.service-top img {
  width: 112px;
  height: 78px;
}
.top-txt {
  width: 212px;
  height: 78px;
  font-size: 12px;
  margin-left: 10px;
}
.txt-one {
  width: 212px;
  height: 34px;
  margin-bottom: 6px;
}
.txt-two {
  color: #777777;
  margin-bottom: 4px;
}
.txt-three {
  font-size: 14px;
  color: #ea4940;
}
.txt-three s {
  font-size: 12px;
  color: #c5c5c5;
}
.beij {
  background-color: #f5f5f5;
  height: 667px;
}
.txt {
  width: 360px;
  height: 31px;
  /* display:flex; */
  font-size: 14px;
  padding-top: 13px;
  padding-left: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  /* align-items:center; */
}
.txt p {
  float: left;
}
.txt-we {
  display: flex;
  /* margin-left:216px; */
  float: right;
  margin-right: 16px;
}
.txt-we img {
  width: 6px;
  height: 11px;
  margin-left: 10px;
  margin-top: 4px;
}
.refunds-txt .txt-one {
  width: 360px;
  height: 75px;
  margin-bottom: 10px;
  background-color: #fff;
  padding-top: 13px;
  padding-left: 15px;
}
.txt-j {
  display: flex;
  font-size: 14px;
  margin-bottom: 26px;
}
.txt-j-two {
  color: #ee753c;
  margin-left: 5px;
}
.txt-s {
  display: flex;
  font-size: 14px;
}
.txt-s-two {
  margin-left: 6px;
  color: #c5c5c5;
}
.txt-four {
  width: 360px;
  height: auto;
  background-color: #fff;
  font-size: 14px;
  padding:15px;
}
.txt-four img {
  width: 60px;
  height: 60px;
  margin-top: 17px;
}
.refunds-bottom button {
  width: 343px;
  height: 40px;
  background-color: #ee753c;
  color: #fff;
  font-size: 16px;
  border-radius: 20px;
  border: none;
}
.refunds-bottom {
  width: 343px;
  height: 40px;
  margin: 0 auto;
  margin-top: 126px;
}
.refunds-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.mask {
  width: 359px;
  height: 600px;
  position: absolute;
  top: 79px;
  left: 0;
  z-index: 2;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 15px;
  padding-left: 16px;
  font-size: 16px;
}
.mask-top {
  display: flex;
  font-size: 16px;
  margin-left: 140px;
  margin-bottom: 33px;
}
.mask-top img {
  width: 21px;
  height: 21px;
  margin-left: 120px;
}
.mask-txt {
  margin-bottom: 32px;
  color: #8d8d8d;
  font-size: 14px;
}
.mask-txt-one {
  width: 343px;
  height: 19px;
  font-size: 14px;
  margin-bottom: 27px;
}
.mask-txt-one img {
  width: 16px;
  height: 16px;
  float: right;
}
.mask-txt-one p {
  float: left;
}
.refunds-bottom .bottom-c {
  margin-left: -8px;
}
.select-img {
  display: none;
}
.isSelect {
  display: block;
}
.refund-content {
  margin: 10px auto;
  background: #fff;
  color: #333;
  font-size: 14px;
  padding: 10px 15px;
}
li {
  padding: 10px 0;
  width: 100%;
}
input {
  margin-left: 5px;
  border-color: transparent;
}
</style>
