// 信息通知
<template>
    <div class="notification">
        <div class="messageinfor">
            <div class="infor_img">
                <slot name="circle"><img src="@/assets/messagecenter/circle.png" alt="" style=""></slot>

                <slot name="imgs"><img src="@/assets/messagecenter/wuliu.png" alt=""></slot>
            </div>
            <div class="infor_descrip" >
                <div>
                    <slot name="descrip_title">系统消息</slot>
                    <span><slot name="time">今天</slot></span>
                </div>
                <div  id="delCss"><slot name="noticemessage">你购买的《飞升上神》课程已经成功，请注意查看，123456</slot></div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'notification'
};
</script>

<style lang="less" scoped>
.notification {
    width: 100%;
    height: 90px;
    background:rgba(255,255,255,1);
}

.infor_descrip div#delCss {
  font-size: 0.266667rem;
  color: grey;
  width: 6.693333rem;
  height: 0.533333rem;
  line-height: 0.533333rem;
  white-space: normal;
  overflow: inherit;
 
}
.messageinfor {
    position: relative;
    width: 686px/2px;
    height: 90px;
    left: 16px;
}
.infor_img {
    position: relative;
    width: 110px/2px;
    height: 110px/2px;
    left: 0px;
    top: 35px/2px;
    img:nth-child(1) {
        width: 20px/2px;
        height: 20px/2px;
        position: absolute;
        z-index: 1111;
        top: 1px;
        left: 85px/2px;
    }
    img:nth-child(2){
        position: absolute;
        width: 102px/2px;
        height: 102px/2px;
        bottom: 0px;
    }
    .notice {
        width: 20px/2px;
        height: 20px/2px;
        top: 0px;
        right: 0px;
    }
    .infor_img .notice img {
    width: 19px/2px;
    height: 19px/2px; 
    }
}
.infor_descrip {
    position: absolute;
    width: 278px;
    left: 64px;
    height: 72.5px;
    top: 17.5px;
    border-bottom: 1.5px solid rgba(173, 171, 171, 0.3);
    div:nth-child(1) {
        height: 30px;
        line-height: 30px;
        left: 0px;
        font-size: 16px;
        color: rgb(41, 39, 39);
    }
    div:nth-child(1) > span {
        font-size: 10px;
        position: absolute;
        right: 0px;
        color: grey;
    }
    div:nth-child(2) {
        font-size: 10px;
        color: grey;
        width: 251px;
        height: 20px;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

}
</style>
