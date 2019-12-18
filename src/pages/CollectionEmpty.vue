<template>
  <div class="beij">
     <div class="box" v-if="shopping">
        <img src="../assets/scoped/tp02.png" alt="">
        <p>您的购物车还没有商品....</p>
    </div>
    <div class="box-two" v-if="shopping">
      <router-link class="two" to="myCollection" tag="li">查看收藏</router-link>
      <router-link class="two-txt" to="/" tag="li">去逛逛</router-link>
    </div>
  </div>
</template>

<script>
import CollectionEmp from "../components/CollectionEmp";
export default {
    name:"beij",
    data(){
        return{
            shopping:false
        }
    },
    created(){
          console.log(this.$route.query.id)
          if(this.$route.query.id == 0){ // 0  代表是从购物车跳过来的页面
              this.shopping == !this.shopping 
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
}
/* a {
  text-decoration: none;
  color: #ee753c;
} */
.box-two {
  width: 216px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
}
.two {
  width: 100px;
  height: 32px;
  border: 1px solid rgba(238, 117, 60, 0.7);
  font-size: 12px;
  text-align: center;
  line-height: 32px;
  color: #ee753c;
  border-radius: 32px;
}
.two-txt {
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 12px;
  background-color:#EE753C;
  border-radius: 32px;
  color:#fff;
}
.box{
    width:375px;
    padding-top:120px;
}
.box img{
    display:block;
    width:160px;
    height:120px;
    margin: 0 auto;
}
.box p{
    width:160px;
    color:#C5C5C5;
    margin: 0 auto;
    
}
</style>