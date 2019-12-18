<style lang="less" scoped>
.collection{
  padding: 10px;
  font-size: 14px;
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
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 0;
  img{
    width:30%;
    padding: 0 10px 10px 0;
    
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

  <div class="collection" v-if ="this.isShow == 0">
    <div class="whole">
      <img src="../assets/scoped/refund1.png"  alt="">
      <div>
        <span>海运</span>
        <span>2019年11月11日线上课程</span>
      </div>
    </div>
    <p>很好，非常好很好，非常好很好，非常好很好，非常好很好，非常好</p>
    <div class="whole-content">
      <!-- <img src="tups" alt  @click="box(tups)" v-for="(tups,index) in tup" :key="index">     -->
      <img src="../assets/scoped/refund1.png"  alt="">      
      <img src="../assets/scoped/refund1.png"  alt="">      
      <img src="../assets/scoped/refund1.png"  alt="">
      <mt-popup v-model="popupVisible" style="width:100%;"><img :src="imgs" alt="" class="chun" ></mt-popup>
      <div>
        <div>海运</div>
        <div>2019年11月11日线上课程</div>
      </div>
    </div>
    <div class="whole-bottom"> 
      <div> 
        <span>浏览1次</span>
        <span>点赞1次</span>
      </div>
      <button>写追评</button>
    </div>

  </div>

</template>

<script>
import request from "../common/request"
// import 
export default {
  data(){
    return{
      title:[],
      isShows:0,
      popupVisible:false,
      img:'',  
    }
  },
  components:{
  },
  props:['isShow'],
  watch:{
  },
  created(){
    // this.business(0);
  },
  methods: {
    box(tups){
      this.imgs = tups
      this.popupVisible = !this.popupVisible
    },
    
  }
}
</script>