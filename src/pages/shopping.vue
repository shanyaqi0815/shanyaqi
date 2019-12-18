<template>
    <div class="shopping" >
        <header>
            <p>购物车</p>
            <p v-if="state" @click="fn">编辑</p>
            <p v-if="state_tow" @click="fn1">完成</p>
        </header>
        <shopping1 :message="box1" v-if="shan"></shopping1>
        <!-- <div  v-show="state" class="settle">
            <img src="../assets/road.png" alt="">
            <span>全选</span>
            <span>合计：￥123131</span>
            <div>结算(1)</div>
        </div>
        <div  v-show="state_tow" class="box">
            <img src="../assets/road.png" alt="">
            <span>全选</span>
            <div>移入收藏夹</div>
            <div>删除</div>
        </div> -->
        <div class="beij"  v-if="!shan">
                <div class="box1">
                    <img src="../assets/scoped/tp02.png" alt="">
                    <p>您的购物车还没有商品....</p>
                </div>
                <div class="box-two">
                <router-link class="two" to="myCollection" tag="li">查看收藏</router-link>
                <router-link class="two-txt" to="/" tag="li">去逛逛</router-link>
                </div>
        </div>
        <foot >
             <span slot="three">
                 <img src="../assets/foot/zu70.png" />
                 <p style="color:#EE753C">购物车</p>
             </span>
        </foot>
    </div>
</template>
<script>
import { MessageBox , Popup,Toast} from 'mint-ui';
import shopping1 from "../components/shopping"
import foot from "../components/foot"
import request from "../common/request"
import img1 from "../assets/road.png"
import img2 from "../assets/road1.png"
export default {
    name:"shopping",
    created(){
        if(this.$store.state.index == undefined){
            MessageBox.confirm("您好，您还未登录账号，请登录账号","提示").then(action =>{
                if(action == "confirm"){
                    this.$router.push("/Password_register")
                }
            }).catch(err => {
                if(err =='cancel'){
                    this.$router.push("/")
                }
            })
        }else{
            this.init()
        }
        
    },
    data(){
        return{
            cart_id: {}, // 确认订单页面参数
            mag:1231,
            box1:{
                0:{
                    dianpu:{
                        button1:img1,button2:img2,name:"全国最好的店铺",
                    },
                    shangping:{
                       
                    }
                },
            },
            state:true,
            box:true,
            state_tow:false,
            shan :true
        }
    },
    components:{
        shopping1,foot
    },
    methods:{
        fn(){
             this.state= false;
             this.state_tow=true;
             this.$store.commit("submit",{count:false});
        },
        fn1(){
             this.state= true,
             this.state_tow=false
             this.$store.commit("submit",{count:true});
        },
        init(){
            let params = {
                    member_id:this.$store.state.index.data.data.member_info.member_id  
                }
            let This=this 
            var arr = [];
            request.AJAX(this.$AjaxUrl.cartindex,params,"cartindex",This).then(()=>{
                console.log(This.$store.state);
                console.log(This.$store.state.cartindex.data.data.store_cart_list)
                var obj = This.$store.state.cartindex.data.data.store_cart_list
                 for(let key  in obj){
                    This.box1[key]  = obj[key]
                    This.box1[key].dianpu =  obj[key].shop;
                    This.box1[key].shangping = obj[key].goods
                }
                if(obj == "" || obj == undefined){
                    this.shan  = !this.shan
                }               
            }) 
        }
    }
}
</script>

<style scoped lang="less">
.shopping{
    width: 100%;height: auto;background-color: #f5f5f5;margin-bottom: 120px;;
    header{
        height: 44px;;line-height: 44px;text-align: center;position: relative;background-color:#fff;
        p:nth-child(1){
            font-size: 18px;color: #000;font-weight: bold;
        }
        p:nth-child(2){
            position: absolute;top:0px;right: 16px;font-size: 12px;
        }
    }
    .settle{
        height: 45px;background-color: #fff;margin-bottom: 80px;position: fixed;bottom: -31px;z-index:1;width: 100%;;
        img{
             width: 16px;height: 16px;margin: 16px 10px 0px 16px;display: inline-block;;
        }
        span:nth-child(2){
            font-size: 14px;line-height: 45px;display: inline-block;vertical-align: top;
        }
        span:nth-child(3){
             font-size: 14px;line-height: 45px;
             display: inline-block;vertical-align: top;margin:0 15px 0 53px;
        }
        div{
            width:150/2px;
            height:30px;font-size: 12px;display: inline-block;
            background:rgba(238,117,60,1);border:1px solid #fff;
            opacity:1;text-align: center;line-height: 30px;
            border-radius:30px;margin-right: 16px;color: #fff;vertical-align: top;margin-top: 8px;
        }
    }
    .box{
        height: 45px;background-color: #fff;margin-bottom: 80px;position: fixed;bottom: -31px;z-index:1;width: 100%;;
        img{
             width: 16px;height: 16px;margin: 16px 10px 0px 16px;display: inline-block;;
        }
        span:nth-child(2){
            font-size: 14px;line-height: 45px;display: inline-block;vertical-align: top;
        }
        div:nth-child(3){
            width:150/2px;
            height:30px;font-size: 12px;display: inline-block;
            border:1px solid rgba(238,117,60,1);
            opacity:1;text-align: center;line-height: 30px;
            border-radius:30px;margin-right: 16px;color:rgba(238,117,60,1);vertical-align: top;margin:8px 15px 0 100px;
        }
        div:nth-child(4){
            width:150/2px;
            height:30px;font-size: 12px;float: right;
            border:1px solid rgba(238,117,60,1);
            opacity:1;text-align: center;line-height: 30px;
            border-radius:30px;margin-right: 16px;color:rgba(238,117,60,1);vertical-align: top;margin-top: 8px;
        }
    }
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
.box1{
    width:375px;
    padding-top:120px;
}
.box1 img{
    display:block;
    width:160px;
    height:120px;
    margin: 0 auto;
}
.box1 p{
    width:160px;
    color:#C5C5C5;
    margin: 0 auto;
    
}
</style>

