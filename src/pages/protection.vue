<template>
  <div class="beij">
    <div class="refunds">
      <header>
        <div class="service-top">
          <img src="../assets/scoped/service1.png" alt />
          <div class="top-txt">
            <p class="txt-one">2019版 微服务时代Spring Boot企业微信点餐系统</p>
            <p class="txt-two">初级</p>
            <div class="txt-three">
              ￥ 1688
              <s>￥2200</s>
              <p class="txt-five">客服介入</p>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="refunds-txt">
      <div class="txt" @click="switchs">
        <p>维权类型</p>
        <div class="txt-we">
          <p>{{reason}}</p>
          <img src="../assets/scoped/sert4.png" alt />
        </div>
      </div>
      <div class="txt-one">
        <!-- <div class="txt-j">
          <p class="txt-j-three">退款金额 :</p>
          <p class="txt-j-two">￥1688.00</p>
        </div>-->
        <div class="txt-s">
          <p class="txt-s-one">维权说明 :</p>
          <textarea
            style=" width:280px; height: 49px;font-size:14px;color:#C5C5C5;outline: none;border: none;background-color:#fff;resize:none"
            placeholder="选填"
            v-model="site"
          ></textarea>
        </div>
      </div>
      <div class="txt-four">
        <p>上传凭证</p>
        <div class="imgs_cont">
          <div :key="index" v-for="(a,index) in fuck">
            <img :src="a" alt />
            <span @click="imgs_hide('box')">X</span>
          </div>
        </div>
        <img src="../assets/scoped/refund1.png" alt />
        <input id="box" type="file" accept="image/*" class="shangchuan" @change="l('box')" />
      </div>
    </div>
    <div class="refunds-bottom">
      <button>提交</button>
    </div>
    <div class="refunds-mask" v-show="ok"></div>
    <div class="mask" v-show="ok">
      <div class="mask-top">
        <p>维权原因</p>
        <img src="../assets/scoped/refund2.png" alt @click="switchss" />
      </div>
      <p class="mask-txt">请选择申请退款原因</p>
      <div
        class="mask-txt-one"
        v-for="(item,index) in refundReason"
        :key="index"
        @click="clickBack(index, )"
      >
        <p @click="dianji($event)">{{item.reason_info}}</p>
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
  </div>
</template>

<script>
import request from "../common/request";
export default {
  data() {
    return {
      ok: false,
      fuck: [],//凭证
      site: "" ,//维权说明
      refundReason: [ ],//维权原因列表
      selectIndex: 0,
      reason:"",//选定的维权原因
    };
  },
  created(){
    this.yuanyin()
  },
  methods: {
    yuanyin(){
       let This = this;
      // this.memberId = This.$route.params.member_id;
      //   console.log(this.memberId);
      let params = {
      };
      request
        .AJAX(this.$AjaxUrl.refund_reason_list, params, "refund_reason_list", This)
        .then(() => {
          this.refundReason = this.$store.state.refund_reason_list.data.data.data.data
        });
    },
    switchs() {
      this.ok = true;
    },
    switchss() {
      this.ok = false;
    },
    dianji(event){
       //获取点击对象
      var el = event.currentTarget;
      // console.log(el.innerHTML);
      //吧获取的值给div
      this.reason = el.innerHTML;
    },
     clickBack(index,) {
      this.selectIndex = index;
      // this.reason = this.refundReason[index]
      
      // console.log(this.refundReason[index]);
    },
     close() {
      this.ok = !this.ok;
    },
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
.select-img {
  display: none;
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
  // top:2px;
  opacity: 0;
}
.redunds {
  width: 375px;
  height: 109px;
  color: #fff;
  margin-bottom: 10px;
}
.isSelect {
  display: block;
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
.txt-five {
  width: 80px;
  height: 27px;
  border: 1px solid #c5c5c5;
  text-align: center;
  line-height: 27px;
  font-size: 12px;
  color: #8d8d8d;
  border-radius: 27px;
  margin-left: 56px;
  position: absolute;
  top: 66px;
  right: 16px;
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
  display: flex;
  align-items: flex-end;
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
  margin-bottom: 1px;
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
  // height: 111px;
  background-color: #fff;
  font-size: 14px;
  padding-top: 13px;
  padding-left: 15px;
  padding-bottom: 20px;
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
  width:320px;
  float: left;
}
.refunds-bottom .bottom-c {
  margin-left: -8px;
}
textarea {
  margin-top: 1px;
  font-size: 12px;
}
</style>