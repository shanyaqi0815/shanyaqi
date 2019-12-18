<template>
    <div class="wuliufication">
        <div class="wuliu_body">
            <div class="wuliu_title">
                <slot name="wuliu_title">你购买的物流已发单</slot>
                <span><slot name="wuliu_time">2019.09.19 13:00</slot></span>
            </div>
            <div class="wuliu_decribe">
                <slot name="imgs"><img src="@/assets/shizhan.png" alt="图片正在加载中"></slot>
                <span><slot name="wuliu_message">教你如何飞升上神，免去渡劫之苦哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈</slot></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wuliufication'
}
</script>

<style scoped lang="less">
.wuliufication {
    width:686px/2px;
    height:212px/2px;
    background:rgba(255,255,255,1);
    margin-left: 16px;
    border-radius: 10px;
    margin-bottom: 10px;
}
.wuliu_body {
    position: relative;
    margin: auto;
    padding-top: 10px;
    width: 674.5px/2px;
    height: 192px/2px;
    .wuliu_title {
        position: absolute;
        width: 674.5px/2px;
        height: 31px;
        font-size:32px/2px;
        font-family:Source Han Sans CN;
        font-weight:bold;
        line-height:20px;

        span {
        position: absolute;
        right: 0px;
        font-size:24px/2px;
        font-family:Source Han Sans CN;
        font-weight:400;
        line-height:29px;
        color:rgba(141,141,141,1);
        }
    }
    .wuliu_decribe {
    position: absolute;
    width: 674.5px/2px;
    height: 60px;
    bottom: 10px;
        img {
            position: absolute;
            left: 0px;
            width: 60px;
            height: 60px;
            border-radius: 10px;
        }
        span{
            position: absolute;
            // display: block;
            width:516px/2px;
            height:76px/2px;
            top: 11px;
            font-size:28px/2px;
            font-family:Source Han Sans CN;
            font-weight:400/2;
            line-height:19px;
            color:rgba(97,97,97,1);
            left: 155px/2px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
    }
}
</style>
