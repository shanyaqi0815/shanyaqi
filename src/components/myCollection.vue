<style lang="less" scoped>
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

</style>
<template>

  <div class="collection">
    <!-- <search ></search>  -->
    <div class="collection-head">
      <div v-for="(item,index) in service" :class="{active:index==isShow}" :key="index" @click=services(index)>{{item}}</div>
    </div>
    <myCollectionService :isShow="isShow" />
    <MyCollectionBusiness :isShow="isShow" ref="collectionService"/>

  </div>

</template>

<script>
import request from "../common/request"
import MyCollectionBusiness from "./myCollectionBusiness"
import myCollectionService from "./myCollectionService"
import search from "./search"
export default {
    data(){
      return{
        service:['服务','商家'],
        isShow:0        
      }
    },
    components:{
      search,
      MyCollectionBusiness,
      myCollectionService
    },
    watch:{
     
    },
    created(){
    },
    methods: {
      services(index){
        this.isShow = index;
        if(index == 1){
          this.$refs.collectionService.business(0);
        }      
      }
    }
}
</script>


