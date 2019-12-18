<template>
    <div class="free_open_shop">
        <div>请选择你要开店的类型</div>
        <div class="shop" @click="fn(registeredshop.id)" :key='registeredshop.index' v-for="registeredshop in registeredshops">
           <span><img :src="registeredshop.img" alt=""></span>
           <span>{{ registeredshop.msg }}</span>
        </div>
    </div>
</template>

<script>
import shoplog from '@/assets/shoplog.png';
import companylog from '@/assets/companylog.png'
export default {
    name: 'free_open_shop',
    data() {
        return {
            registeredshops: [
                {id:1,img: shoplog, msg: '个人店铺'},
                {id:2,img: companylog, msg: '企业店铺'}
            ]
        }
    },
    methods:{
        fn(a){
            console.log(a)
            if(a ==1 ){
                this.$router.push('/PersonalCheckIn')
            }else if(a==2){
                this.$router.push('/EnterpriseCheckIn')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.free_open_shop {
    width: 100%;
    div:nth-child(1) {
        width: 180px;
        height: 18px;
        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 18px;
        color: rgba(51,51,51,1);
        opacity: 1;
        text-align: center;
        margin: 40px auto;
    }
    .shop {
        width: 100px;
        height: 268px/2px;
        margin: 60px auto;
        span:nth-child(1) {
            display: block;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            text-align: center;
            line-height: 100px;
            background: rgba(238,117,60,0.1);
            img {
                width: 88px/2px;
                height: 84px/2px;
                display: block;
                padding: 28px 29px;
            }
        }
        span:nth-child(2) {
            height: 16px;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            line-height: 42px;
            color: rgba(51,51,51,1);
            opacity: 1;
            padding-left: 19.5px;
        }
    }
}
</style>
