<template>
  <div class="box">
    <div class="layout">
      <div class="layout-one">
        <!-- <img src="../assets/scoped/personal01.png" alt /> -->       
          <img :src='userImg' alt style="border-radius:50%;" />

        <div class="one">
          <p class="one-txt">{{this.username}}</p>
          <p class="one-shij">{{this.userTime}}</p>
        </div>
      </div>
      <div class="layout-two">
        <p class="two">{{this.pingjiacontent}}</p>
        <div class="two-tp" >
          <!-- <img :src='pingjiaImg' alt /> -->
          <img :src="tups" alt  @click="box(tups)" v-for="(tups,index) in tup" :key="index" />
          <mt-popup v-model="popupVisible" style="width:100%;"><img :src="imgs" alt="" class="chun" ></mt-popup>
        </div>
        <div class="two-wz">
          <p class="wz">浏览95次</p>
          <div class="wz-tp">
            <!-- <img src="" alt=""> -->
            <i class="iconfont icon-dianzan"></i>
            <p>点赞</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import { Popup } from "mint-ui";
import request from "../common/request"
export default {
  data() {
    return {
      username:"",
      userImg:"",
      userTime:"",
      pingjiacontent:"",
      tup:[],
      pingjiaFrequency:"",
      popupVisible:false,
      imgs:"",
    }
  },
  props:['pingjiaGid','isShow'],
  watch:{
    isShow(val,oldval){
      this.pingjia()
    }
  },  
  created(){
    this.pingjia();
  },
  methods:{
    box(tups){
      this.imgs = tups
      this.popupVisible = !this.popupVisible
    },
    pingjia(){
      var This = this
      let params = '';
      if(this.isShow === 0){//全部
        params = {gid:this.pingjiaGid}
      }else if(this.isShow === 1){//最新
        params = {
          gid:this.pingjiaGid,
          type:0
        }
      }else if(this.isShow === 2){//有图
        params = {
          gid:this.pingjiaGid,
          has_img:1
        }
      }else if(this.isShow === 3){//好评
        params = {
          gid:this.pingjiaGid,
          type:1
        }
      }else if(this.isShow === 4){//中评
        params = {
          gid:this.pingjiaGid,
          type:2
        }
      }
      this.username = "",
      this.userImg= "",
      this.userTime = "",
      this.pingjiacontent = "",
      this.tup = [],
      this.pingjiaFrequency = "",
      request.AJAX(this.$AjaxUrl.pingjia,params,"pingjia",This).then(()=>{
        let pingjias = this.$store.state.pingjia.data.data.comments;
        if(typeof(pingjias) != 'undefined'){
          pingjias.forEach(item => {
            this.username =item.geval_frommembername;
            this.userImg = item.cct_user_avatar;
            this.userTime =item.geval_addtime.substring(0,10) + item.geval_goodsname;
            this.pingjiacontent = item.geval_content;
            this.tup.push(item.geval_image); 
          });
        }   
      }).catch(err=>{
        console.log(err);
      })
    }

  }
};
</script>

<style scoped>
.box {
  width: 375px;
  height: 260px;
  margin-bottom: 10px;
}
.layout {
  padding-top: 16px;
  width: 343px;
  margin: 0 auto;
}
.layout-one {
  display: flex;
  margin-bottom: 5px;
}
.layout-one img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.one-txt {
  margin-bottom: 5px;
}
.one-shij {
  color: #c5c5c5;
}
.layout-two {
}
.two {
  width: 335px;
}
.two {
  margin-bottom: 10px;
}
.two-tp {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.two-tp img {
  width: 111px;
  height: 111px;
}
.two-wz {
  display: flex;
  justify-content: space-between;
}
.two-wz .wz {
  color: #c5c5c5;
}
.two-wz p {
  color: #c5c5c5;
}
.wz-tp {
  display: flex;
  align-items: center;
}
.wz-tp i {
  display: block;
  width: 12px;
  height: 12px;
  color: #8d8d8d;
  margin-right: 10px;
  margin-top: -2px;
}
.chun{
  width:100% !important;
  height:auto !important; 
}
</style>