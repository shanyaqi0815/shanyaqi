<template>
    <div class="career_advancement">
        <header>
            <span>最新</span>
            <span>最热</span>
            <span class="imgs" @click="fn1" v-show="show"><img src="../assets/xuan.png"/></span>
            <span class="imgs" @click="fn2" v-show="hide"><img src="../assets/xuan1.png"/></span>
        </header>
        <div class="center" ref="center">
            <div class="cneter_nai" ref="cneter_nai">
                <list ref="M_list" :key="arr.id" v-for="arr in list">
                    {{arr.goods_name}}
                    <slot slot="imgs"><img :src="arr.goods_image"></slot>
                    <slot slot="dengji" v-show="arr.labels[2]">{{arr.labels[2]}}</slot>
                    <slot slot="shipin" v-show="arr.labels[3]">{{arr.labels[3]}}</slot>
                    <slot slot="xinping" v-show="arr.labels[0]">{{arr.labels[0]}}</slot>
                    <slot slot="manjian" v-show="arr.labels[1]">{{arr.labels[1]}}</slot>
                    <slot slot="pingtai" v-if="false"></slot>
                    <slot slot="price_pic">￥{{arr.show_price}}</slot>
                    <slot slot="price_xue">{{arr.goods_salenum}}</slot>
                    <slot slot="pingjia">{{arr.evaluation_count}}</slot>
                    <slot slot="wenben">{{arr.store_name}}</slot>
                </list>
            </div>
            
        </div>
    </div>
</template>
<script>
import img1 from "../assets/shipin.png";
import img2 from "../assets/shizhan.png";
import list from "../components/advancement_list";
export default {
    name: "career_advancement",
    components:{list},
    data () {
        return {
            hide:false,
            show: true,
            course_list: ['初级', '中级', '高级'],
            dengji: '',
            list: [
                {goods_image:img1, goods_name: '测试培训之后系统是如何研发出来的巴拉巴拉巴拉', labels: ['新品', '满减', '初级', '视频'], show_price: 1688, goods_salenum: 1456, evaluation_count: 14568, store_name: 'UCG管理咨询咨询'},
                {goods_image:img2, goods_name: '测试培训之后系统是如何研发出来的巴拉巴拉巴拉', labels: ['新品', '满减', '初级', '视频'], show_price: 1688, goods_salenum: 1456, evaluation_count: 14568, store_name: 'UCG管理咨询咨询'},
                {goods_image:img2, goods_name: '测试培训之后系统是如何研发出来的巴拉巴拉巴拉', labels: ['新品', '满减', '中级'], show_price: 1688, goods_salenum: 1456, evaluation_count: 14568, store_name: 'UCG管理咨询咨询'}
            ],
        }
    },
    methods:{
        fn1(){
            var a=this.$refs.M_list.length
            for(let i=0 ;i<a;i++){
                this.$refs.M_list[i].remodel()
            }
            this.show=false;
            this.hide=true;
            this.$refs.center.style="width: 100%;background-color:#fff;";
            this.$refs.cneter_nai.style="margin: 0px auto;width: 9.13rem;;";
           
        },
        fn2(){
            var a=this.$refs.M_list.length
            for(let i=0 ;i<a;i++){
                this.$refs.M_list[i].remodel_one()
            }
            this.show=true;
            this.hide=false;
            this.$refs.center.style="width: 9.13rem;;background-color:#f5f5f5;";
            this.$refs.cneter_nai.style="width:100%;";
        }
    }
}
</script>
<style scoped lang="less">
.career_advancement{
    width: 100%;height: auto;background-color: #f5f5f5;
    header{
        width: 100%;height: 44px;font-size: 14px;line-height: 44px;background:rgba(255,255,255,1);margin-bottom: 10px;
        span{
            margin: 0 8px 0 16px;;
        }
        .imgs{
            width: 20px;height: 20px;display: inline-block;float: right; margin: 13px 16px 0 0 ;line-height: 0;
            img{width: 20px;}   
        }
        
    }
    .center{
        width: 686/2px;min-height: 100vh;margin: 0 auto;
        .cneter_nai{

        }
    }
}
</style>
