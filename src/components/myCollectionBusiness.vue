<style lang="less" scoped>
.cllection-quanbu{
  border-bottom: 10px solid #f5f5f5;
  margin-top:10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.cllection-left{
  font-size: 16px;
  display: inline-block;
  padding-right: 30px;
  color: #616161;  
}
.cllection-moren{
  position: relative;
}
.cllection-i{
  margin-left: 2px;
  height:0px;
  width:0px;
  border-width: 5px;
  border-style: solid;
  border-color: #8D8D8D transparent transparent transparent;
  display: inline-block;
  position: absolute;
  left:28%;
  top:45%;
}
.actives{
  color:#EE753C !important;
  .cllection-i{
    margin-left: 2px;
    height:0px;
    width:0px;
    border-width: 5px;
    border-style: solid;
    border-color: #EE753C transparent transparent transparent;
    display: inline-block;
  }
}
.cllection-quanbu>img{
  padding-top:5px;
  height:18px;
  width: 18px;
}

.collection-content{
  background:#fff;
  margin-top: 10px;
  padding:10px 15px;
  display: flex;
}
.collection-content>img{
  height:60px;
  width: 60px;
  border-radius:50%;
}
.collection-bottom{
  margin-top:3px;
}
.collection-bottom>span{
  border:1px solid #EE753C;
  color:#EE753C;
  border-radius: 2px;
  margin-right: 5px;
}
.collection-title{
  font-size: 14px;
  margin-bottom: 2px;
}
.collection-content-left{
  font-size: 12px;
  padding:0 10px;
  color: #333;  
}



</style>
<template>

  <div class="collection" v-if ="this.isShow == 1"> 

    <div class="cllection-quanbu">
      <div class="cllection-moren">
        <div class="cllection-left" v-for="(item,index) in title" :key="index" :class="{actives:index==isShows}" @click="business(index)">
          {{item}}
        </div>      
        <i  class="cllection-i"></i> 
      </div>         
      <!-- <img src="../assets/xuan1.png" alt="">  -->
    </div>   

    <div class="collection-content" v-for="(item,indexs) in businesses" :key="indexs">
      <img :src="item.goods_image" alt="" @click="clickImg">      
      <mt-popup v-model="popupVisible" style="width:100%;"><img :src="item.goods_image"></mt-popup>
      <div class="collection-content-left">
        <div class="collection-title">{{item.store_name}}</div>
        <div>
          <span style="color: #EA4940;">{{item.store_desccredit}}颗星</span>
          <span style="color:#8D8D8D">{{item.count}}人已关注</span>
        </div>
        <div class="collection-bottom">
          <span>上新</span>
          <span >满减</span>
          <span>促销</span>
        </div>
      </div>
    </div> 
  </div>

</template>

<script>
import request from "../common/request"
import {Popup} from "mint-ui"
export default {
    data(){
      return{
        title:['默认排序','促销优先','筛选'],
        isShows:0,
        businesses:[],
        popupVisible:false,
      }
    },
    components:{
    },
    props:['isShow'],
    watch:{
     isShows(val,oldval){
      //  this.business();
      console.log(val)       
     }
    },
    created(){
      // this.business(0);
    },
    methods: {      
      clickImg(){
        this.popupVisible = !this.popupVisible
      },
      business(index){
        this.isShows = index;
        var This = this;
        var params ={
          member_id : this.$store.state.index.data.data.member_info.member_id,
          page: 0,
          order:0
        }
        request.AJAX(this.$AjaxUrl.shopList, params, "shopList", This).then(() => {
          let req = this.$store.state.commodityList.data.data.favorites_list;
          this.businesses = req;
        })
      }
    }
}
</script>


