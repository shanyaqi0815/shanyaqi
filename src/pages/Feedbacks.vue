<template>
  <div class="beij">
    <!-- <div class="box"></div> -->
    <div class="box-one">
      <div class="layout-one">
        <p class="one-txt">问题反馈类型</p>
        <div class="one-gn" @click="reason()">{{clickReason}} 
          <img src="../assets/scoped/sert4.png" class="click-img" />
        </div>
        <mt-popup v-model="reason_show" position="top" class="reason_1">
          <div v-for="(item,index) in reasons" :key="index" class="reason_2" @click="reason_list(item)">
            {{item}}               
          </div>            
        </mt-popup> 
      </div>
    </div>
    <div class="box-two">
      <div class="layout-two"> 
        <textarea v-model="content" type="textarea" rows="9" placeholder="请您依据实际情况详细描述投诉事由（不少于20字最多1000字）禁止发违反布法律、行政法规不文明内容。捏造事实、诬陷诽谤他人、泄露他人隐私的投诉单有可能被驳回。">
        </textarea>
        <img src="../assets/scoped/refund1.png" alt class="two-tp" />
        <div class="two-bottom">
          <div>
            <input	:class="['input-duo', {'input-duo1': xuanz}]" type="checkbox" name="item" @click="box" v-model ="isanonymous" />
            <span>匿名</span>
          </div>         
          <div class="two-txt1">是否匿名提交</div>
        </div>
      </div>
    </div>

    <div class="box-three">
      <div class="layout-three">
        <span>联系人姓名：</span>
        <div>
          <input type="text" v-model="contactname">
        </div>
        
      </div>
    </div>
    <div class="box-three">
      <div class="layout-three">
        <span>联系方式：</span>
        <div>
          <input type="text" v-model="mobile"/>
        </div>
      </div>
    </div>
    <div class="box-button" @click="submit">提交</div>
    <!-- 遮罩层 -->
    <!-- <div class="mask"></div>
    <div class="mask-one">
      <div class="mask-two">
        <p class="mask-txt">新功能建议</p>
        <p class="mask-txt1">体验问题</p>
        <p class="mask-txt2">功能异常</p>
        <p class="mask-txt3">其他</p>reason
      </div>
    </div> -->
  </div>
</template>

<script>
import request from '../common/request'
import { Popup } from 'mint-ui';
export default {
  data(){
    return{
      xuanz:true,
      reason_show:false,
      clickReason:'功能异常',
      reasons:['新功能建议','体验问题','功能异常',"其他"],
      isanonymous:true,//是否匿名
      contactname:'',
      mobile:'',
      content:'',
      image1:''
    }
  },
  components:{},
  created(){

  },
  methods:{
    box(){      
      this.xuanz = !this.xuanz;
    },
    reason(){
      this.reason_show = true;
      var clickImg= document.getElementsByClassName("click-img")[0];
        clickImg.style.transform = "rotate(90deg)"
    },
    reason_list(item){
      this.reason_show = !this.reason_show;
      this.clickReason = item; 
        var clickImg= document.getElementsByClassName("click-img")[0];
        clickImg.style.transform = "rotate(360deg)"
      
    },
    submit(){
      var This =this;
      if(this.isanonymous){
        this.isanonymous = 1
      }else{
        this.isanonymous = 0
      }
      let params ={
        member_id:this.$store.state.index.data.data.member_info.member_id,
        reason:'功能异常',
        isanonymous: this.isanonymous,
        contactname:this.contactname,
        mobile:this.mobile,
        content: this.content,
        image1:''
      }      
      request.AJAX(this.$AjaxUrl.feedBack, params, "feedBack", This).then(()=>{
        console.log(params);
      })

    }

  }


};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.box {
  background-color: #f5f5f5;
  height: 10px;
}
.beij {
  background-color: #f5f5f5;
  height: 100vh;
}
.box-one {
  width: 375px;
  height: 44px;
  background-color: #fff;
  margin-bottom: 10px;
}
.layout-one {
  padding-top: 15px;
  width: 343px;
  margin: 0 auto;
  font-size: 14px;
  display: flex;
  // 均分剩余空间
  justify-content: space-between;
}
.one-gn {
  display: flex;
  align-items: center;
}
.one-gn img {
  margin-left: 10px;
  width: 6px;
  height: 11px;
}
.one-gn p {
  color: #616161;
}
.box-two {
  width: 375px;
  height: 267px;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
}
.layout-two {
  width: 343px;
  margin: 0 auto;
  padding-top: 16px;
}
.layout-two>textarea{
  width: 100%;
  border-radius: 10px;
  border-color:transparent;
  color: #333;
  resize: none;
}
.two-txt {
  color: #c5c5c5;
  margin-bottom: 61px;
}
.two-tp {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
}
.two-bottom {
  display: flex;
  justify-content: space-between;
}
.two-bottom span{
  display: inline-block;
  margin-left:10px;
}

.two-txt1 {
  color: #8d8d8d;
}
.two-nim img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.box-three {
  padding-left: 20px;
  height: 44px;
  background-color: #fff;
  font-size: 14px;
}
.layout-three {
  padding-top: 10px;
  display: flex;

}
.layout-three>span{
  width:25%;
  text-align: left;
}
.layout-three div{  
  width:70%;
  text-align: left;
}
.layout-three input{
  height: 20px;
  border:1px solid transparent;

}
.box-button {
  width: 343px;
  height: 40px;
  margin: 0 auto;
  background-color: #ee753c;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 40px;
  margin-top: 100px;
  font-size: 16px;
}
.mask {
  width: 375px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 54px;
  z-index: 1;
}
.mask-one {
    width:375px;
    height:176px;
    background-color: #fff;
    position: absolute;
    top:54px;
    z-index: 2;
    font-size:14px;
}
.mask-two{
    width:343px;
    margin:0 auto;
}
.mask-txt,.mask-txt1,.mask-txt2,.mask-txt3{
    height:43px;
    border-top:1px solid #f5f5f5;
    line-height: 43px;
}
.input-duo[type='checkbox'] {
	cursor: pointer;
	position: relative;
	width: 12px;
	height: 12px;
	font-size: 12px;
	border-radius: 12px;
}
.input-duo[type='checkbox']::after {
	position: absolute;
	top: -2px;
	left: -2px;
	background-color: #fff;
	color: #fff;
	width: 12px;
	height: 12px;
	display: inline-block;
	visibility: visible;
	padding: 2px;
	text-align: center;
	line-height: 12px;
	content: '✓';
	border-radius: 12px;
	border: 1px solid #c5c5c5;
}
.input-duo {
	position: absolute;
}
.input-duo1[type='checkbox']::after {
	background-color: #ee753c;
	color: #fff;
	border: 1px solid #ee753c;
}

.input-duo[type='checkbox']:checked::after {
	content: '✓';
	font-size: 12px;
	border-radius: 12px;
}
.beij /deep/ .v-modal {
  top: 8%  !important;
}
.reason_1{
  width: 100%;
  height: 19%;
  margin-top:14%;
}
.reason_2{
  padding: 10px 0 0 10px;
}
</style>