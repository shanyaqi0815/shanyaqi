<style lang="less" scoped>
.my-evaluation{
  background: #fff;
}
.collection-head{
  height:60px;
  box-sizing: border-box;
  border-bottom: 10px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
}
.collection-head div{ 
  font-size: 16px;
  width: 50%;
  text-align: center;
  padding:16px;
}
.active{
  color:#EE753C;
}
.collection{
  padding: 10px;
  font-size: 14px;
  border-bottom: 10px solid #f5f5f5;
}
.whole{
  display: flex;
  padding: 10px;
  img{
    height: 40px;
    width: 40px;
  }
  div{
    margin-left:10px;
  }
  span{
    display: block;
    font-size: 14px;
  }
  span:last-child{
    color:#c5c5c5;
  }
}
p{
  padding: 10px 10px 0;
}
.whole-content{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 0;
  div{    
    display: inline-block;
    width: 30%;
    height: 100px;
    margin: 0 5px 10px 0;
  }
  img{
    height:100%;
    width: 100%;   
  }
}
.whole-div{
  display: flex;
  padding: 10px;
  img{
    height: 20%;
    width: 30%;
  }
  div{
    margin-left:10px;
  }
  span{
    display: block;
    font-size: 14px;
  }
  span:last-child{
    color:#c5c5c5;
    margin-top:5px;
  }
}
.whole-bottom{
  padding: 10px 10px 0;
  display: flex;
  justify-content: space-between;
  span{
    color: #C5C5C5;
  }
  button{
    padding: 2px 8px;
    border-radius: 8px;
    border: 1px solid #EE753C;
    color:#EE753C;
    background: transparent;
    outline:none;
  }
}
.chun{
  width:100% !important;
  height:auto !important; 
}

</style>
<template>
  <div class="my-evaluation">
    <div class="collection-head">
      <div v-for="(item,index) in service" :class="{active:index==isShow}" :key="index" @click=services(index)>{{item}}</div>   
    </div>

    <div class="collection" v-for="(item,indexs) in myEvaluationFigure" :key="indexs">
      <div class="whole">
        <img :src="item.member_avatar"  alt="">
        <div>
          <span>{{item.member_name}}</span>
          <span>{{item.geval_addtime}}{{item.course_type}}</span>
        </div>
      </div>
      <p>{{item.geval_content}}</p>
      <div class="whole-content">
        <div v-for="(items, indes) in item.geval_image" :key="indes">
          <img :src="items"   @click="clickImg(items)">
          <mt-popup v-model="popupVisible" style="width:100%;"> 
            <img :src="listImg" class="chun" >
          </mt-popup>      
        </div>
      </div>
      

      <div class="whole-div" v-if = "!item.course_message">
        <img :src="item.goods_image"  alt=""> 
        <div>
          <span>{{item.goods_name}}</span>
          <span>{{item.goods_price}}</span>
        </div>          
      </div>
<!-- 
      <div class="whole-bottom"> 
        <div> 
          <span>浏览1次</span>
          <span>点赞1次</span>
        </div>
        <button>写追评</button>
      </div> -->

  </div>
  </div>
  
    
</template>

<script>
import request from "../common/request"
import { Popup } from "mint-ui";

export default {
  name:'my-evaluation',
    data(){
      return{ 
        service:['全部','有图'],
        isShow: 0,
        popupVisible: false,
        myEvaluationFigure: [],
        listImg:[],
      }
    },
    components:{
    },
    watch:{
     
    },
    created(){
      this.services(0);
    },
    methods: {
      services(index){
        this.isShow = index;
        var This = this;
        let params ={
            member_id: this.$store.state.index.data.data.member_info.member_id,
            page:'',
            num:'',
            gid:'',
            if_img: this.isShow,
        }
        request.AJAX(this.$AjaxUrl.courseCommentList, params, "courseCommentList", This).then(() => {
          var res = This.$store.state.courseCommentList.data.data.list; 
          this.myEvaluationFigure = res;
        })              
      },
      clickImg(e){
        this.listImg = e;
        this.popupVisible = !this.popupVisible
      }
    }
}
</script>


