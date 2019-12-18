// 分类详情页列表
<template>
    <div class="detail_list">
        <div class="desc" @click="goodsdetail(classifyList.gid)" :key="classifyList.index" v-for="classifyList in classifyLists">
            <img class="imgs" :src="classifyList.goods_image" alt="">
            <span class="desc_name">{{ classifyList.goods_name }}</span>
            <ul class="high_light">
                <li :key="arr.index" v-for="arr in classifyList.labels">{{ arr }}</li>
            </ul>
            <div class="course_price">
                <span style="cloor:#EA4940">￥{{ classifyList.goods_price}}</span>
                <span>{{classifyList.goods_salenum }}人已学</span>
            </div>
            <div class="elvate_count">{{ classifyList.evaluation_count }}评价</div>
            <div class="shop_name">
                <span>{{ classifyList.store_name }}</span>
                <span>进店<img :src="arror_right" alt=""></span>
            </div>
        </div>
    </div>
</template>

<script>
import arror_right from '@/assets/sert4.png'
export default {
    name: 'detail_list',
    props: ['classifyLists'],
    created(){
    },
    data() {
        return {
            arror_right: arror_right
        }
    },
    methods: {
        goodsdetail(gid) {
            let This = this
            This.$router.push({path: 'goodsdetail', query: {gid:gid}});
        }
    }
}
</script>

<style lang="less" scoped>
.desc {
    width: 343px;
    height: 152px;
    margin: 0 auto;
    border-top: 1px solid #f5f5f5;
    .imgs {
        width: 120px;
        height: 120px;
        float: left;
        margin-top: 16px;
    }
    .desc_name {
        width: 207px;
        height: 36px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: rgba(51,51,51,1);
        opacity: 1;
        display: block;
        float: left;
        margin: -121px 0px 0px 134px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
    }
    .high_light {
        height: 16px;
        font-size: 12px;
        margin-top: -78px;
        float: left;
        margin-left: 133px;
        li {
            float: left;
            margin-right: 4px;
            border: 1px solid #EE753C;
            border-radius: 5px;
            color: #EE753C;
            padding: 0px 3px 0px 3px;
        }
        li:last-child {
            color: #fff;
            background: #F1A785;
            border-color: none;
            padding: 0px 3px 0px 3px;
        }
    }
}
.course_price {
    float: left;
    margin-top: -54px;
    margin-left: 129px;
    span:nth-child(1) {
        height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 14px;
        color: rgba(234,73,64,1);
        opacity: 1;
        float: left;
    }
    span:nth-child(2) {
        font-size: 12px;
        float: right;
        margin-left: 6px;
        color: grey;
    }
}
.elvate_count {
    float: left;
    font-size: 12px;
    color: grey;
    margin-top: -34px;
    margin-left: 131px;
}
.shop_name {
    height: 12px;
    font-size: 12px;
    line-height: 12px;
    float: left;
    margin-top: -17px;
    margin-left: 131px;
    span:nth-child(1) {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(141,141,141,1);
        opacity: 1;
        float: left;
        margin-right: 8px;
    }
    span:nth-child(2) {
        color: #616161;
        img {
            float: right;
            width: 8px;
            height: 11px;
            margin-left: 4px;
        }
    }
}
</style>
