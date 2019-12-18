<template>
  <div class="beij">
    <div class="box">

      <div class="layout-ones">
        <p class="one-txt">投诉对象</p>
        <div @click="complaint()">{{clickComplaints}} 
          <img src="../assets/scoped/sert4.png" class="click-img" />
        </div>
        <mt-popup v-model="complaint_show" position="top" class="reason_1">
          <div v-for="(item,index) in complaints" :key="index" class="reason_2" @click="complaint_list(item)">
            {{item}}            
          </div>            
        </mt-popup> 
      </div>

      <!-- <div class="layout">
        <p class="txt">投诉对象</p>
        <div class="txt-tp">商家客服
          <img src="../assets/scoped/sert4.png" class="click-img" />

        </div>
      </div> -->
    </div>
    <div class="box-one">
      <div class="layout-one">
        <p class="one">投诉标题</p>
        <p class="one-txt">
          <input type="text" placeholder="概括核心问题（限40字）" v-model="tousuTitle"/>
        </p>
      </div>
    </div>
    <div class="box-two">
      <div class="layout-two">
        <p class="two">投诉详情：</p>
        <p class="two-txt">
          <textarea
            rows="3" v-model="tousuContent"
            placeholder="请您依据实际情况详细描述投诉事由（不少于20字最多1000字）禁止发违反布法律、行政法规不文明内容。捏造事实、诬陷诽谤他人、泄露他人隐私的投诉单有可能被驳回。"
          ></textarea>
        </p>
        <img src="../assets/scoped/refund1.png" alt class="two-tp" />
        <div class="two-name">
          <!-- <div class="two-wenz"> -->
            <!-- <img src="../assets/scoped/refunds4.png" alt />  
            <p class="two-wz">匿名</p> -->
            <div class="two-wenz">
              <input	:class="['input-duo', {'input-duo1': xuanz}]" type="checkbox" name="item" @click="box" v-model ="isAnonymous" />
              <span>匿名</span>
            </div> 
          <!-- </div> -->
          <p class="two-mr">是否匿名提交</p>
        </div>
      </div>
    </div>
    <div class="box-three four">
      <div class="layout-three">
        <p class="three">联系人姓名：</p>
        <p class="three-txt">
          <input type="text" v-model="tousuName">
        </p>
      </div>
    </div>
    <div class="box-three four-as">
      <div class="layout-three">
        <p class="three">联系方式：</p>
        <p class="three-txt">
          <input type="text" v-model="tousuMobile">
        </p>
      </div>
    </div>
    <div class="box-button" @click="submit()">提交</div>
  </div>
</template>

<script>
import request from "../common/request"
import {Popup} from "mint-ui"

export default {
  data(){
    return{
      clickComplaints:'商家客服',
      complaint_show: false,
      complaints:['商家客服','商家','课程内容'],
      xuanz:true,
      tousuTitle:'',
      tousuContent:'',
      tousuName:'',
      tousuMobile:'',
      isAnonymous: 1,      
    }

  },
  methods: {
    box(){
      this.xuanz = !this.xuanz;
    }, 
    complaint_list(item){
      this.complaint_show = !this.complaint_show;
      this.clickComplaints = item; 
        var clickImg= document.getElementsByClassName("click-img")[0];
        clickImg.style.transform = "rotate(360deg)"
    },
    complaint(){      
      this.complaint_show = true;
      var clickImg= document.getElementsByClassName("click-img")[0];
        clickImg.style.transform = "rotate(90deg)"

    },  
    submit(){  
      var This = this;
      var params ={
        member_id: this.$store.state.index.data.data.member_info.member_id,
        complain_subject_id : '',
        complain_subject_content: this.tousuTitle,
        complain_content: this.tousuContent,
        is_anonymous: this.isAnonymous,
        contect_name: this.tousuName,
        contect_mobile: this.tousuMobile,
        order_id:'',
        complain_pic1:'',
        complain_pic2:'',
        complain_pic3:''
      }
      request.AJAX(this.$AjaxUrl.complaint, params, "complaint", This).then(() => {
        console.log(params)
      })      
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.beij {
  background-color: #f5f5f5;
  height: 100vh;
  font-size: 14px;
  padding-top: 10px;
}
.box {
  width: 375px;
  height: 44px;
  background-color: #fff;
  margin-bottom: 10px;
}
.layout {
  width: 343px;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.txt-tp {
  display: flex;
  align-items: center;
}
.txt-tp img {
  width: 6px;
  height: 11px;
  margin-left: 9px;
}
.box-one {
  width: 100vw;
  height: 44px;
  background-color: #fff;
  margin-bottom: 10px;
}
.layout-one {
  width: 343px;
  margin: 0 auto;
  display: flex;
  padding-top: 15px;
  align-items: center;
}
.one {
  margin-right: 10px;
}
input {
  width: 200px;
  height: 14px;
  border: none;
  outline: none;
  /* color: #c5c5c5; */
  font-size: 14px;
  display: block;
  margin-top:1px;
}
input::-webkit-input-placeholder {
  color: #c5c5c5;
  font-size:14px;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c5c5c5;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c5c5c5;
}
.box-two {
  width: 100vw;
  height: 267px;
  background-color: #fff;
  margin-bottom:10px;
}
.layout-two {
  width: 343px;
  margin: 0 auto;
  padding-top: 16px;
}
.two {
  margin-bottom: 10px;
}
.two-txt textarea {
  width: 339px;
  height: 86px;
  /* color:#C5C5C5; */
  border: none;
  outline: none;
  margin-bottom:20px;
}
textarea::-webkit-input-placeholder {
  color: #c5c5c5;
  font-size:14px;
}

textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c5c5;
}
textarea:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c5c5c5;
}
textarea:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c5c5c5;
}
.two-tp {
  width: 60px;
  height: 60px;
  margin-bottom: 17px;
}
.two-name {
  display: flex;
  justify-content: space-between;
}
.two-wenz{
  width:30%;
  display: flex;
  justify-content: left;
}
.two-wenz>span{
  margin-left: 10%;
  display: inline-block;
}
.two-wenz img{
  width:16px;
  height:16px;
  margin-right:13px;
}
.box-three{
  width:375px;
  height:44px;
  background-color:#fff;
  font-size:14px;
}
.layout-three{
  width:343px;
  margin:0 auto;
  padding-top:15px;
  display:flex;
  align-items: center;
}
.layout-three input{
  height:19px;
  font-size:14px;
}
.four{
  margin-bottom:10px;
}
.four-as{
  margin-bottom:21px;
}
.box-button {
  width: 343px;
  height: 44px;
  margin: 0 auto;
  background-color: #EE753C;
  color:#fff;
  text-align: center;
  line-height: 44px;
  border-radius: 44px;
  font-size: 16px;
  margin-top: 21px;
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
.layout-ones{
  padding: 15px;
  margin:0 auto;
  display:flex;
  justify-content: space-between;
}
.layout-ones img{
  margin-left:5px;
  height:12px;
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