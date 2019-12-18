//商品详情页店铺名称
<template>
    <div class="store">
        <div>
            <slot name='store_img'><img src="../assets/evaluate/android.png" alt=""></slot>     
        </div>
        <div>
            <span><slot name="store_name">Android开发教程</slot></span>
            <span>
                <slot name="store_des">综合评分</slot>
            </span>
            <span>
                <slot name="harts">
                    <img :key="store_des.index" v-for="store_des in store_deses" :src="store_des.img" alt="">
                </slot>
            </span>
            <span>
                进店
                <img src="../assets/arrow_right.png" alt="">
            </span>
        </div>
    </div>
</template>

<script>
import hart from '../assets/evaluate/hart.png';
export default {
    data() {
        return {
            store_deses: [
                {img: hart},
                {img: hart},
                {img: hart}
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.store {
    width: 686px/2px;
    height: 98px/2px;
    margin: auto; 
    padding-top: 6px;
}
.store div:nth-child(1) {
    float: left;
    img {
        width:98px/2px;
        height: 98px/2px;
    }
}
.store div:nth-child(2) {
    width: 285px;
    height: 44.5px;    
    float: right;
    span:nth-child(1) {
        float: left;
        height:28px/2px;
        font-size:28px/2px;
        font-family:Source Han Sans CN;
        font-weight:500;
        line-height:24px;
        color:rgba(65,65,65,1);
        opacity:1;
    }
    span:nth-child(2) {
        float: left;
        font-size: 12px;
        margin-top: 27px;
        margin-left: -110px;
        color: #8D8D8D;
    }
    span:nth-child(3) {
        float: left;
        margin-left: -51px;
        margin-top: 31px;
        img {
            width: 12px;
            height: 11px;
            float: right;
            margin-right: 3px;
        }
    }
    span:nth-child(4) {
        font-size:24px/2px;
        font-family:Source Han Sans CN;
        font-weight:400;
        line-height:35px;
        color:rgba(141,141,141,1);
        opacity:1;
        float: right;
        img {
            float: right;
            width: 6px;
            height: 11px;
            margin-top: 13px;
            margin-left: 10px;
        }
    }
   
}
</style>
