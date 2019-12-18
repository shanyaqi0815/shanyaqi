<style lang="less" scoped>
.collection-heads{
  border-bottom: 10px solid #f5f5f5;
  height:60px;
}
.collection-right{
  display: inline-block;
  font-size: 10px;
  color:#333;
  // margin-left:10px;
}
.cllection-quanbu{
  border-bottom: 10px solid #f5f5f5;
  margin-top:10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position:relative;
}
.cllection-left{
  font-size: 16px;
  display: inline-block;
  padding-right: 10px;
  color: #616161;  
}
.cllection-left>i{
  margin-left: 2px;
  height:0px;
  width:0px;
  border-width: 5px;
  border-style: solid;
  border-color: #8D8D8D transparent transparent transparent;
  display: inline-block;
}
.actives{
  color:#EE753C !important;
  i{
    margin-left: 2px;
    height:0px;
    width:0px;
    border-width: 5px;
    border-style: solid;
    border-color: #EE753C transparent transparent transparent;
    display: inline-block;
  }
}

.collection-content{
  background:#fff;
  margin-top: 10px;
  padding:10px 15px;
  display: flex;
  justify-content: left;

}
.collection-content>img{
  height:80px;
  min-width: 30%;;
}.collection-content-left{
  font-size: 12px;
  margin-left:10px;
  padding:0 10px;
  color: #333;
  div:first-child{
    max-height: 60px;
    overflow: auto;
  }
  div:nth-child(2){
    padding-top:5px;
  }
}
ul{
  // display: none;
  height: 100px;
  width:70px;
  background: #fff;
  box-shadow:2px 4px 6px rgba(0,0,0,0.16);
  opacity:1;
  border-radius: 5px;
  position: absolute;
  top:80%;
}
li{
  display: block;
  margin:8px 8px 0 0;
  padding: 2px;
  text-align: center;
  line-height:21px;
  font-size:12px;
  color:rgb(153, 134, 134);
  opacity:1;
}
.ul2{
  position: absolute;
  top:80%;
  left:25%;
}

</style>
<template>
  <div class="collection" v-if ="this.isShow == 0">
    <div  class="collection-heads">
      <search :isShow='true' :index='true' :indexs='true'></search>
    </div>  

    <div class="cllection-quanbu">
      <div>
      <span class="cllection-left" v-for="(item,index) in quanbus" :key="index" :class="{actives:index==isShows}" @click="quanbu(index)">
        {{item}}<i></i>          
      </span>
      </div> 
      <!-- <ul class="ul1" v-show ="ul1">
        <li v-for="(a,i) in ul1ss" :key ="i" @click="ul1s(i)">{{a}}</li> 
      </ul> -->
      <!-- <ul class="ul2" v-show ="ul2">
        <li  v-for="(b,j) in ul2ss" :key ="j" @click="ul2s(j)">{{b}}</li> 
      </ul> -->
      <!-- <img src="../assets/xuan1.png" alt="">  -->
    </div>   

    <div class="collection-content"  v-for="(item,indexs) in service" :key="indexs">
      <img :src="item.goods_image" @click ="clickImg"/>
      <mt-popup v-model="popupVisible" style="width:100%;">
        <img :src="item.goods_image">
      </mt-popup>
      <div class="collection-content-left">
        <div>{{item.goods_name}}</div>
        <div>
          <span style="color: #EA4940;">￥{{item.log_price}}</span>
          <span style="color:#8D8D8D">{{item.count}}人已收藏</span>
        </div>
      </div>   
    </div> 
  </div>

</template>

<script>
import request from "../common/request"
import search from "./search"
import {Popup} from "mint-ui"
export default {
    data(){
      return{ 
        service:[],
        quanbus:['全部类目',"收藏状态"],
        isShows:0,
        ul1:false,
        ul2:false,
        // ul1ss:['新品','满减','初级'],
        // ul2ss:['a','b','c'],
        popupVisible:false,
      }
    },
    props:['isShow'],
    components:{
      search
    },
    created(){
      this.quanbu(0);
    },
    watch:{
      isShows(oldval,val){
        if(this.isShows == 0){
          this.ul1 = true;
          this.ul2 = false;
        }
        if(this.isShows == 1){
          this.ul2 = true;
          this.ul1 = false;
        }
      }
    },
    methods: {
      clickImg(){
        this.popupVisible = !this.popupVisible
      },
      quanbu(index){        
        this.isShows = index;
        var This = this;
        var params ={
          member_id : this.$store.state.index.data.data.member_info.member_id,
          page: 0
        }
        request.AJAX(this.$AjaxUrl.commodityList, params, "commodityList", This).then(() => {
          let req = this.$store.state.commodityList.data.data.favorites_list;
          this.service = req;
        })
        
      },
      ul1s(i){
        console.log(i)
      },
      ul2s(j){
        console.log(j)
      }

    }
}
</script>


