
<template>
<div class="heder">
    <!-- <div class="left">
        描述相符
    </div> -->
    <div class="cen" @dblclick="fn1(a.id)" >
        <img :src="a.img" :key="a.id" v-for=" a in imgs" @click="fn(a.id)">
    </div>
    <div class="right">
        {{text}}
    </div>
</div>
</template>

<script>
import img from "../assets/evaluate/xing.png"
import img1 from "../assets/evaluate/xing1.png"
import img2 from "../assets/evaluate/xing2.gif"
var f = 0;
export default {
    name:"heder",
    data(){
        return{
            text:"非常差",
            imgs:[
                {id:0,img:img},
                {id:1,img:img},
                {id:2,img:img},
                {id:3,img:img},
                {id:4,img:img},
            ]
        }
    },
    methods:{
        fn(a){
            f++;
            this.$emit('evaluate',Number(a+1))
            setTimeout(()=>{
                if(f < 1){
                    this.imgs[a].img = img2
            }else{               
                for(var y =0;y<this.imgs.length;y++){
                    this.imgs[y].img = img
                }
                for(var i=0;i<a+1;i++){
                        this.imgs[i].img = img1
                }
                switch(a){
                    case a=0 : this.text ="非常差"
                    break;
                    case a=1 : this.text ="差"
                    break;
                    case a=2 : this.text ="一般"
                    break;
                    case a=3 : this.text ="好"
                    break;
                    case a=4 : this.text ="非常好"
                    break;
                }
           }
           },300)
            setTimeout(()=>{
                f=0
            },400)
        
        },
    }
}
</script>

<style lang="less" scoped>
    .heder{
        width: 100%;height: 30px;line-height: 30px;margin-top:10px;
        .left{
            float: left;font-size: 14px;margin-right: 4px;
        }
        .cen{
            float: left;
            img{
                width: 42/2px;height: 39/2px;margin: 5px 4px 0;
            }
        }
        .right{
            float: right;font-size: 14px;color:rgba(141,141,141,1);
        }
    }
</style>
