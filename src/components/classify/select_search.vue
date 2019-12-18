<template>
    <div class="select_search">
            <ul>
                <li class="li" @click="setKey(0)"><span :class="{is_select: true}">综合</span></li>
                <li class="li" @click="setKey(1)"><span>销量</span></li>
                <li class="li" @click="setKey(2)">
                    <span>价格</span>
                    <span :class="{border_select: oneSelect}"></span>
                    <span :class="{border_select: twoSelect}"></span>
                </li>
                <li class="li" @click="setKey(3)"><span>筛选</span></li>
                <img @click="fn" src="@/assets/xuan.png" v-show="show" alt="">
                <img @click="fn1" src="@/assets/xuan1.png" v-show="hide" alt="">
            </ul>
        </div>
</template>

<script>
import { METHODS } from 'http'
export default {
    name: 'select_search',
    data() {
        return {
            show: true,
            hide: false,
            // li_array: [],
            oneSelect: false,
            twoSelect: false            
        }
    },
    methods: {
        fn() {
            this.show = !this.show
            this.hide = !this.hide
        },
        fn1() {
            this.show = !this.show
            this.hide = !this.hide
        },
        setKey(index) {
            // sort 是升序还是降序 0 是降序 1 升序
            var sort = 0;
            var li_lists = document.getElementsByClassName("li")
            for (var i = 0; i < li_lists.length; i++) {
                if (i == index) {
                    document.getElementsByTagName('li')[index].firstElementChild.style = "color: #EE753C"
                } else {
                    document.getElementsByTagName('li')[i].firstElementChild.style = "color: #000"
                }
            }
            if (index == 0) {
                sort = ''
            }
            if (index == 2 ) {
                this.oneSelect = !this.oneSelect
                // 降序
                if (this.oneSelect == false ) { 
                    this.twoSelect = true
                    sort = 1
                 }
                 //升序
                if (this.oneSelect == true) {
                    this.twoSelect = false
                    sort = 0
                }
            }
            if (index !=2 ) {
                this.oneSelect = false,
                this.twoSelect = false
            }

            if (index == 3) {
                this.$emit('shuaxuan')
            }

            // 当点击销量 价格的时候
            if (index == 0 || index == 1 || index == 2) {
                this.$emit('getGcId', {key: index, sort: sort})
            }
        }
    }
}
</script>

<style lang="less">
.select_search {
    width: 100%;
    background: #fff;
    height: 44px;
    border-bottom: 1px solid #f5f5f5;
    ul {
        width: 686px/2px;
        margin: 0 auto;
        li {
            width:56px;
            height:44px;
            font-family:Source Han Sans CN;
            font-weight:400;
            line-height: 40px;
            text-align: center;
            opacity:1;
            margin-right: 20px;
            float: left;
            span {
                font-size:14px;
                color:rgba(97,97,97,1);
                float: left;
            }
        }
        
        .is_select {
            color: #EE753C;
        }
        .border_select {
            border-color: #EE753C transparent transparent #EE753C !important;
        }
        li:nth-child(3) {
            span:nth-child(2) {
                float: left;
                display: block;
                width: 3px;
                height: 3px;
                border: 1px solid;
                border-color: grey transparent transparent grey;
                transform: rotate(45deg);
                margin-top: 18px;
                margin-left: 6px;
            }
            span:nth-child(3) {
                float: left;
                display: block;
                width: 3px;
                height: 3px;
                border: 1px solid;
                border-color: grey transparent transparent grey;
                transform: rotate(-140deg);
                margin-top: 20px;
                margin-left: -5px;
            }
        }
        img {
            float: right;
            width: 20px;
            height: 20px;
            margin: 14px 16px 0px 0px;
        }
    }
}
</style>
