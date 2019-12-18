<template>
  <div class="foot">
    <div class="foot_kuai">
        <div class="foot_lei" @click="fn(0)">
          <slot name="one">
            <img src="../assets/foot/zu23.png" />
            <p>首页</p>
          </slot>
        </div>
        <div class="foot_lei" @click="fn(1)">
           <slot name="two">
             <img src="../assets/foot/zu64.png" />
             <p>分类</p>
           </slot>
        </div>
        <div class="foot_lei" @click="fn(2)">
           <slot name="three">
             <img src="../assets/foot/shoppingCart.png" />
             <p>购物车</p>
           </slot>
        </div>
        <div class="foot_lei" @click="fn(3)">
           <slot name="four">
             <img src="../assets/foot/my.png" />
             <p>我的</p>
           </slot>
        </div>

    </div>
  </div>
</template>

<script>
import img1 from "../assets/foot/zu23.png"
import img2 from "../assets/foot/zu64.png"
import img3 from "../assets/foot/shoppingCart.png"
import img4 from "../assets/foot/my.png"
export default {
  name: 'foot',
  data(){
    return {
      foot:[
        {img:img1,name:"首页",id:0},
        {img:img2,name:"分类",id:1},
        {img:img3,name:"购物车",id:2},
        {img:img4,name:"我的",id:3},
        
      ],
      a:"",
    }
  },
  props:["imgs"],
  methods:{
    fn(x){
      if(x == 0){
        this.$router.push('/');
      }else if( x == 1){
        this.$router.push('/classify');
      }else if( x == 2){
        this.$router.push('/shopping');
      }else if( x == 3){
        this.$router.push('/personal');
      }
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .foot_kuai{
    width: 100%;height: 98/2px;position: fixed;bottom: 0;background-color: #fff;
    box-shadow: 0px -4px 10px -1px rgba(0,0,0,0.75);
    .foot_lei{
      width: 22.6%;height: 98/2px;display: inline-block;
      img{
        width:41/2px;
        height:41/2px;display:block;
        margin: 6px auto 0;
      }
      p{
        text-align: center;font-size: 12px;margin-top: 3px;; 

      }
    }
    .foot_lei:nth-child(4){
      img{
        width:29/2px;
        height:43/2px;
      }
    }
    .foot_lei:hover{
      color:red;
    }
  }
</style>
